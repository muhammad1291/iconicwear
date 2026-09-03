# ICONICWEAR — Brand Showcase Website

A lightweight, static showcase website for ICONICWEAR. Plain HTML, CSS
and vanilla JavaScript — no build step, no framework, no backend.
Works by opening the files directly, and is ready to deploy to
GitHub Pages as-is.

There is **no checkout, cart, payment, or account system** anywhere on
this site by design. It's a brand/showcase site.

---

## 1. File structure

```
/
├── index.html          Home page (hero slideshow + featured drop)
├── collection.html      Full product collection
├── product.html         Product detail page (reads ?id=ICW-01 etc.)
├── about.html            Brand story, GoodsifyCo background, founder
├── contact.html          Email + Instagram
├── shipping.html         Shipping policy (placeholders)
├── returns.html          Returns & exchanges policy (placeholders)
│
├── css/
│   └── style.css         All site styling (one file)
│
├── js/
│   ├── content.js         ← YOU EDIT THIS. All text, prices, images, links.
│   ├── main.js             Nav, footer, hero slideshow, animations
│   └── products.js         Product grid + product detail rendering
│
├── assets/images/
│   ├── logo/               Your logo
│   ├── banners/             Hero slideshow images
│   ├── products/            Product photography
│   ├── about/                About page image
│   └── icons/                 Favicon
│
└── README.md (this file)
```

**Everything you'll want to change day-to-day lives in `js/content.js`.**
You should not need to open the HTML or CSS files for normal updates.

---

## 2. Where things are right now

- **Logo** — `assets/images/logo/iconicwear-logo.jpg` (your uploaded
  "ICONIC WEAR" star logo, auto-cropped to remove the extra black
  padding around it).
- **Banner / hero images** — `assets/images/banners/banner-01.jpg`,
  `banner-02.jpg`, `banner-03.jpg` (your three campaign photos).
- **Product photos** — not yet added. Until you add real photos, the
  site automatically shows a clean dark placeholder block instead of
  a broken image, so nothing ever looks broken.
- **About page photo** — same as above, shows a placeholder until you
  add `assets/images/about/about-01.jpg`.

---

## 3. How to add or replace images

1. Drop your image file into the correct folder under `assets/images/`.
2. Use a clear filename, e.g. `icw-01-01.jpg`, `icw-01-02.jpg`.
3. Open `js/content.js` and update the matching path (see below).
4. Refresh the page — no build step needed.

If a path in `content.js` doesn't match a real file, the site shows a
placeholder instead of a broken image icon, so you can update content
gradually without anything looking unfinished.

---

## 4. How to add a new product (e.g. ICW-03)

Open `js/content.js`, find the `products: [ ... ]` array, and copy one
of the existing product objects, then edit the fields:

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
  price: "",                 // leave blank until confirmed, or e.g. "PKR 4,500"
  status: "COMING SOON",      // "AVAILABLE" | "COMING SOON" | "SOLD OUT"
  shortDescription: "One short line for the product card.",
  description: "The longer description shown on the product detail page.",
  images: [
    "assets/images/products/icw-03-01.jpg",
    "assets/images/products/icw-03-02.jpg",
    "assets/images/products/icw-03-03.jpg",
  ],
},
```

That's it — it will automatically appear on the Collection page (and
Home, if within the first two products) with its own detail page at
`product.html?id=ICW-03`. No other file needs to change.

---

## 5. How to change a product price

In `js/content.js`, find the product and edit its `price` field:

```js
price: "PKR 4,500",
```

Leave it as `price: ""` and the site will automatically show
"Price — to be confirmed" instead of a placeholder number.

---

## 6. How to change other product information

Same place — every product field (`name`, `color`, `material`, `fit`,
`sizes`, `status`, descriptions, `images`) is edited directly in the
product's object inside `js/content.js`.

---

## 7. How to change Instagram links

In `js/content.js`, find the `social` section:

```js
social: {
  goodsifyco: { label: "...", handle: "@goodsifyco", url: "https://instagram.com/goodsifyco" },
  iconicwear: { label: "...", handle: "@iconicstreetwear.pk", url: "https://instagram.com/iconicstreetwear.pk" },
},
```

Edit the `url` (and `handle` if the username changes).

---

## 8. How to change the contact email

In `js/content.js`, find:

```js
contact: {
  email: "shopgoodsifyco@gmail.com",
},
```

Change the address — the "Email ICONICWEAR" button and footer link
update automatically.

---

## 9. How to edit About Us

In `js/content.js`, find the `about` section. `intro` and the
`founder.body` / `origin.body` arrays are lists of paragraphs — add,
remove or edit strings in those arrays and the page updates
automatically. `about.image` is the path to the About page photo.

---

## 10. How to edit Shipping

In `js/content.js`, find `shipping.sections` — each entry is a
`{ title, body }` pair rendered on the Shipping page. Replace the
bracketed placeholder text (e.g. `[Add final delivery timeframe here.]`)
with your final policy.

---

## 11. How to edit Returns & Exchanges

Same pattern, in the `returns.sections` array in `js/content.js`.

---

## 12. How to deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `iconicwear-website`).
2. Upload/push all these files, keeping the folder structure intact.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a
   branch**.
5. Choose your default branch (usually `main`) and the `/ (root)`
   folder, then click **Save**.
6. GitHub will give you a URL like
   `https://yourusername.github.io/iconicwear-website/` within a few
   minutes — that's your live site.
7. Any time you push new changes (new images, edits to `content.js`),
   GitHub Pages redeploys automatically within a minute or two.

All paths in this project are relative, so it will work correctly
whether it's served from the root of a domain or from a subfolder
like `/iconicwear-website/`.

---

## 13. Adding WhatsApp ordering later

No WhatsApp button exists yet, as requested. When you're ready, the
simplest place to add it is the `contact` section of `content.js` (add
a `whatsapp` field) and a small button next to "Email ICONICWEAR" in
`contact.html` and the footer — happy to help with this when the time
comes.

---

## 14. Notes

- No prices, delivery times, shipping charges, or return policy have
  been invented — they're all left as clearly editable placeholders
  until you provide final details.
- No checkout, cart, accounts, testimonials, or fake availability
  exist anywhere on the site.
- The design is intentionally simple to extend — new pages can follow
  the same pattern (nav/footer mount points + a `<script>` reading
  from `content.js`).
