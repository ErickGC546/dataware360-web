## Dataware360 Web

[![TypeScript](https://img.shields.io/badge/TypeScript-97%25-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-1.6%25-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

Frontend web moderno construido con **TypeScript** para **Dataware360**, enfocado en ofrecer una experiencia UI limpia, rápida y fácil de mantener.

> Objetivo: que cualquier dev pueda clonar el repo y correrlo en **< 5 min**.

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Características](#características)
- [Pre-requisitos](#pre-requisitos)
- [Instalación y configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Descripción

**Dataware360 Web** es una aplicación frontend (SPA) orientada a presentar y operar funcionalidades de la plataforma Dataware360 desde el navegador.

**¿Qué problema resuelve?**
- Centraliza una interfaz web moderna para interactuar con el producto.
- Provee una base escalable (TypeScript + tooling) para iterar rápido sin sacrificar calidad.

---

## Tecnologías

Principales herramientas del proyecto:

- **TypeScript** (tipado y mantenibilidad)
- **React** (UI)
- **Vite** (dev server + build)
- **CSS** (estilos)
- **ESLint** (calidad de código)

---

## Características

- UI construida con **React + TypeScript**.
- Tooling listo para desarrollo: servidor local rápido, build y preview.
- Linting para mantener consistencia y prevenir errores comunes.
- Estructura típica de SPA: entrypoint en `src/` y build a `dist/`.

> Nota: la lista exacta de features puede ampliarse según los módulos y pantallas específicas del repo.

---

## Pre-requisitos

Asegúrate de tener instalado:

- **Node.js** (recomendado: **18+** o **20+**)
- **npm** (incluido con Node.js)

Opcional (recomendado):
- **Git** para clonar el repositorio
- **nvm** para manejar versiones de Node.js fácilmente

---

## Instalación y configuración

1) Clona el repositorio:

```bash
git clone https://github.com/ErickGC546/dataware360-web.git
cd dataware360-web
```

2) Instala dependencias:

```bash
npm install
```

3) (Opcional) Verifica calidad de código (lint):

```bash
npm run lint
```

---

## Uso

### Levantar en local (modo desarrollo)

```bash
npm run dev
```

Vite imprimirá una URL local (comúnmente `http://localhost:5173`).

### Build de producción

```bash
npm run build
```

Genera la salida en `dist/`.

### Previsualizar el build (como si fuera producción)

```bash
npm run preview
```

---

## Contribución

Contribuciones son bienvenidas. Flujo recomendado:

1) Haz un **Fork** del repositorio.
2) Crea una rama para tu cambio:

```bash
git checkout -b feat/mi-mejora
```

3) Instala dependencias y corre el proyecto:

```bash
npm install
npm run dev
```

4) Antes de commitear, asegura calidad:

```bash
npm run lint
npm run build
```

5) Commit y push:

```bash
git add .
git commit -m "feat: describe tu cambio"
git push origin feat/mi-mejora
```

6) Abre un **Pull Request** hacia `main`, describiendo:
- qué cambia,
- por qué,
- cómo probarlo (pasos reproducibles).
