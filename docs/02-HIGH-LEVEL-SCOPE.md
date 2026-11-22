# 02 – High-Level Scope

> **Document Status:** STEP 01 Deliverable
> **Scope Classification:** Platform modules `A` through `T` are `CONFIRMED` by the Business Owner. The **MVP vs. Future Enhancements** split below is `PROPOSED` by the Project Manager for Business Owner validation during STEP 02.

---

## 1. Platform Modules & MVP vs. Future Boundary

| ID | Module (`CONFIRMED`) | MVP Scope (`PROPOSED`) | Future Enhancements (`PROPOSED`) |
|---|---|---|---|
| **A** | **Brand Homepage & Landing Experience** | Cinematic animated hero, creative brand storytelling, monochrome/neutral scroll-transitioning sections, smooth reveals/parallax, featured drops/collections, custom-printing callout, modern mobile-first navigation. | Seasonal campaign microsites, video lookbooks, interactive editorial archives, A/B-tested hero variants. |
| **B** | **Product Catalogue** | Browsable product grid with editorial imagery, price in `LKR`, availability badges, sorting (newest, price), and basic filtering (category, size, colour). | Advanced multi-facet filtering, predictive search with typo tolerance, personalized recommendations, wishlists. |
| **C** | **Product Categories & Collections** | Structured categories (e.g., Oversized Tees, Graphic Tees, DTF Prints, Custom Blanks) and curated collections/drops managed from Admin. | Timed limited-drop countdowns, waitlist/notify-me signups, lookbook shop-the-look bundles. |
| **D** | **Product Details & Variants** | High-res gallery, size/colour/quantity selectors, stock visibility, size guide, garment/DTF care info, and clear `LKR` pricing. | 360-degree garment previews, fit finder assistant, verified customer reviews & photo UGC. |
| **E** | **Custom T-Shirt Design Requests** | Structured custom design request workflow: garment/size/colour/quantity selection, print placement & design brief notes, linked cleanly into cart/order flow. | Live interactive 2D/3D garment mockup studio with drag-and-drop canvas and automated pricing engine. |
| **F** | **Customer Artwork Upload** | Secure file upload (validated formats & size limits) attached to a custom order item, preview confirmation for customer, and downloadable by Admin for DTF prep. | Automated DPI/resolution pre-flight checks, vector conversion tools, saved customer artwork library. |
| **G** | **Shopping Cart** | Persistent cart supporting ready-made and custom items, quantity edits, item removal, subtotal calculation in `LKR`, and delivery note support. | Promo/coupon codes, bundle discounts, abandoned-cart recovery notifications. |
| **H** | **Customer Checkout** | Guest-friendly checkout capturing customer contact and Sri Lankan delivery address, order review, and one-step order placement. | Saved customer address book, optional customer accounts, multiple delivery methods/pickup scheduling. |
| **I** | **Unique Order Management** | Automatic generation of a collision-free, human-readable unique order number (e.g., `VXD-YYYYMMDD-XXXX`, format `UNRESOLVED`), immutable order snapshot, and status lifecycle tracking. | Split shipments, partial fulfillment, automated courier waybill generation, invoice PDF downloads. |
| **J** | **Bank Transfer Instructions** | Clear post-order confirmation screen displaying the unique order number, exact total in `LKR`, VEXED bank account details, and copy-to-clipboard helpers. | Multiple selectable bank accounts, QR transfer support (LankaQR) if approved later. |
| **K** | **WhatsApp Payment Slip Communication** | Order-specific pre-filled WhatsApp deep link (`wa.me`) containing order number, customer name, and total `LKR` so the customer can immediately attach their bank deposit slip. | WhatsApp Business API automated status alerts (order confirmed, printed, dispatched). |
| **L** | **Manual Payment Verification** | Admin workflow to review orders awaiting verification, record manual confirmation notes/reference, and explicitly mark payment as Verified or Rejected. **No automatic payment confirmation via WhatsApp (`CONFIRMED`).** | Optional online card/bank payment gateway integration (e.g., PayHere) alongside bank transfer; optional slip upload directly on site. |
| **M** | **Admin Dashboard** | Secure, role-protected back office displaying key KPIs (new orders, pending payment verifications, orders in printing/packaging/delivery) and quick operational queues. | Advanced revenue analytics, cohort reporting, staff sub-roles, multi-admin audit dashboards. |
| **N** | **Product & Inventory Management** | Admin CRUD for products, categories, collections, variants (size/colour), pricing (`LKR`), imagery, active/draft visibility, and stock counts. | Low-stock automated alerts, supplier/blank garment inventory tracking, bulk CSV import/export. |
| **O** | **Customer Management** | Admin directory of customers derived from orders, showing contact details, delivery info, and order history. | Full customer portal/accounts, VIP tagging, loyalty points, CRM/marketing segmentation. |
| **P** | **Order Tracking** | Public, privacy-safe order status lookup using unique order number + verification field (e.g., phone/email — `PROPOSED`), showing payment and fulfillment stages (Printing, Packaging, Delivery). | Real-time courier GPS tracking links, automated SMS/email/WhatsApp milestone notifications. |
| **Q** | **Website Content Management** | Admin ability to manage key storefront content (homepage hero/banners, featured collections, announcement bar, bank transfer instructions, policies/FAQ). | Full visual page builder, blog/editorial journal CMS, scheduled campaign publishing. |
| **R** | **SEO & Marketing Foundation** | Clean semantic URLs, editable page metadata, Open Graph/social share previews, XML sitemap, `robots.txt`, structured product schema, and analytics readiness. | Email marketing automation, Meta Pixel / TikTok / Google Ads conversion API, referral programs. |
| **S** | **Security & Privacy** | HTTPS enforcement, secure admin authentication, input validation, safe artwork upload scanning/sanitization, rate limiting, CSRF/XSS protection, audit logging for payment status changes, privacy policy baseline. | Admin 2FA/MFA, automated vulnerability scanning pipelines, formal third-party penetration testing. |
| **T** | **Deployment & Maintenance** | Production hosting setup, environment configuration, automated backups, monitoring/uptime alerts, error logging, and documented runbooks. | Staging/canary pipelines, multi-region CDN optimization, SLA-backed scaling and scheduled performance audits. |

---

## 2. Explicit Non-Goals & Exclusions for MVP

| Item | Reason | Classification |
|---|---|---|
| Automatic payment verification via WhatsApp | Explicitly prohibited; Business Owner must manually verify receipt of funds before marking an order paid. | `CONFIRMED` |
| Online credit/debit card payment gateway | Not part of initial bank-transfer + WhatsApp ordering journey; may be evaluated post-MVP. | `PROPOSED` / `UNRESOLVED` (`OQ-015`) |
| Native iOS / Android mobile apps | Web-first, mobile-exceptional responsive experience covers initial launch needs. | `PROPOSED` |
| Multi-currency & international shipping | Initial market is strictly Sri Lanka (`LKR`). | `CONFIRMED` |
| Real-time 3D interactive T-shirt customizer | High cost/complexity; MVP uses structured custom design request + artwork upload. | `PROPOSED` (`OQ-007`) |

---

## 3. Scope Change Management Policy (`CONFIRMED`)

- No module, requirement, or MVP boundary may be altered silently.
- Any scope addition, removal, or reclassification between MVP and Future Enhancements must be evaluated for impact on timeline, architecture, and quality, logged in `project-management/DECISION-LOG.md`, and explicitly approved by the Business Owner.
