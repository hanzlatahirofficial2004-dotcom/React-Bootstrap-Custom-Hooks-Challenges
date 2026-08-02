# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ⚡ Week 5: Daily React Challenges

A clean, responsive single-page web application featuring **4 interactive React challenges**. Built to demonstrate modular component design, custom hooks creation, asynchronous UI states, and mutable state tracking with `useRef`.

---

## 🎯 Challenges Overview

1. **Challenge 1: Reusable Button Component**
   - Built a dynamic `CustomButton` component accepting `label`, `color`, and `onClick` props.
   - Supports both standard Bootstrap color variants and custom HEX colors.

2. **Challenge 2: Custom `useToggle()` Hook**
   - Implemented a custom reusable hook (`useToggle.js`) to handle simple boolean visibility toggling across elements cleanly.

3. **Challenge 3: Fake Loading Screen (2s Spinner)**
   - Simulated an asynchronous API call with `setTimeout`.
   - Displays a Bootstrap loading spinner for 2 seconds before rendering real structured data list.

4. **Challenge 4: Previous Value Tracker (`useRef`)**
   - Uses `useRef` to retain and track the previous state of a text input.
   - Shows live "BEFORE vs NOW" text comparisons as the user types in real-time.

---

## 🛠️ Tech Stack

* **Framework:** React.js
* **Styling:** Bootstrap 5
* **State Management:** Custom Hooks (`useToggle`), `useState`, `useEffect`, `useRef`
* **Build Tool:** Vite

---

## 📂 Project Structure

```text
Daily-Challenges/
├── public/
├── src/
│   ├── components/
│   │   ├── Challenge1.jsx
│   │   ├── Challenge2.jsx
│   │   ├── Challenge3.jsx
│   │   └── Challenge4.jsx
│   ├── hooks/
│   │   └── useToggle.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
