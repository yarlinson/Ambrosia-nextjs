import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombreCompleto, email, telefono, tipoSolicitud, mensaje, autorizacionDatos, autorizacionTerminos } = body;

    if (!nombreCompleto || !email || !tipoSolicitud || !mensaje || !autorizacionDatos || !autorizacionTerminos) {
      return NextResponse.json(
        { message: 'Todos los campos obligatorios deben ser diligenciados' },
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

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP no configurado. Simulando envío de correo.');
      return NextResponse.json({ message: 'Mensaje recibido correctamente' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Formulario Web Ambrosia" <${smtpUser}>`,
      to: 'ambrosiacomeconplacer@gmail.com',
      cc: email,
      subject: `Nuevo mensaje de contacto - ${nombreCompleto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nombre</td><td style="padding:8px;border:1px solid #ddd">${nombreCompleto}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Correo</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Teléfono</td><td style="padding:8px;border:1px solid #ddd">${telefono || 'No proporcionado'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Tipo de solicitud</td><td style="padding:8px;border:1px solid #ddd">${tipoSolicitud}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Mensaje</td><td style="padding:8px;border:1px solid #ddd">${mensaje.replace(/\n/g, '<br>')}</td></tr>
        </table>
        <hr>
        <p style="font-size:12px;color:#666">
          Autorizaciones:<br>
          - Tratamiento de datos personales: ${autorizacionDatos ? 'Sí' : 'No'}<br>
          - Términos y condiciones: ${autorizacionTerminos ? 'Sí' : 'No'}
        </p>
      `,
    });

    return NextResponse.json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json(
      { message: 'Error al enviar el mensaje. Intente nuevamente.' },
      { status: 500 }
    );
  }
}
