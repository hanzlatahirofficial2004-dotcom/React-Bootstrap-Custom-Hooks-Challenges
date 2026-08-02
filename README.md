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
   - <img width="1895" height="361" alt="image" src="https://github.com/user-attachments/assets/e3b2fded-ecd9-4742-8734-36411ab2e36d" />


2. **Challenge 2: Custom `useToggle()` Hook**
   - Implemented a custom reusable hook (`useToggle.js`) to handle simple boolean visibility toggling across elements cleanly.
   - <img width="1897" height="163" alt="image" src="https://github.com/user-attachments/assets/f8fa4568-014a-4351-85cf-259e5e2588d9" />


3. **Challenge 3: Fake Loading Screen (2s Spinner)**
   - Simulated an asynchronous API call with `setTimeout`.
   - Displays a Bootstrap loading spinner for 2 seconds before rendering real structured data list.
   - <img width="1898" height="283" alt="image" src="https://github.com/user-attachments/assets/a98d7a69-7c99-4f61-aae8-327c06af0927" />


4. **Challenge 4: Previous Value Tracker (`useRef`)**
   - Uses `useRef` to retain and track the previous state of a text input.
   - Shows live "BEFORE vs NOW" text comparisons as the user types in real-time.
   - <img width="1895" height="294" alt="image" src="https://github.com/user-attachments/assets/7332819e-f9a3-4a70-9658-183aadd2dfec" />


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
