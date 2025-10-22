export default function QueEsDisfagia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              ¿Qué es la <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                Disfagia
              </span>?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La disfagia es una condición que afecta la capacidad de tragar alimentos y líquidos de manera segura y eficiente.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Video Explicativo sobre Disfagia
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9F39UlTKHcY?si=uxC0_hz5Uvrf1J_I"
                  title="¿Qué es la Disfagia? - Video Explicativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Definición Detallada */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Definición Médica
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La disfagia es un trastorno de la deglución que puede afectar cualquier parte del proceso de tragar, 
                desde la boca hasta el estómago. Puede ser temporal o permanente, y su gravedad varía desde 
                dificultades leves hasta la imposibilidad total de tragar.
              </p>
              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-3">Tipos de Disfagia:</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• <strong>Disfagia orofaríngea:</strong> Dificultad en la fase inicial de la deglución</li>
                  <li>• <strong>Disfagia esofágica:</strong> Problemas en el paso del alimento por el esófago</li>
                  <li>• <strong>Disfagia funcional:</strong> Sin causa orgánica aparente</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Impacto en la Vida Diaria
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🍽️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Alimentación</h4>
                    <p className="text-gray-600">Dificultad para comer alimentos sólidos, líquidos o ambos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">😰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ansiedad Social</h4>
                    <p className="text-gray-600">Miedo a comer en público o con familiares</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Complicaciones</h4>
                    <p className="text-gray-600">Riesgo de neumonía por aspiración y desnutrición</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas y Datos */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Datos Importantes sobre la Disfagia
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">15%</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Adultos Mayores</h4>
                <p className="text-gray-600 text-sm">de las personas mayores de 65 años experimentan disfagia</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">50%</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Post-Ictus</h4>
                <p className="text-gray-600 text-sm">de los pacientes que han sufrido un ictus desarrollan disfagia</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">80%</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mejora</h4>
                <p className="text-gray-600 text-sm">de los casos mejoran con el tratamiento adecuado</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas Ayuda con la Disfagia?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                En Ambrosia, entendemos las necesidades especiales de las personas con disfagia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300">
                  Ver Síntomas
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Consultar Menús
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
