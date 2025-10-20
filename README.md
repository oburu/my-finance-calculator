# 🚙 My Finance Calculator 📝

A **React + TypeScript** project built with **Vite** that displays a list of retailers available vehicles, allow users to filter and sort these vehicles, and then view the details of a single vehicle along with a representative finance calculation on a side panel (MUI Drawer)

---

## 🛠️ Tech Stack

- ⚡ **Vite** — Fast build tool and dev server
- 🧩 **React + TypeScript** — Component-based architecture with strong typing
- 🔍 **TanStack Query** — Server-state management and data fetching
- 📊 **TanStack Table** — Flexible and performant table library
- 🎨 **Material UI (MUI)** — Component library for styling
- 📡 **React Router** — To handle client-side routing
- 🧪 **Vitest**, **React Testing Library**, **MSW** — Testing stack

---

## 🚀 Features

- Displays **Vehicles** data in Cards
- Sort by (ascending or descending):
  - Price
  - Year
  - Mileage
- Click on a **Card** to access the Representative Finance Calculator
- Intuitive Finance Calculator that works with sliders

---

## 🧩 Installation

```bash
npm install
```

## 💻 Development

```bash
npm run dev
```

## 🧪 Testing & Coverage

```bash
npm run coverage
```

This project uses:

- Vitest for unit testing
- React Testing Library for component testing
- MSW (Mock Service Worker) for API request mock

## 🌱 Future Enhancements

- 💾 Add localStorage to store calculations after using the sliders
- 🌗 Day/Night mode toggle
