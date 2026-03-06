# Changelog

**Project Name:** Rentora  
**Last Updated:** March 6, 2026

This document outlines all features, pages, schemas, and design elements implemented in the **Rentora** platform from the start up to the current date.

---

## 1. Project Overview & Identity
- **Name:** Rentora (formerly my-windbnb)
- **Concept:** A full-stack short-term rental marketplace (Airbnb clone).
- **Core Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, NextAuth.js v4, Prisma ORM, MongoDB Atlas.
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

