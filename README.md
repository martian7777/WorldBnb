# Rentora 🌍

> **Find your perfect home away from home.** Rentora is a full-stack short-term rental marketplace built with Next.js 14, Supabase (PostgreSQL), Clerk, and Tailwind CSS — inspired by Airbnb.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Animated hero, destination cards, stats, testimonials, and host CTA |
| 🔍 **Search & Filter** | Filter listings by location, dates, guests, price, and category |
| 🔐 **Authentication** | Enterprise-grade auth via **Clerk** (Social + Email) |
| 💳 **Direct Booking** | Seamless checkout experience powered by **Stripe** |
| 💖 **Wishlist** | Save and manage your favorite stays with a real-time sync |
| 🎛 **User Dashboard** | Post-login hub with bookings, wishlist, notifications, and stats |
| 🏡 **Host Tools** | Create/manage listings with photos, pricing, and availability |
| ⭐ **Reviews** | Guest reviews with star ratings and history |
| 🎨 **Smart Images** | Automated resolve for DB paths to local assets with keyword fallbacks |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org) — App Router |
| **Authentication** | [Clerk](https://clerk.com) — Social + Email Auth |
| **Database** | [Supabase](https://supabase.com) — PostgreSQL + Realtime |
| **Payments** | [Stripe](https://stripe.com) — Checkout + Webhooks |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Language** | TypeScript |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18 · npm ≥ 9 · Supabase Project · Clerk Account · Stripe Account

### 1. Clone & install

```bash
git clone https://github.com/orbimatrix/Airbnb-.git
cd Airbnb-
npm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
SUPABASE_SERVICE_ROLE_KEY=ey...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 3. Database setup

Apply the schema provided in `supabase/schema.sql` directly in the Supabase SQL Editor.

### 4. Run dev server

```bash
npm run dev
# → http://localhost:3000
```

---

## 📁 Project Structure

```
my-windbnb/
├── app/
│   ├── (dashboard)/            # Post-login user dashboard (Bookings, Wishlist, etc.)
│   ├── (static)/               # Legal & support pages
│   ├── api/                    # API routes (Payments, Webhooks, Notifications)
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks (useFavorite)
│   ├── libs/                   # Utility libraries (Stripe, Supabase clients)
│   └── layout.tsx              # Root layout with ClerkProvider
├── public/images/              # Local asset storage
├── supabase/                   # SQL schemas and DB configs
└── README.md
```

---

## 🔐 Authentication & Data Sync

Rentora uses **Clerk** for authentication. We implement a middleware-based sync that ensures every Clerk user has a corresponding row in our Supabase `profiles` table, allowing for complex relational queries while maintaining auth simplicity.

---

## 📄 License

MIT — built with ❤️ by the Rentora team.
