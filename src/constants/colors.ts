// Paleta de colores basada en el logo de Ambrosia
export const colors = {
  // Colores principales del logo
  primary: {
    yellow: '#F4D03F',      // Amarillo vibrante del logo
    amber: '#F39C12',       // Ámbar más oscuro
    gold: '#D4AC0D',        // Dorado para acentos
  },
  
  // Colores secundarios
  secondary: {
    gray: '#2C3E50',        // Gris oscuro del tagline
    charcoal: '#34495E',    // Gris carbón
    slate: '#5D6D7E',       // Gris pizarra
  },
  
  // Colores neutros
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    mediumGray: '#E9ECEF',
    darkGray: '#6C757D',
  },
  
  // Colores de estado
  status: {
    success: '#27AE60',
    warning: '#F39C12',
    error: '#E74C3C',
    info: '#3498DB',
  },
  
  // Gradientes
  gradients: {
    primary: 'from-amber-500 to-yellow-400',
    secondary: 'from-yellow-400 to-amber-500',
    subtle: 'from-gray-50 to-gray-100',
  }
};

// Configuración de Tailwind personalizada
export const tailwindColors = {
  amber: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B', // Color principal
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  yellow: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308', // Color secundario
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
  }
};
