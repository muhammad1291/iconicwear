/* ============================================================
   ICONICWEAR — CENTRAL CONTENT FILE
   ============================================================
   Edit everything about the website's text, images, prices and
   links right here. You should not need to touch any HTML, CSS
   or other JS files for normal day-to-day updates.

   After editing this file, just refresh the site (or re-deploy
   to GitHub Pages) to see your changes.
   ============================================================ */

const CONTENT = {

  /* ---------------------------------------------------------
     BRAND
  --------------------------------------------------------- */
  brand: {
    name: "ICONICWEAR",
    tagline: "Streetwear made to be worn.",
    logo: "assets/images/logo/iconicwear-logo.jpg",
    // Shown in the browser tab / search engines
    seoTitleSuffix: "ICONICWEAR — Streetwear Made to Be Worn",
    seoDescription: "ICONICWEAR is a Pakistan-focused streetwear brand building its first signature collection.",
  },

  /* ---------------------------------------------------------
     NAVIGATION
     Add/remove links here — the nav and footer both read
     from this list automatically.
  --------------------------------------------------------- */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Collection", href: "collection.html" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" },
  ],

  /* ---------------------------------------------------------
     HOME / HERO SLIDESHOW
     Add, remove or reorder banner images by editing this array.
     If an image path is missing/broken, a clean placeholder
     will show instead of a broken image icon.
  --------------------------------------------------------- */
  hero: {
    banners: [
      "assets/images/banners/banner-01.jpg",
      "assets/images/banners/banner-02.jpg",
      "assets/images/banners/banner-03.jpg",
    ],
    eyebrow: "ICONICWEAR",
    heading: "The first drop.",
    subheading: "Streetwear made to be worn.",
    ctaLabel: "Explore the collection",
    ctaHref: "collection.html",
  },

  /* ---------------------------------------------------------
     FEATURED COLLECTION SECTION (Home page)
  --------------------------------------------------------- */
  featuredSection: {
    heading: "The first drop",
    supporting: "Two signature pieces. One beginning.",
  },

  /* ---------------------------------------------------------
     PRODUCTS
     To add a new product: copy one of the objects below,
     change the "id" (must be unique, e.g. "ICW-03"), and fill
     in the fields. It will automatically appear on the
     Collection page and get its own detail page — no other
     changes needed.

     status options: "AVAILABLE" | "COMING SOON" | "SOLD OUT"
     price: leave as "" until a final price is confirmed —
            the site will show "Price — to be confirmed".
  --------------------------------------------------------- */
  products: [
    {
      id: "ICW-01",
      slug: "icw-01",
      name: "ICONICWEAR Signature Tee",
      category: "Premium T-Shirt",
      color: "White",
      material: "100% cotton, 200–220 GSM, soft-touch, pre-shrunk",
      fit: "Regular / slightly relaxed",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "",
      status: "COMING SOON",
      shortDescription: "A clean signature tee built around comfort, structure and everyday streetwear.",
      description: "A clean signature tee designed around comfort, structure and everyday streetwear. The focus is a soft premium feel, a clean silhouette and understated ICONICWEAR branding. Not tight, not oversized — just right.",
      images: [
        "assets/images/products/icw-01-01.jpg",
        "assets/images/products/icw-01-02.jpg",
        "assets/images/products/icw-01-03.jpg",
      ],
    },
    {
      id: "ICW-02",
      slug: "icw-02",
      name: "ICONICWEAR Signature Tracksuit",
      category: "Tracksuit",
      color: "Black",
      material: "TBD — final fabric to be confirmed",
      fit: "Relaxed / slightly baggy",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "",
      status: "COMING SOON",
      shortDescription: "A relaxed black tracksuit built around comfort and a clean streetwear silhouette.",
      description: "The second signature piece from ICONICWEAR. A relaxed black tracksuit — matching jacket and trousers — built around comfort, everyday wear and a clean streetwear silhouette. Not tight, not excessively oversized.",
      images: [
        "assets/images/products/icw-02-01.jpg",
        "assets/images/products/icw-02-02.jpg",
        "assets/images/products/icw-02-03.jpg",
      ],
    },
  ],

  /* ---------------------------------------------------------
     ABOUT PAGE
  --------------------------------------------------------- */
  about: {
    heading: "About ICONICWEAR",
    intro: [
      "ICONICWEAR was built around a simple idea: streetwear should feel personal.",
      "The brand is focused on creating clean, wearable pieces that balance comfort, identity and everyday style. ICONICWEAR is starting from the ground up, building its first collection carefully rather than trying to release everything at once.",
      "The first drop represents the beginning of that journey — a small collection designed to establish the identity of the brand.",
      "The goal is not to follow every trend. The goal is to build pieces people genuinely want to wear.",
    ],
    image: "assets/images/about/about-01.jpg",
    origin: {
      heading: "Where it started",
      body: [
        "GoodsifyCo was part of the earlier entrepreneurial journey — a place where ideas around business, technology, e-commerce and building something from the ground up were explored.",
        "ICONICWEAR grew from that same desire to build something real, but with a dedicated focus on clothing, design and streetwear.",
      ],
    },
    founder: {
      heading: "The person behind ICONICWEAR",
      body: [
        "ICONICWEAR is being built from the ground up with a focus on learning, creating and improving with every step.",
        "The founder's approach is simple: start small, pay attention to the details and build something that can grow over time.",
        "The brand is part of a wider journey into business, design, technology and entrepreneurship.",
        "Instead of pretending everything is already established, ICONICWEAR is intentionally documenting the process of building the brand from its first pieces onward.",
      ],
    },
  },

  /* ---------------------------------------------------------
     CONTACT
  --------------------------------------------------------- */
  contact: {
    heading: "Contact",
    supporting: "For questions, collaborations or general enquiries, connect with ICONICWEAR.",
    email: "shopgoodsifyco@gmail.com",
  },

  /* ---------------------------------------------------------
     SOCIAL / INSTAGRAM
  --------------------------------------------------------- */
  social: {
    goodsifyco: {
      label: "Instagram — GoodsifyCo",
      handle: "@goodsifyco",
      url: "https://instagram.com/goodsifyco",
    },
    iconicwear: {
      label: "Instagram — ICONICWEAR",
      handle: "@iconicstreetwear.pk",
      url: "https://instagram.com/iconicstreetwear.pk",
    },
  },

  /* ---------------------------------------------------------
     SHIPPING — edit the placeholders as final details are confirmed
  --------------------------------------------------------- */
  shipping: {
    heading: "Shipping",
    intro: "ICONICWEAR currently focuses on deliveries within Pakistan.",
    sections: [
      { title: "Processing", body: "[Add final processing time here.]" },
      { title: "Delivery", body: "[Add final estimated delivery timeframe here.]" },
      { title: "Shipping Charges", body: "[Add final shipping charges here.]" },
      { title: "Tracking", body: "[Add tracking information here.]" },
    ],
    note: "POLICY DETAILS — TO BE UPDATED",
  },

  /* ---------------------------------------------------------
     RETURNS & EXCHANGES — edit the placeholders as final policy is confirmed
  --------------------------------------------------------- */
  returns: {
    heading: "Returns & Exchanges",
    sections: [
      { title: "Eligibility", body: "[Add final return eligibility here.]" },
      { title: "Exchange Window", body: "[Add final exchange timeframe here.]" },
      { title: "Damaged or Incorrect Items", body: "[Add final procedure here.]" },
      { title: "Non-returnable Items", body: "[Add final policy here.]" },
      { title: "How to Request a Return", body: "[Add final contact process here.]" },
    ],
    note: "POLICY DETAILS — TO BE UPDATED",
  },

  /* ---------------------------------------------------------
     FOOTER
  --------------------------------------------------------- */
  footer: {
    tagline: "Streetwear made to be worn.",
    copyright: "© 2026 ICONICWEAR. All rights reserved.",
  },
};
