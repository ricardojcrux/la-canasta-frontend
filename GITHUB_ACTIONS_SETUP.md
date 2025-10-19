# Configuración de GitHub Actions

He creado dos pipelines de CI/CD para tu proyecto:

## 📋 Pipelines Creados

### 1. **build-and-test.yml** - Build y Test en PRs
- **Trigger**: Se ejecuta cuando se abre un PR a la rama `main`
- **Qué hace**:
  - Instala dependencias
  - Ejecuta el linter (ESLint)
  - Construye el proyecto
  - Sube los artefactos de build
- **Versiones de Node**: Prueba en Node 18.x y 20.x

### 2. **deploy.yml** - Deploy a Netlify
- **Trigger**: Se ejecuta cuando hay un push a la rama `main`
- **Qué hace**:
  - Instala dependencias
  - Ejecuta el linter
  - Construye el proyecto
  - Despliega a Netlify en producción

---

## 🔧 Pasos para Configurar

### Paso 1: Obtener credenciales de Netlify

1. Ve a [Netlify](https://netlify.com) y crea una cuenta o inicia sesión
2. Crea un nuevo sitio o usa uno existente
3. Ve a **Site Settings** → **API** → **Personal access tokens**
4. Haz clic en **New access token** y copia el token
5. Ve a **Site Settings** → **General** y copia el **Site ID**

### Paso 2: Agregar Secrets a GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **New repository secret** y agrega:

   **Secret 1:**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: (El token personal que copiaste de Netlify)

   **Secret 2:**
   - Name: `NETLIFY_SITE_ID`
   - Value: (El Site ID que copiaste de Netlify)

### Paso 3: Verificar la Configuración

1. Haz un commit y push de estos archivos a tu rama `main`
2. Crea un PR a `main` desde otra rama para probar el pipeline de build-and-test
3. Verifica que los checks pasen
4. Cuando mergees a `main`, el deploy automático debería ejecutarse

---

## 📊 Monitoreo

- Ve a la pestaña **Actions** en tu repositorio para ver el estado de los pipelines
- Cada ejecución mostrará logs detallados

---

## 🚀 Próximos Pasos (Opcional)

Si quieres agregar más funcionalidades:

- **Tests unitarios**: Agrega `npm run test` al pipeline
- **Coverage**: Agrega reportes de cobertura
- **Notificaciones**: Configura notificaciones en Slack o Discord
- **Preview Deploy**: Crea un pipeline adicional para PRs que despliegue a un preview en Netlify

