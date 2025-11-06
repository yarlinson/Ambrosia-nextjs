import Link from 'next/link';

export default function QueEsDisfagia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-[#F9F7F2]">
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <div className="text-sm text-[#6B6B5B]">
              <Link href="/" className="hover:text-[#E89B5A] transition-colors">Inicio</Link>
              {' '}»{' '}
              <Link href="/disfagia" className="hover:text-[#E89B5A] transition-colors">Disfagia</Link>
              {' '}»{' '}
              <span className="text-[#4A4A3F] font-medium">¿Qué es?</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              ¿Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                la Disfagia
              </span>?
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              ¿Te han diagnosticado disfagia y necesitas entender qué es?, ¿cuáles son sus síntomas? o ¿cómo se trata?
            </p>
          </div>

          {/* Video Destacado */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">▶️</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Video Explicativo</h2>
                    <p className="text-white/90 text-sm">Respuestas en 2 minutos</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6B6B5B] mb-4 text-center">
                  Entiende de manera rápida y sencilla qué es la disfagia, su tratamiento, tipos y síntomas
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full"
                    poster="/video-poster.jpg"
                  >
                    <source src="https://disfagia-nutricion.es/wp-content/uploads/2020/Disfagia_sin_Lares.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Definición Principal - Destacada */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#E89B5A]">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-3">
                    ¿Qué es la disfagia?
                  </h2>
                  <p className="text-lg text-[#6B6B5B] leading-relaxed">
                    La disfagia es un <strong className="text-[#4A4A3F]">síntoma común de muchas enfermedades</strong> y significa que usted podría tener 
                    dificultades para trasladar de manera segura el bolo alimenticio desde la boca hasta el estómago.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información Importante - 3 Columnas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Broncoaspiración */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                La broncoaspiración
              </h3>
              <p className="text-[#6B6B5B] text-sm leading-relaxed mb-3">
                <strong>El principal riesgo de la disfagia</strong> es la broncoaspiración. La sensación es como si la comida/bebida se fuera por otro lado.
              </p>
              <div className="bg-red-50 rounded-lg p-3 mt-4">
                <p className="text-red-800 text-xs font-semibold">
                  El alimento pasa al tracto respiratorio en lugar del digestivo, pudiendo provocar infecciones respiratorias.
                </p>
              </div>
            </div>

            {/* Aspiraciones Silentes */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-2xl">🔇</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                Aspiraciones Silentes
              </h3>
              <p className="text-[#6B6B5B] text-sm leading-relaxed mb-3">
                En algunos casos la disfagia <strong>no presenta síntomas de atragantamiento</strong>, produciendo aspiraciones silentes.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 mt-4">
                <p className="text-yellow-800 text-xs font-semibold">
                  Es muy importante seguir las recomendaciones de su especialista en todo momento.
                </p>
              </div>
            </div>

            {/* Líquidos y Sólidos */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                Líquidos y sólidos
              </h3>
              <p className="text-[#6B6B5B] text-sm leading-relaxed mb-3">
                <strong>Tragar líquidos es más complicado</strong> que alimentos sólidos ya que se esparcen por toda la boca.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 mt-4">
                <p className="text-blue-800 text-xs font-semibold">
                  El sistema deglutorio tiene menos tiempo para prepararse con líquidos.
                </p>
              </div>
            </div>
          </div>

          {/* Causas de la Disfagia */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F]">
                  ¿Cuáles son las causas de la disfagia?
                </h2>
              </div>

              {/* Estadística Destacada */}
              <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-xl p-6 mb-8 text-white">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-bold">50%</div>
                  <div>
                    <p className="text-xl font-semibold">Casos de Ictus</p>
                    <p className="text-white/90">tendrán problemas de disfagia</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {/* Enfermedades */}
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A3F] mb-4 flex items-center">
                    <span className="mr-2">🏥</span>
                    Enfermedades relacionadas
                  </h3>
                  <p className="text-[#6B6B5B] mb-4 leading-relaxed">
                    Puede ser consecuencia de otras muchas enfermedades o condiciones:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Demencias', 'Enfermedad de Parkinson', 'Enfermedad de Alzheimer', 'Esclerosis múltiple', 'Cáncer de cabeza/cuello'].map((enfermedad, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-[#FAF8F3] rounded-lg p-2">
                        <span className="text-[#E89B5A]">•</span>
                        <span className="text-sm text-[#6B6B5B]">{enfermedad}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factores de Edad */}
                <div>
                  <h3 className="text-xl font-bold text-[#4A4A3F] mb-4 flex items-center">
                    <span className="mr-2">👴</span>
                    Factores de edad
                  </h3>
                  <p className="text-[#6B6B5B] mb-4 leading-relaxed">
                    <strong>Entre el 40 al 50% de ancianos</strong> sufrirán disfagia debido a:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Ausencia de dientes',
                      'Mala adaptación de dentadura postiza',
                      'Baja producción de saliva',
                      'Lesiones en lengua o encías',
                      'Sarcopenia o pérdida de masa muscular'
                    ].map((factor, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#E89B5A] mt-1">✓</span>
                        <span className="text-[#6B6B5B] text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Referencias */}
              <div className="bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED] rounded-lg p-4 text-xs text-[#6B6B5B]">
                <p className="mb-2">
                  <strong>¹</strong> Bray BD, Smith, Cloud G, EnderbyP, James M, Paleyet L et al. The association between delays in screening for and assesing 
                  dysphagia after acute stroke, and the risk of stroke associated pneumonía. J Neurol Neurosug Psychiatry 2016;0:1-6
                </p>
                <p>
                  <strong>²</strong> D. Gómez-Nussbaumer, E. Polanía Protocolo diagnóstico de la disfagia en el anciano. Medicine 2016;12:46-48
                </p>
              </div>
            </div>
          </div>

          {/* Cómo Afecta */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white via-[#FAF8F3] to-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-4">
                    ¿Cómo afecta la disfagia a la capacidad de tragar?
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#E89B5A]">
                      <p className="text-[#6B6B5B] leading-relaxed">
                        Produce un <strong className="text-[#4A4A3F]">debilitamiento o descoordinación de los músculos</strong> de la boca y/o lengua 
                        que aumenta el riesgo de que la comida o bebida se vaya hacia los pulmones, originando infecciones.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#9CAF88]">
                      <p className="text-[#6B6B5B] leading-relaxed">
                        El <strong className="text-[#4A4A3F]">miedo a atragantarse</strong> puede generar un rechazo a los alimentos y bebidas que puede 
                        conducirles a un estado de <strong className="text-[#4A4A3F]">desnutrición y/o deshidratación</strong>, que no favorecerá su recuperación.
                      </p>
                    </div>
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
                href="/disfagia/sintomas"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#E89B5A] transition-colors">
                  Síntomas
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Comportamientos y reacciones que pueden alertar sobre un caso de disfagia
                </p>
                <div className="mt-4 text-[#E89B5A] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver más →
                </div>
              </Link>

              <Link 
                href="/tratamientos/como-se-trata"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#9CAF88] transition-colors">
                  Tratamientos
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Qué tratamientos son adecuados para la disfagia
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
