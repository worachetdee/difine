# DiFine

**Tech-Enabled Luxury Hospitality**

DiFine is a monthly luxury dining subscription service designed for affluent professionals in Tokyo. We provide exclusive access to fine dining experiences, including restaurants that are otherwise nearly impossible to secure, eliminating the stress and frustration of traditional reservation processes.

## Mission

We eliminate all the hassles of restaurant reservations and invite foodies to exclusive dining experiences on a regular basis.

## Key Features

- **Guaranteed Access:** Monthly guaranteed access to elite restaurants without the need for booking.
- **Curated Invitations:** Algorithmic matching based on your tastes and schedule.
- **Subscription Tiers:**
    - **Silver:** For the "Rising Director". Access to standard courses.
    - **Gold:** For the "Optimised Tech-Visionary". Premium courses, restaurant choice.
    - **Diamond:** For the "Sophisticated Patron". High-end courses, priority access, limousine service.
- **Seamless Experience:** Pre-paid dinner courses (excluding drinks), flexible cancellation policies.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, Framer Motion
- **Database:** SQLite (LibSQL) via [Turso](https://turso.tech/) (or local file)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Validation:** Zod

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd difine-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following keys. You will need to obtain these from your Clerk dashboard and Turso (if using a cloud DB).

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Database (Optional for local dev, defaults to file:./dev.db)
   TURSO_DATABASE_URL=libsql://...
   TURSO_AUTH_TOKEN=...
   ```

### Database Setup

This project uses Drizzle ORM.

1. **Push Schema:** Apply the schema changes to your database (creates `dev.db` locally by default).
   ```bash
   npx drizzle-kit push
   ```

2. **Seed Data:** Populate the database with initial data.
   ```bash
   npx tsx scripts/seed.ts
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: React components (UI, features, layout).
- `src/db`: Database schema and connection configuration.
- `src/lib`: Utility functions and server actions.
- `_businessplan`: Contains the detailed business plan and documentation.
