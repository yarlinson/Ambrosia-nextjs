import Link from 'next/link';

export default function ComoSeTrata() {
  const pasosEspesante = [
    {
      paso: 1,
      titulo: "Añadir Espesante en Recipiente",
      descripcion: "Añada la cantidad recomendada de espesante en un recipiente",
      icono: "📦"
    },
    {
      paso: 2,
      titulo: "Verter el líquido y remover",
      descripcion: "Verter el líquido y remover con un tenedor durante 15-30 segundos",
      icono: "🥄"
    },
    {
      paso: 3,
      titulo: "Dejar reposar",
      descripcion: "Dejar reposar durante un minuto o hasta que se haya conseguido la consistencia deseada",
      icono: "⏱️"
    },
    {
      paso: 4,
      titulo: "Remover suavemente y servir",
      descripcion: "Remover suavemente durante 5 segundos y servir",
      icono: "🍽️"
    }
  ];

  const beneficiosEspesante = [
    "Son más seguros: resistentes a la amilasa",
    "No alteran el sabor de los alimentos",
    "Mantienen estable la viscosidad del líquido/alimento una vez preparado",
    "Puede utilizarse con cualquier tipo de alimentos/bebidas",
    "Permite calentar y/o congelar el alimento",
    "Mantienen la transparencia de los líquidos"
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
              <span className="text-[#4A4A3F] font-medium">¿Cómo se trata la disfagia?</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Tratamiento para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Disfagia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              ¿Cómo se trata la disfagia?
            </p>
          </div>

          {/* Definición Principal */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#E89B5A]">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    Tratamiento de la disfagia
                  </h2>
                  <p className="text-lg text-[#6B6B5B] leading-relaxed">
                    Para un correcto tratamiento de la persona con disfagia, es <strong className="text-[#4A4A3F]">imprescindible adaptar la textura y el volumen</strong> de los alimentos líquidos y/o sólidos a la capacidad de deglución que presenta la persona de una manera segura y eficaz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ¿Por qué usar espesante? */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">❓</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F]">
                  ¿Por qué se debe utilizar espesante si se padece disfagia?
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-[#6B6B5B] text-lg leading-relaxed">
                  La adaptación de texturas de alimentos y bebidas es utilizada de forma común como una medida eficaz para tratar la disfagia.
                </p>

                <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Beneficios del espesante:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Al aumentar la viscosidad del alimento o bebida se aumenta el tiempo de tránsito hacia la encrucijada digestivo-respiratoria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>La persona tiene más tiempo para prepararse para la deglución</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Se facilita el control del alimento o bebida en la boca</span>
                    </li>
                  </ul>
                </div>

                <p className="text-[#6B6B5B] text-lg leading-relaxed">
                  El espesante le será de mucha utilidad para la adaptación de múltiples recetas a las texturas recomendadas, lo que le permitirá seguir una dieta lo más atractiva y variada posible.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>⚠️ Importante:</strong> Siga siempre las recomendaciones de su profesional sanitario y no deje de acudir a él en caso de dudas o consultas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Amilasa Salival */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white via-[#FAF8F3] to-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🧪</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    La amilasa salival y los espesantes
                  </h2>
                  <p className="text-[#6B6B5B] leading-relaxed mb-4">
                    Es importante que conozca que <strong className="text-[#4A4A3F]">la amilasa salival afecta a la consistencia del alimento en la boca</strong>, por eso el uso de un espesante resistente a la amilasa asegurará que traga el alimento en la viscosidad que es segura para usted.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#4A4A3F] mb-4">Espesantes comerciales recomendados:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {beneficiosEspesante.map((beneficio, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-[#E89B5A] mt-1">✓</span>
                          <span className="text-[#6B6B5B] text-sm">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cómo usar espesantes */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📖</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F]">
                  ¿Cómo usar espesantes para la disfagia?
                </h2>
              </div>

              <div className="mb-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-blue-800 text-sm">
                  <strong>📌 Nota:</strong> La etiqueta de los espesantes incluye una guía de cuántos cacitos son necesarios para un correcto espesor de los alimentos y las bebidas que se vayan a ingerir.
                </p>
              </div>

              {/* Pasos */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {pasosEspesante.map((paso) => (
                  <div 
                    key={paso.paso}
                    className="bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED] rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{paso.paso}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl mb-2">{paso.icono}</div>
                        <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">
                          {paso.titulo}
                        </h3>
                        <p className="text-[#6B6B5B] text-sm">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>💡 Consejo:</strong> Si existen dudas de cómo usar el producto consulte con un especialista.
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

