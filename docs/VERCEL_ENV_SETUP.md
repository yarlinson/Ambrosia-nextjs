# 🔧 Configurar Variables de Entorno en Vercel

Esta guía te ayudará a configurar las variables de entorno de Supabase en tu proyecto desplegado en Vercel.

## 📋 Pasos para Configurar Variables de Entorno

### Opción 1: Desde el Dashboard de Vercel (Recomendado)

1. **Accede a tu proyecto en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta
   - Selecciona tu proyecto (Ambrosia)

2. **Ve a la sección de Settings:**
   - En el menú superior, haz clic en **Settings**
   - En el menú lateral izquierdo, busca y haz clic en **Environment Variables**

3. **Agrega las variables:**
   
   Haz clic en **Add New** y agrega cada variable:

   **Variable 1:**
   - **Key:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** Tu URL de Supabase (ej: `https://xxxxx.supabase.co`)
   - **Environment:** Selecciona todas las opciones:
     - ☑️ Production
     - ☑️ Preview
     - ☑️ Development
   - Haz clic en **Save**

   **Variable 2:**
   - **Key:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** Tu anon key de Supabase
   - **Environment:** Selecciona todas las opciones:
     - ☑️ Production
     - ☑️ Preview
     - ☑️ Development
   - Haz clic en **Save**

4. **Opcional - Variable para URL del sitio:**
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** La URL de tu sitio en Vercel (ej: `https://tu-proyecto.vercel.app`)
   - **Environment:** Todas las opciones
   - Haz clic en **Save**

5. **Redeploy el proyecto:**
   - Después de agregar las variables, ve a la pestaña **Deployments**
   - Encuentra el último deployment
   - Haz clic en los tres puntos (⋯) y selecciona **Redeploy**
   - O simplemente haz un nuevo commit y push a tu repositorio

### Opción 2: Desde la CLI de Vercel

Si prefieres usar la terminal:

1. **Instala Vercel CLI (si no lo tienes):**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Vincula tu proyecto (si no está vinculado):**
   ```bash
   vercel link
   ```

4. **Agrega las variables:**
   ```bash
   # Variable 1
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   # Pega tu URL cuando te lo pida
   
   # Variable 2
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
   # Pega tu anon key cuando te lo pida
   
   # Para preview y development también
   vercel env add NEXT_PUBLIC_SUPABASE_URL preview
   vercel env add NEXT_PUBLIC_SUPABASE_URL development
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY preview
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY development
   ```

5. **Redeploy:**
   ```bash
   vercel --prod
   ```

## 🔍 Obtener los Valores de Supabase

Si no tienes los valores de Supabase:

1. Ve a tu proyecto en [supabase.com](https://supabase.com)
2. Haz clic en **Settings** (icono de engranaje)
3. Selecciona **API** en el menú lateral
4. Encontrarás:
   - **Project URL** → Este es tu `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Este es tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## ⚠️ Importante

- **NUNCA** subas el archivo `.env.local` a Git
- Las variables que empiezan con `NEXT_PUBLIC_` son públicas y se exponen al cliente
- Las variables sin `NEXT_PUBLIC_` son solo del servidor
- Después de agregar variables, **siempre redeploy** el proyecto

## ✅ Verificar que Funciona

1. Después del redeploy, ve a tu sitio en Vercel
2. Intenta crear un usuario o completar la preinscripción
3. Verifica en Supabase que los datos se están guardando:
   - **Authentication** > **Users** (para usuarios)
   - **Table Editor** > **preinscripciones** (para preinscripciones)

## 🐛 Si No Funciona

1. **Verifica que las variables estén correctamente escritas:**
   - Sin espacios al inicio o final
   - Sin comillas alrededor del valor
   - El nombre de la variable debe ser exacto

2. **Verifica el redeploy:**
   - Asegúrate de que el deployment se haya completado
   - Revisa los logs del deployment por errores

3. **Verifica en el código:**
   - Las variables deben empezar con `NEXT_PUBLIC_` para ser accesibles en el cliente
   - En el código, se acceden con `process.env.NEXT_PUBLIC_SUPABASE_URL`

4. **Limpia la caché:**
   - En Vercel, ve a **Settings** > **General**
   - Haz clic en **Clear Build Cache**
   - Haz un nuevo deployment

## 📝 Notas Adicionales

- Las variables de entorno en Vercel son diferentes para cada ambiente (Production, Preview, Development)
- Puedes tener valores diferentes para cada ambiente si lo necesitas
- Los cambios en variables de entorno requieren un nuevo deployment para tomar efecto


