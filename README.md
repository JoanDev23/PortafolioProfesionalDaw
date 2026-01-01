# 🚀 Portafolio Profesional DAW

> **Estado actual:** EN CONSTRUCCIÓN
> 
> Este proyecto utiliza **IA como mentor técnico** para aprender mejores prácticas y arquitectura moderna.
> El código es 100% manual. Objetivo: Ser un portafolio profesional que demuestre verdadero aprendizaje.

Portafolio web personal desarrollado como preparación para el **Grado Superior en Desarrollo de Aplicaciones Web** (DAW), que comenzaré en febrero de 2026.

## 📖 Sobre el Proyecto

Este portafolio tiene un doble propósito:

- **Aprendizaje:** Practicar y reforzar conocimientos de desarrollo web frontend
- **Empleabilidad:** Demostrar habilidades profesionales a futuras empresas

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5** - Estructura semántica
- **Sass (SCSS)** - Preprocesador CSS con arquitectura modular
- **JavaScript ES6+** - Lógica y funcionalidad
- **Vite** - Bundler moderno para desarrollo y build

### Herramientas de Desarrollo

- **ESLint** - Linter para JavaScript
- **Git & GitHub** - Control de versiones
- **Metodología BEM** - Nomenclatura CSS

## 📁 Estructura del Proyecto

```
PortafolioProfesionalDaw/
├── src/
│   ├── assets/          # Imágenes, iconos, fuentes
│   ├── styles/          # Estilos Sass organizados
│   │   ├── base/        # Reset, tipografía, utilidades (_reset, _typography, etc.)
│   │   ├── components/  # Componentes reutilizables (_navbar, _button, _card)
│   │   ├── sections/    # Estilos de secciones (_hero, _about, _projects, etc.)
│   │   ├── pages/       # Estilos específicos de páginas (_calculadora, _index)
│   │   ├── _variables.scss  # Variables globales (colores, fuentes, etc.)
│   │   └── main.scss    # Archivo principal de compilación
│   └── scripts/         # JavaScript modular
├── pages/               # Páginas HTML adicionales (calculadora, etc.)
├── dist/                # Build de producción
└── index.html           # Página principal
```

### Convenciones Sass

El proyecto sigue las convenciones estándar de Sass:

- **Archivos con `_` (underscore)**: Son archivos parciales que NO se compilan directamente a CSS. Se importan en otros archivos.
- **Archivos sin `_`**: Son archivos principales que SÍ se compilan directamente a CSS (solo `main.scss`).
- **Archivos `_index.scss`**: Actúan como "archivos barril" que agrupan y re-exportan todos los parciales de una carpeta.

## 🎨 Características

- ✅ Diseño moderno con efectos neumórficos
- ✅ Sistema de variables semánticas (colores, tipografía)
- ✅ Arquitectura Sass modular y escalable siguiendo convenciones estándar
- ✅ Archivos parciales con prefijo `_` para mejor organización
- ✅ Código limpio siguiendo mejores prácticas
- ✅ Estructura preparada para crecimiento futuro
- ✅ Calculadora interactiva con operaciones básicas

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/PortafolioProfesionalDaw.git
cd PortafolioProfesionalDaw
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador:

```
http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

## 📂 Secciones del Portafolio

### Página Principal

- **Hero** - Presentación personal
- **Sobre mí** - Información profesional
- **Proyectos** - Proyectos de práctica y futuros proyectos DAW
- **Habilidades** - Tecnologías y herramientas
- **Contacto** - Formulario y redes sociales
- **Footer** - Enlaces y copyright

### Proyectos Adicionales

- **Calculadora** - Aplicación web con operaciones matemáticas básicas (suma, resta, multiplicación, división, porcentaje)

## 🎯 Roadmap

- [x] Estructura base del proyecto
- [x] Sistema de diseño (variables, colores, tipografía)
- [x] Secciones principales (Hero, About, Skills, Projects, Footer)
- [x] Aplicar convenciones Sass (archivos parciales con `_`)
- [x] Calculadora interactiva con operaciones básicas
- [ ] Sección Contact con formulario funcional
- [ ] Responsive Design (móvil, tablet, desktop)
- [ ] Animaciones y transiciones
- [ ] Optimización de rendimiento
- [ ] SEO y accesibilidad
- [ ] Proyectos reales durante la formación DAW

## 👨‍💻 Autor

**Joan Jimenez**

- Email: joan.jimenez.dev@gmail.com
- GitHub: [@JoanDev23](https://github.com/JoanDev23)
- LinkedIn: [JoanDev23](https://linkedin.com/in/JoanDev23)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

Proyecto desarrollado como preparación para el Grado Superior DAW, aplicando mejores prácticas profesionales y tecnologías modernas del desarrollo web.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub
