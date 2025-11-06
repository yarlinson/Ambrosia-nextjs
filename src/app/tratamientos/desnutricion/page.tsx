import Link from 'next/link';

export default function DesnutricionDisfagia() {
  const factoresRelacion = [
    {
      titulo: "Rechazo de textura y sabor",
      descripcion: "por los espesantes basados en almidón",
      icono: "🚫",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      titulo: "Esfuerzo mayor",
      descripcion: "de los pacientes para deglutir",
      icono: "💪",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600"
    },
    {
      titulo: "Mayor dificultad",
      descripcion: "para preparar comida",
      icono: "👨‍🍳",
      color: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  const trucosSuplemento = [
    {
      titulo: "Agite bien antes de utilizar",
      icono: "🔄",
      descripcion: "Asegúrese de agitar el envase antes de abrirlo"
    },
    {
      titulo: "Se recomienda tomarlo frío",
      icono: "❄️",
      descripcion: "El suplemento puede ser más agradable cuando está frío"
    },
    {
      titulo: "Puede verter el contenido en un vaso",
      icono: "🥤",
      descripcion: "Puede tomarlo directamente del envase o verterlo en un vaso"
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
              <span className="text-[#4A4A3F] font-medium">Desnutrición y disfagia</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Desnutrición y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Disfagia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              La disfagia es un síntoma común de muchas enfermedades y significa que usted podría tener dificultades para trasladar de manera segura el bolo alimenticio desde la boca hasta el estómago.
            </p>
          </div>

          {/* Introducción */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#E89B5A]">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚠️</span>
                </div>
                <div>
                  <p className="text-lg text-[#6B6B5B] leading-relaxed">
                    El <strong className="text-[#4A4A3F]">miedo de las personas a atragantarse</strong> puede generar un rechazo a los alimentos y bebidas que puede conducirles a un estado de <strong className="text-[#4A4A3F]">desnutrición y/o deshidratación</strong>, que no favorecerá su recuperación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prevalencia de la disfagia */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
                Prevalencia de la disfagia
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Pacientes Neurológicos */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">Pacientes Neurológicos</h3>
                  <p className="text-[#6B6B5B] text-sm">Alta prevalencia en pacientes con condiciones neurológicas</p>
                </div>

                {/* Pacientes Oncológicos */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">🏥</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">Pacientes Oncológicos</h3>
                  <p className="text-[#6B6B5B] text-sm">Cáncer de Cabeza-Cuello</p>
                </div>

                {/* Personas Mayores */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">👴</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">Personas Mayores</h3>
                  <div className="bg-white rounded-lg p-3 mt-3">
                    <div className="text-3xl font-bold text-green-600">44%</div>
                    <p className="text-xs text-[#6B6B5B] mt-1">mayores hospitalizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estadística Principal */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-2xl p-10 text-white text-center shadow-xl">
              <div className="text-7xl font-bold mb-4">51%</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                La disfagia y la desnutrición están estrechamente relacionadas
              </h2>
              <p className="text-xl text-white/95">
                de los pacientes con disfagia tienen desnutrición
              </p>
            </div>
          </div>

          {/* Factores de Relación */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
                Factores que relacionan disfagia y desnutrición
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {factoresRelacion.map((factor, idx) => (
                  <div 
                    key={idx}
                    className={`bg-gradient-to-br ${factor.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}
                  >
                    <div className={`text-4xl mb-4 ${factor.iconColor}`}>
                      {factor.icono}
                    </div>
                    <h3 className="text-xl font-bold text-[#4A4A3F] mb-2">
                      {factor.titulo}
                    </h3>
                    <p className="text-[#6B6B5B] text-sm">
                      {factor.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suplemento Nutricional */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white via-[#FAF8F3] to-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    Suplemento nutricional oral espesado
                  </h2>
                  <p className="text-[#6B6B5B] leading-relaxed mb-6">
                    Consulte con su profesional de la salud si un suplemento nutricional oral espesado es adecuado en su caso.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>💡 Consejo:</strong> A continuación se recogen algunos trucos de cómo tomar el suplemento nutricional oral espesado de una forma más fácil.
                    </p>
                  </div>

                  {/* Trucos */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {trucosSuplemento.map((truco, idx) => (
                      <div 
                        key={idx}
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="text-3xl mb-3">{truco.icono}</div>
                        <h3 className="font-bold text-[#4A4A3F] mb-2">
                          {truco.titulo}
                        </h3>
                        <p className="text-[#6B6B5B] text-sm">
                          {truco.descripcion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Referencias */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#4A4A3F] mb-4">Referencias Bibliográficas</h3>
              <div className="space-y-2 text-xs text-[#6B6B5B]">
                <p>
                  <strong>1.</strong> Carrion S, et al. Nutritional status of older patients with oropharyngeal dysphagia in a chronic versus an acute clinical situation. Clin Nutr. 2017;36(4):1110-6.
                </p>
                <p>
                  <strong>2.</strong> Newman R, et al. White Paper by the European Society for Swallowing Disorders (ESSD). Dysphagia. 2016 Apr;31(2):232-49.
                </p>
                <p>
                  <strong>3.</strong> Shim JS, et al. Ann Rehabil Med. 2013 Oct;37(5):628-32.
                </p>
                <p>
                  <strong>4.</strong> Alvarez-Berdugo et al Ann N Y Acad Sci. 2016
                </p>
                <p>
                  <strong>5.</strong> Hammer MJ, et al. J Parkinsons Dis. 2013
                </p>
                <p>
                  <strong>6.</strong> Watando A, et al. J Am Geriatr Soc. 2004
                </p>
                <p>
                  <strong>7.</strong> Baijens et al. European Society for Swallowing Disorders – European Union Geriatric Medicine Society white paper: oropharyngeal dysphagia as a geriatric syndrome. Clin Interv Aging. 2016
                </p>
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
                href="/tratamientos/adaptacion-texturas"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#9CAF88] transition-colors">
                  Tipos de texturas
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Texturas recomendadas dependiendo del grado de disfagia
                </p>
                <div className="mt-4 text-[#9CAF88] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver más →
                </div>
              </Link>

              <Link 
                href="/menu"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#E89B5A] transition-colors">
                  Menús
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Descubre cómo la disfagia no está reñida con comer de forma deliciosa
                </p>
                <div className="mt-4 text-[#E89B5A] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
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

