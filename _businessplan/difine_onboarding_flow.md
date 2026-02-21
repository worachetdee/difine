# DiFine — First-Time User Onboarding Flow

> **Purpose**: Guide new members from invitation acceptance through their first dining experience with minimal friction and maximum delight. Every screen reinforces DiFine's core values: **Exclusivity**, **Hospitality (Omotenashi)**, and **Simplicity**.

---

## Flow Overview

```
Invitation Email/Link
        │
        ▼
┌───────────────────┐
│ 1. Welcome Screen │
└───────┬───────────┘
        │
        ▼
┌───────────────────┐
│ 2. Create Account │
└───────┬───────────┘
        │
        ▼
┌────────────────────────┐
│ 3. Identity Veri­fica­tion │
└───────┬────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 4. Choose Your Tier      │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 5. Taste Profile Setup   │
│    5a. Cuisine            │
│    5b. Dining Style       │
│    5c. Schedule           │
│    5d. Dietary / Allergy  │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 6. Data Consent          │
│    (Card API opt-in)     │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 7. Payment Setup         │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 8. Membership Confirmed  │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 9. First Invitation      │
│    Preview               │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 10. Dashboard            │
└──────────────────────────┘
```

**Estimated completion time**: 5–7 minutes

---

## Entry Point: Invitation

New members can only sign up through one of the following channels (aligning with DiFine's invite-only distribution model):

| Channel | Entry Method |
|---------|-------------|
| **Member Referral** | Existing member sends a personal invite link via the app |
| **Financial Partnership** | Amex / Visa / Mastercard "fast-track" invitation email based on spending profile |
| **DiFine Waitlist** | Approved after submitting the "Request Invitation" form on the landing page |
| **Influencer / Event** | Unique QR code or link distributed at exclusive campaigns ("Michelin Moments") |

**Invitation Email Content**:

```
Subject: Your DiFine Invitation Has Arrived

You've been invited to join DiFine — Tokyo's 
members-only luxury dining subscription.

No more competing for reservations. 
No more endless searching.
Just extraordinary meals, curated for you.

[ Accept Your Invitation ]

This invitation expires in 7 days.
Referred by: Sato Takeshi (Gold Member)
```

---

## Screen 1 — Welcome

> **Goal**: Set the emotional tone. Make the user feel they've entered something exclusive.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│     [Cinematic background video:        │
│      chef plating a dish in warm        │
│      ambient light, slow motion]        │
│                                         │
│           ── DiFine ──                  │
│                                         │
│    "Your table has been waiting."       │
│                                         │
│   Tokyo's finest restaurants,           │
│   reserved exclusively for you.         │
│                                         │
│                                         │
│        [ Begin Your Journey ]           │
│                                         │
│   Invited by Sato Takeshi              │
│                                         │
└─────────────────────────────────────────┘
```

### Copy

- **Headline**: "Your table has been waiting."
- **Subline**: "Tokyo's finest restaurants, reserved exclusively for you."
- **CTA**: "Begin Your Journey"
- **Footer**: Show referrer's name to reinforce personal connection and exclusivity

### Design Notes

- Full-screen cinematic loop (muted): chef plating, candlelit table, wine being poured
- Logo centered, elegant serif
- Minimal UI — only the CTA button and referral note
- Dark overlay gradient for text legibility
- Subtle fade-in animation on load (1.2s)

---

## Screen 2 — Create Account

> **Goal**: Collect essential info quickly. Respect their time.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  ── DiFine ──          Step 1 of 6     │
│                                         │
│  "Let's get to know you."              │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Full Name                         │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Email Address (pre-filled)        │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Phone Number                      │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Create Password                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ── or ──                              │
│                                         │
│  [ Continue with Apple ]               │
│  [ Continue with Google ]              │
│                                         │
│            [ Continue → ]              │
│                                         │
│  By continuing, you agree to our       │
│  Terms of Service and Privacy Policy.  │
│                                         │
└─────────────────────────────────────────┘
```

### Fields

| Field | Required | Notes |
|-------|----------|-------|
| Full Name | Yes | Used for restaurant reservations |
| Email | Yes | Pre-filled from invitation link |
| Phone Number | Yes | For reservation confirmations and reminders (Japan mobile preferred) |
| Password | Yes | Min 8 chars; or use SSO |

### Design Notes

- Email pre-populated from invitation to reduce friction
- Progress indicator: "Step 1 of 6" (subtle, top right)
- SSO options for speed (Apple / Google)
- Inline validation — green checkmark on valid fields
- Language toggle: 🇯🇵 日本語 / 🇬🇧 English (top corner)

---

## Screen 3 — Identity Verification

> **Goal**: Maintain community quality. DiFine is a closed membership — light verification protects exclusivity.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  ── DiFine ──          Step 2 of 6     │
│                                         │
│  "Confirming your membership            │
│   eligibility."                         │
│                                         │
│  To maintain our exclusive community,   │
│  we verify every member. This takes     │
│  less than a minute.                    │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  📸 Upload a photo of your       │  │
│  │     government-issued ID          │  │
│  │                                   │  │
│  │  Accepted: Passport, Driver's     │  │
│  │  License, My Number Card          │  │
│  │                                   │  │
│  │  [ Take Photo ]  [ Upload File ] │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  🔒 Your ID is encrypted and used      │
│  solely for verification. We never     │
│  store images after approval.          │
│                                         │
│            [ Continue → ]              │
│                                         │
│  [ Verify Later ] — you can browse     │
│  plans, but your first invitation      │
│  requires verification.                │
│                                         │
└─────────────────────────────────────────┘
```

### Verification Methods

| Method | Description |
|--------|-------------|
| **ID Upload** | Government-issued photo ID (passport, driver's license, My Number Card) |
| **Referral Trust** | Members referred by Diamond-tier members may skip ID upload (pre-approved) |
| **Partner Fast-Track** | Amex Platinum / Centurion holders auto-verified via partner API |

### Design Notes

- Privacy-first messaging: encrypted, not stored after verification
- "Verify Later" option available — but gated before first reservation
- Diamond referrals get a "Pre-Approved" badge and skip this step
- Processing state: "Verifying... this usually takes under 30 seconds"

---

## Screen 4 — Choose Your Tier

> **Goal**: Help users self-select based on lifestyle, not just price. Anchor on value, not cost.

### Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ── DiFine ──                                  Step 3 of 6     │
│                                                                 │
│  "Select the experience that fits your lifestyle."             │
│                                                                 │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   SILVER    │  │    GOLD      │  │   DIAMOND    │          │
│  │             │  │  ★ Popular   │  │              │          │
│  │  Smart      │  │  Access &    │  │  Bespoke     │          │
│  │  Curation   │  │  Exploration │  │  Hospitality │          │
│  │             │  │              │  │              │          │
│  │ ¥45,000/mo  │  │ ¥70,000/mo   │  │ ¥120,000/mo  │          │
│  │             │  │              │  │              │          │
│  │ • 1-star    │  │ • 2-star     │  │ • 3-star     │          │
│  │   course    │  │   course     │  │   course     │          │
│  │ • AI match  │  │ • Choose     │  │ • Priority   │          │
│  │ • 1 guest   │  │   restaurant │  │   weekends   │          │
│  │ • Cancel    │  │ • Chef's     │  │ • Limousine  │          │
│  │   1 wk      │  │   table      │  │ • Concierge  │          │
│  │             │  │ • 2 guests   │  │ • 3 guests   │          │
│  │             │  │ • Cancel     │  │ • Cancel     │          │
│  │             │  │   3 days     │  │   1 day      │          │
│  │             │  │              │  │              │          │
│  │ [ Select ]  │  │ [ Select ]   │  │ [ Select ]   │          │
│  │             │  │              │  │              │          │
│  └─────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  Month-to-month. No long-term contract. Upgrade anytime.       │
│                                                                 │
│  [ Compare all features in detail ↓ ]                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Tier Summary

| | Silver | Gold | Diamond |
|---|--------|------|---------|
| **Monthly Fee** | ¥45,000 | ¥70,000 | ¥120,000 |
| **Course Level** | Standard (1-star) | Premium (2-star) | High-end (3-star) |
| **Restaurant Selection** | AI-assigned | Choose from options | Priority selection |
| **Cancellation** | 1 week prior | 3 days prior | 1 day prior |
| **Guests** | 1 | 2 | 3 |
| **Chef's Table** | — | ✓ | Priority |
| **Signature Gift** | — | ✓ | ✓ |
| **Limousine** | — | — | ✓ |
| **Concierge** | — | — | ✓ |
| **Gourmet Magazine** | ✓ | ✓ | ✓ |

### Design Notes

- Gold tier visually highlighted ("Most Popular" badge, slightly elevated card)
- Swipeable horizontally on mobile
- "Compare all features" expands a full table below
- Price shown in JPY primary, USD equivalent in small text beneath
- Reassurance: "Month-to-month. No long-term contract. Upgrade anytime."

---

## Screen 5 — Taste Profile Setup

> **Goal**: Gather enough preference data for the matching algorithm to generate a strong first invitation. Make it feel like a conversation, not a form.

### 5a. Cuisine Preferences

```
┌─────────────────────────────────────────┐
│                                         │
│  ── DiFine ──          Step 4 of 6     │
│                                         │
│  "What excites your palate?"           │
│                                         │
│  Select all cuisines you enjoy.        │
│  We'll use this to curate your         │
│  first invitation.                     │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │ 🇫🇷       │ │ 🇯🇵       │ │ 🇮🇹     │  │
│  │ French   │ │ Japanese │ │Italian │  │
│  └──────────┘ └──────────┘ └────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │ 🌏       │ │ 🇪🇸       │ │ 🇨🇳     │  │
│  │ Fusion   │ │ Spanish  │ │Chinese │  │
│  └──────────┘ └──────────┘ └────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │ 🥩       │ │ 🍣       │ │ 🌿     │  │
│  │ Steak /  │ │ Sushi /  │ │Vegeta- │  │
│  │ Grill    │ │ Omakase  │ │ rian   │  │
│  └──────────┘ └──────────┘ └────────┘  │
│                                         │
│  ○ Surprise me — I'm open to anything  │
│                                         │
│            [ Continue → ]              │
│                                         │
└─────────────────────────────────────────┘
```

**Interaction**: Tap to select multiple. Chips toggle on/off with a gold border highlight. Minimum 1 selection or "Surprise me."

---

### 5b. Dining Style

```
┌─────────────────────────────────────────┐
│                                         │
│  "How do you like to dine?"            │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🕯️  Intimate & Quiet              │  │
│  │ Small rooms, counter seating,     │  │
│  │ personal chef attention           │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🥂  Social & Lively               │  │
│  │ Open dining rooms, bustling       │  │
│  │ atmosphere, see-and-be-seen       │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🌿  Nature & Views                │  │
│  │ Garden settings, scenic windows,  │  │
│  │ rooftop terraces                  │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🎭  Theatrical & Experiential     │  │
│  │ Open kitchens, tasting menus,     │  │
│  │ multi-sensory presentations       │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Select up to 2 preferences            │
│                                         │
│            [ Continue → ]              │
│                                         │
└─────────────────────────────────────────┘
```

**Interaction**: Card-style selection. Tap to select up to 2. Selected cards get a gold left-border accent and subtle elevation.

---

### 5c. Schedule & Availability

```
┌─────────────────────────────────────────┐
│                                         │
│  "When do you prefer to dine?"         │
│                                         │
│  Preferred days:                        │
│                                         │
│  [Mon] [Tue] [Wed] [Thu] [Fri]         │
│                           [Sat] [Sun]   │
│                                         │
│  Preferred time:                        │
│                                         │
│  ○ Early   (17:30 – 18:30)            │
│  ● Standard (18:30 – 19:30)           │
│  ○ Late    (20:00 – 21:00)            │
│                                         │
│  Preferred area in Tokyo:              │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ ▼  Select area(s)                 │  │
│  │   ☑ Ginza / Marunouchi           │  │
│  │   ☑ Roppongi / Azabu             │  │
│  │   ☐ Shibuya / Ebisu              │  │
│  │   ☐ Shinjuku                     │  │
│  │   ☐ Aoyama / Omotesando          │  │
│  │   ☑ No preference                │  │
│  └───────────────────────────────────┘  │
│                                         │
│  These can be changed anytime from     │
│  your profile.                         │
│                                         │
│            [ Continue → ]              │
│                                         │
└─────────────────────────────────────────┘
```

**Interaction**: Multi-select day chips. Single-select radio for time. Multi-select dropdown for area.

---

### 5d. Dietary & Allergies

```
┌─────────────────────────────────────────┐
│                                         │
│  "Any dietary needs we should know?"   │
│                                         │
│  This ensures every course is safe     │
│  and enjoyable for you.                │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │ 🚫🥜     │ │ 🚫🦐     │ │ 🚫🥛   │  │
│  │ Nut      │ │Shellfish │ │ Dairy  │  │
│  │ Allergy  │ │ Allergy  │ │  Free  │  │
│  └──────────┘ └──────────┘ └────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │ 🚫🌾     │ │ 🌱       │ │ 🐟     │  │
│  │ Gluten   │ │Vegetar-  │ │Pescata-│  │
│  │  Free    │ │  ian     │ │  rian  │  │
│  └──────────┘ └──────────┘ └────────┘  │
│  ┌──────────┐ ┌──────────┐             │
│  │ 🥬       │ │ ✏️       │             │
│  │  Vegan   │ │ Other    │             │
│  │          │ │(specify) │             │
│  └──────────┘ └──────────┘             │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Additional notes for chefs...     │  │
│  │ (e.g., "mild spice only")        │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ○ No restrictions                     │
│                                         │
│            [ Continue → ]              │
│                                         │
└─────────────────────────────────────────┘
```

**Interaction**: Multi-select chips. "Other" opens a free-text field. Optional freeform notes field for chef-specific instructions.

---

## Screen 6 — Data Consent (Card API Opt-In)

> **Goal**: Transparently request optional consent to connect card payment data for enhanced matching. This aligns with DiFine's partnership with Amex, Visa, and Mastercard APIs described in the business plan.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  ── DiFine ──          Step 5 of 6     │
│                                         │
│  "Help us know you better."            │
│                                         │
│  Connect your card to unlock smarter   │
│  dining recommendations.               │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  HOW IT WORKS                     │  │
│  │                                   │  │
│  │  With your consent, DiFine        │  │
│  │  securely reads your dining       │  │
│  │  spending patterns through        │  │
│  │  your card provider's API.        │  │
│  │                                   │  │
│  │  We learn:                        │  │
│  │  • Restaurants you visit often    │  │
│  │  • Your typical spending range    │  │
│  │  • Cuisine patterns over time     │  │
│  │                                   │  │
│  │  We NEVER:                        │  │
│  │  • Store your card number         │  │
│  │  • Access non-dining purchases    │  │
│  │  • Share data with third parties  │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  [Amex Logo]  Connect Amex        │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  [Visa Logo]  Connect Visa        │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  [MC Logo]  Connect Mastercard    │  │
│  └───────────────────────────────────┘  │
│                                         │
│  [ Skip for Now ]                      │
│  You can connect later in Settings.    │
│                                         │
└─────────────────────────────────────────┘
```

### Key Principles

- **Fully optional** — "Skip for Now" is always visible and equally prominent
- **Transparent** — Clear "We learn / We NEVER" breakdown
- **Benefit-led** — Frame as "smarter recommendations," not data collection
- **Revocable** — "You can disconnect anytime in Settings"

---

## Screen 7 — Payment Setup

> **Goal**: Collect payment for the selected subscription tier. Keep it frictionless.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  ── DiFine ──          Step 6 of 6     │
│                                         │
│  "Almost there. Set up your            │
│   membership payment."                  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  YOUR PLAN                        │  │
│  │                                   │  │
│  │  Gold · ¥70,000/month             │  │
│  │  Access & Exploration             │  │
│  │                                   │  │
│  │  [ Change Plan ]                  │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Payment Method                        │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Card Number                       │  │
│  └───────────────────────────────────┘  │
│  ┌────────────────┐ ┌────────────────┐  │
│  │ Expiry (MM/YY) │ │ CVC            │  │
│  └────────────────┘ └────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ Cardholder Name                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ── or ──                              │
│                                         │
│  [ Pay with Apple Pay ]                │
│  [ Pay with Google Pay ]               │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ ☐ Apply annual billing            │  │
│  │   (Save 10% — ¥756,000/year)     │  │
│  └───────────────────────────────────┘  │
│                                         │
│  🔒 Payments secured by Stripe.        │
│  Cancel anytime before next cycle.     │
│                                         │
│     [ Start My Membership · ¥70,000 ]  │
│                                         │
│  You will be charged today. First      │
│  invitation arrives within 48 hours.   │
│                                         │
└─────────────────────────────────────────┘
```

### Design Notes

- Selected plan summarized at top with "Change Plan" link
- Apple Pay / Google Pay for one-tap setup
- Annual billing toggle with visible savings
- Stripe-powered for PCI compliance
- Clear billing disclosure: "Charged today. First invitation within 48 hours."

---

## Screen 8 — Membership Confirmed

> **Goal**: Celebrate. Make the user feel they've arrived at something special.

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         [Elegant animation:             │
│          Gold circle expanding           │
│          into the DiFine crest]         │
│                                         │
│                                         │
│     "Welcome to DiFine, Kenji."        │
│                                         │
│     You are now a Gold Member.         │
│                                         │
│     ┌─────────────────────────────┐    │
│     │                             │    │
│     │   MEMBER SINCE              │    │
│     │   February 2026             │    │
│     │                             │    │
│     │   MEMBERSHIP                │    │
│     │   Gold · Access &           │    │
│     │   Exploration               │    │
│     │                             │    │
│     │   MEMBER ID                 │    │
│     │   DF-2026-0482              │    │
│     │                             │    │
│     └─────────────────────────────┘    │
│                                         │
│     What happens next:                 │
│                                         │
│     1. Our algorithm is building       │
│        your taste profile now          │
│                                         │
│     2. Your first curated invitation   │
│        arrives within 48 hours         │
│                                         │
│     3. Accept, show up, and savor      │
│                                         │
│                                         │
│     [ Preview My First Match → ]       │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### Design Notes

- Full-screen celebration moment
- Animated membership "crest" or card — visually feels like receiving a luxury membership card
- Tier-specific color treatment (Silver: cool silver, Gold: warm gold, Diamond: deep obsidian + diamond sparkle)
- Confetti or particle animation kept subtle and elegant
- "What happens next" section sets clear expectations

---

## Screen 9 — First Invitation Preview

> **Goal**: Immediately deliver value. Show the user a preview of what DiFine's algorithm has prepared — even before the final match is ready.

### Layout (Gold / Diamond members — with selection)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  "Your first dining experience awaits."                │
│                                                         │
│  Based on your taste profile, we've curated            │
│  these options for your first month.                   │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ [Photo]         │  │ [Photo]         │              │
│  │                 │  │                 │              │
│  │ Narisawa        │  │ Florilège       │              │
│  │ ⭐⭐ Innovative  │  │ ⭐⭐ French       │              │
│  │                 │  │ Contemporary    │              │
│  │ "Matches your   │  │                 │              │
│  │ interest in     │  │ "Based on your  │              │
│  │ Japanese        │  │ love of French  │              │
│  │ innovation"     │  │ cuisine"        │              │
│  │                 │  │                 │              │
│  │ Available:      │  │ Available:      │              │
│  │ Feb 14, 18, 21  │  │ Feb 15, 20      │              │
│  │                 │  │                 │              │
│  │ [ Choose ]      │  │ [ Choose ]      │              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
│  Not ready to choose? You'll receive a                 │
│  notification when your invitation is finalized.       │
│                                                         │
│  [ Browse Options ]      [ Decide Later ]              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Layout (Silver members — AI-assigned)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  "Your first experience is being prepared."            │
│                                                         │
│  ┌─────────────────────────────────────────────┐       │
│  │                                             │       │
│  │  [Blurred restaurant image with shimmer]    │       │
│  │                                             │       │
│  │  Our algorithm is matching you with         │       │
│  │  the perfect restaurant for your            │       │
│  │  first DiFine experience.                   │       │
│  │                                             │       │
│  │  ✓ French and Japanese cuisines             │       │
│  │  ✓ Intimate dining atmosphere               │       │
│  │  ✓ Weekday evening, Ginza area              │       │
│  │                                             │       │
│  │  Your invitation will be revealed           │       │
│  │  within 48 hours.                           │       │
│  │                                             │       │
│  └─────────────────────────────────────────────┘       │
│                                                         │
│  We'll notify you via email and push notification.     │
│                                                         │
│  [ Go to Dashboard ]                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Design Notes

- Gold/Diamond: show 2–3 restaurant options with match-reason tags
- Silver: show a teaser with a blurred image and confirmed preference summary (builds anticipation)
- Both: clear timeline expectation ("within 48 hours")

---

## Screen 10 — Dashboard (Home)

> **Goal**: The member's new home. Show their current status and first invitation progress.

### Layout

```
┌─────────────────────────────────────────────────────────┐
│  ── DiFine ──                    Kenji · Gold 🥇       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  WELCOME ABOARD                                 │   │
│  │                                                 │   │
│  │  Your first invitation is being prepared.       │   │
│  │  We'll notify you within 48 hours.              │   │
│  │                                                 │   │
│  │  [Progress: ████████░░░░ Matching...]           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ── Quick Actions ──                                   │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ 👤       │  │ 📖       │  │ 🎁       │             │
│  │ Edit     │  │ Gourmet  │  │ Refer a  │             │
│  │ Profile  │  │ Magazine │  │ Friend   │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  ── Explore ──                                         │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [Image: Chef at work]                          │   │
│  │                                                 │   │
│  │  UPCOMING EVENT                                 │   │
│  │  "Winter Chef's Table with Namae Shinobu"       │   │
│  │  February 28 · Nishi-Azabu                      │   │
│  │  Gold & Diamond members only                    │   │
│  │                                                 │   │
│  │  [ Learn More ]                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ── Featured in DiFine Magazine ──                     │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ [Article thumb]  │  │ [Article thumb]  │            │
│  │ The Art of       │  │ Tokyo's Hidden   │            │
│  │ Omakase          │  │ Michelin Gems    │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ─────────────────────────────────────────              │
│  🏠 Home    📩 Invitations    👤 Profile    ⚙️ More    │
└─────────────────────────────────────────────────────────┘
```

### Dashboard Content (First Visit)

| Section | Content |
|---------|---------|
| **Status Card** | "Your first invitation is being prepared" with animated progress |
| **Quick Actions** | Edit Profile, Gourmet Magazine, Refer a Friend |
| **Upcoming Events** | Members-only events (chef's table, seasonal specials) |
| **Magazine** | DiFine's original gourmet content — available to all tiers |

### Navigation (Bottom Tab Bar)

| Tab | Purpose |
|-----|---------|
| 🏠 Home | Dashboard with current status |
| 📩 Invitations | Current and past invitations |
| 👤 Profile | Preferences, dietary info, schedule |
| ⚙️ More | Settings, payment, referrals, support |

---

## Onboarding Completion Triggers

After the user finishes onboarding, the following backend processes initiate:

| Trigger | Action |
|---------|--------|
| **Account Created** | Welcome email sent with membership details and FAQ link |
| **Tier Selected** | Payment processed; billing cycle begins |
| **Taste Profile Saved** | Matching algorithm begins generating first invitation |
| **Card API Connected** | (If opted-in) Spending data ingested for enhanced personalization |
| **48-Hour Window** | First invitation delivered via push notification + email |
| **Invitation Accepted** | Restaurant notified; confirmation email + calendar invite sent |

---

## Edge Cases & Error States

### Invitation Expired
```
"This invitation has expired. 
 Contact us at hello@difine.jp or ask your 
 referrer to send a new one."
```

### Verification Failed
```
"We couldn't verify your ID. Please try 
 again with a clearer photo, or contact 
 our concierge team for assistance."

 [ Retry ]   [ Contact Support ]
```

### Payment Declined
```
"Your payment didn't go through. 
 Please check your card details or 
 try a different payment method."

 [ Update Card ]   [ Try Another Method ]
```

### No Availability (Rare)
```
"We're finalizing your first match. 
 Due to high demand this month, your 
 invitation may take up to 72 hours.
 
 We'll notify you the moment it's ready."
```

---

## Metrics to Track

| Metric | Target | Purpose |
|--------|--------|---------|
| **Onboarding Completion Rate** | >85% | Measure flow friction |
| **Time to Complete** | <7 min | Ensure simplicity |
| **Tier Distribution** | 30% Silver / 50% Gold / 20% Diamond | Validate pricing strategy |
| **Card API Opt-In Rate** | >40% | Measure trust in data sharing |
| **First Invitation Accept Rate** | >90% | Validate matching quality |
| **Drop-off by Screen** | <5% per step | Identify friction points |
| **Referral Rate (Month 1)** | >15% | Early word-of-mouth signal |

---

## Summary

| Step | Screen | Time Est. | Required? |
|------|--------|-----------|-----------|
| 0 | Invitation Entry | — | Yes |
| 1 | Welcome | 10 sec | Yes |
| 2 | Create Account | 60 sec | Yes |
| 3 | Identity Verification | 45 sec | Gated* |
| 4 | Choose Tier | 30 sec | Yes |
| 5 | Taste Profile (4 sub-screens) | 90 sec | Yes |
| 6 | Data Consent (Card API) | 30 sec | Optional |
| 7 | Payment Setup | 45 sec | Yes |
| 8 | Membership Confirmed | 15 sec | Yes |
| 9 | First Invitation Preview | 30 sec | Yes |
| 10 | Dashboard | — | Yes |

*\*Diamond referrals may be pre-approved and skip verification.*

**Total estimated time: 5–7 minutes**

---

*This onboarding flow is designed to convert invited prospects into active members while reinforcing DiFine's brand promise at every touchpoint: exclusivity in entry, hospitality in experience, and simplicity in interaction.*
