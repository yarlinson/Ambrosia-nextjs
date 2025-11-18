import { NextRequest, NextResponse } from 'next/server';
import { PreinscripcionData, PreinscripcionResponse } from '@/types/preinscripcion';

// Esta función maneja el POST request para la preinscripción
export async function POST(request: NextRequest) {
  try {
    const body: PreinscripcionData = await request.json();

    // Validación básica
    if (!body.nombreCompleto || !body.email || !body.telefono || !body.condicionPaciente) {
      return NextResponse.json(
        {
          success: false,
          message: 'Faltan campos requeridos',
        } as PreinscripcionResponse,
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'El correo electrónico no es válido',
        } as PreinscripcionResponse,
        { status: 400 }
      );
    }

    // Verificar si Supabase está configurado
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      // Integración con Supabase
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);

      // 1. Intentar crear cuenta de usuario automáticamente
      // Si el usuario ya existe, simplemente continuamos
      let authUserId: string | null = null;
      let accountCreated = false;

      // Generar una contraseña temporal segura
      const tempPassword = `Temp${Math.random().toString(36).slice(2)}${Date.now().toString(36)}!A1`;
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: body.email,
        password: tempPassword,
        options: {
          data: {
            nombre_completo: body.nombreCompleto,
            telefono: body.telefono,
          },
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/login`,
        },
      });

      if (authError) {
        // Si el usuario ya existe, no es un error crítico
        if (authError.message.includes('already registered') || authError.message.includes('User already registered')) {
          console.log('ℹ️ Usuario ya existe en Auth, continuando con preinscripción...');
          // Intentar obtener el ID del usuario existente (esto requeriría admin, así que lo omitimos)
        } else {
          console.error('Error creating user:', authError);
          // Continuamos de todas formas, el usuario puede crear su cuenta después
        }
      } else if (authData.user) {
        authUserId = authData.user.id;
        accountCreated = true;
        console.log('✅ Usuario creado automáticamente:', authUserId);
      }

      // 3. Verificar si ya existe un registro de preinscripción
      const { data: existingPreinscripcion, error: checkError } = await supabase
        .from('preinscripciones')
        .select('id')
        .eq('email', body.email)
        .maybeSingle(); // Usar maybeSingle() en lugar de single() para evitar error si no existe

      // Si hay error al verificar (y no es porque no existe), loguearlo pero continuar
      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing preinscripcion:', checkError);
      }

      let preinscripcionId: string;

      if (existingPreinscripcion) {
        // Actualizar registro existente
        const { data: updatedData, error: updateError } = await supabase
          .from('preinscripciones')
          .update({
            nombre_completo: body.nombreCompleto,
            telefono: body.telefono,
            condicion_paciente: body.condicionPaciente,
            nivel_iddsi: body.nivelIddsi || null,
            observaciones: body.observaciones || null,
            plan_seleccionado: body.planSeleccionado || null,
            updated_at: new Date().toISOString(),
          })
          .eq('email', body.email)
          .select()
          .single();

        if (updateError) {
          console.error('Error updating preinscripcion:', updateError);
          return NextResponse.json(
            {
              success: false,
              message: 'Error al actualizar los datos',
            } as PreinscripcionResponse,
            { status: 500 }
          );
        }

        preinscripcionId = updatedData.id;
        console.log('✅ Preinscripción actualizada:', preinscripcionId);
      } else {
        // Crear nuevo registro de preinscripción
        const { data: newData, error: insertError } = await supabase
          .from('preinscripciones')
          .insert([
            {
              nombre_completo: body.nombreCompleto,
              email: body.email,
              telefono: body.telefono,
              condicion_paciente: body.condicionPaciente,
              nivel_iddsi: body.nivelIddsi || null,
              observaciones: body.observaciones || null,
              plan_seleccionado: body.planSeleccionado || null,
            },
          ])
          .select()
          .single();

        if (insertError) {
          console.error('Error inserting preinscripcion:', insertError);
          return NextResponse.json(
            {
              success: false,
              message: insertError.message || 'Error al guardar los datos en la base de datos',
            } as PreinscripcionResponse,
            { status: 500 }
          );
        }

        preinscripcionId = newData.id;
        console.log('✅ Preinscripción creada:', preinscripcionId);
      }

      // 4. Retornar éxito
      let message = 'Preinscripción realizada exitosamente.';
      if (accountCreated) {
        message = 'Preinscripción realizada exitosamente. Tu cuenta ha sido creada automáticamente. Revisa tu email para establecer tu contraseña.';
      }

      return NextResponse.json(
        {
          success: true,
          message: message,
          userId: preinscripcionId,
          authUserId: authUserId,
          accountCreated: accountCreated,
        } as PreinscripcionResponse & { authUserId?: string; accountCreated?: boolean },
        { status: 200 }
      );
    }

    // Modo desarrollo: simular guardado exitoso (sin Supabase configurado)
    console.warn('⚠️ Supabase no está configurado. Los datos no se están guardando.');
    const mockUserId = `dev_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Preinscripción realizada exitosamente',
        userId: mockUserId,
      } as PreinscripcionResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing preinscripción:', error);
    
    // Log detallado del error para debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Error interno del servidor',
      } as PreinscripcionResponse,
      { status: 500 }
    );
  }
}

