// Paleta de colores basada en el nuevo logo de Ambrosia
// Logo: Verde apagado (sage), Naranja cálido/dorado, Crema claro
export const colors = {
  // Colores principales del nuevo logo
  primary: {
    orange: '#E89B5A',      // Naranja cálido/dorado del logo
    warmOrange: '#D97757',   // Naranja más cálido
    gold: '#C98E4A',         // Dorado cálido
  },
  
  // Colores secundarios (verde del logo)
  secondary: {
    sageGreen: '#9CAF88',    // Verde apagado/sage del logo
    mutedGreen: '#8FA882',   // Verde más apagado
    oliveGreen: '#7A8B6F',   // Verde oliva
  },
  
  // Colores neutros (crema del logo)
  neutral: {
    cream: '#FAF8F3',       // Crema claro del fondo del logo
    offWhite: '#F9F7F2',     // Crema off-white
    lightCream: '#F5F3ED',   // Crema más claro
    warmGray: '#6B6B5B',     // Gris cálido para texto
    darkGray: '#4A4A3F',     // Gris oscuro para contraste
  },
  
  // Colores de estado
  status: {
    success: '#8FA882',      // Verde del logo
    warning: '#E89B5A',      // Naranja del logo
    error: '#C95D5D',        // Rojo suave
    info: '#7A8B6F',         // Verde oliva
  },
  
  // Gradientes
  gradients: {
    primary: 'from-orange-400 to-orange-500', // Naranja cálido
    secondary: 'from-green-400 to-sage-500',   // Verde sage
    warm: 'from-orange-400 via-orange-500 to-orange-600', // Gradiente cálido
    natural: 'from-green-300 to-green-400',   // Gradiente verde natural
    cream: 'from-cream-50 to-cream-100',      // Gradiente crema
  }
};

// Configuración de Tailwind personalizada para el nuevo logo
export const tailwindColors = {
  // Naranja cálido/dorado (color principal del logo)
  orange: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#E89B5A', // Color principal del logo
    600: '#D97757',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
  // Verde apagado/sage (color secundario del logo)
  sage: {
    50: '#F0F5ED',
    100: '#E0ECE0',
    200: '#C8D9C8',
    300: '#A8C0A8',
    400: '#9CAF88', // Verde sage del logo
    500: '#8FA882',
    600: '#7A8B6F',
    700: '#6B7A5F',
    800: '#5A6850',
    900: '#4A5542',
  },
  // Crema (fondo del logo)
  cream: {
    50: '#FAF8F3', // Crema del logo
    100: '#F9F7F2',
    200: '#F5F3ED',
    300: '#F0EEE5',
    400: '#E8E6DD',
    500: '#DDDAD0',
  }
};
