import Link from 'next/link';

export default function SintomasDisfagia() {
  const sintomas = [
    {
      id: 1,
      titulo: "Rechazo de los alimentos y bebidas",
      descripcion: "El paciente rechaza alimentos y bebidas que antes consumía normalmente",
      icono: "🚫",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      titulo: "Tos durante o después de las comidas",
      descripcion: "Episodios de tos frecuentes durante o después de ingerir alimentos o líquidos",
      icono: "🤧",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 3,
      titulo: "Atragantamientos al comer",
      descripcion: "Sensación de ahogo o atragantamiento frecuente durante las comidas",
      icono: "😰",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 4,
      titulo: "Regurgitación nasal",
      descripcion: "Consiste en el regreso sin esfuerzo del alimento tragado hacia las fosas nasales",
      icono: "👃",
      color: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      id: 5,
      titulo: "Voz húmeda o sensación en la garganta",
      descripcion: "Después de la deglución, el paciente tiene la voz como húmeda o la sensación de que tiene algo en la garganta",
      icono: "🗣️",
      color: "from-blue-100 to-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 6,
      titulo: "Babeo",
      descripcion: "Salivación excesiva o dificultad para manejar la saliva",
      icono: "💧",
      color: "from-cyan-100 to-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      id: 7,
      titulo: "Sensación de que la comida se pega en la garganta",
      descripcion: "Sensación persistente de que los alimentos quedan atascados al tragar",
      icono: "🍽️",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 8,
      titulo: "Retención del alimento en la boca por periodos prolongados",
      descripcion: "El paciente mantiene los alimentos en la boca sin deglutir durante mucho tiempo",
      icono: "⏱️",
      color: "from-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 9,
      titulo: "Dificultad al masticar",
      descripcion: "Problemas para masticar adecuadamente los alimentos antes de tragar",
      icono: "🦷",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 10,
      titulo: "Infecciones respiratorias recurrentes",
      descripcion: "Neumonías o infecciones pulmonares frecuentes sin causa aparente",
      icono: "🫁",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
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
              <Link href="/disfagia" className="hover:text-[#E89B5A] transition-colors">Disfagia</Link>
              {' '}»{' '}
              <span className="text-[#4A4A3F] font-medium">Síntomas</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Síntomas de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Disfagia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              La aparición de los siguientes síntomas puede sugerir que el paciente sufre disfagia
            </p>
          </div>

          {/* Alerta importante */}
          <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-xl p-6 mb-12 text-white">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h2 className="text-xl font-bold mb-2">Importante</h2>
                <p className="text-white/95">
                  Si detecta alguno de estos síntomas, consulte con un especialista.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Síntomas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sintomas.map((sintoma) => (
              <div 
                key={sintoma.id}
                className={`bg-gradient-to-br ${sintoma.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`text-4xl mb-4 ${sintoma.iconColor}`}>
                  {sintoma.icono}
                </div>
                <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">
                  {sintoma.titulo}
                </h3>
                <p className="text-[#6B6B5B] text-sm leading-relaxed">
                  {sintoma.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Complicaciones */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
              ¿Qué complicaciones puede causar la disfagia?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Riesgo de aspiración */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 text-2xl">🫁</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                  Riesgo de aspiración
                </h3>
                <p className="text-[#6B6B5B] text-sm leading-relaxed">
                  Los <strong>alimentos o bebidas se "vayan por otro lado", hacia los pulmones</strong> y se generen infecciones. 
                  Este efecto se denomina aspiración.
                </p>
              </div>

              {/* Riesgo de deshidratación */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                  Riesgo de deshidratación
                </h3>
                <p className="text-[#6B6B5B] text-sm leading-relaxed">
                  Los pacientes <strong>tienden a no beber lo suficiente</strong> por miedo a atragantarse.
                </p>
              </div>

              {/* Riesgo de desnutrición */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-2xl">📉</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-3">
                  Riesgo de desnutrición
                </h3>
                <p className="text-[#6B6B5B] text-sm leading-relaxed">
                  Los pacientes <strong>comen menos</strong> y <strong>esto les lleva a perder peso</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Solución */}
          <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 mb-12 border-l-4 border-[#9CAF88]">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">💡</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                  ¿Qué puedo hacer?
                </h2>
                <div className="space-y-4 text-[#6B6B5B] leading-relaxed">
                  <p>
                    Su especialista le ha recomendado <strong className="text-[#4A4A3F]">adaptar la textura de sus alimentos y bebidas</strong> a la 
                    viscosidad que considera más segura para usted.
                  </p>
                  <p>
                    Así se podrá evitar que los alimentos y bebidas pasen a las vías respiratorias y usted se sentirá más seguro y no rechazará 
                    las comidas evitando el potencial riesgo de desnutrición.
                  </p>
                  <p>
                    También le habrá recomendado una serie de <strong className="text-[#4A4A3F]">posturas y hábitos</strong> que le facilitarán poder 
                    tragar alimentos y bebidas de una forma más segura.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-[#6B6B5B] italic">
                    El tratamiento nutricional puede contribuir significativamente a la seguridad y la calidad de vida de los pacientes con disfagia.
                  </p>
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
                href="/disfagia/que-es"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#E89B5A] transition-colors">
                  ¿Qué es la Disfagia?
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Qué es la disfagia y por qué se produce
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
