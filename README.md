# Noor Jewels — Imitation Jewellery Website

A premium single-page jewellery storefront with **WhatsApp ordering** built in.
No backend, no database — just HTML, CSS and vanilla JS.

## ⚠️ Pehle yeh karein — WhatsApp number set karein

`assets/js/config.js` kholkar apna WhatsApp number daalein:

```js
window.NOOR_CONFIG = {
  whatsappNumber: "919999999999",   // ← country code + number, sirf digits
  whatsappDisplay: "+91 99999 99999", // ← website par dikhega
  businessName: "Noor Jewels"
};
```

- Number me `+`, space ya dash nahi hona chahiye. Example: `919876543210`
- Yeh number har jagah use hota hai — navbar, product buttons, floating button, contact form, footer.

## Chalane ka tarika (run locally)

```bash
# Python
python3 -m http.server 8000

# ya Node
npx serve .
```

Phir browser me `http://localhost:8000` kholhein.

## Features

- **WhatsApp ordering** — har product ka button ek pre-filled WhatsApp message
  kholta hai (product name + price ke saath)
- **Shortlist / enquiry list** — heart icon se products chunein, neeche bar se
  saare ek saath WhatsApp par bhejein (localStorage me save rehta hai)
- **Enquiry form → WhatsApp** — naam, phone aur message bharkar seedha chat me
  bhej sakte hain; koi data store nahi hota
- **Category filter** — Necklaces, Earrings, Bangles, Rings, Maang Tikka
- **Fully responsive** — mobile drawer menu, touch-friendly buttons
- **Accessible** — keyboard navigation, ARIA labels, reduced-motion support
- **SEO basics** — meta description, semantic HTML, lazy images

## File structure

```
index.html              # Poori single-page site
assets/
  css/style.css         # Design system + saare sections
  js/config.js          # ← WhatsApp number & business name
  js/main.js            # Products, filters, shortlist, form, menu
  fonts/                # Self-hosted fonts (no external requests)
  img/hero.jpg          # Hero image
  img/products/p1–p8.jpg # Product photos
```

## Brand name badalna

- `assets/js/config.js` me `businessName` (WhatsApp messages me use hota hai)
- `index.html` me `<title>`, navbar ka "Noor Jewels" aur footer

## Products add / change karna

`assets/js/main.js` me `PRODUCTS` array edit karein:

```js
{
  id: "unique-id",
  name: "Product Name",
  category: "necklace",        // necklace | earrings | bangles | rings | tikka
  categoryLabel: "Necklace set",
  price: 1299,                 // selling price
  mrp: 2499,                   // cut price
  img: "assets/img/products/p1.jpg",
  badge: "Bestseller",         // ya "New", "Bridal edit"
  rating: 4.9,
  desc: "Short description."
}
```

Image `assets/img/products/` me daalein (square, 1000×1000px recommended).

## Notes

- Yeh **imitation jewellery** ke liye hai — koi real gold/precious stone claim nahi.
- Prices, reviews aur store details sample hain; apne hisaab se badal lein.
- WhatsApp link `wa.me` use karta hai, jo mobile aur desktop dono par kaam karta hai.
