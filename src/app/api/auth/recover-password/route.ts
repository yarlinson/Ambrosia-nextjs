import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'El correo es requerido' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'El correo electrónico no es válido' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { message: 'Supabase no está configurado en las variables de entorno' },
        { status: 500 }
      );
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Determina el host/origen real para que el link redirija a tu app en Vercel.
    const origin =
      request.headers.get('origin') ||
      (request.headers.get('x-forwarded-host')
        ? `https://${request.headers.get('x-forwarded-host')}`
        : 'http://localhost:3000');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/restablecer-password`,
    });

    if (error) {
      return NextResponse.json(
        { message: error.message || 'Error al enviar el correo' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Listo. Revisa tu correo para restablecer tu contraseña.',
    });
  } catch (error) {
    console.error('Error en recover-password:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

