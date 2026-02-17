# JB5 Landing Page - STARACCES

## Overview
A premium product landing page and pitch deck for the JB5 automatic rolling device by Staracces UG. Features an early bird pre-order waitlist system with PostgreSQL persistence, customer feedback with rewards, investor-facing content, and a full product story.

## Recent Changes
- 2026-02-17: Updated Market section with research-backed data: $21B→$102B (Grand View Research), 25.7% CAGR, 219M+ users (UNODC), TAM/SAM/SOM breakdown with source citations, Germany-specific data from BfArM
- 2026-02-17: Added customer feedback section with rewards (Special Edition for best feedback), star ratings, and privacy-safe API
- 2026-02-17: Added SEO meta tags with canonical URL for staracces.com, Open Graph, Twitter cards, keywords
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
- **Database**: PostgreSQL with `waitlist_entries` and `feedback_entries` tables
- **Styling**: Tailwind CSS with Apple/Uber monochrome theme (pure black bg, white/gray text, no gold accents)
- **SEO**: Canonical URL set to staracces.com, full Open Graph + Twitter card meta tags

## Landing Page Sections (in order)
1. Header (sticky nav with "Pre-Order Now" CTA)
2. Hero (product image, headline, CTA buttons)
3. Problem (4 cards: ingredients, rolling, medical, no solution)
4. Solution (feature badges, 4-step process, engineering card with CE/REACH/RoHS)
5. Benefits (6 benefit cards)
6. Market Opportunity (stats: $21B→$102B Grand View Research, TAM/SAM/SOM, target segments, business model, source citations)
7. Founder (Daniel Seyffarth bio with Próspera/Miami/LA story, patent/funding badges)
8. Journey (3-step visual timeline with prototype photos)
9. User Stories (Sara/Marco/Ben persona cards)
10. Feedback (customer feedback form with star ratings, reward tiers, featured feedback display)
11. Pricing (Early Bird $99 pre-order + Investor/Partner card + Roadmap)
12. Footer (section links + legal page links)

## Key Files
- `client/src/pages/landing.tsx` - Main landing page
- `client/src/pages/imprint.tsx` - Legal imprint page
- `client/src/pages/privacy.tsx` - Privacy policy page
- `client/src/pages/contact.tsx` - Contact page
- `client/src/components/feedback-section.tsx` - Customer feedback with rewards
- `client/src/components/` - All section components
- `server/routes.ts` - API routes for waitlist and feedback
- `shared/schema.ts` - waitlistEntries + feedbackEntries table schemas
- `server/storage.ts` - DatabaseStorage class

## API Endpoints
- `POST /api/waitlist` - Join waitlist (body: { email: string, name?: string })
- `GET /api/waitlist/count` - Get waitlist count
- `POST /api/feedback` - Submit feedback (body: { name: string, email: string, message: string, rating: 1-5 })
- `GET /api/feedback` - Get featured feedback (emails stripped for privacy)

## Feedback System
- Customers submit feedback with name, email, star rating, and message
- Best feedback can be marked as `featured=true` in the database to display publicly
- Reward tiers: 1st place gets JB5 Special Edition + free unit, 2nd gets $50 off, 3rd gets early access + merch
- GET endpoint strips emails from response for GDPR/privacy compliance

## Custom Domain Setup
- SEO canonical URL is set to https://staracces.com
- To connect the domain: Publish the app, then go to the Domains tab and link staracces.com
- Add the DNS records (A and TXT) provided by Replit to your domain registrar
- DNS propagation can take up to 48 hours

## User Preferences
- Apple/Uber monochrome aesthetic (pure black bg, white/gray text, no gold/warm accents)
- Real product images from attached_assets (founder photo, prototype shots, persona images, Próspera/Miami location photos)
- German engineering brand identity
- Investor-facing content alongside consumer pre-orders
- Use text-foreground/text-muted-foreground instead of text-primary for text (except hero overlay)
