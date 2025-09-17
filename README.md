# Portfolio - Martín Di Geronimo

Portfolio personal desarrollado con React, Vite y Tailwind CSS, desplegado automáticamente en GitHub Pages.

## 🚀 Despliegue Automático

Este proyecto se despliega automáticamente en GitHub Pages usando GitHub Actions. Cada push a la rama `main` activa el despliegue automáticamente.

### URL del Sitio
- **Producción**: https://marto993.github.io/Portfolio

### Configuración de Despliegue
- **Repositorio**: `Portfolio`
- **Rama**: `main`
- **Base path**: `/Portfolio/`
- **Workflow**: `.github/workflows/deploy.yml`

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18+
- npm

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/martin-digeronimo-portfolio.git
cd martin-digeronimo-portfolio

# Instalar dependencias
npm install

# Configurar variables de entorno
cp env.example .env.local
# Editar .env.local con tus valores
```

### Comandos
```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── blog/               # Sistema de blog
│   ├── data/          # Datos de artículos
│   ├── hooks/         # Hooks personalizados
│   ├── pages/         # Páginas del blog
│   └── utils/         # Utilidades
└── App.jsx            # Componente principal
```

## 🔧 Configuración

### Variables de Entorno
- `VITE_N8N_WEBHOOK_URL`: URL del webhook de n8n para formulario de contacto
- `VITE_BASE_URL`: URL base del sitio

### GitHub Pages
- Configurado para desplegar desde GitHub Actions
- Build automático con cada push a `main`
- Base path: `/Portfolio/`
- Workflow: `.github/workflows/deploy.yml`

## 📝 Características

- ✅ Diseño responsive
- ✅ Scroll suave personalizado
- ✅ Sistema de blog integrado
- ✅ Formulario de contacto con n8n
- ✅ SEO optimizado
- ✅ Despliegue automático

## 🎨 Tecnologías

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Iconos**: Lucide React
- **Fechas**: date-fns
- **Automatización**: n8n (formulario de contacto)
- **Despliegue**: GitHub Pages + GitHub Actions

## 🔄 Cómo Hacer Cambios y Desplegar

### Para hacer cambios:
1. **Edita los archivos** en tu editor local
2. **Prueba localmente**: `npm run dev`
3. **Haz commit**: `git add . && git commit -m "Descripción del cambio"`
4. **Push a GitHub**: `git push`
5. **El despliegue es automático** - GitHub Actions se encarga del resto

### Verificar despliegue:
- Ve a la pestaña **"Actions"** en GitHub
- Espera a que termine el workflow (2-3 minutos)
- Visita: https://marto993.github.io/Portfolio

## 📞 Contacto

- **Email**: martindigeronimo93@gmail.com
- **GitHub**: https://github.com/marto993
- **LinkedIn**: https://www.linkedin.com/in/martin-di-geronimo-29a06b17b

---

Desarrollado con ❤️ por Martín Di Geronimo