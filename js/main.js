/* ============================================================
   ICONICWEAR — MAIN.JS
   Shared site behaviour: navigation, footer, mobile menu,
   hero slideshow, scroll reveal, image-fallback placeholders.
   Reads all text/links from CONTENT (content.js).
   ============================================================ */

/* ---------- Utilities ---------- */

// Builds a safe <img> that swaps to a placeholder block if the
// path is missing or fails to load (per "no broken images" rule).
function buildImage(src, alt, className) {
  const wrap = document.createElement("div");
  if (className) wrap.className = className;

  if (!src) {
    wrap.appendChild(makePlaceholder(alt));
    return wrap;
  }

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.loading = "lazy";
  img.onerror = () => {
    wrap.innerHTML = "";
    wrap.appendChild(makePlaceholder(alt));
  };
  wrap.appendChild(img);
  return wrap;
}

function makePlaceholder(label) {
  const el = document.createElement("div");
  el.className = "placeholder";
  el.style.width = "100%";
  el.style.height = "100%";
  el.textContent = label || "Image coming soon";
  return el;
}

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

/* ---------- Navigation ---------- */

function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  const page = currentPage();

  const links = CONTENT.nav
    .map((item) => {
      const isCurrent = item.href === page;
      return `<li><a href="${item.href}"${isCurrent ? ' aria-current="page"' : ""}>${item.label}</a></li>`;
    })
    .join("");

  mount.innerHTML = `
    <div class="container">
      <a href="index.html" class="nav-logo" aria-label="${CONTENT.brand.name} home">
        <img src="${CONTENT.brand.logo}" alt="${CONTENT.brand.name}"
             onerror="this.parentElement.innerHTML='<span class=&quot;logo-fallback&quot;>${CONTENT.brand.name}</span>'">
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links" role="list">
        ${links}
      </ul>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  window.addEventListener("scroll", () => {
    mount.classList.toggle("is-scrolled", window.scrollY > 24);
  });
  mount.classList.toggle("is-scrolled", window.scrollY > 24);
}

/* ---------- Footer ---------- */

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const navList = CONTENT.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  mount.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="display">${CONTENT.brand.name}</div>
          <p>${CONTENT.footer.tagline}</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            ${navList}
            <li><a href="shipping.html">Shipping</a></li>
            <li><a href="returns.html">Returns</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow</h4>
          <ul>
            <li><a href="${CONTENT.social.goodsifyco.url}" target="_blank" rel="noopener">Instagram — GoodsifyCo</a></li>
            <li><a href="${CONTENT.social.iconicwear.url}" target="_blank" rel="noopener">Instagram — ICONICWEAR</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:${CONTENT.contact.email}">Email ICONICWEAR</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${CONTENT.footer.copyright}</span>
      </div>
    </div>
  `;
}

/* ---------- Hero slideshow (home page only) ---------- */

function renderHero() {
  const mount = document.getElementById("hero");
  if (!mount) return;

  const banners = CONTENT.hero.banners && CONTENT.hero.banners.length
    ? CONTENT.hero.banners
    : [null];

  const slides = banners
    .map((src, i) => `<div class="hero-slide${i === 0 ? " is-active" : ""}" data-index="${i}"></div>`)
    .join("");

  const indicators = banners
    .map((_, i) => `<button class="hero-indicator${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`)
    .join("");

  mount.innerHTML = `
    <div class="hero-slides">${slides}</div>
    <div class="hero-content">
      <p class="eyebrow hero-eyebrow reveal">${CONTENT.hero.eyebrow}</p>
      <h1 class="display hero-heading reveal">${CONTENT.hero.heading}</h1>
      <p class="hero-sub reveal">${CONTENT.hero.subheading}</p>
      <div class="hero-cta reveal">
        <a href="${CONTENT.hero.ctaHref}" class="btn btn-primary">${CONTENT.hero.ctaLabel}</a>
      </div>
    </div>
    ${banners.length > 1 ? `<div class="hero-indicators">${indicators}</div>` : ""}
  `;

  // Fill each slide with an image or placeholder
  mount.querySelectorAll(".hero-slide").forEach((slideEl, i) => {
    const imgWrap = buildImage(banners[i], `${CONTENT.brand.name} campaign image ${i + 1}`, null);
    imgWrap.querySelectorAll("img, .placeholder").forEach((el) => {
      el.style.width = "100%";
      el.style.height = "100%";
    });
    while (imgWrap.firstChild) slideEl.appendChild(imgWrap.firstChild);
  });

  requestAnimationFrame(() => {
    mount.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  });

  if (banners.length > 1) {
    let index = 0;
    const slideEls = mount.querySelectorAll(".hero-slide");
    const dotEls = mount.querySelectorAll(".hero-indicator");

    function goTo(next) {
      slideEls[index].classList.remove("is-active");
      dotEls[index].classList.remove("is-active");
      index = next;
      slideEls[index].classList.add("is-active");
      dotEls[index].classList.add("is-active");
    }

    dotEls.forEach((dot) => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.index)));
    });

    setInterval(() => {
      goTo((index + 1) % slideEls.length);
    }, 6000);
  }
}

/* ---------- Scroll reveal for generic sections ---------- */

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((t) => observer.observe(t));
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  renderHero();
  initScrollReveal();
});
