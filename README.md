# Self Improvement App

**Build better habits, one at a time.** A habit and daily-routine tracker that keeps an honest record of every day, decides when a habit is truly *mastered*, and nudges you to stick to your routine.

> 🚧 **In active development.** Built solo as a full-stack learning project, and used daily by my family once it's live.

---

## What it does

**Habits**
- Track daily habits, weekly habits, and weekly targets (e.g. *gym 3× a week*, *work 40 hrs*)
- See exactly what you did on any past day
- Move habits from **Not started → In progress → Mastered**, with the app deciding mastery and demoting a habit if you slip

**Routine** *(coming next)*
- Plan your day in time blocks, using reusable day and week templates
- Get a notification as each block starts: **Start**, **Snooze** or **Cancel**
- Earn points weighted by block length, with snoozes costing you

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React · TypeScript · Vite · Tailwind CSS |
| Backend | Node.js · Express · TypeScript |
| Database | PostgreSQL · Prisma ORM |
| Auth *(planned)* | Better Auth |
| Mobile *(planned)* | React Native (Expo) |

The backend is a standalone API, so the web app is just its first client. A mobile app can reuse every endpoint later.

## Project structure

```
selfImprovementApp/
├── client/     React web app (Vite)
└── server/     Express API + Prisma schema and migrations
```

## Running it locally

**You'll need:** Node.js 24 and PostgreSQL 17.

```bash
# 1. Install dependencies
cd server && npm install
cd ../client && npm install

# 2. Create the database and configure the server
createdb self_improvement_app
cp server/.env.example server/.env     # then fill in your values

# 3. Create the tables and generate the Prisma client
cd server
npx prisma migrate dev
npx prisma generate

# 4. Run both apps (in two terminals)
cd server && npm run dev    # API on http://localhost:3000
cd client && npm run dev    # App on http://localhost:5173
```

## Roadmap

- [x] Express API and React client, connected via the Vite proxy
- [x] Database schema and first migration (users, habits, targets, logs)
- [ ] Habits API and Today screen
- [ ] History screen
- [ ] Accounts and login
- [ ] Habit stages and mastery
- [ ] Daily routines and notifications
- [ ] Deploy, then the mobile app

---

Built by [Rafae Rajani](https://github.com/rafaerajani).
