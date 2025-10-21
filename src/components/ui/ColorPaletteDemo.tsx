'use client';

import { colorPalettes, tailwindConfigs } from '@/constants/color-palettes';

const ColorPaletteDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Paletas de Colores para Ambrosia
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Combinaciones que armonizan perfectamente con tu logo amarillo y gris
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(colorPalettes).map(([key, palette]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header con colores principales */}
              <div 
                className="h-20 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})` }}
              >
                <h3 className="text-white font-bold text-lg">{palette.name}</h3>
              </div>

              {/* Muestra de colores */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div 
                      className="w-full h-16 rounded-lg mb-2"
                      style={{ backgroundColor: palette.primary }}
                    ></div>
                    <p className="text-xs text-gray-600">Primario</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-full h-16 rounded-lg mb-2"
                      style={{ backgroundColor: palette.secondary }}
                    ></div>
                    <p className="text-xs text-gray-600">Secundario</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-full h-16 rounded-lg mb-2"
                      style={{ backgroundColor: palette.accent }}
                    ></div>
                    <p className="text-xs text-gray-600">Acento</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-full h-16 rounded-lg mb-2"
                      style={{ backgroundColor: palette.neutral }}
                    ></div>
                    <p className="text-xs text-gray-600">Neutral</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{palette.description}</p>

                {/* Códigos de colores */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Primario:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">{palette.primary}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Secundario:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">{palette.secondary}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Acento:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">{palette.accent}</code>
                  </div>
                </div>
              </div>

              {/* Botón de aplicación */}
              <div className="px-6 pb-6">
                <button 
                  className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: palette.primary,
                    color: palette.neutral
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = palette.secondary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = palette.primary;
                  }}
                >
                  Aplicar esta paleta
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recomendaciones */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recomendaciones por Contexto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">🍽️ Restaurante</h3>
              <p className="text-sm text-gray-600 mb-3">Para ambiente acogedor</p>
              <div className="space-y-1">
                <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs mr-2">Cálida</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2">Natural</span>
                <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Terrosa</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">🏥 Médico</h3>
              <p className="text-sm text-gray-600 mb-3">Para confianza profesional</p>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">Médica</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Elegante</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">✨ Moderno</h3>
              <p className="text-sm text-gray-600 mb-3">Para diseño contemporáneo</p>
              <div className="space-y-1">
                <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs mr-2">Energética</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Elegante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;

