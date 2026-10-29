# ustaxona.uz website

The public site (Next.js). For now one static page in Uzbek (`/`) and Russian (`/ru`) showing how the app works.
No API: the pictures in `public/screens/<lang>/` are screenshots of the real app with sample data, and the status demo
repeats the bot's real messages (`backend/app/notify.py`, `backend/app/bot.py`).

- Texts for both languages: `src/content.ts`
- The page: `src/components/landing.tsx`; the order status demo: `src/components/status-demo.tsx`

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
