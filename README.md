# Motion Tech Demo - Game Library

A React demo app built to showcase [Motion](https://motion.dev/) (formerly Framer Motion) animations in a real-world UI.

## Purpose

This project demonstrates how Motion integrates with React to add fluid animations and transitions. Two branches let you compare the experience side-by-side:

| Branch             | Description                    | Port                  |
| ------------------ | ------------------------------ | --------------------- |
| `main`             | Full Motion animations applied | `5173` (Vite default) |
| `starting-project` | Same app, no animations        | `3000`                |

Switching between branches lets you see exactly what Motion adds to the user experience.

## What it does

A game library UI with:

- Genre filter bar
- Animated card grid
- Detail panel slide-in on card click
- Favourite toggle button

## Prerequisites

- **Node.js** v20 or later (developed on v20.13.1)
- **npm** v9 or later (bundled with Node)

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/UOA-CS732-S1-2026/cs732-tech-tutorial-reybui.git
cd motion-tech-demo

# 2. Switch to the branch you want to run
git checkout main              # with Motion animations
# or
git checkout starting-project  # without animations

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (`http://localhost:5173` on `main`, `http://localhost:3000` on `starting-project`).

## Project structure

```
src/
  components/
    FilterBar.jsx       # Genre filter tabs
    CardGrid.jsx        # Animated grid of game cards
    DetailPanel.jsx     # Slide-in panel for selected game
    FavouriteButton.jsx # Favourite toggle with animation
  data/
    games.js            # Static game data
  assets/               # Game cover images
  App.jsx               # Root component — state lives here
  main.jsx              # React entry point
```

## Key dependencies

| Package               | Purpose                 |
| --------------------- | ----------------------- |
| `motion`              | Animation library (v12) |
| `react` + `react-dom` | UI framework (v19)      |
| `vite`                | Dev server and bundler  |

## Scripts

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with hot reload     |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
