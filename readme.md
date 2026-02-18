# Neat PC - Service Website (Vibecoded & Modifed using Replit)

## Overview

Neat PC is a bilingual (English + Bengali) service website for a PC cleaning business based in Chittagong, Bangladesh. It's a single-page marketing site with service packages (Basic ৳499, Advanced ৳699, Ultimate ৳999), a booking form, and WhatsApp integration for order placement. The site does not store any data server-side — all bookings are redirected to WhatsApp (wa.me/8801632425636).

## System Architecture

### Frontend (React + Vite + TypeScript)

- **Location:** `client/src/`
- **Framework:** React with TypeScript, bundled by Vite
- **Routing:** `wouter` for client-side routing (single page app with Home and 404 pages)
- **Styling:** Tailwind CSS with CSS variables for theming, using a teal/tech color palette
- **UI Components:** shadcn/ui (new-york style) — extensive component library in `client/src/components/ui/`
- **Animations:** Framer Motion for scroll-triggered entry animations
- **Fonts:** Outfit (display), Inter (body), Hind Siliguri (Bengali text support)
- **State Management:** React Context for i18n language toggle; React Query (TanStack Query) is set up but not actively used since there are no API calls
- **Form Handling:** React Hook Form with Zod validation via `@hookform/resolvers`

### Internationalization (i18n)

- **Location:** `client/src/lib/i18n.tsx`
- **Approach:** Custom React Context with a simple key-value translation map supporting English ("en") and Bengali ("bn")
- **Toggle:** Language switch button in the Navbar toggles all page text between EN/BN

### Page Structure (Single Page)

- `Navbar` — Sticky glass-morphism nav with logo, section links, language toggle, and Book Now CTA
- `Hero` — Headline, subheadline, CTA buttons (View Packages, Book on WhatsApp)
- `WhyUs` — Four feature cards (doorstep service, expert techs, guarantee, loyalty)
- `Services` — Three pricing cards (Basic, Advanced/Popular, Ultimate) with "Book This Package" buttons
- `BookingForm` — Form collecting name, phone, address, date, package, notes; submits via WhatsApp redirect
- `Footer` — Brand info, contact details, copyright

### Shared Code

- **Location:** `shared/schema.ts`
- **Purpose:** Zod validation schema for booking form data (`insertBookingSchema`), shared between client form validation and potential future server use

### Build System

- **Dev:** `npm run dev` — runs tsx with Vite HMR middleware
- **Build:** `npm run build` — runs `script/build.ts` which builds client with Vite and server with esbuild
- **Production:** `npm start` — serves the built `dist/index.cjs`
- **Path aliases:** `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Third-Party Services

- **WhatsApp Business:** Primary booking channel — booking form data is formatted into a WhatsApp message and opened via `https://wa.me/8801632425636`
- **Google Fonts:** Outfit, Inter, Hind Siliguri, DM Sans, Fira Code, Geist Mono loaded via CDN

### Key npm Packages

- **Frontend:** React, Vite, wouter, framer-motion, @tanstack/react-query, react-hook-form, zod, tailwindcss, class-variance-authority, lucide-react
- **UI Library:** Full shadcn/ui component set (Radix UI primitives + custom styling)
- **Backend:** Express 5, express-session, connect-pg-simple
- **Database:** drizzle-orm, drizzle-kit, pg (PostgreSQL driver) — configured but not actively queried

### Database

- PostgreSQL via `DATABASE_URL` environment variable — provisioned but not currently used for any application logic
