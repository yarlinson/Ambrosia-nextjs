import Link from 'next/link';

export default function AlimentosRiesgo() {
  const categoriasAlimentos = [
    {
      categoria: "Alimentos fibrosos o con hebras",
      ejemplos: ["Piña", "Apio", "Hojas duras de lechuga", "Puerro", "Apio"],
      icono: "🌿",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600",
      riesgo: "Alto"
    },
    {
      categoria: "Alimentos con partes duras o punzantes",
      ejemplos: ["Carnes con huesos", "Tendones", "Cartílagos", "Pescados con espinas", "Alimentos con pieles (legumbres, frutas)"],
      icono: "🦴",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600",
      riesgo: "Muy Alto"
    },
    {
      categoria: "Alimentos con doble textura (líquido y sólido)",
      ejemplos: ["Leche con muesli o cereales", "Sopa con pasta, verduras o trozos de carne", "Gazpacho con tropezones", "Naranjas", "Helados"],
      icono: "🥣",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600",
      riesgo: "Alto"
    },
    {
      categoria: "Alimentos crujientes, secos o que se desmenuza",
      ejemplos: ["Pan tostado o biscottes", "Galletas tipo María", "Patatas chips", "Corteza de pan", "Frutos secos enteros", "Quesos secos"],
      icono: "🍪",
      color: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-600",
      riesgo: "Alto"
    },
    {
      categoria: "Alimentos pegajosos",
      ejemplos: ["Caramelos masticables", "Arroz", "Miel", "Chocolate", "Queso fundido"],
      icono: "🍯",
      color: "from-amber-100 to-amber-50",
      iconColor: "text-amber-600",
      riesgo: "Alto"
    },
    {
      categoria: "Alimentos duros",
      ejemplos: ["Frutos secos enteros", "Pan de cereales", "Verduras crudas"],
      icono: "🥜",
      color: "from-brown-100 to-brown-50",
      iconColor: "text-amber-700",
      riesgo: "Muy Alto"
    },
    {
      categoria: "Alimentos resbaladizos",
      ejemplos: ["Legumbres enteras", "Mejillones", "Almejas", "Uvas", "Gelatinas"],
      icono: "🍇",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600",
      riesgo: "Alto"
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
              <span className="text-[#4A4A3F] font-medium">Alimentos de Riesgo</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Alimentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Riesgo
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              Alimentos de alto riesgo de atragantamiento si padece disfagia
            </p>
          </div>

          {/* Alerta Importante */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">ATENCIÓN</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Existen determinados alimentos que suponen un <strong>alto riesgo de atragantamiento</strong> en las personas con disfagia.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Por lo tanto, deben <strong>evitarse</strong> o en caso de utilizarse hacer uso de herramientas como coladores, mallas o picadoras 
                    para garantizar un alimento homogéneo libre de hebras, pepitas, pieles, semillas…
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Alimentos de Riesgo */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
              Categorías de Alimentos de Riesgo
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categoriasAlimentos.map((categoria, idx) => (
                <div 
                  key={idx}
                  className={`bg-gradient-to-br ${categoria.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                    categoria.riesgo === 'Muy Alto' ? 'border-red-500' : 'border-orange-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`text-4xl ${categoria.iconColor}`}>
                        {categoria.icono}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#4A4A3F] mb-1">
                          {categoria.categoria}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          categoria.riesgo === 'Muy Alto' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {categoria.riesgo}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-[#4A4A3F] mb-2 text-sm">Ejemplos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {categoria.ejemplos.map((ejemplo, eIdx) => (
                        <span 
                          key={eIdx}
                          className="inline-block bg-white px-3 py-1 rounded-full text-xs text-[#6B6B5B] border border-gray-200"
                        >
                          {ejemplo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recomendaciones */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white via-[#FAF8F3] to-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#9CAF88]">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    Recomendaciones Importantes
                  </h2>
                  <div className="space-y-4 text-[#6B6B5B] leading-relaxed">
                    <div className="bg-white rounded-lg p-4">
                      <p>
                        <strong className="text-[#4A4A3F]">Antes de consumir:</strong> Si necesita consumir alguno de estos alimentos, 
                        asegúrese de procesarlos adecuadamente usando coladores, mallas o picadoras.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p>
                        <strong className="text-[#4A4A3F]">Siempre:</strong> Consulte con su profesional de la salud sobre qué alimentos 
                        son seguros para su nivel específico de disfagia.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p>
                        <strong className="text-[#4A4A3F]">Recuerde:</strong> Un alimento mal procesado puede aumentar significativamente 
                        el riesgo de aspiración y complicaciones graves.
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
                href="/tratamientos/recomendaciones-posturales"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#9CAF88] transition-colors">
                  Recomendaciones Posturales
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  La postura también es importante a la hora de alimentar a una persona con disfagia
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

