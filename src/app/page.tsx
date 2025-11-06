export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-[#F9F7F2]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Bienvenidos a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E89B5A] to-[#D97757]">
                Ambrosia
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restaurante especializado en menús adaptados según las guías IDDSI, 
              garantizando que los alimentos sean seguros, nutritivos y agradables visualmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#E89B5A] to-[#D97757] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Ver Menú
              </button>
              <button className="border-2 border-[#E89B5A] text-[#E89B5A] px-8 py-3 rounded-lg font-semibold hover:bg-[#FAF8F3] transition-all duration-300">
                Guía IDDSI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Menús IDDSI</h3>
              <p className="text-gray-600">
                Alimentos adaptados según los 8 niveles IDDSI para garantizar seguridad y nutrición.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusión Social</h3>
              <p className="text-gray-600">
                Permitiendo que las familias disfruten juntas del acto de comer sin riesgo ni vergüenza.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-[#FAF8F3] to-[#F5F3ED]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E89B5A] to-[#D97757] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cuidado Especializado</h3>
              <p className="text-gray-600">
                Profesionales capacitados en disfagia para brindar la mejor atención.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
