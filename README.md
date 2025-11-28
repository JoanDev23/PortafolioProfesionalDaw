# 🚀 Portafolio Profesional - Desarrollo de Aplicaciones Web

Portafolio web profesional desarrollado durante mis estudios de **Desarrollo de Aplicaciones Web (DAW)**, diseñado para mostrar mis proyectos, habilidades y crecimiento como desarrollador web.

---

## 📋 Descripción del Proyecto

Este portafolio ha sido construido desde cero siguiendo las **mejores prácticas de la industria**, aplicando estándares modernos de desarrollo web y arquitecturas escalables. El proyecto está diseñado para evolucionar junto con mi aprendizaje y experiencia profesional.

### ✨ Características Principales

- **HTML semántico** con buenas prácticas de accesibilidad (WCAG)
- **Arquitectura SASS 7-1** para estilos modulares y escalables
- **JavaScript modular** con ESModules
- **Responsive Design** adaptado a todos los dispositivos
- **Modo oscuro/claro** para mejorar la experiencia de usuario
- **Optimización de rendimiento** (lazy loading, minificación)
- **Control de versiones** con Git Flow

---

## 📁 Estructura del Proyecto

```
PortafolioProfesionalDaw/
│
├── .gitignore                     # Archivos ignorados por Git
├── README.md                      # Documentación del proyecto
├── AGENTS.md                      # Directrices para asistencia IA
├── package.json                   # Dependencias y scripts npm
│
├── src/                           # Código fuente
│   ├── index.html                 # Página principal
│   │
│   ├── scss/                      # Estilos SASS (Arquitectura 7-1)
│   │   ├── main.scss              # Punto de entrada SASS
│   │   ├── abstracts/             # Variables, mixins, funciones
│   │   ├── base/                  # Reset y tipografías
│   │   ├── components/            # Componentes reutilizables
│   │   ├── layout/                # Estructura (header, footer, grid)
│   │   ├── pages/                 # Estilos por página
│   │   ├── themes/                # Temas (dark/light)
│   │   └── vendors/               # Librerías externas
│   │
│   ├── js/                        # JavaScript modular
│   │   ├── main.js                # Punto de entrada JS
│   │   ├── modules/               # Módulos específicos
│   │   └── utils/                 # Utilidades reutilizables
│   │
│   └── assets/                    # Recursos estáticos
│       ├── images/
│       ├── icons/
│       └── fonts/
│
└── dist/                          # Archivos compilados (generados)
    ├── css/
    └── js/
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **SASS/SCSS** - Preprocesador CSS
- **JavaScript (ES6+)** - Lógica e interactividad
- **Git & GitHub** - Control de versiones
- **npm** - Gestión de paquetes

---

## 📦 Instalación

### Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)
- **Git**

### Pasos de Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/PortafolioProfesionalDaw.git
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd PortafolioProfesionalDaw
   ```

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

---

## 🚀 Uso

### Scripts Disponibles

#### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo y compila SASS automáticamente con watch mode.

#### Compilar SASS

```bash
npm run sass:watch
```

Compila SASS y observa cambios en tiempo real.

```bash
npm run sass:build
```

Compila SASS para producción (minificado).

#### Build de Producción

```bash
npm run build
```

Genera los archivos optimizados para producción en la carpeta `dist/`.

#### Limpiar Archivos Compilados

```bash
npm run clean
```

Elimina la carpeta `dist/` y archivos compilados.

---

## 🔄 Flujo de Trabajo con Git

Este proyecto sigue **Git Flow simplificado**:

### Ramas Principales

- `main` - Versiones estables y producción
- `dev` - Desarrollo activo
- `feature/*` - Nuevas funcionalidades

### Crear Nueva Funcionalidad

```bash
# Crear rama desde dev
git checkout dev
git checkout -b feature/nombre-funcionalidad

# Desarrollar y hacer commits
git add .
git commit -m "feat: descripción de la funcionalidad"

# Subir cambios
git push -u origin feature/nombre-funcionalidad
```

### Conventional Commits

Seguimos el estándar **Conventional Commits**:

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de errores
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan código)
- `refactor:` - Refactorización de código
- `test:` - Añadir o modificar tests
- `chore:` - Tareas de mantenimiento

---

## 🎨 Arquitectura SASS

Seguimos la **arquitectura 7-1**:

- `abstracts/` - Variables, mixins, funciones
- `base/` - Reset CSS, tipografías base
- `components/` - Componentes reutilizables (botones, cards)
- `layout/` - Estructura del sitio (header, footer, grid)
- `pages/` - Estilos específicos por página
- `themes/` - Temas visuales (dark/light mode)
- `vendors/` - Librerías CSS externas

---

## 📈 Roadmap

- [x] Estructura inicial del proyecto
- [ ] Diseño y maquetación responsive
- [ ] Implementación de modo oscuro
- [ ] Sección de proyectos
- [ ] Formulario de contacto
- [ ] Animaciones y transiciones
- [ ] Optimización de rendimiento
- [ ] SEO y accesibilidad
- [ ] Deploy en producción

---

## 👤 Autor

**Tu Nombre**  
Estudiante de Desarrollo de Aplicaciones Web (DAW)

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu-email@ejemplo.com

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

Proyecto desarrollado como parte de mi formación en **Desarrollo de Aplicaciones Web**, aplicando conocimientos adquiridos y mejores prácticas de la industria.

---

**Última actualización**: Noviembre 2025
