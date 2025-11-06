# 🍽️ Ambrosia - Restaurante Especializado en IDDSI

**"ADECUAMOS TU COMIDA, CUIDAMOS DE TI"**

Restaurante especializado en menús adaptados según las guías IDDSI (International Dysphagia Diet Standardisation Initiative), enfocado en la inclusión social de personas con disfagia.

## 🎯 **Propósito del Proyecto**

El restaurante ofrece un menú adaptado según las consistencias recomendadas por la guía IDDSI, para garantizar que los alimentos sean seguros, nutritivos y agradables visualmente. La idea es incluir socialmente a quienes sufren esta condición, permitiéndoles disfrutar nuevamente del acto de comer junto a sus familias, sin riesgo ni vergüenza.

## ✨ **Características Principales**

### 🧭 **Navegación Intuitiva**
- **Header pegajoso** con logo de Ambrosia
- **Submenús hover** para mejor organización del contenido
- **Navegación responsive** para todos los dispositivos

### 📚 **Contenido Educativo**
- **¿Qué es la disfagia?** - Explicación completa con video de YouTube
- **Síntomas detallados** - 8 síntomas con explicaciones específicas
- **Tratamientos** - 5 secciones especializadas
- **Menús y recetas** - 3 categorías de contenido

### 🎨 **Diseño y UX**
- **Paleta de colores** basada en el logo (amarillo vibrante y gris)
- **Gradientes suaves** y transiciones elegantes
- **Accesibilidad mejorada** para usuarios con disfagia
- **Diseño responsive** optimizado para móviles

## 🛠️ **Tecnologías Utilizadas**

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: React 18+
- **Iconos**: SVG personalizados
- **Optimización**: Next.js Image, Fonts

## 📁 **Estructura del Proyecto**

```
src/
├── app/                    # Rutas de Next.js App Router
│   ├── disfagia/          # Páginas sobre disfagia
│   │   ├── que-es/        # ¿Qué es la disfagia?
│   │   └── sintomas/      # Síntomas detallados
│   ├── tratamientos/      # Páginas de tratamientos
│   ├── menu/              # Menús IDDSI
│   └── recetas/           # Recetas adaptadas
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   └── ui/               # Componentes reutilizables
├── constants/            # Constantes y configuraciones
├── assets/               # Recursos estáticos
└── styles/               # Estilos globales
```

## 🚀 **Instalación y Desarrollo**

### **Prerrequisitos**
- Node.js 18+ 
- npm, yarn, pnpm o bun

### **Instalación**
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### **Desarrollo**
```bash
# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev

# Abrir en el navegador
# http://localhost:3000
```

### **Build para Producción**
```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 **Paleta de Colores**

### **Colores Principales (Nuevo Logo)**
- **Naranja cálido/dorado**: `#E89B5A` (Color principal del logo)
- **Naranja cálido**: `#D97757` (Variación más oscura)
- **Verde apagado/sage**: `#9CAF88` (Color secundario del logo)

### **Colores Secundarios**
- **Crema claro**: `#FAF8F3` (Fondo del logo)
- **Verde muted**: `#8FA882` (Verde más apagado)
- **Gris cálido**: `#4A4A3F` (Texto y contraste)
- **Gris medio**: `#6B6B5B` (Texto secundario)

## 📱 **Páginas Implementadas**

### **🏠 Página Principal**
- Hero section con información del restaurante
- Características principales
- Call-to-action buttons

### **📖 Disfagia**
- **¿Qué es?** - Definición, tipos, impacto en la vida diaria
- **Síntomas** - 8 síntomas detallados con niveles de severidad

### **🔧 Tratamientos** (Submenú)
- ¿Cómo se trata la disfagia?
- Desnutrición y disfagia
- Adaptación de texturas
- Alimentos de Riesgo
- Recomendaciones Posturales

### **🍽️ Menús y Recetas** (Submenú)
- Menús IDDSI
- Recetas Adaptadas
- Videorecetas

## 🎯 **Niveles IDDSI Soportados**

- **Nivel 0** - Líquidos finos
- **Nivel 1** - Líquidos ligeramente espesos
- **Nivel 2** - Líquidos moderadamente espesos
- **Nivel 3** - Líquidos extremadamente espesos
- **Nivel 4** - Purés extremadamente espesos
- **Nivel 5** - Purés espesos
- **Nivel 6** - Purés suaves y húmedos
- **Nivel 7** - Alimentos regulares

## 📊 **Estadísticas Importantes**

- **15%** de los adultos mayores experimentan disfagia
- **50%** de los pacientes post-ictus desarrollan disfagia
- **80%** de los casos mejoran con tratamiento adecuado

## 🔧 **Scripts Disponibles**

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linting del código

# Análisis
npm run analyze      # Análisis del bundle
```

## 📝 **Contribución**

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 **Equipo**

- **Desarrollo**: [Tu Nombre]
- **Diseño**: Basado en identidad visual de Ambrosia
- **Especialización**: Menús IDDSI y disfagia

## 📞 **Contacto**

- **Email**: info@ambrosia.com
- **Teléfono**: +1 (555) 123-4567
- **Dirección**: Calle Principal 123, Ciudad

---

**Ambrosia** - Donde la inclusión y la nutrición se encuentran 🍽️✨
