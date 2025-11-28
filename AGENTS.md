# agents.md — Directrices para Asistencia en el Desarrollo de Mi Portafolio Web

Este documento define cómo debe comportarse la IA mientras me asiste en la creación y evolución de mi portafolio como desarrollador web durante mis estudios de Desarrollo de Aplicaciones Web (DAW) y mi crecimiento profesional. La IA **debe seguir siempre estas reglas**.

---

## 🎯 Objetivo General

Brindar ayuda profesional y alineada con las mejores prácticas actuales de la industria del desarrollo web, garantizando calidad, mantenibilidad, escalabilidad y aprendizaje continuo.

---

## 🧠 Principios Generales

1. **Buenas prácticas por defecto**: Todo consejo, ejemplo o solución debe aplicar estándares modernos de la industria.
2. **Claridad y pedagogía**: Explicar decisiones, beneficios y posibles alternativas.
3. **Código limpio**: Priorizar legibilidad, modularidad y simplicidad.
4. **Evolución constante**: Adaptar recomendaciones a medida que mi nivel y mi portafolio crecen.
5. **Evitar malas prácticas**: No recomendar hacks, workarounds o soluciones obsoletas.
6. **Orientación laboral**: Brindar guías utilizadas realmente en empresas (git-flow, estándares de commit, estructura de proyectos, accesibilidad, etc.).

---

## 🛠️ Guías Técnicas que siempre debe seguir la IA

### 1. **HTML**

- Mantener semántica correcta.
- Usar nombres de clases descriptivos siguiendo BEM u otro estándar moderno.
- Incluir atributos accesibles siempre que corresponda.

### 2. **CSS / SASS**

- Usar SASS para organizar estilos de forma modular (partials, variables, mixins, funciones).
- Evitar `!important` excepto casos excepcionales.
- Fomentar uso de variables, flexbox y grid.
- Sugerir estructuras escalables (componentes, utilities, arquitectura como ITCSS o BEM).
- Mantener una estructura clara en SASS: `/base`, `/components`, `/layout`, `/utils`, etc.
- Evitar !important excepto casos excepcionales.
- Fomentar uso de variables, flexbox y grid.
- Sugerir estructuras escalables (componentes, utilities, arquitectura como ITCSS o BEM).

### 3. **JavaScript**

- Usar ESModules, arrow functions, const/let, código limpio.
- Evitar código global no encapsulado.
- Sugerir patrones modernos (event delegation, modularización).

### 4. **Accesibilidad (A11y)**

- Incluir buenas prácticas WCAG.
- Recordar etiquetas ARIA solo cuando sean necesarias.

### 5. **Performance**

- Minimizar cargas innecesarias.
- Sugerir lazy loading, minificación, estructura eficiente.

### 6. **Git & GitHub**

- Reglas de commits bien escritas: estilo Conventional Commits.
- Recomendaciones para ramas: `main`, `dev`, `feature/*`.
- Buenas prácticas de sincronización entre dispositivos.

---

## 🔄 Flujo de Trabajo y Comandos Esenciales

### 4. **Comandos Esenciales de npm / Node.js**

#### 📦 Gestión de paquetes

- Inicializar proyecto: `npm init -y`
- Instalar dependencia: `npm install nombre`
- Instalar como dependencia de desarrollo: `npm install nombre -D`
- Eliminar paquete: `npm uninstall nombre`
- Ver dependencias instaladas: `npm list` / `npm list --depth=0`

#### ▶️ Scripts

- Ejecutar un script: `npm run nombre-script`
- Script de inicio común: `npm start`
- Script para desarrollo: `npm run dev`
- Script para build: `npm run build`

#### ⚙️ Node.js

- Ejecutar archivo JS con Node: `node archivo.js`
- Ver versión de Node: `node -v`
- Ver versión de npm: `npm -v`

#### 🧹 Utilidades prácticas

- Limpiar caché de npm: `npm cache clean --force`
- Actualizar paquetes: `npm update`
- Buscar paquetes: `npm search nombre`

---

### 1. **Flujo de Trabajo Profesional (Git Flow Simplificado)**

1. **Crear nueva funcionalidad**: `git checkout -b feature/nombre-funcionalidad`
2. **Desarrollar y hacer commits limpios**: usar Conventional Commits.
3. **Sincronizar con remoto frecuentemente**: `git pull origin dev`
4. **Subir cambios**: `git push -u origin feature/nombre-funcionalidad`
5. **Crear Pull Request** hacia `dev`.
6. **Fusionar a `main`** solo para versiones estables.

### 2. **Comandos Esenciales de Git**

- Inicializar repo: `git init`
- Clonar repo: `git clone URL`
- Añadir cambios: `git add .`
- Commit: `git commit -m "feat: descripción"`
- Ver estado: `git status`
- Cambiar rama: `git checkout rama`
- Ver ramas: `git branch`
- Traer cambios: `git pull`
- Subir cambios: `git push`
- Crear nueva rama: `git checkout -b nombre`
- Fusionar ramas: `git merge rama`

### 3. **Flujo de Trabajo con SASS**

- Compilar SASS automáticamente: `sass --watch src/scss:dist/css`
- Estructura recomendada 7-1:

  - `abstracts/` → variables, mixins, functions
  - `base/` → reset, tipografías
  - `components/` → botones, cards, etc.
  - `layout/` → header, footer, grid
  - `pages/` → estilos por página
  - `themes/` → dark/light
  - `vendors/` → librerías externas

---

## 🚀 Reglas de Ayuda Continua para Mi Portafolio

1. La IA debe proponer mejoras progresivas a medida que el proyecto crece.
2. Debe sugerir refactorizaciones cuando detecte algo mejorable.
3. Cuando pida un ejemplo, mostrarlo siguiendo las prácticas del documento.
4. Antes de generar código, comprobar coherencia con el resto del portafolio.
5. Sugerir optimizaciones realistas usadas en empresas, no solo teóricas.
6. Recordar siempre la importancia de pruebas, documentación y control de versiones.

---

## 🧩 Estilo de Comunicación

- Directo, profesional pero amigable.
- Evitar tecnicismos innecesarios.
- Proporcionar pasos concretos.
- Ofrecer alternativas cuando existan.

---

## 📄 Reglas para Creación de Archivos por la IA

- Si la IA debe crear un archivo nuevo, **el archivo debe generarse vacío** por defecto.
- La IA solo añadirá contenido si yo lo solicito explícitamente.

---

## 📈 Evolución del Documento

Este `agents.md` puede expandirse cuando mis conocimientos aumenten o cuando mi portafolio requiera nuevas normas o metodologías.

---

Si la IA identifica nueva información que debería añadirse a este archivo, debe sugerirlo explícitamente.
