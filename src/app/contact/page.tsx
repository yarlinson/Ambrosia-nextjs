'use client';

import { useState } from 'react';
import Link from 'next/link';

const tiposSolicitud = [
  'Consulta sobre tratamiento de datos personales',
  'Actualización o corrección de información',
  'Solicitud de eliminación de datos',
  'Revocatoria de autorización',
  'Reclamo relacionado con privacidad',
  'Otro',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    tipoSolicitud: '',
    mensaje: '',
    autorizacionDatos: false,
    autorizacionTerminos: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.autorizacionDatos || !formData.autorizacionTerminos) {
      setError('Debe aceptar las autorizaciones para continuar');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al enviar el formulario');
      }

      setSuccess(true);
      setFormData({
        nombreCompleto: '',
        email: '',
        telefono: '',
        tipoSolicitud: '',
        mensaje: '',
        autorizacionDatos: false,
        autorizacionTerminos: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#6B6B5B]">
            <Link href="/" className="hover:text-[#E89B5A] transition-colors">
              Inicio
            </Link>{' '}
            <span className="mx-2">»</span>
            <span className="text-[#4A4A3F] font-medium">Contacto</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A3F] mb-4">
              Contáctanos
            </h1>
            <p className="text-lg text-[#6B6B5B] max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de estos medios.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Gmail */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Gmail</h3>
              </div>
              <p className="text-[#6B6B5B] mb-2">Escríbenos a:</p>
              <a
                href="mailto:ambrosiacomeconplacer@gmail.com"
                className="text-[#E89B5A] font-semibold hover:underline"
              >
                ambrosiacomeconplacer@gmail.com
              </a>
            </div>

            {/* Teléfono */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Teléfono</h3>
              </div>
              <p className="text-[#6B6B5B] mb-2">Llámanos al:</p>
              <a
                href="tel:+573214189983"
                className="text-[#E89B5A] font-semibold hover:underline"
              >
                321 418 9983
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Instagram</h3>
              </div>
              <a
                href="https://instagram.com/ambrosia.foodcare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E89B5A] font-semibold hover:underline"
              >
                @ambrosia.foodcare
              </a>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Horario de Atención</h3>
              </div>
              <p className="text-[#6B6B5B]">
                Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A3F] mb-2">
              Formulario de Contacto
            </h2>
            <p className="text-[#6B6B5B] mb-8">
              Diligencia el formulario y te responderemos a la brevedad.
            </p>

            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p>Hemos recibido tu solicitud. Te contactaremos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <h3 className="text-xl font-semibold text-[#4A4A3F] border-b border-gray-200 pb-2">
                  Información del titular
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombreCompleto" className="block text-sm font-semibold text-[#4A4A3F] mb-2">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombreCompleto"
                      name="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#4A4A3F] mb-2">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-[#4A4A3F] mb-2">
                    Número telefónico <span className="text-gray-400">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all text-[#4A4A3F] placeholder-gray-400"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#4A4A3F] border-b border-gray-200 pb-2">
                  Tipo de solicitud
                </h3>

                <div className="space-y-3">
                  {tiposSolicitud.map((tipo) => (
                    <label
                      key={tipo}
                      className={`flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.tipoSolicitud === tipo
                          ? 'border-[#E89B5A] bg-[#FAF8F3]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoSolicitud"
                        value={tipo}
                        checked={formData.tipoSolicitud === tipo}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3 accent-[#E89B5A]"
                      />
                      <span className="text-sm text-[#4A4A3F]">{tipo}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-[#4A4A3F] mb-2">
                    Mensaje o descripción de la solicitud <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E89B5A] focus:border-transparent outline-none transition-all resize-none text-[#4A4A3F] placeholder-gray-400"
                    placeholder="Describe tu solicitud en detalle..."
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#4A4A3F] border-b border-gray-200 pb-2">
                  Autorización
                </h3>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="autorizacionDatos"
                      checked={formData.autorizacionDatos}
                      onChange={handleChange}
                      className="mt-1 accent-[#E89B5A]"
                    />
                    <span className="text-sm text-[#4A4A3F] leading-relaxed">
                      Declaro que la información suministrada es veraz y autorizo el tratamiento de mis datos
                      personales conforme a la Política de Tratamiento y Protección de Datos Personales de AMBROSÍA.
                    </span>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="autorizacionTerminos"
                      checked={formData.autorizacionTerminos}
                      onChange={handleChange}
                      className="mt-1 accent-[#E89B5A]"
                    />
                    <span className="text-sm text-[#4A4A3F] leading-relaxed">
                      Acepto los{' '}
                      <a href="/docs/Terminos_y_Condiciones_Ambrosia.pdf" target="_blank" rel="noopener noreferrer" className="text-[#E89B5A] hover:underline">
                        Términos y Condiciones
                      </a>{' '}
                      y la{' '}
                      <a href="/docs/Politica_Privacidad_Ambrosia.pdf" target="_blank" rel="noopener noreferrer" className="text-[#E89B5A] hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      de AMBROSÍA.
                    </span>
                  </label>
                </div>

                <div className="bg-[#FAF8F3] rounded-xl p-4 text-sm text-[#6B6B5B] space-y-1">
                  <p><strong>Canales de atención</strong></p>
                  <p>Correo electrónico: ambrosiacomeconplacer@gmail.com</p>
                  <p>Ciudad: Cúcuta, Norte de Santander – Colombia</p>
                  <p className="text-xs mt-2">
                    AMBROSÍA dará respuesta a las solicitudes dentro de los términos establecidos por la legislación colombiana vigente.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
