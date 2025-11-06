import Link from 'next/link';

export default function RecomendacionesPosturales() {
  const recomendaciones = [
    {
      id: 1,
      titulo: "Estado de alerta",
      descripcion: "Asegúrese de que la persona se encuentre despierta y con los reflejos necesarios para comenzar a alimentarse",
      icono: "👁️",
      color: "from-blue-100 to-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      titulo: "Autonomía",
      descripcion: "Siempre que pueda aliméntese por sí mismo supervisado por un cuidador",
      icono: "🤲",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      titulo: "Entorno tranquilo",
      descripcion: "Busque un entorno tranquilo y evite las distracciones",
      icono: "🌿",
      color: "from-teal-100 to-teal-50",
      iconColor: "text-teal-600"
    },
    {
      id: 4,
      titulo: "Postura erguida",
      descripcion: "Siéntese lo más erguido posible y mantenga la barbilla ligeramente hacia abajo cuando trague. Permanezca en posición erguida al menos 30 minutos después de las comidas",
      icono: "🧘",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600",
      destacado: true
    },
    {
      id: 5,
      titulo: "Uso de cojines",
      descripcion: "Si fuera necesario, ayúdese de cojines para mantener la posición",
      icono: "🛏️",
      color: "from-pink-100 to-pink-50",
      iconColor: "text-pink-600"
    },
    {
      id: 6,
      titulo: "Posición del cuidador",
      descripcion: "Si necesitara ayuda para alimentarse, el cuidador debe colocarse frente a usted y a una altura que le permita mantener hacia abajo la barbilla",
      icono: "👥",
      color: "from-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 7,
      titulo: "Personas encamadas",
      descripcion: "En el caso de personas encamadas, ayúdese de cojines para elevar el cabecero 90º",
      icono: "🏥",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 8,
      titulo: "Cantidad de comida",
      descripcion: "Coma tranquilamente, tomando pequeñas cantidades",
      icono: "🍽️",
      color: "from-orange-100 to-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 9,
      titulo: "Evitar alimentos peligrosos",
      descripcion: "Evite los alimentos considerados peligrosos",
      icono: "🚫",
      color: "from-red-100 to-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 10,
      titulo: "No usar pajitas ni jeringas",
      descripcion: "Nunca utilice pajitas ni jeringas para ingerir bebidas si no ha sido recomendado por su especialista",
      icono: "🚰",
      color: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-600",
      importante: true
    },
    {
      id: 11,
      titulo: "Higiene bucal",
      descripcion: "Mantenga una correcta higiene de la cavidad bucal antes y después de las comidas",
      icono: "🦷",
      color: "from-cyan-100 to-cyan-50",
      iconColor: "text-cyan-600"
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
              <span className="text-[#4A4A3F] font-medium">Recomendaciones Posturales</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A3F] mb-4">
              Recomendaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Posturales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B5B] max-w-3xl mx-auto leading-relaxed">
              La postura correcta es fundamental para una deglución segura en personas con disfagia
            </p>
          </div>

          {/* Introducción */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#9CAF88]">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🧘</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A3F] mb-4">
                    ¿Por qué es importante la postura?
                  </h2>
                  <p className="text-lg text-[#6B6B5B] leading-relaxed">
                    Mantener una postura correcta durante las comidas puede reducir significativamente el riesgo de aspiración y mejorar 
                    la eficacia de la deglución. Siga estas recomendaciones para asegurar una alimentación más segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Recomendaciones */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A3F] mb-8 text-center">
              Recomendaciones Posturales
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recomendaciones.map((recomendacion) => (
                <div 
                  key={recomendacion.id}
                  className={`bg-gradient-to-br ${recomendacion.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    recomendacion.destacado ? 'ring-2 ring-[#E89B5A]' : ''
                  } ${recomendacion.importante ? 'border-l-4 border-red-500' : ''}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-4xl ${recomendacion.iconColor} flex-shrink-0`}>
                      {recomendacion.icono}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#4A4A3F] mb-2">
                        {recomendacion.titulo}
                      </h3>
                      <p className="text-[#6B6B5B] text-sm leading-relaxed">
                        {recomendacion.descripcion}
                      </p>
                      {recomendacion.importante && (
                        <div className="mt-3 bg-red-100 rounded-lg p-2">
                          <p className="text-red-800 text-xs font-semibold">
                            ⚠️ Importante
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recomendación Destacada */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⭐</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Recomendación Principal
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>Mantenga siempre una postura erguida</strong> durante las comidas. Siéntese lo más recto posible y mantenga 
                    la barbilla ligeramente hacia abajo cuando trague. Permanezca en esta posición al menos 30 minutos después de las comidas 
                    para facilitar la digestión y reducir el riesgo de reflujo.
                  </p>
                  <p className="text-base opacity-90">
                    Esta es una de las recomendaciones más importantes y efectivas para prevenir complicaciones.
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
                href="/recetas"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9CAF88] to-[#8FA882] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🍳</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A3F] mb-2 group-hover:text-[#9CAF88] transition-colors">
                  Recetas
                </h3>
                <p className="text-[#6B6B5B] text-sm">
                  Platos deliciosos para tu dieta adaptada
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

