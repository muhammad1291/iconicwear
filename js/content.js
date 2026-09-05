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
     IMPORTANT: only banners you've actually uploaded belong
     here. If you remove one, just delete its object below —
     don't replace it with a placeholder or reused image.

     Each banner can have its own title/subtitle. If the image
     ALREADY has campaign text baked into it, set hasText: true
     so we don't overlay duplicate text — only the button shows.
     position: "left" | "right" controls where the text box sits.
  --------------------------------------------------------- */
  hero: {
    ctaLabel: "Explore the collection",
    ctaHref: "collection.html",
    pakistanTag: "PAKISTAN / 001",
    banners: [
      {
        image: "assets/images/banners/banner-01.jpg",
        hasText: true, // image already contains "ICONICWEAR — THE FIRST DROP"
        position: "left",
      },
      {
        image: "assets/images/banners/banner-02.jpg",
        hasText: true, // image already contains the "ICONICWEAR — THE FIRST DROP" billboard
        position: "right",
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
     FEATURED COLLECTION SECTION ("First Drop" intro, Home page)
  --------------------------------------------------------- */
  featuredSection: {
    heading: "The first drop",
    supporting: "Two signature pieces. One beginning.",
  },

  /* ---------------------------------------------------------
     HOME — BRAND STORY (short intro block, links to About)
  --------------------------------------------------------- */
  homeStory: {
    eyebrow: "About the brand",
    heading: "From an idea to ICONICWEAR",
    body: "Built from the ground up — one collection, one decision at a time. ICONICWEAR is a dedicated streetwear identity, still early in its story.",
    ctaLabel: "Read our story →",
    ctaHref: "about.html",
  },

  /* ---------------------------------------------------------
     PRODUCTS
     Every product has its OWN image folder
     (assets/images/products/<slug>/). Never point two products
     at the same folder, and never mix images between products.

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
      fit: "Regular / slightly relaxed",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "PKR 1,500",
      status: "AVAILABLE",
      shortDescription: "A clean signature tee built around comfort, structure and everyday streetwear.",
      description: "A clean signature tee designed around comfort, structure and everyday streetwear. The focus is a soft premium feel, a clean silhouette and understated ICONICWEAR branding, finished with a ribbed crew neck.",
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
      fit: "Relaxed / slightly baggy",
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: "PKR 4,000",
      status: "AVAILABLE",
      shortDescription: "A relaxed black tracksuit built around comfort and a clean streetwear silhouette.",
      description: "The second signature piece from ICONICWEAR. A relaxed black tracksuit — matching jacket and trousers — built around comfort, everyday wear and a clean streetwear silhouette.",
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
  --------------------------------------------------------- */
  order: {
    label: "Order now",
    destinationLabel: "via Instagram — @iconicstreetwear.pk",
  },

  /* ---------------------------------------------------------
     ORDER JOURNEY (Home page)
     Each step has a "color" key used only for a small accent
     (icon + number) — kept muted, not neon.
  --------------------------------------------------------- */
  orderJourney: {
    heading: "The journey of your order",
    supporting: "From a message on Instagram to a piece at your door.",
    steps: [
      {
        step: "01",
        icon: "message",
        color: "blue",
        title: "Order confirmed",
        body: "We receive your order through Instagram and confirm the piece, details and delivery address.",
      },
      {
        step: "02",
        icon: "box",
        color: "amber",
        title: "Prepared",
        body: "Once confirmed, your piece is carefully prepared and packed.",
      },
      {
        step: "03",
        icon: "route",
        color: "blueDark",
        title: "On the move",
        body: "Your order is handed to our courier and begins its journey to you.",
      },
      {
        step: "04",
        icon: "pin",
        color: "green",
        title: "At your door",
        body: "Your ICONICWEAR piece arrives at your selected delivery address.",
      },
    ],
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
        title: "The idea",
        body: "GoodsifyCo began as an idea and was under development. The early stage focused on learning ecommerce, testing ideas and figuring out the right direction.",
        planned: false,
      },
      {
        year: "2025",
        title: "GoodsifyCo comes to life",
        body: "GoodsifyCo came to life through ecommerce, including product sourcing and dropshipping, initially focusing on electronics and consumer products such as watches and toys.",
        planned: false,
      },
      {
        year: "2026",
        title: "A new direction",
        body: "GoodsifyCo moved into clothing reselling and dropshipping. During this stage, planning began for a more original, brand-focused direction.",
        planned: false,
      },
      {
        year: "",
        title: "The ICONICWEAR idea",
        body: "The idea developed to take a different road from simple product reselling — building a dedicated streetwear identity with its own products, visual language and direction.",
        planned: false,
      },
      {
        year: "2027",
        title: "ICONICWEAR comes to life",
        body: "A planned future milestone — the next chapter, where ICONICWEAR moves from concept into its own dedicated streetwear identity.",
        planned: true,
      },
    ],

    founder: {
      heading: "The person behind ICONICWEAR",
      photo: "assets/images/about/founder-01.jpg",
      body: [
        "ICONICWEAR is being built from the ground up with a focus on learning, creating and improving with every step.",
        "The approach is simple: start small, pay attention to the details and build something that can grow over time. It's part of a wider journey into business, design, technology and entrepreneurship.",
        "Instead of pretending everything is already established, ICONICWEAR is intentionally documenting the process of building the brand from its first pieces onward.",
      ],
    },
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
    intro: "ICONICWEAR currently ships within Pakistan only.",
    estimateNote: "Orders generally take around 2–5 days to arrive within Pakistan. This is an estimate, not a guarantee — delays can occur due to courier availability, destination, weather or other circumstances outside ICONICWEAR's control.",
    charge: "", // e.g. "PKR 250 flat rate" — leave blank to show "to be confirmed"
    sections: [
      { title: "Processing", body: "[Add final processing time here.]" },
      { title: "Shipping Charges", body: "" }, // filled dynamically from "charge" above
      { title: "Accurate Information", body: "Please provide an accurate name, phone number and delivery address. Additional costs caused by incorrect information you provide may be your responsibility, where permitted." },
      { title: "Tracking", body: "Tracking information can be provided when available." },
      { title: "Delivery Coverage", body: "Within Pakistan only, at this time." },
    ],
    note: "POLICY DETAILS — TO BE UPDATED",
  },

  /* ---------------------------------------------------------
     RETURNS & EXCHANGES — small-business-friendly, honest policy
  --------------------------------------------------------- */
  returns: {
    heading: "Returns & Exchanges",
    intro: "We handle exchange and return requests reasonably, and may ask for photos or other proof to review a request.",
    sections: [
      { title: "Eligibility", body: "Items considered for exchange should generally be unused, unwashed, unaltered and in original condition, with tags/packaging where applicable." },
      { title: "Exchange Window", body: "[Add final exchange timeframe here.]" },
      { title: "Size Issues", body: "If a different size is needed, an exchange can be considered if the requested size is available." },
      { title: "Damaged or Incorrect Items", body: "If you receive a damaged or incorrect item, contact us with photos as soon as possible so we can review and resolve it fairly." },
      { title: "Non-Qualifying Items", body: "Items that are customer-damaged, washed, altered or heavily used may not qualify for exchange." },
      { title: "How Requests Are Resolved", body: "Where an issue is approved, it's generally resolved through an exchange or another agreed solution rather than an automatic cash refund, subject to applicable consumer laws." },
      { title: "How to Request a Return or Exchange", body: "Message us on Instagram at @iconicstreetwear.pk with your order details and, if relevant, photos of the item." },
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
        title: "Information You Provide",
        body: "We only receive information you choose to give us directly — for example, through the contact form on this site, by email, or by messaging us on Instagram to place an order.",
      },
      {
        title: "Contact Form",
        body: "This is a static website with no backend server. The contact form does not transmit or store data through this website itself — it opens a pre-filled email in your own mail app, which you then choose to send.",
      },
      {
        title: "Email Communications",
        body: "If you email us, we use that information only to respond to your enquiry.",
      },
      {
        title: "Instagram Communications",
        body: "If you order or message us through Instagram, that conversation is handled on Meta's platform under Instagram's own privacy policy — we don't control how Instagram handles your data.",
      },
      {
        title: "Order-Related Information",
        body: "Information you share to place an order (such as your name, address and phone number) is used only to fulfil and deliver that order.",
      },
      {
        title: "How Information Is Used",
        body: "Any information you share with us is used only to respond to your enquiry or process an order you've requested.",
      },
      {
        title: "Third-Party Services",
        body: "This website does not use analytics or advertising trackers. Links to Instagram will take you to Meta's platform, which has its own privacy policy.",
      },
      {
        title: "Security & Retention",
        body: "Since this website does not operate a database, it does not retain personal data. Information shared with us directly (email or Instagram) is kept only as long as needed to respond to you or fulfil an order.",
      },
      {
        title: "Policy Updates",
        body: "This policy may be updated as ICONICWEAR grows. Check back here for the latest version.",
      },
      {
        title: "Contact",
        body: "Questions about this policy can be sent to shopgoodsifyco@gmail.com or via Instagram at @iconicstreetwear.pk.",
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
        a: "Around 2–5 days within Pakistan. This is an estimate and may vary depending on destination and courier conditions.",
      },
      {
        q: "What payment options are available?",
        a: "Bank transfer is available. Cash on Delivery (COD) is currently unavailable.",
      },
      {
        q: "Where do you ship?",
        a: "Pakistan only.",
      },
      {
        q: "What sizes are available?",
        a: "Sizes are listed with each product. Final measurements will be added once production specifications are finalized.",
      },
      {
        q: "Can I return or exchange my order?",
        a: "Yes — see our Returns & Exchanges page for full details on eligibility and how to request one.",
      },
    ],
  },

  /* ---------------------------------------------------------
     NEWSLETTER (footer + home section)
     Honest by design — static site, no backend yet.
  --------------------------------------------------------- */
  newsletter: {
    heading: "Stay in the loop",
    body: "New pieces. Upcoming drops. ICONICWEAR updates.",
    placeholder: "Enter your email",
    buttonLabel: "Join the list",
    disclaimer: "This site has no backend yet, so subscribing won't currently reach a mailing list — this box is ready to connect to a real email service later.",
  },

  /* ---------------------------------------------------------
     POPUPS — both fully optional and editable
  --------------------------------------------------------- */
  popups: {
    cookieNotice: {
      enabled: true,
      heading: "We use cookies",
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
      body: "New pieces. Upcoming drops. Exclusive announcements.",
      placeholder: "Your email",
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
