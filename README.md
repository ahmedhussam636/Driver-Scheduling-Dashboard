# Driver Scheduling Dashboard (with Calendar View)

React + Tailwind app to manage drivers, routes, and visualize driver availability.

## Features
- Add drivers with weekly availability.
- Add routes.
- Dashboard: assign/unassign drivers to routes.
- Calendar-style weekly availability grid (toggle availability per day).
- Data persisted with localStorage (seeded from `src/data/mock.json`).

## Setup
```bash
npm install
npm run dev
```
Build:
```bash
npm run build
npm run preview
```

## Deploy
Push to GitHub → Import into Vercel → build command `npm run build`, output `dist`.

