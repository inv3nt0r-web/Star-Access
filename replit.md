# JB5 Landing Page - STARACCES

## Overview
A premium product landing page and pitch deck for the JB5 automatic rolling device by Staracces UG. Features an early bird pre-order waitlist system with PostgreSQL persistence, investor-facing content, and a full product story.

## Recent Changes
- 2026-02-17: Transformed into pitch deck with Market Opportunity section, investor card, and early bird pre-order tiers
- 2026-02-17: Added Founder section (Daniel Seyffarth bio, Próspera/Miami/LA story) and Journey section with prototype photos
- 2026-02-17: Added User Stories section (Sara, Marco, Ben persona cards)
- 2026-02-17: Added legal pages (Imprint, Privacy Policy, Contact) with footer links
- 2026-02-16: Initial build - landing page with hero, problems, solution, benefits, pricing/timeline sections
- 2026-02-16: Waitlist API with PostgreSQL database
- 2026-02-16: Dark/gold premium theme with Inter font

## Project Architecture
- **Frontend**: React + Vite, single-page landing with smooth scroll navigation + legal pages via wouter routing
- **Backend**: Express.js with PostgreSQL via Drizzle ORM
- **Database**: PostgreSQL with `waitlist_entries` table (email unique, name optional, createdAt)
- **Styling**: Tailwind CSS with custom gold/dark theme tokens

## Landing Page Sections (in order)
1. Header (sticky nav with "Pre-Order Now" CTA)
2. Hero (product image, headline, CTA buttons)
3. Problem (4 cards: ingredients, rolling, medical, no solution)
4. Solution (feature badges, 4-step process, engineering card with CE/REACH/RoHS)
5. Benefits (6 benefit cards)
6. Market Opportunity (stats: $105B→$822B, target segments, business model)
7. Founder (Daniel Seyffarth bio with Próspera/Miami/LA story, patent/funding badges)
8. Journey (3-step visual timeline with prototype photos)
9. User Stories (Sara/Marco/Ben persona cards)
10. Pricing (Early Bird $99 pre-order + Investor/Partner card + Roadmap)
11. Footer (section links + legal page links)

## Key Files
- `client/src/pages/landing.tsx` - Main landing page
- `client/src/pages/imprint.tsx` - Legal imprint page
- `client/src/pages/privacy.tsx` - Privacy policy page
- `client/src/pages/contact.tsx` - Contact page
- `client/src/components/` - All section components
- `server/routes.ts` - POST /api/waitlist, GET /api/waitlist/count
- `shared/schema.ts` - waitlistEntries table schema
- `server/storage.ts` - DatabaseStorage class

## API Endpoints
- `POST /api/waitlist` - Join waitlist (body: { email: string, name?: string })
- `GET /api/waitlist/count` - Get waitlist count

## User Preferences
- Premium dark aesthetic with gold accents
- Real product images from attached_assets (founder photo, prototype shots, persona images, Próspera/Miami location photos)
- German engineering brand identity
- Investor-facing content alongside consumer pre-orders
- Use text-foreground/text-muted-foreground instead of text-primary for text (except hero overlay)
