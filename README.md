# tu-canasta-frontend

Proyecto Desarrollo 2 Universidad del Valle 2025-2

## Tecnologías

Este proyecto está construido con:

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida para proyectos web modernos
- **ESLint** - Herramienta de linting para mantener la calidad del código

## Requisitos previos

- Node.js (versión 16 o superior)
- npm (viene incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/ricardojcrux/tu-canasta-frontend.git
cd tu-canasta-frontend
```

2. Instala las dependencias:
```bash
npm install
```

## Comandos disponibles

### Desarrollo
Inicia el servidor de desarrollo con hot-reload:
```bash
npm run dev
```
El proyecto estará disponible en `http://localhost:5173/`

### Build
Genera la versión optimizada para producción:
```bash
npm run build
```
Los archivos se generarán en la carpeta `dist/`

### Preview
Previsualiza la versión de producción localmente:
```bash
npm run preview
```

### Linting
Ejecuta ESLint para revisar el código:
```bash
npm run lint
```

## Estructura del proyecto

```
tu-canasta-frontend/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes, iconos, etc.
│   ├── App.jsx      # Componente principal
│   ├── App.css      # Estilos del componente principal
│   ├── main.jsx     # Punto de entrada de la aplicación
│   └── index.css    # Estilos globales
├── index.html       # Plantilla HTML
├── vite.config.js   # Configuración de Vite
├── eslint.config.js # Configuración de ESLint
└── package.json     # Dependencias y scripts
```

## Recursos adicionales

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vite.dev)
- [Guía de ESLint](https://eslint.org/docs/latest/)
