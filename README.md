# Supplement Bank

A premium, modern, responsive **WhatsApp catalogue website** for a gym
supplements & fitness apparel brand — built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

This is **not** a full e-commerce site. There is no cart, no checkout, no
payment gateway, and no customer login. Visitors browse products and enquire
**directly on WhatsApp** with a pre-filled message. The client manages all
products, categories, and site settings from **Sanity Studio** — no code
required.

---

## ✨ Features

- **Sanity CMS** as the single source of truth for products, categories & site settings
- **Embedded Sanity Studio** admin portal at `/studio` (add / edit / delete products)
- **WhatsApp direct enquiry** on every product with a pre-filled message
- Product **search**, **category filter**, and **sort by price** (low→high / high→low)
- Dynamic product detail pages with image gallery, benefits, how-to-use, variants & related products
- Fully **responsive**, sticky navbar, mobile hamburger menu, smooth hover effects
- **SEO-ready**: per-page metadata, Open Graph tags, semantic HTML, `sitemap.xml`, `robots.txt`
- **Vercel-ready** deployment structure
- **Graceful degradation** — the site boots and renders even before Sanity is configured

---

## 🧱 Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS                        |
| CMS        | Sanity v3                           |
| Admin      | Sanity Studio (embedded at /studio) |
| Deployment | Vercel                              |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

1. Go to **[sanity.io/manage](https://www.sanity.io/manage)** and sign in (it's free).
2. Create a new project.
3. Note your **Project ID**.
4. Create a dataset named **`production`** (Public read access is fine for a public catalogue).

> Alternatively, run `npx sanity@latest init --env` inside this folder to create
> a project and auto-fill your `.env.local`.

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"     # from sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-10-01"

# Optional — fallback WhatsApp number if Site Settings is empty (digits only, with country code)
NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER="919876543210"

# Optional — used for SEO / Open Graph / sitemap absolute URLs
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

> **The site runs even without these set** — pages render with graceful empty
> states. But to load real content you must set `NEXT_PUBLIC_SANITY_PROJECT_ID`.

### 4. Run the dev server

```bash
npm run dev
```

- Website → **http://localhost:3000**
- Admin (Sanity Studio) → **http://localhost:3000/studio**

The first time you open `/studio`, log in with the same account you used on
sanity.io. You may need to add `http://localhost:3000` as a **CORS origin** in
your project's API settings on [sanity.io/manage](https://www.sanity.io/manage)
(with credentials allowed).

---

## 🌱 Seed starter content (optional)

The repo ships with a ready-made starter catalogue (**9 categories, 10 products,
and site settings**) at `sanity/seed.ndjson`. Import it into your dataset so you
have something to work with immediately:

```bash
# from the project root, with your project configured
npx sanity dataset import ./sanity/seed.ndjson production --replace
```

If the CLI can't find your project/credentials, run it fully specified
(no browser login needed — uses a token):

```bash
SANITY_AUTH_TOKEN="<your-editor-token>" \
NEXT_PUBLIC_SANITY_PROJECT_ID="pghe25u6" \
npx sanity dataset import ./sanity/seed.ndjson production --replace
```

> `--replace` makes it safe to re-run (documents with the same ID are
> overwritten, not duplicated).

Notes:
- The seed products **do not include images** — add your real product photos in
  Studio (each product renders a clean placeholder until you do).
- Update the **WhatsApp number** in **Site Settings** after importing — the seed
  uses a `91XXXXXXXXXX` placeholder.
- To tweak the starter data, edit `scripts/generate-seed.mjs` and re-run
  `npm run generate-seed`, then re-import.

---

## 🗂️ Managing Content (for the client — no code needed)

Open **`/studio`** and you'll see three sections:

### 1. Site Settings (fill this in first)

Brand name, **WhatsApp number** (digits only, e.g. `919876543210`), email,
phone, address, social links, and the header announcement text. The WhatsApp
number here powers every enquiry button on the site.

### 2. Categories

Add categories like *Whey Protein*, *Mass Gainer*, *Gym Wear*, etc. Give each a
name (the slug auto-generates), an image, and an optional description.

### 3. Products

For each product, set the name, category, price, discount price, images, short
& full descriptions, benefits, how-to-use, variants, availability, brand, and
SEO fields. Toggle **Featured** / **Best Seller** to control which products
appear in those home page sections.

Changes appear on the live site automatically (within ~60s of publishing).

---

## 📁 Project Structure

```
supplement-bank/
├── sanity.config.ts            # Sanity Studio config (schemas, plugins)
├── sanity.cli.ts               # Sanity CLI config
├── next.config.mjs
├── tailwind.config.ts
├── .env.local.example
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout (fonts, base metadata)
    │   ├── globals.css         # Tailwind + design system
    │   ├── not-found.tsx       # 404 page
    │   ├── robots.ts           # robots.txt
    │   ├── sitemap.ts          # sitemap.xml
    │   ├── (site)/             # Public website (with navbar + footer)
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                 # Home
    │   │   ├── products/page.tsx        # Products (search/filter/sort)
    │   │   ├── products/[slug]/page.tsx # Product detail
    │   │   ├── categories/page.tsx      # Categories
    │   │   ├── about/page.tsx
    │   │   ├── contact/page.tsx
    │   │   ├── privacy-policy/page.tsx
    │   │   └── terms/page.tsx
    │   └── studio/[[...tool]]/          # Embedded Sanity Studio (/studio)
    ├── components/             # UI components (Navbar, ProductCard, etc.)
    ├── lib/                    # constants, WhatsApp helpers, utils
    └── sanity/
        ├── env.ts             # Sanity env config
        ├── structure.ts       # Studio desk structure (Site Settings singleton)
        ├── schemaTypes/       # product, category, siteSettings schemas
        └── lib/               # client, image builder, queries, typed data access
```

---

## 📜 Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build                     |
| `npm run start`     | Run the production build             |
| `npm run lint`      | Lint the project                     |
| `npm run typecheck` | TypeScript type checking (no emit)   |

---

## ▲ Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at **[vercel.com/new](https://vercel.com/new)**.
3. Add the environment variables from your `.env.local` in the Vercel project
   settings (**Settings → Environment Variables**).
4. Deploy. Your site is live, and the Studio is available at
   `https://your-domain.com/studio`.
5. In [sanity.io/manage](https://www.sanity.io/manage), add your production URL
   (e.g. `https://your-domain.com`) as a **CORS origin** so the Studio can
   authenticate.

---

## 🔒 Notes

- No cart, checkout, payment gateway, or customer login by design.
- Products are **never** stored in a local TypeScript file — Sanity is the source of truth.
- The `DEFAULT_WHATSAPP_NUMBER` constant (`91XXXXXXXXXX`) in
  `src/lib/constants.ts` is only a fallback; the real number comes from
  **Site Settings** in Sanity.
