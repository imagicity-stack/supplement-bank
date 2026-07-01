/**
 * Generates `sanity/seed.ndjson` — starter content for the Supplement Bank
 * dataset (categories, products, and site settings).
 *
 * This script has NO network dependency; it only writes a file. Import the
 * result into Sanity with:
 *
 *   npx sanity dataset import ./sanity/seed.ndjson production --replace
 *
 * (See README → "Seed starter content".)
 *
 * Run: node scripts/generate-seed.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "sanity", "seed.ndjson");

let keyCounter = 0;
const key = () => `k${(keyCounter++).toString(36)}`;

/** Build a Portable Text array from an array of plain paragraph strings. */
const blocks = (paragraphs) =>
  paragraphs.map((text) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  }));

const variant = (label, price) => ({
  _type: "variant",
  _key: key(),
  label,
  ...(price != null ? { price } : {}),
});

const ref = (id) => ({ _type: "reference", _ref: id });

// ─── Categories ──────────────────────────────────────────────
const categoryData = [
  ["Whey Protein", "whey-protein", "Fast-absorbing protein to support muscle recovery and growth."],
  ["Mass Gainer", "mass-gainer", "High-calorie formulas to help you build size and strength."],
  ["Creatine", "creatine", "Boost strength, power, and performance in the gym."],
  ["Pre Workout", "pre-workout", "Energy, focus, and pumps for your hardest sessions."],
  ["Multivitamin", "multivitamin", "Daily micronutrient support for overall health."],
  ["Fat Burner", "fat-burner", "Support your cutting phase and metabolism goals."],
  ["Gym Wear", "gym-wear", "Premium, breathable apparel built for performance."],
  ["Shakers", "shakers", "Leak-proof shakers and bottles for on-the-go mixing."],
  ["Fitness Accessories", "fitness-accessories", "Straps, wraps, and gear to level up your training."],
];

const categories = categoryData.map(([name, slug, description], i) => ({
  _id: `category-${slug}`,
  _type: "category",
  name,
  slug: { _type: "slug", current: slug },
  description,
  order: i + 1,
}));

// ─── Products ────────────────────────────────────────────────
const productData = [
  {
    slug: "gold-standard-whey-protein",
    name: "Gold Standard 100% Whey Protein",
    category: "whey-protein",
    price: 5499,
    discountPrice: 4799,
    brand: "Optimum Nutrition",
    productType: "supplement",
    featured: true,
    bestSeller: true,
    availability: "in_stock",
    shortDescription: "24g of premium whey protein per serving for lean muscle and recovery.",
    description: [
      "Gold Standard 100% Whey delivers 24g of high-quality whey protein isolate and concentrate in every scoop, making it the ideal choice post-workout or any time you need a protein boost.",
      "Low in sugar and fat, it mixes instantly and comes in a range of delicious flavours that athletes have trusted for years.",
    ],
    benefits: ["24g protein per serving", "Supports muscle recovery", "Mixes instantly", "Low sugar & fat"],
    howToUse: [
      "Add one rounded scoop to 180–240ml of cold water or milk.",
      "Shake for 20–30 seconds and consume within 30 minutes after your workout.",
    ],
    variants: [
      variant("Double Rich Chocolate 1kg", 4799),
      variant("Vanilla Ice Cream 1kg", 4799),
      variant("Double Rich Chocolate 2kg", 8999),
    ],
    seoTitle: "Gold Standard 100% Whey Protein | Supplement Bank",
    seoDescription: "Buy genuine Gold Standard 100% Whey Protein at Supplement Bank. 24g protein per serving. Enquire on WhatsApp for price & delivery.",
  },
  {
    slug: "biozyme-performance-whey",
    name: "Biozyme Performance Whey",
    category: "whey-protein",
    price: 3799,
    discountPrice: 3299,
    brand: "MuscleBlaze",
    productType: "supplement",
    bestSeller: true,
    availability: "in_stock",
    shortDescription: "Enhanced-absorption whey with 25g protein and added digestive enzymes.",
    description: [
      "Biozyme Performance Whey is formulated for superior protein absorption, helping you get more out of every serving with added digestive enzymes.",
    ],
    benefits: ["25g protein per serving", "Enhanced absorption", "Added digestive enzymes", "5.5g BCAA"],
    howToUse: ["Mix one scoop with 200ml water or milk. Consume post-workout or between meals."],
    variants: [variant("Rich Chocolate 1kg"), variant("Kulfi 1kg")],
    seoTitle: "Biozyme Performance Whey | Supplement Bank",
    seoDescription: "Genuine MuscleBlaze Biozyme Performance Whey with enhanced absorption. Enquire on WhatsApp.",
  },
  {
    slug: "serious-mass-gainer",
    name: "Serious Mass High-Calorie Gainer",
    category: "mass-gainer",
    price: 6299,
    discountPrice: 5499,
    brand: "Optimum Nutrition",
    productType: "supplement",
    featured: true,
    availability: "in_stock",
    shortDescription: "1250 calories and 50g protein per serving to support serious size gains.",
    description: [
      "Serious Mass is the ultimate weight-gain formula, packing 1250 calories and 50g of protein per serving along with 25 vitamins and minerals.",
    ],
    benefits: ["1250 calories per serving", "50g protein", "25 vitamins & minerals", "Ideal for hard gainers"],
    howToUse: ["Blend two scoops with 500ml of milk or water. Best taken between meals and post-workout."],
    variants: [variant("Chocolate 3kg"), variant("Vanilla 3kg")],
    seoTitle: "Serious Mass High-Calorie Gainer | Supplement Bank",
    seoDescription: "Genuine Serious Mass gainer — 1250 calories, 50g protein per serving. Enquire on WhatsApp.",
  },
  {
    slug: "micronized-creatine-monohydrate",
    name: "Micronized Creatine Monohydrate",
    category: "creatine",
    price: 1799,
    discountPrice: 1499,
    brand: "Supplement Bank",
    productType: "supplement",
    bestSeller: true,
    featured: true,
    availability: "in_stock",
    shortDescription: "Pure micronized creatine for strength, power, and lean mass.",
    description: [
      "Our micronized creatine monohydrate is unflavoured and mixes easily, delivering 3g of pure creatine per serving to support strength and power output.",
    ],
    benefits: ["3g pure creatine per serving", "Supports strength & power", "Unflavoured & mixable", "No fillers"],
    howToUse: ["Mix one scoop (3g) with water or your favourite beverage daily. Consistency matters more than timing."],
    variants: [variant("250g"), variant("500g", 2599)],
    seoTitle: "Micronized Creatine Monohydrate | Supplement Bank",
    seoDescription: "Pure micronized creatine monohydrate for strength & power. Enquire on WhatsApp for price & delivery.",
  },
  {
    slug: "c4-original-pre-workout",
    name: "C4 Original Pre-Workout",
    category: "pre-workout",
    price: 2999,
    discountPrice: 2499,
    brand: "Cellucor",
    productType: "supplement",
    featured: true,
    availability: "in_stock",
    shortDescription: "Explosive energy, focus, and pumps to power your toughest workouts.",
    description: [
      "C4 Original is one of the most popular pre-workouts in the world, combining caffeine, beta-alanine, and creatine nitrate for energy, endurance, and pumps.",
    ],
    benefits: ["Explosive energy", "Enhanced focus", "Better pumps", "Beta-alanine & caffeine"],
    howToUse: ["Mix one scoop with 180ml water and consume 20–30 minutes before training. Start with half a scoop to assess tolerance."],
    variants: [variant("Fruit Punch"), variant("Blue Razz"), variant("Icy Blue Razz")],
    seoTitle: "C4 Original Pre-Workout | Supplement Bank",
    seoDescription: "Genuine C4 Original Pre-Workout for energy, focus & pumps. Enquire on WhatsApp.",
  },
  {
    slug: "daily-multivitamin",
    name: "Daily Multivitamin for Athletes",
    category: "multivitamin",
    price: 1299,
    brand: "Supplement Bank",
    productType: "supplement",
    availability: "in_stock",
    shortDescription: "Complete daily micronutrient support to fill dietary gaps.",
    description: [
      "A comprehensive multivitamin designed for active individuals, providing essential vitamins and minerals to support energy, immunity, and recovery.",
    ],
    benefits: ["25+ vitamins & minerals", "Supports immunity", "Boosts energy", "One tablet daily"],
    howToUse: ["Take one tablet daily with a meal, or as directed by your healthcare professional."],
    variants: [variant("60 Tablets"), variant("120 Tablets", 2199)],
    seoTitle: "Daily Multivitamin for Athletes | Supplement Bank",
    seoDescription: "Complete daily multivitamin for active individuals. Enquire on WhatsApp for price & delivery.",
  },
  {
    slug: "thermoburn-fat-burner",
    name: "ThermoBurn Fat Burner",
    category: "fat-burner",
    price: 2199,
    discountPrice: 1899,
    brand: "Supplement Bank",
    productType: "supplement",
    availability: "pre_order",
    shortDescription: "Thermogenic formula to support your cutting phase and metabolism.",
    description: [
      "ThermoBurn combines green tea extract, L-carnitine, and caffeine to support metabolism and energy while you're in a calorie deficit.",
    ],
    benefits: ["Supports metabolism", "Green tea & L-carnitine", "Boosts energy", "Ideal for cutting"],
    howToUse: ["Take one capsule twice daily before meals. Do not exceed the recommended dose. Not for use late in the evening."],
    variants: [variant("60 Capsules")],
    seoTitle: "ThermoBurn Fat Burner | Supplement Bank",
    seoDescription: "Thermogenic fat burner to support your cutting goals. Enquire on WhatsApp.",
  },
  {
    slug: "performance-training-tee",
    name: "Supplement Bank Performance Training Tee",
    category: "gym-wear",
    price: 1299,
    discountPrice: 999,
    brand: "Supplement Bank",
    productType: "apparel",
    featured: true,
    availability: "in_stock",
    shortDescription: "Lightweight, breathable training tee built to move with you.",
    description: [
      "Our Performance Training Tee is made from moisture-wicking, four-way stretch fabric that keeps you cool and comfortable through every set.",
    ],
    benefits: ["Moisture-wicking fabric", "Four-way stretch", "Breathable & lightweight", "Athletic fit"],
    howToUse: ["Machine wash cold, inside out. Do not bleach. Hang to dry for best longevity."],
    variants: [variant("Size S"), variant("Size M"), variant("Size L"), variant("Size XL")],
    seoTitle: "Performance Training Tee | Supplement Bank Gym Wear",
    seoDescription: "Premium moisture-wicking gym training tee. Enquire on WhatsApp for sizes & delivery.",
  },
  {
    slug: "pro-shaker-bottle-700ml",
    name: "Pro Shaker Bottle 700ml",
    category: "shakers",
    price: 499,
    discountPrice: 399,
    brand: "Supplement Bank",
    productType: "shaker",
    bestSeller: true,
    availability: "in_stock",
    shortDescription: "Leak-proof 700ml shaker with a wire whisk ball for smooth mixing.",
    description: [
      "A durable, BPA-free 700ml shaker with a secure screw-top lid and stainless-steel whisk ball for lump-free shakes every time.",
    ],
    benefits: ["700ml capacity", "Leak-proof lid", "BPA-free", "Wire whisk ball included"],
    howToUse: ["Add liquid first, then powder. Secure the lid tightly and shake. Hand wash recommended."],
    variants: [variant("Black"), variant("Electric Yellow"), variant("Red")],
    seoTitle: "Pro Shaker Bottle 700ml | Supplement Bank",
    seoDescription: "Leak-proof 700ml gym shaker bottle with whisk ball. Enquire on WhatsApp.",
  },
  {
    slug: "lifting-straps-wrist-wraps",
    name: "Lifting Straps & Wrist Wraps Combo",
    category: "fitness-accessories",
    price: 899,
    discountPrice: 699,
    brand: "Supplement Bank",
    productType: "accessory",
    availability: "in_stock",
    shortDescription: "Heavy-duty lifting straps and wrist wraps for a stronger, safer grip.",
    description: [
      "This combo pack includes padded lifting straps and supportive wrist wraps to help you lift heavier with confidence and protect your joints.",
    ],
    benefits: ["Improved grip", "Wrist support", "Durable stitching", "Padded for comfort"],
    howToUse: ["Wrap the straps around the bar for pulling movements. Fasten wrist wraps snugly before heavy pressing."],
    variants: [variant("One Size")],
    seoTitle: "Lifting Straps & Wrist Wraps Combo | Supplement Bank",
    seoDescription: "Heavy-duty lifting straps and wrist wraps combo for a stronger grip. Enquire on WhatsApp.",
  },
];

const products = productData.map((p) => ({
  _id: `product-${p.slug}`,
  _type: "product",
  name: p.name,
  slug: { _type: "slug", current: p.slug },
  category: ref(`category-${p.category}`),
  price: p.price,
  ...(p.discountPrice != null ? { discountPrice: p.discountPrice } : {}),
  shortDescription: p.shortDescription,
  description: blocks(p.description),
  benefits: p.benefits,
  howToUse: blocks(p.howToUse),
  variants: p.variants,
  brand: p.brand,
  productType: p.productType,
  availability: p.availability,
  featured: !!p.featured,
  bestSeller: !!p.bestSeller,
  seoTitle: p.seoTitle,
  seoDescription: p.seoDescription,
}));

// ─── Site Settings (singleton) ───────────────────────────────
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  brandName: "Supplement Bank",
  // ⚠️ Replace with your real WhatsApp number in Studio (digits only, incl. country code).
  whatsappNumber: "91XXXXXXXXXX",
  email: "hello@supplementbank.in",
  phoneNumber: "+91 90000 00000",
  address: "India",
  announcement: "Free delivery on orders above ₹1499 · 100% genuine products",
};

// ─── Write NDJSON ────────────────────────────────────────────
const docs = [...categories, ...products, siteSettings];
const ndjson = docs.map((d) => JSON.stringify(d)).join("\n") + "\n";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ndjson, "utf8");

console.log(
  `Wrote ${docs.length} documents to sanity/seed.ndjson ` +
    `(${categories.length} categories, ${products.length} products, 1 site settings).`,
);
