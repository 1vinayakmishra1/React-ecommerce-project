# React E-Commerce App

A React storefront demo with product search, a shopping cart, checkout, order history, and delivery tracking. The frontend is built with Vite; an Express API and SQLite database provide the application data.

## Requirements

- Node.js 22 or newer
- npm

## Run locally

Install and start the backend in one terminal:

```sh
cd ecommerce-backend
npm install
npm run dev
```

In a second terminal, install and start the frontend from the repository root:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The frontend proxies API and image requests to the backend on port 3000. The backend creates and seeds its local SQLite database on first startup.

## Available scripts

At the repository root:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production frontend build |
| `npm run lint` | Run ESLint |

In `ecommerce-backend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with automatic restarts |
| `npm start` | Start the API |

The backend API endpoints are documented in [ecommerce-backend/documentation.md](ecommerce-backend/documentation.md).

## Project structure

- `src/` - React application pages, components, styles, and utilities
- `ecommerce-backend/` - Express API, Sequelize models, seed data, and product assets

## Notes

This project is a learning/demo storefront and does not process real payments. Product data and order state are stored by the local backend.
The frontend was built by VINAYAK MISHRA. The backend was developed with help from SuperSimpleDev's YouTube tutorials and AI.
