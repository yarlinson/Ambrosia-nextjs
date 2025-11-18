import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password, nombreCompleto } = await request.json();

    if (!email || !password || !nombreCompleto) {
      return NextResponse.json(
        { message: 'Email, contraseña y nombre completo son requeridos' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      );
    }

    // Verificar si Supabase está configurado
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      // Integración con Supabase Auth
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);

      // Crear usuario en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre_completo: nombreCompleto,
          },
        },
      });

      if (authError) {
        return NextResponse.json(
          { message: authError.message || 'Error al crear usuario' },
          { status: 400 }
        );
      }

      // Crear registro en la tabla de preinscripciones
      // Primero verificar si ya existe un registro con ese email
      const { data: existingData } = await supabase
        .from('preinscripciones')
        .select('id')
        .eq('email', email)
        .maybeSingle(); // Usar maybeSingle() para evitar error si no existe

      // Solo insertar si no existe
      if (!existingData) {
        const { data: preinscripcionData, error: preinscripcionError } = await supabase
          .from('preinscripciones')
          .insert([
            {
              email,
              nombre_completo: nombreCompleto,
              telefono: null,
              condicion_paciente: null,
              nivel_iddsi: null,
              observaciones: null,
              plan_seleccionado: null,
            },
          ])
          .select()
          .single();

        if (preinscripcionError) {
          console.error('Error creating preinscripcion:', preinscripcionError);
          // No fallar el registro si hay error en preinscripción, pero loguearlo
          // El usuario ya está creado en Auth, así que continuamos
        } else {
          console.log('✅ Preinscripción creada exitosamente:', preinscripcionData);
        }
      } else {
        console.log('ℹ️ Ya existe un registro de preinscripción para este email');
      }

      const user = {
        id: authData.user?.id || '',
        email: authData.user?.email || email,
        nombreCompleto,
        telefono: null,
        condicionPaciente: null,
        nivelIddsi: null,
        planSeleccionado: null,
      };

      // Crear cookie de sesión
      const response = NextResponse.json({ user });
      if (authData.session) {
        response.cookies.set('session', authData.session.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
        });
      }

      return response;
    }

    // Modo desarrollo: simular registro exitoso
    console.warn('⚠️ Supabase no está configurado. Modo desarrollo activado.');
    
    const mockUser = {
      id: `dev_user_${Date.now()}`,
      email,
      nombreCompleto,
      telefono: null,
      condicionPaciente: null,
      nivelIddsi: null,
      planSeleccionado: null,
    };

    const response = NextResponse.json({ user: mockUser });
    response.cookies.set('session', 'dev_session_token', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error('Error en register:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

