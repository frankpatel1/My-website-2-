# TrustNexus Technologies — Product Image Assets & Category Management Guide

This document explains the management of product images, OEM categories, brand additions, and the consultation enquiry form for the TrustNexus Technologies website.

---

## 1. Product Image Architecture & Swapping Images

All product category imagery is centralized in `/assets/images/products/`. Each image conforms to a strict visual aesthetic:
- **Visual Style:** Bright clean studio lighting, white to ice-blue gradient background, subtle blue tint, minimal small red accent where relevant (e.g. fire panel/alarm call point), no visible third-party brand marks or text on the hardware, three-quarter view, soft natural drop shadow.
- **Ratios & Containers:**
  - Category deep-dive & overview cards: **3:2** ratio (`cat-*.jpg`, 900x600 or 1200x800). Always use `object-fit: cover` and `object-position: center`.
  - Category thumbnails: **16:10** ratio (`thumb-*.jpg`, 600x375). Used on the homepage cards and navigation menus.
  - Hero isometric exploded stack: **4:3** ratio (`hero-product-stack.png`, transparent background).
  - Ecosystem orchestration diagram: **16:9** vector SVG (`ecosystem-diagram.svg`).
  - Social Open Graph card: **1200x630** (`og-product-categories.jpg`).

### Image File Manifest

| File Name | Format | Aspect Ratio | Dimensions (1x / 2x) | Primary Usage |
|---|---|---|---|---|
| `cat-surveillance-ai.jpg` | JPG / WebP / AVIF | 3:2 | 900x600 / 1800x1200 | Surveillance & AI deep-dive & overview card |
| `cat-access-control.jpg` | JPG / WebP / AVIF | 3:2 | 900x600 / 1800x1200 | Access Control deep-dive & overview card |
| `cat-fire-life-safety.jpg` | JPG / WebP / AVIF | 3:2 | 900x600 / 1800x1200 | Fire & Life Safety deep-dive & overview card |
| `cat-network-it.jpg` | JPG / WebP / AVIF | 3:2 | 900x600 / 1800x1200 | Network & IT deep-dive & overview card |
| `cat-voice-evacuation.jpg` | JPG / WebP / AVIF | 3:2 | 900x600 / 1800x1200 | Voice & Evacuation deep-dive & overview card |
| `hero-product-stack.png` | PNG / JPG | 4:3 | 1440x1080 | 3D Converged ELV Architectural Exploded Stack (UI, CCTV AI, Access Flow, Fire Safety, Network Backbone, Infrastructure Track Record) |
| `ecosystem-diagram.svg` | SVG (Vector) | 16:9 | Scalable | Section 5 Ecosystem Integration architecture |
| `thumb-surveillance-ai.jpg` | JPG / WebP | 16:10 | 600x375 / 1200x750 | Home solutions card & Industry card |
| `thumb-access-control.jpg` | JPG / WebP | 16:10 | 600x375 / 1200x750 | Home solutions card & Industry card |
| `thumb-fire-life-safety.jpg`| JPG / WebP | 16:10 | 600x375 / 1200x750 | Home solutions card & Industry card |
| `thumb-network-it.jpg` | JPG / WebP | 16:10 | 600x375 / 1200x750 | Home solutions card & Industry card |
| `thumb-voice-evacuation.jpg`| JPG / WebP | 16:10 | 600x375 / 1200x750 | Secondary solutions cards & menu |
| `thumb-command-control.jpg` | JPG / WebP | 16:10 | 600x375 / 1200x750 | Secondary solutions cards & menu |
| `og-product-categories.jpg` | JPG | 1200x630 | 1200x630 | Open Graph / Twitter card social preview |

### How to Swap an Image
1. Prepare your replacement image matching the aspect ratio and lighting guidelines.
2. Save the file with the exact name in `/assets/images/products/` (e.g. `cat-surveillance-ai.jpg`).
3. If high-DPI or modern formats are desired, export `@2x.jpg`, `.webp`, and `.avif` alongside it.
4. If modern `<picture>` tags are used:
   ```html
   <picture>
     <source type="image/avif" srcset="/assets/images/products/cat-surveillance-ai.avif">
     <source type="image/webp" srcset="/assets/images/products/cat-surveillance-ai.webp">
     <img src="/assets/images/products/cat-surveillance-ai.jpg" alt="Description" width="900" height="600" loading="lazy">
   </picture>
   ```

---

## 2. Adding a New Product Category or OEM Brand

### Adding a New Category
1. **Hero Hotspot:**
   In `/oem-product-categories/index.html` (Hero section), add an interactive hotspot `<button>` to `.hero-graphic-wrap`:
   ```html
   <button class="stack-hotspot" style="top: 72%; left: 45%;" data-target="new-category" aria-label="Explore New Category">
     <span class="hotspot-pulse"></span>
     <span class="hotspot-label">New Category</span>
   </button>
   ```
2. **Category Navigator Pill:**
   Add a pill button inside `.category-pills`:
   ```html
   <button class="cat-pill" data-target="category-new">New Category</button>
   ```
3. **Overview Bento Grid:**
   Add a card in `#category-overview .bento-grid`:
   ```html
   <a href="#category-new" class="bento-card">
     <div class="bento-card-media">
       <img src="/assets/images/products/cat-new.jpg" alt="New Category" width="600" height="400" loading="lazy">
       <div class="bento-red-line"></div>
     </div>
     <div class="bento-card-content">
       <span class="bento-cat-num">07 / 07</span>
       <h3 class="bento-card-title">New Category</h3>
       <p class="bento-card-desc">One-line purpose of how this integrates into the ecosystem.</p>
       <span class="bento-explore-link">Explore Category &rarr;</span>
     </div>
   </a>
   ```
4. **Deep-Dive Section:**
   Add a deep-dive `<section>` alternating layout direction using `.cat-deepdive-row.reverse` or standard. Include:
   - Category image with `.floating-chip` ("Part of your ecosystem")
   - "What's included" chips (`.spec-chip`)
   - "Where it fits" environments (`.env-item`)
   - "Integrates with" inter-category links (`.integrate-chip`)
   - "OEM brands we work with" logo pill row (`.oem-brand-pill`)
   - "How AMC 2.0 supports it" predictive maintenance note
   - "Discuss this category" link with preselection: `<a href="#enquiry-section" class="discuss-link" data-cat-select="new-category">Discuss this category &rarr;</a>`

### Adding a Brand to the Brand Wall
1. Locate the `#brand-wall` section in `/oem-product-categories/index.html`.
2. Add a new logo pill within the appropriate tier/row:
   ```html
   <div class="brand-item">
     <span class="brand-item-name">Brand Name</span>
   </div>
   ```
3. To maintain layout consistency, the CSS uses a `3:1` contain ratio (`aspect-ratio: 3 / 1; min-height: 52px;`).

---

## 3. Editing the Specification Help / Enquiry Form

The enquiry form is located in Section 8 (`#enquiry-section`).

### Form Fields Included
- `fullName` (text, required)
- `companyName` (text, required)
- `jobRole` (text, optional)
- `emailAddress` (email, required)
- `phoneNumber` (tel, required, with regex validation)
- `categories` (multi-select chip buttons with hidden inputs)
- `projectLocation` (text, required)
- `projectRequirement` (textarea, required)
- `projectFile` (file upload for BOQ / AutoCAD drawings, max 25MB)
- `website_hp` (hidden honeypot spam filter)

### Connecting to a Backend API / CRM
To forward submissions to your webhook or backend endpoint (e.g. Node server, HubSpot, Salesforce):
1. In the `<script>` tag of `/oem-product-categories/index.html`, locate the submit handler `categoryEnquiryForm.addEventListener('submit', ...)`:
   ```javascript
   const formData = new FormData(this);
   fetch('/api/consultation-enquiry', {
     method: 'POST',
     body: formData
   })
   .then(response => response.json())
   .then(data => {
     // Show checkmark success state
     document.getElementById('formSuccessState').style.display = 'block';
     document.getElementById('categoryEnquiryForm').style.display = 'none';
   })
   .catch(err => {
     alert('Submission failed. Please call our hotline +91-91048-01116.');
   });
   ```
2. The form includes an animated SVG checkmark and smooth scroll to confirmation upon submission.
