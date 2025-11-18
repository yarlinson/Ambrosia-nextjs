import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('session')?.value;

    if (!sessionToken) {
      return NextResponse.json({ user: null });
    }

    // Verificar si Supabase está configurado
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);

      // Verificar sesión con Supabase
      const { data: { user: authUser }, error } = await supabase.auth.getUser(sessionToken);

      if (error || !authUser) {
        return NextResponse.json({ user: null });
      }

      // Obtener información adicional del usuario
      const { data: userData } = await supabase
        .from('preinscripciones')
        .select('*')
        .eq('email', authUser.email)
        .single();

      const user = {
        id: authUser.id,
        email: authUser.email || '',
        nombreCompleto: userData?.nombre_completo || null,
        telefono: userData?.telefono || null,
        condicionPaciente: userData?.condicion_paciente || null,
        nivelIddsi: userData?.nivel_iddsi || null,
        planSeleccionado: userData?.plan_seleccionado || null,
      };

      return NextResponse.json({ user });
    }

    // Modo desarrollo: verificar token de desarrollo
    if (sessionToken === 'dev_session_token') {
      return NextResponse.json({
        user: {
          id: 'dev_user_1',
          email: 'demo@ambrosia.com',
          nombreCompleto: 'Usuario Demo',
          telefono: '+57 300 123 4567',
          condicionPaciente: 'Disfagia leve',
          nivelIddsi: '4',
          planSeleccionado: 'mensual',
        },
      });
    }

    return NextResponse.json({ user: null });
  } catch (error) {
    console.error('Error en session:', error);
    return NextResponse.json({ user: null });
  }
}

