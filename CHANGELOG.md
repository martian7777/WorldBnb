# Changelog

**Project Name:** Rentora  
**Last Updated:** March 12, 2026

This document outlines all features, pages, schemas, and design elements implemented in the **Rentora** platform.

---

## [MAJOR UPDATE] March 20, 2026

### 🏠 Property Listing & Management
- **Rent Out Property:** Added a streamlined `/create-listing` flow enabling users to list their own properties for either Rent or Sale.
- **My Properties Dashboard:** Created a dedicated `/my-properties` management page where hosts can view their active listings.
- **Ownership Verification:** Injected host identification into the Supabase schema seamlessly to track listing ownership.
- **Booking Restrictions:** Built-in safeguards preventing hosts from mistakenly booking or purchasing their own properties.

### 🔍 Advanced Search & Navigation
- **Dynamic Hero Search:** Upgraded the landing page search bar to fully process Location, Dates, and Guest counts.
- **Availability Filtering:** Search engine now cross-references the `bookings` table to accurately hide properties that are already booked for the requested dates.
- **Auth-Protected Actions:** Simplified user flows by automatically redirecting unauthenticated booking/searching attempts through Clerk login, returning them safely to the dashboard.
- **UI Clean-up:** Temporarily hidden listing thumbnail images platform-wide and simplified the Hero section by removing the Rent/Buy toggle.

---

## [MAJOR UPDATE] March 12, 2026

### 🔄 Architectural Pivot: Clerk + Supabase
- **Shifted Authentication**: Migrated from NextAuth to **Clerk** for enterprise-grade authentication, social logins, and account management.
- **Shifted Database**: Migrated from MongoDB/Prisma to **Supabase (PostgreSQL)**. 
- **User Sync System**: Implemented a robust synchronization system that ensures Clerk users are automatically mirrored in the Supabase `profiles` table upon first interaction.
- **Middleware Protection**: Enhanced route protection using `clerkMiddleware`, with specific exemptions for public webhooks.

### 💳 Stripe Payments Integration
- **Direct Checkout**: Implemented direct Stripe Checkout integration for listings.
- **Dynamic Pricing**: Real-time total calculation including service fees and cleaning fees.
- **Webhook System**: 
  - Created a robust webhook handler with signature verification.
  - Implemented **10-minute timestamp tolerance** to accommodate Vercel/Stripe processing delays.
  - Auto-updating booking status to `upcoming` upon successful payment.
- **Admin Notifications**: Automated user notifications upon payment confirmation.

### 💖 Wishlist & Favorites System
- **Heart Button**: Re-implemented the iconic heart button for saving listings.
- **useFavorite Hook**: Created a reusable hook for managing favorites via the API.
- **Wishlist REST API**: Integrated Supabase-backed API for persistent saves.
- **Unified UI**: Refactored the Wishlist page to use standard listing components for a professional look.

### 🎨 Image "Smart Resolver" & UI Polish
- **Dynamic Extension Handling**: Automatically maps database `.jpg` references to local `.png` assets.
- **Robust Path Resolution**: Handles nested paths and flattens them for local public assets.
- **Keyword Fallbacks**: Intelligent `onError` handlers that try city-based images (e.g., Paris, Bali) before falling back to high-quality Unsplash placeholders.
- **Premium Dashboard**: Finalized the dashboard stats, recent activity feed, and upcoming trips section with a modern glassmorphism aesthetic.

---

## 1. Project Overview & Identity (Legacy Info)
- **Name:** Rentora (formerly my-windbnb)
- **Concept:** A full-stack short-term rental marketplace (Airbnb clone).
- **Core Tech Stack (Updated):** Next.js 14, Clerk Auth, Supabase (PostgreSQL), Stripe, Tailwind CSS.
- **Design & Branding:**
  - Integrated professional icons using **Lucide React**.
  - Interactive UI polish: hover animations, card glows, and icon background circles.
  - Clean, modern aesthetic prioritizing a trustworthy and premium user experience.

## 2. Pages & Routing
We have implemented a comprehensive set of routes and UI layouts.

### Public Pages
- **Landing Page (`/`)**: Animated hero section, destination cards, platform statistics, user testimonials, host Call-To-Action (CTA), and a refined "Why Choose Rentora?" section highlighting unique features like **AI Travel Recommendations**.
- **Main Listings App (`/home`)**: Interface to browse, search, and filter available listings (by location, dates, guests, price, category). Sub-features include a Leaflet-based interactive map view.

### Authentication Flow
- **Login (`/login`)**: Secure sign-in page.
- **Signup (`/signup`)**: New account creation page.

### User Dashboard (Post-Login Hub)
- **Overview (`/dashboard`)**: Account stats and general overview.
- **My Bookings (`/bookings`)**: Manage upcoming and past reservations.
- **Wishlist (`/wishlist`)**: Saved and favorited listing management.
- **Notifications (`/notifications`)**: User alerts, messages, and updates.
- **Profile (`/profile`)**: Manage public profile details.
- **Settings (`/settings`)**: Account configuration and security management.

### Static & Legal Pages (18 Pages Total)
- Structured under `/support/*`, `/community/*`, `/hosting/*`, and `/windbnb/*`.
- Standalone pages for **Privacy Policy (`/privacy`)** and **Terms & Conditions (`/terms`)**.
- Includes specific pages like Help Center, Safety, Careers, Investors, Magazine, Events, and Gift Cards.


## 3. UI Architecture & Components
Organized modular structure under `app/components/`:
- **Auth:** `AuthCard`, `SocialButton`.
- **Dashboard:** `Sidebar`, `DashboardHeader`, `StatCard`.
- **Landing:** `LandingHeader`, `LandingFooter`.
- **Static Pages:** `PageHero`, `FAQAccordion`, `InfoCard`, `ContactForm`.

