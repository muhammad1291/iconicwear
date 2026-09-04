# ICONICWEAR — Brand Showcase Website

A static, editable showcase website for ICONICWEAR. Plain HTML, CSS
and vanilla JavaScript — no build step, no framework, no backend.
Works locally by opening the files, and deploys straight to GitHub
Pages.

There is **no checkout, cart, payment, or account system** anywhere —
"Order Now" sends visitors to Instagram to complete their order
through a message, exactly as instructed.

---

## 1. File structure

```
/
├── index.html            Home (hero slideshow + featured drop)
├── collection.html        Full product collection
├── product.html            Product detail page (?id=ICW-01 etc.)
├── about.html               Brand story, journey timeline, order process
├── contact.html              Contact form + Instagram + email
├── faq.html                   FAQ accordion
├── shipping.html               Shipping policy
├── returns.html                  Returns & Exchanges policy
├── privacy.html                    Privacy Policy
├── cookies.html                     Cookie Policy
│
├── css/style.css            All site styling (one file)
│
├── js/
│   ├── content.js            ← YOU EDIT THIS. All text, prices, images, links.
│   ├── main.js                 Nav, footer, hero, popups, cookie notice
│   └── products.js               Product grid + product detail rendering
│
├── assets/images/
│   ├── logo/                     Transparent ICONICWEAR logo
│   ├── banners/                    Hero slideshow images
│   ├── products/
│   │   ├── icw-01/                    Signature Tee images ONLY
│   │   └── icw-02/                      Signature Tracksuit images ONLY
│   ├── about/                             About page image
│   └── icons/                               Favicons
│
└── README.md (this file)
```

**Everything you'll want to change day-to-day lives in `js/content.js`.**

---

## 2. What changed in this update

- Real transparent logo now used in the header and footer (no box
  around it), plus a matching favicon generated from it.
- Real prices: ICW-01 **PKR 1,500**, ICW-02 **PKR 4,000**.
- Real product photography, strictly separated — ICW-01 only ever
  shows images from `assets/images/products/icw-01/`, and ICW-02 only
  from `assets/images/products/icw-02/`. They never cross over.
- Hero slideshow rebuilt: lighter overlay so photography stays
  visible, text positioned left/right depending on the image, and no
  duplicate text on banners that already have campaign typography
  baked in.
- "Order Now" button on every product card and product page, linking
  straight to Instagram (@iconicstreetwear.pk).
- Size guide "coming soon" block on every product page.
- New About page sections: **Our Journey** timeline (2024 GoodsifyCo →
  2026 ICONICWEAR) and **How Your Order Reaches You** (4-step process).
- New pages: **FAQ** (accordion), **Privacy Policy**, **Cookie Policy**.
- Real Contact form (name/email/subject/message) that opens a
  pre-filled email in your mail app — honestly, since this is a
  static site with no backend to receive form submissions directly.
- Newsletter box in the footer and an optional "Join the list" popup
  — both clearly labelled as not yet connected to a real mailing
  list (no fake success messages).
- Cookie notice (bottom-left, Accept/Manage) using only local
  storage — no tracking scripts.
- Footer rewritten with Explore / Information / Connect columns and
  a "Founded through the GoodsifyCo journey" credit line.
- Back-to-top button once you scroll down.
- Brightened body text color slightly and added a few contrast fixes
  site-wide.

---

## 3. Where things are right now

- **Logo** — `assets/images/logo/iconicwear-logo.png` (transparent).
- **Favicon** — generated from the logo automatically, in
  `assets/images/icons/`.
- **Banners** — `assets/images/banners/banner-01.jpg` through
  `banner-04.jpg`.
- **ICW-01 (Tee) photos** — `assets/images/products/icw-01/`
  (flat lay, lifestyle front, back print).
- **ICW-02 (Tracksuit) photos** — `assets/images/products/icw-02/`
  (flat lay, two lifestyle shots).
- **About page photo** — `assets/images/about/about-01.jpg`.

If any image path in `content.js` doesn't match a real file, the site
shows a clean placeholder instead of a broken image.

---

## 4. How to add a new product (e.g. ICW-03)

1. Create a new folder: `assets/images/products/icw-03/` and put
   **only that product's photos** in it.
2. Open `js/content.js`, find the `products: [ ... ]` array, and copy
   one of the existing product objects:

```js
{
  id: "ICW-03",
  slug: "icw-03",
  name: "ICONICWEAR New Piece",
  category: "Hoodie",
  color: "Black",
  material: "100% cotton",
  fit: "Relaxed",
  sizes: ["S", "M", "L", "XL"],
  price: "PKR 3,500",       // or "" to show "Price — to be confirmed"
  status: "COMING SOON",     // "AVAILABLE" | "COMING SOON" | "SOLD OUT"
  shortDescription: "One short line for the product card.",
  description: "The longer description on the product detail page.",
  images: [
    "assets/images/products/icw-03/hoodie-01.jpg",
    "assets/images/products/icw-03/hoodie-02.jpg",
  ],
},
```

It appears automatically on Collection (and Home, if in the first two)
with its own page at `product.html?id=ICW-03`. **Never point a
product's `images` array at another product's folder** — keep each
product's photos in its own dedicated folder.

---

## 5. How to change prices

In `js/content.js`, edit a product's `price` field, e.g.
`price: "PKR 1,500"`. Leave it `price: ""` to show
"Price — to be confirmed" instead.

---

## 6. How to change Instagram

In `js/content.js`, find the `social` section and edit the `url` /
`handle` for `goodsifyco` or `iconicwear`. The "Order Now" buttons on
every product automatically use `social.iconicwear.url`.

---

## 7. How to change the contact email

In `js/content.js`, find `contact.email`. Both the "Email ICONICWEAR"
button and the contact form's mailto fallback use this value.

---

## 8. How to edit About Us

In `js/content.js`, find the `about` section:
- `intro` — opening paragraphs (array of strings).
- `journey` — the timeline items (year / title / body).
- `founder` — the founder section paragraphs.
- `orderProcess` — the 4-step "How your order reaches you" cards
  (each has a `step` number, an `icon` name — `message`, `box`,
  `truck`, or `pin` — a `title`, and a `body`).

---

## 9. How to edit Shipping / Returns

`js/content.js` → `shipping.sections` / `returns.sections`, each a
list of `{ title, body }` pairs. Replace the bracketed placeholders
(e.g. `[Add final shipping charges here.]`) with your final policy.

---

## 10. How to edit the FAQ

`js/content.js` → `faq.items`, a list of `{ q, a }` pairs. Add, remove
or edit questions freely — the accordion on `faq.html` renders
whatever is here.

---

## 11. How to enable/disable the popups

`js/content.js` → `popups`:

```js
popups: {
  cookieNotice: { enabled: true, ... },
  newsletterPopup: {
    enabled: true,
    discountEnabled: false,  // flip true + fill discountText once a real promo exists
    discountText: "",
    delayMs: 8000,           // how long to wait before showing it
    ...
  },
},
```

Set `enabled: false` on either one to turn it off completely.

---

## 12. How to deploy to GitHub Pages

1. Push all these files to a GitHub repository, keeping the folder
   structure intact (don't upload the zip itself — upload its
   unzipped contents).
2. Make sure the repository is set to **Public** (Settings → General
   → Danger Zone → Change visibility) — GitHub Pages requires this on
   a free account.
3. Go to **Settings → Pages**. Under **Build and deployment → Source**,
   choose **Deploy from a branch**, set branch to `main` and folder to
   `/ (root)`, then **Save**.
4. Wait 1–2 minutes, refresh that page, and use the live link GitHub
   gives you.

All paths in this project are relative, so it works correctly whether
served from the root of a domain or from a subfolder like
`/iconicwear/`.

---

## 13. Notes

- No prices, delivery times, shipping charges or return policy were
  invented beyond what you provided — placeholders are used wherever
  final details aren't confirmed yet.
- The contact form and newsletter/popup are honestly labelled as not
  connected to a real backend yet, since this is a static GitHub
  Pages site — no fake "message sent" or "subscribed" confirmations.
- No checkout, cart, accounts, testimonials, reviews, or fake stock
  numbers exist anywhere on the site.
