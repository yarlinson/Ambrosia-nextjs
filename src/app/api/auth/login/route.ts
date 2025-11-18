import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email y contraseña son requeridos' },
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

      // Intentar iniciar sesión
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        return NextResponse.json(
          { message: 'Credenciales inválidas' },
          { status: 401 }
        );
      }

      // Obtener información del usuario desde la tabla de preinscripciones
      const { data: userData, error: userError } = await supabase
        .from('preinscripciones')
        .select('*')
        .eq('email', email)
        .single();

      const user = {
        id: authData.user?.id || '',
        email: authData.user?.email || email,
        nombreCompleto: userData?.nombre_completo || null,
        telefono: userData?.telefono || null,
        condicionPaciente: userData?.condicion_paciente || null,
        nivelIddsi: userData?.nivel_iddsi || null,
        planSeleccionado: userData?.plan_seleccionado || null,
      };

      // Crear cookie de sesión
      const response = NextResponse.json({ user });
      response.cookies.set('session', authData.session?.access_token || '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 días
      });

      return response;
    }

    // Modo desarrollo: simular login exitoso
    console.warn('⚠️ Supabase no está configurado. Modo desarrollo activado.');
    
    // Simular usuario de prueba (solo para desarrollo)
    if (email === 'demo@ambrosia.com' && password === 'demo123') {
      const mockUser = {
        id: 'dev_user_1',
        email: 'demo@ambrosia.com',
        nombreCompleto: 'Usuario Demo',
        telefono: '+57 300 123 4567',
        condicionPaciente: 'Disfagia leve',
        nivelIddsi: '4',
        planSeleccionado: 'mensual',
      };

      const response = NextResponse.json({ user: mockUser });
      response.cookies.set('session', 'dev_session_token', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    return NextResponse.json(
      { message: 'Credenciales inválidas' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

