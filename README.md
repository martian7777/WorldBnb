# WorldBNB 🌍

> **Find your perfect home away from home.** WorldBNB is a full-stack short-term rental marketplace built with Next.js 14, Prisma, NextAuth, and Tailwind CSS — inspired by Airbnb.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Animated hero, destination cards, stats, testimonials, and host CTA |
| 🔍 **Search & Filter** | Filter listings by location, dates, guests, price, and category |
| 🔐 **Authentication** | Email/password + GitHub + Google OAuth via NextAuth |
| 📋 **18 Static Pages** | Help Center, Safety, Careers, Investors, Magazine, Events, Gift Cards, Privacy, Terms |
| 🎛 **User Dashboard** | Post-login hub with bookings, wishlist, notifications, profile, and settings |
| 🏡 **Host Tools** | Create/manage listings with photos, pricing, availability, and amenities |
| ⭐ **Reviews** | Guest reviews with star ratings |
| 🗺️ **Map Search** | Leaflet-based interactive map view |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org) — App Router |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Auth** | [NextAuth.js v4](https://next-auth.js.org) — GitHub, Google, Credentials |
| **Database** | [MongoDB Atlas](https://mongodb.com/atlas) via [Prisma ORM](https://prisma.io) |
| **Image CDN** | [Cloudinary](https://cloudinary.com) |
| **Maps** | [Leaflet](https://leafletjs.com) + `react-leaflet` |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18 · npm ≥ 9 · MongoDB Atlas cluster · GitHub & Google OAuth apps · Cloudinary account

### 1. Clone & install

```bash
git clone https://github.com/your-username/my-windbnb.git
cd my-windbnb
npm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/worldbnb"

NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

### 3. Database setup

```bash
npx prisma generate
npx prisma db push
```

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
│   ├── (auth)/                 # Login & Signup pages
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/            # Post-login user dashboard
│   │   ├── layout.tsx          # Sidebar + topbar shell
│   │   ├── dashboard/page.tsx  # Overview + stats
│   │   ├── bookings/page.tsx
│   │   ├── wishlist/page.tsx
│   │   ├── notifications/page.tsx
│   │   ├── profile/page.tsx
│   │   └── settings/page.tsx
│   ├── (static)/               # 18 static/legal pages
│   │   ├── layout.tsx
│   │   ├── support/  community/  hosting/  windbnb/
│   │   ├── privacy/  terms/
│   ├── home/                   # Main listings app
│   ├── components/
│   │   ├── auth/               # AuthCard, SocialButton
│   │   ├── dashboard/          # Sidebar, Header, StatCard
│   │   ├── landing/            # LandingHeader, LandingFooter
│   │   └── static/             # PageHero, FAQAccordion, InfoCard, ContactForm
│   ├── context/
│   │   └── AuthContext.tsx     # Auth state management
│   ├── actions/                # Server actions
│   └── api/                    # NextAuth API routes
├── prisma/schema.prisma
├── public/images/
└── README.md
```

---

## 🗺️ All Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Sign in |
| `/signup` | Create account |
| `/home` | Browse listings |
| `/dashboard` | Dashboard overview |
| `/bookings` | My bookings |
| `/wishlist` | Saved listings |
| `/notifications` | Notifications |
| `/profile` | Edit profile |
| `/settings` | Account settings |
| `/support/*` | 4 support pages |
| `/community/*` | 4 community pages |
| `/hosting/*` | 4 hosting pages |
| `/windbnb/*` | 4 company pages |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |

---

## 🔐 Authentication

Three providers via **NextAuth.js**: Email/Password · GitHub OAuth · Google OAuth

Sessions stored in MongoDB via Prisma adapter.

---

## 📦 Deploy to Vercel

1. Push to GitHub → Import at [vercel.com/new](https://vercel.com/new)
2. Add all `.env` variables in Vercel project settings
3. Deploy 🚀

---

## 📄 License

MIT — built with ❤️ by the WorldBNB team.
