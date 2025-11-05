# Shaker-Snack-Demo

## Local development

1. Start the backend:
   - `cd back`
   - `npm install`
   - create `.env` if you need to override defaults (the service binds to port `4000` and allows requests from `http://localhost:3000` by default)
   - `npm run dev`

2. Start the frontend:
   - `cd front`
   - `cp .env.exemple .env` (adjust values if necessary; by default the client talks to `http://localhost:4000`)
   - `npm install`
   - `npm start`

The UI is served at `http://localhost:3000` and proxies API calls to the backend at `http://localhost:4000`. Static media links also point to the backend `/media` route so assets resolve correctly.
