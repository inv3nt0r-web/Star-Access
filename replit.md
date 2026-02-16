# JB5 Landing Page - STARACCES

## Overview
A premium product landing page for the JB5 automatic rolling device by Staracces UG. Features a waitlist signup system with PostgreSQL persistence.

## Recent Changes
- 2026-02-16: Initial build - landing page with hero, problems, solution, benefits, pricing/timeline sections
- 2026-02-16: Waitlist API with PostgreSQL database
- 2026-02-16: Dark/gold premium theme with Inter font

## Project Architecture
- **Frontend**: React + Vite, single-page landing with smooth scroll navigation
- **Backend**: Express.js with PostgreSQL via Drizzle ORM
- **Database**: PostgreSQL with `waitlist_entries` table
- **Styling**: Tailwind CSS with custom gold/dark theme tokens

## Key Files
- `client/src/pages/landing.tsx` - Main landing page
- `client/src/components/` - All section components (header, hero, problem, solution, benefits, pricing, footer)
- `server/routes.ts` - POST /api/waitlist, GET /api/waitlist/count
- `shared/schema.ts` - waitlistEntries table schema
- `server/storage.ts` - DatabaseStorage class
- `server/db.ts` - PostgreSQL connection

## API Endpoints
- `POST /api/waitlist` - Join waitlist (body: { email: string, name?: string })
- `GET /api/waitlist/count` - Get waitlist count

## User Preferences
- Premium dark aesthetic with gold accents
- Real product images from attached_assets
- German engineering brand identity
