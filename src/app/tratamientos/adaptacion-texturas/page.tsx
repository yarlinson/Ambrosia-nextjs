import Link from 'next/link';

export default function AdaptacionTexturas() {
  const nivelesIDDSI = [
    {
      nivel: 0,
      nombre: "Fino",
      descripcion: "Fluye como el agua",
      color: "from-blue-100 to-blue-50",
      iconColor: "text-blue-600"
    },
    {
      nivel: 1,
      nombre: "Ligeramente espeso",
      descripcion: "Más espesa que el agua",
      color: "from-cyan-100 to-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      nivel: 2,
      nombre: "Poco espeso",
      descripcion: "Puede sorberse de un vaso, pero requiere esfuerzo para ser succionada",
      color: "from-teal-100 to-teal-50",
      iconColor: "text-teal-600"
    },
    {
      nivel: 3,
      nombre: "Moderadamente espeso / Licuado",
      descripcion: "Puede comerse con cuchara o beberse de un vaso",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600"
    },
    {
      nivel: 4,
      nombre: "Extremadamente espeso / Puré",
      descripcion: "No contiene grumos, no es pegajosa, no requiere capacidad de masticación",
      color: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      nivel: 5,
      nombre: "Picado y húmedo",
      descripcion: "Es muy suave, tiene grumos húmedos, pequeños, requiere mínima capacidad de masticación",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600"
    },
    {
      nivel: 6,
      nombre: "Suave y tamaño bocado",
      descripcion: "Blanda y húmeda, no tiene líquido fino goteando aparte y demanda habilidad para masticar",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      nivel: 7,
      nombre: "Fácil de masticar / Regular",
      descripcion: "Alimentos normales con texturas variada, apropiadas según edad cronológica y desarrollo. Habilidad para morder y masticar requerida",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-[#F9F7F2]">
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <div className="text-sm text-[#6B6B5B]">
              <Link href="/" className="hover:text-[#E89B5A] transition-colors">Inicio</Link>
              {' '}»{' '}
              <Link href="/tratamientos" className="hover:text-[#E89B5A] transition-colors">Tratamientos</Link>
              {' '}»{' '}
              <span className="text-[#4A4A3F] font-medium">Adaptación de texturas</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Adaptación de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Texturas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              Aprenda sobre los diferentes niveles IDDSI y cómo adaptar la textura de los alimentos según las necesidades de cada persona
            </p>
          </div>

          {/* Introducción */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#9CAF88]">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    Sistema IDDSI (International Dysphagia Diet Standardisation Initiative)
                  </h2>
                  <p className="text-lg text-[#6B6B5B] leading-relaxed">
                    El sistema IDDSI proporciona un marco internacional estandarizado para describir las texturas de alimentos y líquidos para personas con disfagia. 
                    Este sistema ayuda a garantizar que los alimentos sean seguros y apropiados para cada nivel de capacidad de deglución.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Niveles IDDSI */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
                Los 7 Niveles IDDSI
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nivelesIDDSI.map((nivel) => (
                <div 
                  key={nivel.nivel}
                  className={`bg-gradient-to-br ${nivel.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-4xl ${nivel.iconColor}`}>
                      {nivel.nivel === 0 && '💧'}
                      {nivel.nivel === 1 && '🥤'}
                      {nivel.nivel === 2 && '🍵'}
                      {nivel.nivel === 3 && '🥄'}
                      {nivel.nivel === 4 && '🍲'}
                      {nivel.nivel === 5 && '🥣'}
                      {nivel.nivel === 6 && '🍽️'}
                      {nivel.nivel === 7 && '🍴'}
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className={`font-bold text-xl ${nivel.iconColor}`}>
                        {nivel.nivel}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">
                    {nivel.nombre}
                  </h3>
                  <p className="text-[#6B6B5B] text-sm">
                    {nivel.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Información Importante */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚠️</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    Importante sobre la adaptación de texturas
                  </h2>
                  <div className="space-y-4 text-[#6B6B5B] leading-relaxed">
                    <p>
                      La adaptación de texturas debe ser realizada siempre bajo la supervisión de un profesional sanitario especializado. 
                      Cada persona tiene necesidades diferentes según su condición específica.
                    </p>
                    <p>
                      <strong className="text-[#4A4A3F]">No intente adaptar texturas por su cuenta</strong> sin consultar primero con su médico o logopeda, 
                      ya que una textura incorrecta puede aumentar el riesgo de aspiración.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recursos Adicionales */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A3F] mb-8 text-center">
              Más recursos de tu interés
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/tratamientos/como-se-trata"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#E89B5A] transition-colors">
                  Tratamientos
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Qué tratamientos son adecuados para la disfagia
                </p>
                <div className="mt-4 text-[#E89B5A] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver más →
                </div>
              </Link>

              <Link 
                href="/menu"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#9CAF88] transition-colors">
                  Menús
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Descubre cómo la disfagia no está reñida con comer de forma deliciosa
                </p>
                <div className="mt-4 text-[#9CAF88] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver más →
                </div>
              </Link>

              <Link 
                href="/about"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#E89B5A] transition-colors">
                  Consejos
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Trucos, consejos y recomendaciones útiles para la persona con disfagia
                </p>
                <div className="mt-4 text-[#E89B5A] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver más →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

