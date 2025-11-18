import Link from 'next/link';

export default function ContactPage() {
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
            {/* Email */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Email</h3>
              </div>
              <p className="text-[#6B6B5B] mb-2">Escríbenos a:</p>
              <a
                href="mailto:contacto@ambrosia.com"
                className="text-[#E89B5A] font-semibold hover:underline"
              >
                contacto@ambrosia.com
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
                href="tel:+573001234567"
                className="text-[#E89B5A] font-semibold hover:underline"
              >
                +57 300 123 4567
              </a>
            </div>

            {/* Dirección */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F]">Dirección</h3>
              </div>
              <p className="text-[#6B6B5B]">
                Calle Principal 123<br />
                Ciudad, País
              </p>
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

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#4A4A3F] mb-4">
              ¿Necesitas ayuda inmediata?
            </h2>
            <p className="text-[#6B6B5B] mb-6">
              Nuestro equipo está disponible para responder tus consultas y brindarte el mejor servicio.
            </p>
            <Link
              href="/preinscripcion"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Preinscríbete Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

