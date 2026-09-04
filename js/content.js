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
    logo: "assets/images/logo/iconicwear-logo.png", // transparent PNG
    favicon32: "assets/images/icons/favicon-32.png",
    favicon512: "assets/images/icons/favicon-512.png",
    appleTouchIcon: "assets/images/icons/apple-touch-icon.png",
    seoTitleSuffix: "ICONICWEAR — Streetwear Made to Be Worn",
    seoDescription: "ICONICWEAR is a Pakistan-focused streetwear brand building its first signature collection.",
  },

  /* ---------------------------------------------------------
     NAVIGATION — kept minimal on purpose
  --------------------------------------------------------- */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Collection", href: "collection.html" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" },
  ],

  /* ---------------------------------------------------------
     HOME / HERO SLIDESHOW
     Add, remove or reorder banners here. Each banner can have
     its own title/subtitle. If the image ALREADY has campaign
     text baked into it, set hasText: true so we don't overlay
     duplicate text — only the button will show on that slide.
     position: "left" | "right" controls where the text box sits.
  --------------------------------------------------------- */
  hero: {
    ctaLabel: "Explore the collection",
    ctaHref: "collection.html",
    banners: [
      {
        image: "assets/images/banners/banner-01.jpg",
        hasText: true, // image already contains "ICONICWEAR — THE FIRST DROP"
        position: "left",
      },
      {
        image: "assets/images/banners/banner-02.jpg",
        hasText: false,
        title: "Built from the ground up.",
        subtitle: "Streetwear made to be worn.",
        position: "left",
      },
      {
        image: "assets/images/banners/banner-03.jpg",
        hasText: true, // image already contains "ICONICWEAR — THE FIRST DROP."
        position: "right",
      },
      {
        image: "assets/images/banners/banner-04.jpg",
        hasText: false,
        title: "Made for everyday wear.",
        subtitle: "From the warehouse to your door.",
        position: "left",
      },
    ],
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
     Collection page and get its own detail page.

     IMPORTANT — IMAGE SEPARATION RULE:
     Every product has its OWN image folder
     (assets/images/products/<slug>/). Never point two products
     at the same image folder, and never let one product's
     "images" array reference another product's files.

     status options: "AVAILABLE" | "COMING SOON" | "SOLD OUT"
     price: leave as "" until a final price is confirmed — the
            site will show "Price — to be confirmed" instead.
  --------------------------------------------------------- */
  products: [
    {
      id: "ICW-01",
      slug: "icw-01",
      name: "ICONICWEAR Signature Tee",
      category: "Premium T-Shirt",
      color: "White",
      material: "100% cotton, 200–220 GSM, soft-touch, pre-shrunk, ribbed crew neck",
      fit: "Regular / slightly relaxed — not tight, not oversized, not excessively baggy",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "PKR 1,500",
      status: "AVAILABLE",
      shortDescription: "A clean signature tee built around comfort, structure and everyday streetwear.",
      description: "A clean signature tee designed around comfort, structure and everyday streetwear. The focus is a soft premium feel, a clean silhouette and understated ICONICWEAR branding, finished with a ribbed crew neck. Not tight, not oversized — just right.",
      // Only images of the Signature Tee live here. Never reuse another product's photos.
      images: [
        "assets/images/products/icw-01/tee-01-flatlay.jpg",
        "assets/images/products/icw-01/tee-02-lifestyle.jpg",
        "assets/images/products/icw-01/tee-03-back.jpg",
      ],
    },
    {
      id: "ICW-02",
      slug: "icw-02",
      name: "ICONICWEAR Signature Tracksuit",
      category: "Tracksuit",
      color: "Black",
      material: "TBD — final fabric composition to be confirmed",
      fit: "Relaxed / slightly baggy — not tight, not excessively oversized",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "PKR 4,000",
      status: "AVAILABLE",
      shortDescription: "A relaxed black tracksuit built around comfort and a clean streetwear silhouette.",
      description: "The second signature piece from ICONICWEAR. A relaxed black tracksuit — matching jacket and trousers — built around comfort, everyday wear and a clean streetwear silhouette. Not tight, not excessively oversized.",
      // Only images of the Signature Tracksuit live here. Never reuse another product's photos.
      images: [
        "assets/images/products/icw-02/tracksuit-01-flatlay.jpg",
        "assets/images/products/icw-02/tracksuit-02-lifestyle.jpg",
        "assets/images/products/icw-02/tracksuit-03-lifestyle.jpg",
      ],
    },
  ],

  /* ---------------------------------------------------------
     SIZE GUIDE — shown on every product page until finalized
  --------------------------------------------------------- */
  sizeGuide: {
    heading: "Size guide — coming soon",
    body: "Final measurements will be added once our production specifications are finalized.",
  },

  /* ---------------------------------------------------------
     ORDER NOW — sends visitors to Instagram to place an order.
     No checkout, no payment processing on this site.
  --------------------------------------------------------- */
  order: {
    label: "Order now",
    destinationLabel: "via Instagram — @iconicstreetwear.pk",
  },

  /* ---------------------------------------------------------
     ABOUT PAGE
  --------------------------------------------------------- */
  about: {
    heading: "About ICONICWEAR",
    intro: [
      "ICONICWEAR is a Pakistan-focused streetwear brand built around a simple idea: create clothing that feels comfortable, personal and easy to make your own.",
      "The brand is starting with a focused first collection rather than trying to do everything at once. The first drop is the beginning of that identity.",
    ],
    image: "assets/images/about/about-01.jpg",

    journeyHeading: "Our journey",
    journey: [
      {
        year: "2024",
        title: "GoodsifyCo begins",
        body: "GoodsifyCo was founded in 2024 as an entrepreneurial project based in Canada. The first products explored through the business included watches and toys.",
      },
      {
        year: "2026",
        title: "A new direction",
        body: "In 2026, the journey expanded into clothing, starting locally and eventually developing into the dedicated streetwear direction of ICONICWEAR.",
      },
    ],

    founder: {
      heading: "The person behind ICONICWEAR",
      body: [
        "ICONICWEAR is being built from the ground up with a focus on learning, creating and improving with every step.",
        "The founder's approach is simple: start small, pay attention to the details and build something that can grow over time. The brand is part of a wider journey into business, design, technology and entrepreneurship.",
        "Instead of pretending everything is already established, ICONICWEAR is intentionally documenting the process of building the brand from its first pieces onward.",
      ],
    },

    orderProcessHeading: "How your order reaches you",
    orderProcess: [
      {
        step: "01",
        icon: "message",
        title: "Order received",
        body: "We receive your order through Instagram and confirm the selected piece, details and delivery address.",
      },
      {
        step: "02",
        icon: "box",
        title: "Order packed",
        body: "Once your order is confirmed, we carefully prepare and pack your piece.",
      },
      {
        step: "03",
        icon: "truck",
        title: "Order shipped",
        body: "Your order is handed over for delivery and begins its journey to you.",
      },
      {
        step: "04",
        icon: "pin",
        title: "Delivered",
        body: "Your ICONICWEAR piece arrives at your selected delivery address.",
      },
    ],
  },

  /* ---------------------------------------------------------
     CONTACT
  --------------------------------------------------------- */
  contact: {
    heading: "Let's talk.",
    supporting: "Questions, collaborations or general enquiries? Connect with ICONICWEAR.",
    email: "shopgoodsifyco@gmail.com",
    formNote: "This site is hosted on GitHub Pages and has no backend, so messages are sent through your own email app rather than stored on a server.",
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
    estimateNote: "Orders generally take around 2–5 days to arrive within Pakistan. Please note: delivery times are estimates and are not guaranteed — orders may arrive earlier or may take longer depending on the destination, courier and other delivery conditions.",
    sections: [
      { title: "Processing", body: "[Add final processing time here.]" },
      { title: "Shipping Charges", body: "[Add final shipping charges here.]" },
      { title: "Tracking", body: "[Add tracking/courier details here.]" },
      { title: "Delivery Coverage", body: "Within Pakistan only, at this time." },
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
      { title: "How to Request a Return", body: "Message us on Instagram at @iconicstreetwear.pk with your order details." },
    ],
    note: "POLICY DETAILS — TO BE UPDATED",
  },

  /* ---------------------------------------------------------
     PRIVACY POLICY
  --------------------------------------------------------- */
  privacy: {
    heading: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        title: "Information We Collect",
        body: "If you use the contact form on this site, your device opens your own email app with your name, email and message pre-filled — this information is sent directly to us via email and is not stored on any server or database operated by this website.",
      },
      {
        title: "How Information Is Used",
        body: "Any information you choose to send us (for example, via email or Instagram) is used only to respond to your enquiry or process an order you've requested through Instagram.",
      },
      {
        title: "Contact Forms",
        body: "This is a static website with no backend server. The contact form does not transmit or store data through this website itself — it opens a pre-filled email in your own mail app.",
      },
      {
        title: "Newsletter",
        body: "If a newsletter sign-up is offered, your email would only be used to send you updates about ICONICWEAR. As this site currently has no backend, no email addresses are stored by this website at this time.",
      },
      {
        title: "Cookies",
        body: "This website uses your browser's local storage only to remember a couple of simple preferences, such as whether you've dismissed the cookie notice or a promotional popup. See our Cookie Policy for details.",
      },
      {
        title: "Third-Party Services",
        body: "Links to Instagram will take you to Meta's platform, which has its own privacy policy. We don't control how Instagram handles your data.",
      },
      {
        title: "Data Retention",
        body: "Since this website does not operate a database, it does not retain personal data. Any information shared with us directly (email or Instagram) is retained only as long as needed to respond to you.",
      },
      {
        title: "Policy Updates",
        body: "This policy may be updated as ICONICWEAR grows. Check back here for the latest version.",
      },
    ],
  },

  /* ---------------------------------------------------------
     COOKIE POLICY
  --------------------------------------------------------- */
  cookies: {
    heading: "Cookie Policy",
    intro: "Cookies are small pieces of data websites can use to remember information about your visit.",
    sections: [
      {
        title: "What This Website Actually Uses",
        body: "ICONICWEAR does not use tracking cookies or analytics. The site uses your browser's local storage only — a similar but simpler technology — to remember whether you've dismissed the cookie notice or the promotional popup, so they don't show every time you visit.",
      },
      {
        title: "No Third-Party Tracking",
        body: "This site does not currently run advertising pixels, analytics scripts or third-party tracking cookies.",
      },
      {
        title: "Managing Your Preference",
        body: "You can clear this preference at any time by clearing your browser's site data for this domain.",
      },
    ],
  },

  /* ---------------------------------------------------------
     FAQ
  --------------------------------------------------------- */
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "How do I order?",
        a: "Orders are currently placed through our Instagram account, @iconicstreetwear.pk. Visit our Instagram profile and message us with the product you'd like to order.",
      },
      {
        q: "How long does shipping take?",
        a: "Orders generally take around 2–5 days to arrive within Pakistan. Delivery can sometimes arrive earlier or take longer depending on the destination and courier. These timings are estimates, not an exact guarantee.",
      },
      {
        q: "What payment options are available?",
        a: "Bank transfer is currently available. Cash on Delivery (COD) is not available at the moment. We will update this information when COD becomes available.",
      },
      {
        q: "Where do you ship?",
        a: "ICONICWEAR currently focuses on deliveries within Pakistan.",
      },
      {
        q: "What sizes are available?",
        a: "Our available sizes will be listed with each product. Final size measurements will be added to our size guide once specifications are finalized.",
      },
      {
        q: "Can I return or exchange my order?",
        a: "Yes — see our Returns & Exchanges page for full details on eligibility and how to request one.",
      },
    ],
  },

  /* ---------------------------------------------------------
     NEWSLETTER (footer section)
     Honest by design — this is a static site with no backend,
     so this is a UI-only signup ready to connect to a real
     email service later.
  --------------------------------------------------------- */
  newsletter: {
    heading: "Stay in the loop",
    body: "Get updates on new pieces, upcoming drops and ICONICWEAR news.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    disclaimer: "This site has no backend yet, so subscribing won't currently reach a mailing list — this box is ready to connect to a real email service later.",
  },

  /* ---------------------------------------------------------
     POPUPS — both fully optional and editable
  --------------------------------------------------------- */
  popups: {
    cookieNotice: {
      enabled: true,
      message: "We use cookies to improve your experience.",
      acceptLabel: "Accept",
      manageLabel: "Manage",
    },
    newsletterPopup: {
      enabled: true,
      discountEnabled: false, // set true + add discountText once a real promo exists
      discountText: "",
      delayMs: 8000,
      heading: "Join the ICONICWEAR list",
      body: "Get updates on new pieces, upcoming drops and exclusive announcements.",
      placeholder: "Enter your email",
      buttonLabel: "Join",
    },
  },

  /* ---------------------------------------------------------
     FOOTER
  --------------------------------------------------------- */
  footer: {
    tagline: "Streetwear made to be worn.",
    credit: "Founded through the GoodsifyCo journey.",
    copyright: "© 2026 ICONICWEAR. All rights reserved.",
  },
};
