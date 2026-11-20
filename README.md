# Maa Kela Devi Traders

A simple e‑commerce website for a building‑materials business with buyer and seller roles.

## Tech Stack
- **Node.js**
- **Express.js**
- **EJS** templates
- **Bootstrap 5**
- **MongoDB Atlas** (via Mongoose)
- **dotenv**, **express‑session**, **connect‑mongo**, **connect‑flash**, **helmet**, **morgan**, **method‑override**

## Setup
```bash
# Install dependencies
npm install

# Prepare environment variables
cp .env.example .env   # then edit .env with your values (PORT, MONGO_URI, SESSION_SECRET)

# Run in development mode
npm run dev
```

## Folder Structure
```
config/          # DB connection helper
models/          # Mongoose models (currently empty)
routes/          # Express route definitions
controllers/     # Route controller logic (empty for now)
middleware/      # Error handling and other middlewares
services/        # Business‑logic services (placeholder)
views/           # EJS templates
 └─partials/    # Header, navbar, footer, flash messages
public/          # Static assets (css, js, images)
 ├─css/
 ├─js/
 └─images/
```

