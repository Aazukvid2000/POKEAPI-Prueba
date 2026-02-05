# 🎮 PokéDex - Aplicación Web con Next.js

Aplicación web interactiva que consume la **PokéAPI** para mostrar información detallada de Pokémon, incluyendo sus sprites normales y shiny, estadísticas, habilidades y cadena evolutiva.

## 📋 Descripción del Proyecto

Este proyecto fue desarrollado como parte de la materia de **Programación Web 2**, utilizando tecnologías modernas de desarrollo web como Next.js, React y Tailwind CSS. La aplicación permite explorar los primeros 30 Pokémon de la primera generación de forma dinámica y responsiva.

## ✨ Características Principales

- 🔍 **Menú horizontal con scroll** - Navegación fluida entre 30 Pokémon
- 🖼️ **Sprites Normal y Shiny** - Visualización lado a lado de ambas versiones
- 📊 **Estadísticas completas** - HP, Attack, Defense, Special Attack, Special Defense y Speed con barras de progreso
- ⚡ **Habilidades** - Lista de todas las habilidades del Pokémon seleccionado
- 🔄 **Cadena evolutiva** - Muestra la línea evolutiva completa del Pokémon
- 📱 **Diseño responsivo** - Adaptable a diferentes tamaños de pantalla
- 🎨 **Interfaz moderna** - Diseño con fondo azul marino y elementos visuales atractivos

## 🛠️ Tecnologías Utilizadas

- **Next.js 16.1.6** - Framework de React para aplicaciones web
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Tailwind CSS** - Framework de CSS utilitario para estilos
- **PokéAPI** - API RESTful para obtener datos de Pokémon

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/TU-USUARIO/pokedex-nextjs.git
cd pokedex-nextjs
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir el navegador en:
```
http://localhost:3000
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm start        # Inicia el servidor de producción
npm run lint     # Ejecuta el linter para revisar el código
```

## 📁 Estructura del Proyecto

```
pokedex-nextjs/
├── app/
│   ├── page.tsx          # Componente principal de la aplicación
│   ├── layout.tsx        # Layout principal con metadata
│   └── globals.css       # Estilos globales y Tailwind
├── public/               # Archivos estáticos
├── node_modules/         # Dependencias del proyecto
├── next.config.ts        # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias y scripts
└── README.md            # Documentación del proyecto
```

## 🎯 Funcionalidades Implementadas

### 1. Consumo de API
- Fetching de datos de la PokéAPI
- Manejo de promesas con `async/await`
- Gestión de estados con React Hooks (`useState`, `useEffect`)

### 2. Rutas Dinámicas
- Navegación entre diferentes Pokémon sin recargar la página
- Actualización dinámica del contenido basado en la selección del usuario

### 3. Interfaz Responsiva
- Diseño adaptable usando Tailwind CSS
- Grid system para organizar la información
- Efectos hover y transiciones suaves

### 4. Manejo de Datos
- Tipado estricto con TypeScript
- Interfaces para los datos de la API
- Procesamiento de cadenas evolutivas

## 🌐 API Utilizada

**PokéAPI** - https://pokeapi.co/

Endpoints principales:
- `https://pokeapi.co/api/v2/pokemon/{id}` - Datos del Pokémon
- `https://pokeapi.co/api/v2/pokemon-species/{id}` - Datos de especie
- `https://pokeapi.co/api/v2/evolution-chain/{id}` - Cadena evolutiva

## 🎨 Paleta de Colores

- **Azul Marino (Fondo)**: `#1e3a8a` (bg-blue-900)
- **Azul Oscuro (Tarjetas)**: `#1e40af` (bg-blue-800)
- **Amarillo (Acentos)**: `#eab308` (bg-yellow-500)
- **Blanco (Texto)**: `#ffffff` (text-white)

## 📱 Responsividad

La aplicación está optimizada para:
- 📱 Móviles (320px - 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (1024px en adelante)

## 🚀 Despliegue en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js y desplegará tu aplicación
4. Obtén tu URL de producción

## 👨‍💻 Autor

**Moises Emmanuel Ramirez Guzman**

Proyecto realizado para la materia de Programación Web 2

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🙏 Agradecimientos

- PokéAPI por proporcionar los datos de Pokémon
- Next.js y el equipo de Vercel por el excelente framework
- Tailwind CSS por facilitar el diseño responsivo

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
