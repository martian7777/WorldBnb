# Rentora Project Wiki

Welcome to the technical wiki for **Rentora**. This document provides an in-depth look at the architecture, data models, and integrations that power the platform.

---

## 🔐 Authentication & User Sync

Rentora uses **Clerk** for authentication, integrated with a custom **Supabase** profile sync.

### The Sync Flow
1. User logs in via Clerk (OIDC/OAuth).
2. The `middleware.ts` intercepts the request.
3. If the user is logged in, we check if they exist in the Supabase `profiles` table.
4. If they don't exist (first-time user), we automatically create a profile using their Clerk metadata (Email, Name, Avatar).

### Clerk Middleware
- **Protected Routes**: `/dashboard`, `/bookings`, `/wishlist`, `/notifications`, `/profile`.
- **Public Exemptions**: `/api/payments/webhook`, `/`.

---

## 🗄️ Database Schema (Supabase)

We use a PostgreSQL database hosted on Supabase.

### 1. `profiles`
Tracks user information linked to Clerk.
- `clerk_user_id` (PK): The unique ID from Clerk.
- `full_name`, `email`, `location`, `avatar_url`.

### 2. `listings`
The core of the marketplace.
- `id` (PK), `title`, `description`, `location`, `country`.
- `price_per_night`: Decimal.
- `image_url`: Path used by the Smart Image Resolver.
- `category`: e.g., 'Villa', 'Cabin', 'Apartment'.

### 3. `bookings`
Links users to listings.
- `listing_id` (FK), `clerk_user_id` (FK).
- `check_in`, `check_out`: Date.
- `status`: `pending`, `upcoming`, `completed`, `cancelled`.
- `confirmation_code`: Unique code shown to users.

### 4. `wishlists`
Enables the "Save for later" feature.
- Composite Unique Key: `(clerk_user_id, listing_id)`.

---

## 💳 Stripe Integration

Rentora uses a direct **Stripe Checkout** flow.

### Payment Flow
1. **Initiate**: User clicks "Book Now", calling `/api/payments/create-checkout`.
2. **Dynamic URLs**: Success and cancel URLs are generated dynamically based on the current origin.
3. **Session State**: We attach the `userId` and `listingId` to Stripe `metadata`.
4. **Webhook Handling**: Stripe sends a `checkout.session.completed` event to our webhook.

### Webhook Reliability
- **Verification**: Every webhook call is verified using the `Stripe-Signature`.
- **Tolerance**: We use a **600-second (10-minute) tolerance** to handle delays in high-traffic scenarios.
- **Raw Body**: We use `req.arrayBuffer()` to ensure the exact raw body is used for hashing.

---

## 🚀 API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/listings` | `GET` | Fetch all active listings, supports category filtering. |
| `/api/bookings` | `GET/POST` | Manage user bookings. `GET` supports status filtering. |
| `/api/wishlist` | `GET/POST` | Manage saves. Supports toggling items. |
| `/api/notifications` | `GET` | Fetch user alerts and history. |
| `/api/payments/create-checkout` | `POST` | Generates a Stripe checkout session. |
| `/api/payments/webhook` | `POST` | Public endpoint for Stripe event handling. |

---

## 🎨 Image System

Rentora implements a **Smart Asset Resolver** to handle discrepancies between database seed data and local assets.

1. **Resolution Logic**: If an image path ends in `.jpg` but doesn't exist, the UI automatically tries the `.png` equivalent.
2. **Flattening**: The system can resolve nested paths (e.g., `/images/villas/paris.jpg`) to flat root directories (`/images/paris.png`).
3. **Keyword Fallback**: If an asset is missing, the system uses keywords from the listing title (e.g., "Paris", "Bali") to show a relevant local fallback image before defaulting to Unsplash.
