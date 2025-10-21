// Paletas de colores que combinan con el logo de Ambrosia
// Logo: Amarillo vibrante (#F4D03F) + Gris oscuro (#2C3E50)

export const colorPalettes = {
  // PALETA 1: CÁLIDA Y ACOGEDORA
  warm: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#E67E22',    // Naranja cálido
    accent: '#D35400',       // Naranja oscuro
    neutral: '#2C3E50',      // Gris del logo
    light: '#F8F9FA',        // Gris muy claro
    dark: '#1A252F',         // Gris muy oscuro
    name: 'Cálida y Acogedora',
    description: 'Perfecta para transmitir calidez y hospitalidad'
  },

  // PALETA 2: NATURAL Y FRESCA
  natural: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#27AE60',    // Verde natural
    accent: '#16A085',        // Verde azulado
    neutral: '#2C3E50',      // Gris del logo
    light: '#ECF0F1',        // Gris muy claro
    dark: '#1B2631',         // Gris muy oscuro
    name: 'Natural y Fresca',
    description: 'Ideal para transmitir frescura y salud'
  },

  // PALETA 3: ELEGANTE Y SOFISTICADA
  elegant: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#8E44AD',    // Púrpura elegante
    accent: '#9B59B6',       // Púrpura claro
    neutral: '#2C3E50',      // Gris del logo
    light: '#F4F6F7',        // Gris muy claro
    dark: '#1B2631',         // Gris muy oscuro
    name: 'Elegante y Sofisticada',
    description: 'Para un ambiente más refinado y profesional'
  },

  // PALETA 4: ENERGÉTICA Y MODERNA
  energetic: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#E74C3C',    // Rojo vibrante
    accent: '#F39C12',       // Naranja brillante
    neutral: '#2C3E50',      // Gris del logo
    light: '#FDF2E9',        // Crema cálido
    dark: '#1A252F',         // Gris muy oscuro
    name: 'Energética y Moderna',
    description: 'Para transmitir vitalidad y dinamismo'
  },

  // PALETA 5: PROFESIONAL Y MÉDICA
  medical: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#3498DB',    // Azul médico
    accent: '#2980B9',       // Azul oscuro
    neutral: '#2C3E50',      // Gris del logo
    light: '#EBF3FD',        // Azul muy claro
    dark: '#1B2631',         // Gris muy oscuro
    name: 'Profesional y Médica',
    description: 'Perfecta para el aspecto médico y profesional'
  },

  // PALETA 6: TERROSA Y ORGÁNICA
  earthy: {
    primary: '#F4D03F',      // Amarillo del logo
    secondary: '#A0522D',    // Marrón tierra
    accent: '#CD853F',       // Marrón claro
    neutral: '#2C3E50',      // Gris del logo
    light: '#F5F5DC',        // Beige claro
    dark: '#1A252F',         // Gris muy oscuro
    name: 'Terrosa y Orgánica',
    description: 'Para un ambiente más natural y orgánico'
  }
};

// Configuración de Tailwind para cada paleta
export const tailwindConfigs = {
  warm: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-orange-500 to-orange-600',
    accent: 'from-orange-600 to-orange-700',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-gray-50 to-gray-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-orange-600'
    }
  },
  
  natural: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-green-500 to-green-600',
    accent: 'from-teal-500 to-teal-600',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-gray-50 to-gray-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-green-600'
    }
  },
  
  elegant: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-purple-500 to-purple-600',
    accent: 'from-purple-400 to-purple-500',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-gray-50 to-gray-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-purple-600'
    }
  },
  
  energetic: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-red-500 to-red-600',
    accent: 'from-orange-500 to-orange-600',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-orange-50 to-orange-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-red-600'
    }
  },
  
  medical: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-blue-500 to-blue-600',
    accent: 'from-blue-600 to-blue-700',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-blue-50 to-blue-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-blue-600'
    }
  },
  
  earthy: {
    primary: 'from-amber-400 to-yellow-400',
    secondary: 'from-amber-700 to-amber-800',
    accent: 'from-amber-600 to-amber-700',
    neutral: 'from-gray-700 to-gray-800',
    light: 'from-amber-50 to-amber-100',
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      accent: 'text-amber-700'
    }
  }
};

// Recomendaciones por contexto
export const recommendations = {
  restaurant: ['warm', 'natural', 'earthy'],
  medical: ['medical', 'elegant'],
  modern: ['energetic', 'elegant'],
  organic: ['natural', 'earthy'],
  professional: ['elegant', 'medical']
};

