/* ============================================================
   Noor Jewels — site behaviour
   WhatsApp number: assets/js/config.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Config ---------- */
  const CFG = window.NOOR_CONFIG || {};
  const WA_NUMBER = String(CFG.whatsappNumber || "919999999999").replace(/\D/g, "");
  const WA_DISPLAY = CFG.whatsappDisplay || "+91 99999 99999";
  const BUSINESS = CFG.businessName || "Noor Jewels";

  const waLink = (text) =>
    "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);

  if (WA_NUMBER === "919999999999") {
    console.info(
      "Noor Jewels: WhatsApp number abhi placeholder hai. Apna number assets/js/config.js me daalein."
    );
  }

  const inr = (n) => "₹" + n.toLocaleString("en-IN");

  /* ---------- Products ---------- */
  const PRODUCTS = [
    {
      id: "meenakshi-kundan-set",
      name: "Meenakshi Kundan Necklace Set",
      category: "necklace",
      categoryLabel: "Necklace set",
      price: 1299,
      mrp: 2499,
      img: "assets/img/products/p1.jpg",
      badge: "Bestseller",
      rating: 4.9,
      desc: "Kundan choker with pearl drops and matching jhumka earrings."
    },
    {
      id: "chandbali-pearl-earrings",
      name: "Chandbali Pearl Earrings",
      category: "earrings",
      categoryLabel: "Earrings",
      price: 649,
      mrp: 1199,
      img: "assets/img/products/p2.jpg",
      badge: "New",
      rating: 4.8,
      desc: "Gold-tone chandbalis with pearl detailing and push-back closure."
    },
    {
      id: "antique-gold-kada",
      name: "Antique Gold Kada Pair",
      category: "bangles",
      categoryLabel: "Bangles",
      price: 899,
      mrp: 1699,
      img: "assets/img/products/p3.jpg",
      badge: "Bestseller",
      rating: 4.9,
      desc: "Hand-carved antique-finish kadas, size 2-6. Openable for easy wear."
    },
    {
      id: "polki-maang-tikka",
      name: "Polki Maang Tikka",
      category: "tikka",
      categoryLabel: "Maang tikka",
      price: 549,
      mrp: 999,
      img: "assets/img/products/p4.jpg",
      badge: "New",
      rating: 4.7,
      desc: "Polki centre with a pearl string — pairs with any bun or braid."
    },
    {
      id: "rose-gold-cocktail-ring",
      name: "Rose Gold Cocktail Ring",
      category: "rings",
      categoryLabel: "Ring",
      price: 399,
      mrp: 749,
      img: "assets/img/products/p5.jpg",
      badge: "Bestseller",
      rating: 4.8,
      desc: "Pearl and crystal cluster ring with an adjustable rose-gold band."
    },
    {
      id: "layered-pearl-choker",
      name: "Layered Pearl Choker",
      category: "necklace",
      categoryLabel: "Necklace",
      price: 749,
      mrp: 1399,
      img: "assets/img/products/p6.jpg",
      badge: "New",
      rating: 4.6,
      desc: "Two-layer pearl choker with gold-tone spacers. Sits beautifully."
    },
    {
      id: "oxidised-silver-jhumka",
      name: "Oxidised Silver Jhumka",
      category: "earrings",
      categoryLabel: "Earrings",
      price: 449,
      mrp: 899,
      img: "assets/img/products/p7.jpg",
      badge: "Bestseller",
      rating: 4.9,
      desc: "Classic oxidised jhumkas with tiny pearl drops — everyday wear."
    },
    {
      id: "rajwada-bridal-set",
      name: "Rajwada Bridal Necklace Set",
      category: "necklace",
      categoryLabel: "Bridal set",
      price: 2499,
      mrp: 4999,
      img: "assets/img/products/p8.jpg",
      badge: "Bridal edit",
      rating: 5.0,
      desc: "Grand Rajwada set with ruby accents, pearls and matching jhumkas."
    }
  ];

  /* ---------- DOM ---------- */
  const grid = document.getElementById("productGrid");
  const emptyNote = document.getElementById("emptyNote");
  const chips = Array.from(document.querySelectorAll(".chip"));
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  const picksBar = document.getElementById("picksBar");
  const picksCount = document.getElementById("picksCount");
  const picksSend = document.getElementById("picksSend");
  const picksClear = document.getElementById("picksClear");
  const form = document.getElementById("enquiryForm");

  const WA_ICON =
    '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';

  const HEART =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>';

  /* ---------- WhatsApp links (static) ---------- */
  const DEFAULT_MSG = "Hi " + BUSINESS + "! I'd like to know more about your jewellery.";
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waLink(el.dataset.msg || DEFAULT_MSG));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.querySelectorAll(".js-wa-number").forEach((el) => {
    el.textContent = WA_DISPLAY;
  });

  /* ---------- Reveal on scroll ---------- */
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        )
      : null;

  function observeReveals(root) {
    const scope = root || document;
    const els = scope.querySelectorAll(".reveal:not(.is-in)");
    if (!io) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    els.forEach((el) => io.observe(el));
  }

  observeReveals();

  /* ---------- Product rendering ---------- */
  function orderMessage(p) {
    return (
      "Hi " + BUSINESS + "! 👋\n" +
      "I'd like to order this piece:\n\n" +
      "• " + p.name + " — " + inr(p.price) + " (MRP " + inr(p.mrp) + ")\n\n" +
      "Please share payment and delivery details."
    );
  }

  function productCard(p, index) {
    const off = Math.round((1 - p.price / p.mrp) * 100);
    return (
      '<article class="product-card reveal" style="--d:' + index * 55 + 'ms" data-id="' + p.id + '">' +
        '<div class="product-media">' +
          '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" width="1024" height="1024" />' +
          '<span class="badge">' + p.badge + "</span>" +
          '<button class="pick-btn" type="button" data-pick="' + p.id + '" aria-pressed="false" aria-label="Add ' + p.name + ' to shortlist">' +
            HEART +
          "</button>" +
        "</div>" +
        '<div class="product-body">' +
          '<p class="product-cat">' + p.categoryLabel + "</p>" +
          '<h3 class="product-name">' + p.name + "</h3>" +
          '<p class="product-desc">' + p.desc + "</p>" +
          '<div class="rating"><span class="stars" aria-hidden="true">★★★★★</span> ' + p.rating.toFixed(1) + "</div>" +
          '<div class="price-row">' +
            '<span class="price">' + inr(p.price) + "</span>" +
            '<span class="mrp">' + inr(p.mrp) + "</span>" +
            '<span class="off">' + off + "% off</span>" +
          "</div>" +
          '<a class="btn btn-whatsapp" href="' + waLink(orderMessage(p)) + '" target="_blank" rel="noopener">' +
            WA_ICON + "Order on WhatsApp" +
          "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function renderProducts(filter) {
    const list =
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = list.map((p, i) => productCard(p, i)).join("");
    emptyNote.hidden = list.length > 0;
    hydratePicks();
    observeReveals(grid);
  }

  /* ---------- Filters ---------- */
  function setFilter(filter) {
    chips.forEach((chip) => {
      const on = chip.dataset.filter === filter;
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", String(on));
    });
    renderProducts(filter);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });

  // Category cards + footer links also filter the grid
  document.querySelectorAll("[data-filter]").forEach((el) => {
    if (el.classList.contains("chip")) return;
    el.addEventListener("click", () => setFilter(el.dataset.filter));
  });

  /* ---------- Shortlist (WhatsApp enquiry) ---------- */
  const PICKS_KEY = "noor-picks";
  let picks = new Set();

  try {
    const stored = JSON.parse(localStorage.getItem(PICKS_KEY) || "[]");
    if (Array.isArray(stored)) picks = new Set(stored);
  } catch (err) {
    picks = new Set();
  }

  const savePicks = () => {
    try {
      localStorage.setItem(PICKS_KEY, JSON.stringify(Array.from(picks)));
    } catch (err) {
      /* storage unavailable — shortlist still works for the session */
    }
  };

  function hydratePicks() {
    grid.querySelectorAll(".pick-btn").forEach((btn) => {
      const on = picks.has(btn.dataset.pick);
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
      const label = btn.getAttribute("aria-label") || "";
      btn.setAttribute(
        "aria-label",
        (on ? "Remove " : "Add ") + label.replace(/^(Add|Remove) /, "")
      );
    });
  }

  function updatePicksBar() {
    const n = picks.size;
    picksCount.textContent = String(n);
    picksBar.classList.toggle("is-visible", n > 0);
  }

  function togglePick(id) {
    if (picks.has(id)) picks.delete(id);
    else picks.add(id);
    savePicks();
    hydratePicks();
    updatePicksBar();
  }

  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".pick-btn");
    if (!btn) return;
    togglePick(btn.dataset.pick);
  });

  function picksMessage() {
    const items = PRODUCTS.filter((p) => picks.has(p.id));
    if (!items.length) return "";
    const lines = items.map(
      (p, i) => i + 1 + ". " + p.name + " — " + inr(p.price)
    );
    const total = items.reduce((sum, p) => sum + p.price, 0);
    return (
      "Hi " + BUSINESS + "! 👋\n" +
      "I've shortlisted these pieces:\n\n" +
      lines.join("\n") +
      "\n\nTotal: " + inr(total) +
      "\n\nPlease share payment and delivery details."
    );
  }

  picksSend.addEventListener("click", () => {
    const msg = picksMessage();
    if (!msg) return;
    window.open(waLink(msg), "_blank", "noopener");
  });

  picksClear.addEventListener("click", () => {
    picks.clear();
    savePicks();
    hydratePicks();
    updatePicksBar();
  });

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    navLinks.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("is-open"));
  });

  overlay.addEventListener("click", () => setMenu(false));

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  // Close the drawer if the viewport grows past the mobile breakpoint
  if (typeof window.matchMedia === "function") {
    const mq = window.matchMedia("(max-width: 900px)");
    const onBreakpoint = (event) => {
      if (!event.matches) setMenu(false);
    };
    if (mq.addEventListener) mq.addEventListener("change", onBreakpoint);
    else if (mq.addListener) mq.addListener(onBreakpoint);
  }

  /* ---------- Header shadow ---------- */
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Enquiry form → WhatsApp ---------- */
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const interest = form.elements.interest.value;
    const message = form.elements.message.value.trim();

    const lines = ["Hi " + BUSINESS + "! 👋", "", "Name: " + name];
    if (phone) lines.push("Phone: " + phone);
    lines.push("Looking for: " + interest, "", "Message: " + message);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());

  /* ---------- Boot ---------- */
  renderProducts("all");
  updatePicksBar();
})();
