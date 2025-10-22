export default function SintomasDisfagia() {
  const sintomas = [
    {
      id: 1,
      titulo: "Dificultad para Iniciar la Deglución",
      descripcion: "Sensación de que los alimentos se 'pegan' en la garganta al intentar tragar",
      detalles: [
        "Necesidad de múltiples intentos para tragar",
        "Sensación de obstrucción en la garganta",
        "Dificultad para coordinar los músculos de la deglución"
      ],
      icono: "🔄",
      severidad: "Leve a Moderada"
    },
    {
      id: 2,
      titulo: "Tos o Ahogo al Comer",
      descripcion: "Episodios de tos, carraspeo o sensación de ahogo durante las comidas",
      detalles: [
        "Tos frecuente al beber líquidos",
        "Sensación de que la comida 'baja por el lugar equivocado'",
        "Carraspeo constante durante las comidas"
      ],
      icono: "🤧",
      severidad: "Moderada a Severa"
    },
    {
      id: 3,
      titulo: "Regurgitación de Alimentos",
      descripcion: "Los alimentos regresan a la boca o nariz después de tragar",
      detalles: [
        "Regurgitación nasal de líquidos",
        "Sensación de comida atascada en el pecho",
        "Regreso de alimentos a la boca"
      ],
      icono: "↩️",
      severidad: "Moderada a Severa"
    },
    {
      id: 4,
      titulo: "Dolor al Tragar (Odynofagia)",
      descripcion: "Dolor agudo o ardor al tragar alimentos o líquidos",
      detalles: [
        "Dolor en el pecho al tragar",
        "Sensación de ardor en la garganta",
        "Dolor que empeora con alimentos calientes"
      ],
      icono: "😣",
      severidad: "Moderada a Severa"
    },
    {
      id: 5,
      titulo: "Pérdida de Peso Involuntaria",
      descripcion: "Reducción de peso debido a la dificultad para comer suficientes alimentos",
      detalles: [
        "Disminución del apetito por miedo a tragar",
        "Evitación de ciertos alimentos",
        "Reducción en la cantidad de comida consumida"
      ],
      icono: "📉",
      severidad: "Severa"
    },
    {
      id: 6,
      titulo: "Cambios en la Voz",
      descripcion: "Voz ronca, húmeda o cambios en el tono después de comer",
      detalles: [
        "Voz ronca persistente",
        "Sonido 'húmedo' al hablar",
        "Dificultad para hablar después de comer"
      ],
      icono: "🗣️",
      severidad: "Moderada"
    },
    {
      id: 7,
      titulo: "Salivación Excesiva",
      descripcion: "Aumento en la producción de saliva o dificultad para manejarla",
      detalles: [
        "Babeo frecuente",
        "Acumulación de saliva en la boca",
        "Dificultad para tragar la propia saliva"
      ],
      icono: "💧",
      severidad: "Leve a Moderada"
    },
    {
      id: 8,
      titulo: "Infecciones Respiratorias Frecuentes",
      descripcion: "Neumonías recurrentes o infecciones pulmonares por aspiración",
      detalles: [
        "Fiebre recurrente sin causa aparente",
        "Tos con expectoración",
        "Dificultad respiratoria"
      ],
      icono: "🫁",
      severidad: "Severa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Síntomas de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                Disfagia
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reconocer los síntomas de la disfagia es crucial para buscar ayuda temprana y prevenir complicaciones.
            </p>
          </div>

          {/* Información General */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              ¿Cuándo Preocuparse?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚨</span>
                  Síntomas de Emergencia
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Dificultad para respirar</li>
                  <li>• Coloración azulada de labios o uñas</li>
                  <li>• Pérdida de conciencia</li>
                  <li>• Incapacidad total para tragar</li>
                </ul>
                <p className="text-red-600 font-semibold mt-4">
                  ⚠️ Buscar atención médica inmediata
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚠️</span>
                  Síntomas que Requieren Evaluación
                </h3>
                <ul className="space-y-2 text-amber-700">
                  <li>• Tos frecuente al comer</li>
                  <li>• Pérdida de peso involuntaria</li>
                  <li>• Dificultad para tragar sólidos</li>
                  <li>• Sensación de obstrucción</li>
                </ul>
                <p className="text-amber-600 font-semibold mt-4">
                  📞 Consultar con especialista
                </p>
              </div>
            </div>
          </div>

          {/* Lista de Síntomas Detallados */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Síntomas Detallados de la Disfagia
            </h2>
            
            {sintomas.map((sintoma) => (
              <div key={sintoma.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl">{sintoma.icono}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {sintoma.titulo}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          sintoma.severidad === 'Leve a Moderada' 
                            ? 'bg-green-100 text-green-800'
                            : sintoma.severidad === 'Moderada'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {sintoma.severidad}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-4">
                        {sintoma.descripcion}
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Manifestaciones específicas:</h4>
                        <ul className="space-y-1">
                          {sintoma.detalles.map((detalle, index) => (
                            <li key={index} className="text-gray-600 flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              {detalle}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recomendaciones */}
          <div className="mt-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              ¿Experimentas Alguno de Estos Síntomas?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Pasos Inmediatos:</h4>
                <ul className="space-y-2">
                  <li>• Consulta con tu médico de cabecera</li>
                  <li>• Solicita evaluación por un logopeda</li>
                  <li>• Considera una evaluación nutricional</li>
                  <li>• Documenta la frecuencia de los síntomas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">En Ambrosia Podemos Ayudarte:</h4>
                <ul className="space-y-2">
                  <li>• Menús adaptados a tus necesidades</li>
                  <li>• Asesoramiento nutricional especializado</li>
                  <li>• Recetas seguras y nutritivas</li>
                  <li>• Apoyo para toda la familia</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 mr-4">
                Consultar Menús Adaptados
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Hablar con un Experto
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
