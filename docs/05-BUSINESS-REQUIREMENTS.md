# 05 – Business Requirements Document (BRD)

> **Phase:** STEP 02 – Business Analysis and Requirements Engineering  
> **Prepared By:** Senior Business Analyst (with QA Engineer testability review)  
> **Status:** `COMPLETED – AWAITING PM & BUSINESS OWNER APPROVAL`  
> **Classification Legend:** `CONFIRMED` (Owner-approved) | `PROPOSED` (Team recommendation) | `UNRESOLVED` (Owner decision required; zero invented business facts)

---

## 1. Business Requirements

| ID | Requirement | Classification | Related Module(s) |
|---|---|---|---|
| **BR-01** | Deliver an international-grade Sri Lankan streetwear & custom DTF T-shirt e-commerce platform for **VEXED** (*"NOT MADE TO BLEND IN."*) transacting exclusively in `LKR`. | `CONFIRMED` | A, B, H |
| **BR-02** | Support two core revenue streams in one storefront: (1) ready-made streetwear (oversized tees, DTF graphic tees, curated collections) and (2) custom DTF T-shirt orders (custom design requests, customer-specific printing, customer-uploaded artwork). | `CONFIRMED` | B, C, D, E, F |
| **BR-03** | Enforce a bank-transfer + WhatsApp deposit slip ordering model where every order receives a unique order number, displays business bank details, and launches a pre-filled order-specific WhatsApp message. | `CONFIRMED` | I, J, K |
| **BR-04** | **Mandatory Payment Governance:** WhatsApp communication is never automatic payment verification. The Business Owner must manually verify actual bank fund receipt before an admin marks any order as paid or releases it for production. | `CONFIRMED` | L, M |
| **BR-05** | Provide end-to-end operational visibility from order placement through printing, packaging, and delivery, enabling both admin control and self-service customer order tracking. | `CONFIRMED` | I, M, P |
| **BR-06** | Provide an editorial, motion-rich, mobile-first brand experience inspired by `suwada.lk` (monochrome/neutral scroll-transitioning aesthetic) while maintaining a unique VEXED identity and fast Sri Lankan mobile usability. | `CONFIRMED` / `PROPOSED` | A, Q |
| **BR-07** | Enable non-technical Business Owner administration of products, variants, inventory, orders, manual payments, custom artwork files, customers, and core website content. | `CONFIRMED` | M, N, O, Q |
| **BR-08** | Protect customer personal data, uploaded artwork, and administrative operations through baseline security, privacy, and audit controls. | `CONFIRMED` | F, L, S |

---

## 2. Functional Requirements

### 2.1 Customer & Storefront Experience
| ID | Requirement | Classification |
|---|---|---|
| **FR-01** | **Brand Homepage:** Present a cinematic animated hero, editorial storytelling sections with smooth dark/light/monochrome scroll transitions, featured collections, custom DTF call-to-action, and mobile-friendly navigation. | `CONFIRMED` |
| **FR-02** | **Product Catalogue & Discovery:** Display active ready-made products and customisable blanks with high-resolution imagery, `LKR` pricing, stock/availability indicators, sorting (newest, price low–high, price high–low), and filtering by category, collection, size, and colour. | `CONFIRMED` / `PROPOSED` |
| **FR-03** | **Categories & Collections:** Organize products into manageable categories (e.g., Oversized Tees, Graphic Tees, DTF Prints, Custom Blanks) and curated collections/drops. | `CONFIRMED` |
| **FR-04** | **Product Details & Variants (Oversized & DTF):** Display multi-image gallery, fabric/fit specs (oversized fit, GSM, DTF care instructions), size guide, size/colour/quantity selectors, real-time variant stock availability, and clear `LKR` pricing. | `CONFIRMED` |

### 2.2 Custom DTF Design Requests & Artwork Uploads
| ID | Requirement | Classification |
|---|---|---|
| **FR-05** | **Custom Design Request Intake:** Allow customers to select base garment (e.g., oversized blank), size, colour, quantity, print placement(s) (front/back/sleeve — `PROPOSED`), and submit text instructions/design brief notes. | `CONFIRMED` / `PROPOSED` |
| **FR-06** | **Customer Artwork Upload:** Allow customers to upload print artwork attached to a custom order item with client- and server-side validation of file type, file size limit, and upload confirmation preview (`OQ-008`). | `CONFIRMED` |
| **FR-07** | **Artwork Ownership Confirmation:** Require customer confirmation that uploaded artwork does not infringe third-party copyright/trademarks before adding to cart (`PROPOSED`, linked to `OQ-008`). | `PROPOSED` |

### 2.3 Shopping Cart, Checkout & Customer Information
| ID | Requirement | Classification |
|---|---|---|
| **FR-08** | **Shopping Cart:** Persist cart items across page navigation/reloads; support mixed carts (ready-made + custom DTF items), quantity updates, item removal, custom brief/artwork summary display, and live `LKR` subtotal calculation. | `CONFIRMED` |
| **FR-09** | **Guest-First Checkout:** Allow customers to place orders without mandatory account creation (`PROPOSED`, `OQ-018`) by collecting validated customer info: full name, Sri Lankan mobile/WhatsApp number, email address (optional or required per `OQ-018`), delivery street address, city, district, postal code (optional), and optional delivery notes. | `CONFIRMED` / `PROPOSED` |
| **FR-10** | **Order Summary & Total Calculation:** Display itemized line totals, garment variants/custom specs, delivery fee (`LKR` per `OQ-010`), and grand total in `LKR` before final order submission. | `CONFIRMED` |

### 2.4 Unique Order Management, Bank Transfer & WhatsApp Communication
| ID | Requirement | Classification |
|---|---|---|
| **FR-11** | **Unique Order Number Generation:** Upon order placement, atomically generate a collision-free, human-readable unique order number (recommended default: `VXD-YYYYMMDD-XXXX`, `OQ-011`) and persist an immutable snapshot of item prices, variants, custom briefs, artwork references, and customer delivery details. | `CONFIRMED` / `PROPOSED` |
| **FR-12** | **Bank Transfer Instructions Screen:** Immediately after order placement, show the unique order number, exact total payable in `LKR`, VEXED business bank account details (configured via Admin/CMS; never hardcoded fake values — `OQ-003`), payment reference guidance, and one-click copy buttons (`PROPOSED`). | `CONFIRMED` / `PROPOSED` |
| **FR-13** | **Order-Specific WhatsApp Payment Slip Link:** Provide a prominent button launching WhatsApp (`wa.me/<configured-number>?text=...`, `OQ-002`) pre-populated with order number, customer name, item summary/count, and exact `LKR` total so the customer can attach and send their bank deposit slip directly. | `CONFIRMED` |
| **FR-14** | **No Automated Payment Confirmation:** Opening or returning from WhatsApp shall **never** change an order's payment status to Paid/Verified. | `CONFIRMED` |

### 2.5 Manual Payment Verification & Admin Dashboard
| ID | Requirement | Classification |
|---|---|---|
| **FR-15** | **Secure Admin Authentication:** Restrict Admin Dashboard access to authenticated administrators with encrypted credentials and session expiration. | `CONFIRMED` |
| **FR-16** | **Admin Operational Dashboard:** Display summary counts and quick-filter queues for: New Orders, Pending Payment Verification, Pending Custom Artwork Review, In Printing, Packaging, Dispatched/Out for Delivery, and Low-Stock Variants (`PROPOSED`). | `CONFIRMED` / `PROPOSED` |
| **FR-17** | **Manual Payment Verification Workflow:** Allow Admin to search orders by unique order number/customer/phone, inspect expected `LKR` total, record bank reference/verification notes, and explicitly mark payment as `Payment Verified` or `Payment Rejected` with mandatory timestamp and admin actor audit log. | `CONFIRMED` / `PROPOSED` |
| **FR-18** | **Order & Production Management:** Allow Admin to view full order details, download customer-uploaded artwork files at original quality, approve/request changes on custom artwork (`PROPOSED`), and advance fulfillment statuses through `Printing`, `Packaging`, `Dispatched / Out for Delivery`, `Delivered`, or `Cancelled` with optional tracking/internal notes. | `CONFIRMED` / `PROPOSED` |
| **FR-19** | **Product & Inventory Management:** Allow Admin to create/edit/archive products, categories, collections, variant combinations (size/colour), `LKR` prices, media galleries, and stock counts; automatically decrement available variant stock on order placement and restore stock on cancellation (`PROPOSED`). | `CONFIRMED` / `PROPOSED` |
| **FR-20** | **Customer Management:** Provide an admin customer directory aggregated from orders showing contact info, delivery history, order count, and total `LKR` spend. | `CONFIRMED` / `PROPOSED` |
| **FR-21** | **Website Content Management (CMS):** Allow Admin to update homepage hero/featured banners, announcement text, active bank transfer details, official WhatsApp target number, and store policy pages without code deployments. | `CONFIRMED` / `PROPOSED` |

### 2.6 Customer Order Tracking & SEO Foundation
| ID | Requirement | Classification |
|---|---|---|
| **FR-22** | **Privacy-Safe Customer Order Tracking:** Provide a public tracking page where a customer enters their unique order number plus a verification factor (phone number or email — `PROPOSED`) to view current payment verification status, fulfillment stage (Placed → Verified → Printing → Packaging → Dispatched → Delivered), and order summary without exposing full sensitive PII. | `CONFIRMED` / `PROPOSED` |
| **FR-23** | **SEO & Shareability Baseline:** Support clean semantic product/collection URLs, configurable meta titles/descriptions, Open Graph social preview tags, XML sitemap, and `robots.txt`. | `CONFIRMED` |

---

## 3. Non-Functional Requirements

| ID | Category | Requirement | Classification |
|---|---|---|---|
| **NFR-01** | **Mobile Performance** | Storefront pages must remain responsive and smooth on mid-range smartphones and Sri Lankan 4G mobile networks; images must be optimized/lazy-loaded and animations must respect `prefers-reduced-motion` and avoid blocking checkout. | `PROPOSED` |
| **NFR-02** | **Security & Access Control** | Enforce HTTPS site-wide, secure admin authentication, RBAC/admin-only API enforcement, CSRF/XSS/SQLi protection, rate limiting on checkout/upload/order-lookup endpoints, and zero public exposure of admin routes or other customers' data. | `CONFIRMED` / `PROPOSED` |
| **NFR-03** | **Upload Safety** | Uploaded customer artwork must undergo strict MIME/magic-byte validation, file-size enforcement, randomized non-executable storage naming, and isolated private object storage accessible only to authorized admins (never executed on server). | `PROPOSED` |
| **NFR-04** | **Data Integrity & Concurrency** | Order number generation and variant inventory deduction must be atomic/transactional to prevent duplicate order numbers or overselling the last unit in stock. | `PROPOSED` |
| **NFR-05** | **Auditability** | Every manual payment status change, fulfillment status change, and order cancellation must persist an immutable audit log (timestamp, actor, previous status, new status, optional note). | `PROPOSED` |
| **NFR-06** | **Reliability & Backups** | Production database and uploaded customer artwork must have automated daily backups with verified restore procedures. | `PROPOSED` |
| **NFR-07** | **Usability & Accessibility** | Clear visual contrast across dark and light scroll sections, readable `LKR` currency formatting (e.g., `LKR 4,500`), mobile tap targets ≥ 44px, and clear inline validation messages on checkout and custom upload forms. | `PROPOSED` |
| **NFR-08** | **Maintainability & Extensibility** | Modular architecture allowing future additions (e.g., Sri Lankan online payment gateway, WhatsApp Business API notifications, customer accounts, advanced DTF mockup studio) without rewriting core order/catalog logic. | `PROPOSED` |

---

## 4. Customer Journey

Mapping the confirmed 17-step ordering journey across both **Ready-Made** and **Custom DTF** paths:

| Stage | Confirmed Steps | System Behavior & User Actions |
|---|---|---|
| **1. Discover** | Steps 1–3 | Customer lands on cinematic VEXED homepage → explores collections/catalogue (filters by category, size, colour) → selects a ready-made tee or custom DTF blank. |
| **2. Configure** | Steps 4–5 | Selects size, colour, quantity. For custom orders, optionally enters design brief, print placement, and uploads artwork file (validated on upload). |
| **3. Cart & Checkout** | Steps 6–8 | Adds item(s) to cart → reviews `LKR` subtotal & custom notes → enters Sri Lankan contact & delivery details → confirms and submits order. |
| **4. Order Confirmation & Payment Handoff** | Steps 9–13 | System generates unique order number → displays order summary + VEXED bank details + exact `LKR` total → customer completes bank transfer externally → clicks order-specific WhatsApp CTA (pre-filled with order number, name, total) → attaches bank deposit slip in WhatsApp. |
| **5. Manual Verification & Fulfillment** | Steps 14–16 | Business Owner checks bank account → Admin verifies payment in dashboard → order moves through Artwork Review *(custom)* → Printing → Packaging → Delivery. |
| **6. Track** | Step 17 | Customer visits Order Tracking page → enters unique order number + phone/email verification → checks live payment and production/delivery status anytime. |

---

## 5. Admin Workflow

1. **Daily Triage (Dashboard):** Admin signs in → reviews KPI counters (`Awaiting Payment Verification`, `Custom Artwork Review`, `Ready to Print`, `Packaging`, `Out for Delivery`, `Low Stock`).
2. **Manual Payment Verification:** Admin receives slip in WhatsApp → checks actual funds in VEXED's bank account → locates order by unique order number in Admin → records bank ref/note → marks payment **`Payment Verified`** (or **`Payment Rejected`** with reason if unpaid/mismatch/fraudulent).
3. **Custom DTF Review (Custom Orders Only):** Admin opens custom order → inspects brief & downloads original artwork → verifies print readiness (resolution/transparency/placement) → approves for production or contacts customer via WhatsApp for revised file.
4. **Production & Delivery Progression:** Admin advances fulfillment status step-by-step: `Confirmed for Production` → `Printing` → `Packaging` → `Dispatched / Out for Delivery` (optionally recording courier reference) → `Delivered`.
5. **Catalogue, Inventory & CMS Maintenance:** Admin adds/edits oversized & graphic tees, manages variant stock counts, updates featured drops/hero banners, and maintains official bank details and WhatsApp number in CMS settings.

---

## 6. Order and Payment Workflow

### 6.1 Separated Status Model (`PROPOSED`, `OQ-014`)
Separating **Payment Status** from **Fulfillment Status** ensures manual verification never gets conflated with print production:

- **Payment Status:**
  - `AWAITING_PAYMENT` *(default immediately on order creation)*
  - `SLIP_SUBMITTED` *(optional customer/admin marker; still NOT paid)*
  - `PAYMENT_VERIFIED` *(only set manually by Admin after checking bank account)*
  - `PAYMENT_REJECTED` *(slip invalid, unpaid, or mismatched amount)*
  - `REFUNDED` *(if cancelled after verified payment)*

- **Fulfillment Status:**
  - `ORDER_PLACED` *(default on creation)*
  - `ARTWORK_REVIEW` *(custom DTF orders requiring print check)*
  - `CONFIRMED_FOR_PRODUCTION` *(requires `PAYMENT_VERIFIED`)*
  - `PRINTING`
  - `PACKAGING`
  - `DISPATCHED` *(Out for Delivery / Handed to Courier)*
  - `DELIVERED`
  - `CANCELLED` *(restores inventory if not yet printed)*

### 6.2 Guardrail Business Rules
1. **Strict Production Gate (`CONFIRMED`):** An order cannot transition to `CONFIRMED_FOR_PRODUCTION` or `PRINTING` unless Payment Status is `PAYMENT_VERIFIED`.
2. **No Auto-Verification (`CONFIRMED`):** Clicking the WhatsApp button never sets `PAYMENT_VERIFIED`.
3. **Unpaid Expiry (`PROPOSED`, `OQ-012`):** Recommend a **48-hour** payment window; orders remaining `AWAITING_PAYMENT` past expiry can be flagged for Admin cancellation and stock release.
4. **Immutable Financial Snapshot (`PROPOSED`):** Later product price edits in Admin must never retroactively change totals on already-placed orders.

---

## 7. Custom DTF Workflow

1. **Selection:** Customer selects custom DTF product/blank, garment colour, size, and quantity.
2. **Specification & Upload:** Customer selects print placement(s) (`PROPOSED`: Front / Back / Front + Back / Sleeve), enters optional design instructions, uploads artwork file(s), and accepts the artwork rights disclaimer.
3. **Validation:** System validates format (recommended default: `PNG`, `PDF`, `SVG`, `AI` — `OQ-008`) and max size (recommended default: `25 MB` per file — `OQ-008`), saves securely to private storage, and displays upload confirmation.
4. **Checkout & Order Binding:** Custom metadata + artwork reference bind permanently to the generated order line item.
5. **Admin Printability Check:** Admin downloads the unmodified artwork file to verify DTF suitability (resolution/transparency). If unprintable, Admin contacts the customer via WhatsApp for a replacement file before printing.
6. **Payment Timing Dependency (`UNRESOLVED`, `OQ-013`):** Recommend **Model A (Standard Custom Upload = pay after order placement via standard bank transfer; Bespoke Design-From-Scratch = Admin confirms quote/artwork before production)** until Business Owner confirms preference.

---

## 8. User Stories

| ID | Actor | Story | Linked FR |
|---|---|---|---|
| **US-01** | Shopper | As a streetwear shopper, I want to browse VEXED's editorial homepage and filter collections by category, size, and colour so I can discover oversized tees effortlessly on mobile. | FR-01–FR-03 |
| **US-02** | Shopper | As a shopper, I want to inspect garment fit, DTF care info, size chart, stock status, and `LKR` price so I can pick the right size and colour with confidence. | FR-04 |
| **US-03** | Custom Buyer | As a custom T-shirt buyer, I want to specify placement/notes and upload my artwork directly while ordering so VEXED can print my exact design. | FR-05–FR-07 |
| **US-04** | Shopper | As a buyer, I want to combine ready-made and custom tees in one cart and check out as a guest with my Sri Lankan delivery address so ordering is fast. | FR-08–FR-10 |
| **US-05** | Shopper | As a buyer, after placing my order I want a unique order number, clear bank details, and a one-tap pre-filled WhatsApp button so I can send my bank slip without typing errors. | FR-11–FR-13 |
| **US-06** | Shopper | As a buyer, I want to track my order status using my order number and phone/email so I know when my payment is verified and when my tee is printed and dispatched. | FR-22 |
| **US-07** | Admin / Owner | As the Business Owner, I want to manually verify bank transfers against exact order totals and record a reference before approving production so no unpaid order is ever printed. | FR-15–FR-17 |
| **US-08** | Admin / Owner | As the Business Owner, I want to download original customer artwork, update order production stages, and manage products/stock/CMS content from one dashboard so operations stay organized. | FR-18–FR-21 |

---

## 9. Acceptance Criteria & QA Edge Cases

> **QA Note:** Criteria below are written for future verification in STEPs 07–12. **No application testing has been executed** because no software exists yet.

### 9.1 Core Positive Acceptance Criteria
- **AC-01 (Catalogue & Variant Selection):** Given an active product with size/colour variants in stock, when a shopper selects a valid variant and quantity ≤ available stock and adds to cart, then the exact variant, quantity, and `LKR` price appear in the persistent cart.
- **AC-02 (Custom DTF & Artwork Upload):** Given a customer on the custom order form, when they select garment specs, upload a valid file within format/size limits, check the ownership confirmation, and submit, then the artwork securely attaches to the cart item and appears downloadable in Admin after checkout.
- **AC-03 (Checkout & Unique Order Number):** Given valid cart items and valid Sri Lankan delivery details, when the customer submits checkout, then exactly one order is created with a unique order number, variant inventory decrements transactionally, and the cart clears.
- **AC-04 (Bank Details & WhatsApp Link):** Immediately after order creation, the confirmation page displays the unique order number, exact `LKR` grand total, CMS-configured bank details, and a WhatsApp link whose URL-encoded message contains the order number, customer name, and exact `LKR` total.
- **AC-05 (Manual Payment Verification Gate):** Given an order in `AWAITING_PAYMENT`, when Admin manually selects `PAYMENT_VERIFIED` with an optional bank ref, then payment status updates, an audit log entry records admin ID + timestamp, and fulfillment becomes eligible to move to `CONFIRMED_FOR_PRODUCTION` → `PRINTING` → `PACKAGING` → `DISPATCHED` → `DELIVERED`.
- **AC-06 (Order Tracking Lookup):** Given a valid order number and matching customer phone/email, when submitted on the tracking page, then current payment status, fulfillment stage, and non-sensitive order summary are displayed.
- **AC-07 (Admin Product & Inventory CRUD):** When Admin creates/edits a product, variant stock, or CMS bank details, the changes reflect immediately on the storefront without affecting historical order snapshots.

### 9.2 Negative Scenarios & Edge Cases (`QA Collaboration`)
- **NEG-01 (WhatsApp Non-Verification):** Customer clicks the WhatsApp CTA and returns to site without transferring money → Order **must remain** `AWAITING_PAYMENT`; Admin cannot mistakenly see it as paid.
- **NEG-02 (Production Before Payment):** Admin attempts to move an `AWAITING_PAYMENT` or `PAYMENT_REJECTED` order directly into `PRINTING` → System blocks transition and displays a clear warning requiring `PAYMENT_VERIFIED`.
- **NEG-03 (Invalid / Malicious Artwork Upload):** Customer uploads an unsupported file (`.exe`, `.php`, spoofed `.png` extension) or exceeds max file size → Upload is rejected server-side with a clear user message and nothing is persisted.
- **NEG-04 (Out-of-Stock & Concurrent Checkout Race):** Two customers attempt to buy the final unit of an oversized tee simultaneously → First transaction succeeds; second receives an out-of-stock error without creating a ghost order or negative inventory.
- **NEG-05 (Double-Submit Checkout):** Customer taps "Place Order" twice on a slow Sri Lankan mobile network → Idempotency prevents duplicate orders and duplicate stock deductions.
- **NEG-06 (Order Tracking Privacy Probe):** User enters a valid or guessed order number with an incorrect phone/email (or floods requests) → System returns a generic "Order not found" message (no PII leak) and enforces rate limiting.
- **NEG-07 (Partial / Mismatched Bank Transfer):** Customer transfers less than the order `LKR` total → Admin marks `PAYMENT_REJECTED` with a discrepancy note; order does not enter production until resolved.
- **NEG-08 (Unconfigured Business Settings Guard):** If official bank details or WhatsApp number are empty in CMS before launch, checkout/admin flags a configuration error rather than showing fabricated details.
- **NEG-09 (Cancelled Order Stock Recovery):** Admin cancels an unpaid/pre-print order → Reserved variant stock is accurately restored once (idempotent—cannot double-restore on repeated cancel calls).

---

## 10. MVP Priorities

| Priority | Tier | Included Capabilities (Modules) |
|---|---|---|
| **P0** | **Must-Have (Core Launch Blocker)** | Editorial Brand Homepage & mobile nav (**A**); Catalogue, Categories/Collections, PDP & oversized/DTF variants (**B–D**); Custom DTF request form & secure artwork upload (**E–F**); Persistent Cart & Guest Checkout (**G–H**); Atomic Unique Order Number (**I**); Bank Transfer Instructions & Pre-filled WhatsApp Slip Link (**J–K**); Admin Auth, Manual Payment Verification + Audit Log, Order/Artwork Management, Product/Inventory CRUD (**L–N**); Privacy-Safe Order Tracking (**P**); Security & Production Deployment baselines (**S–T**). |
| **P1** | **Should-Have (MVP Polish)** | Admin Customer Directory (**O**); CMS editing for hero banners, bank details, WhatsApp number & policies (**Q**); Core SEO metadata, Open Graph, sitemap & `robots.txt` (**R**); Unpaid order expiry alerts & copy-to-clipboard bank helpers. |
| **P2** | **Post-MVP / Future Enhancements** | Online card/bank gateways (e.g., PayHere), LankaQR, Cash on Delivery (unless upgraded in `OQ-015`), WhatsApp Business API automated notifications, customer accounts/loyalty, promo codes, 2D/3D live garment customizer studio, courier API auto-waybills, multi-currency/international shipping. |

---

## 11. Unresolved Business Decisions

All 20 existing open questions (`OQ-001`–`OQ-020`) plus 1 newly identified BA item (`OQ-021`) are classified below with safe **recommended defaults** (zero invented real business facts):

| ID | Topic | Classification | Recommended Default (`PROPOSED`) Until Owner Confirms |
|---|---|---|---|
| **OQ-001** | Legal business name, registration & address | `UNRESOLVED` | Display "VEXED" brand name with Admin-editable legal footer fields; populate real registration/address before launch. |
| **OQ-002** | Official support email, phone & WhatsApp Business number | `UNRESOLVED` | Store in Admin CMS/environment config (no hardcoded placeholder numbers in production); mandatory pre-launch check (`NEG-08`). |
| **OQ-003** | Business bank account details | `UNRESOLVED` | Store in Admin CMS settings so Owner can enter/update real bank name, branch, account holder & number securely before launch. |
| **OQ-004** | Online-only vs. local studio pickup | `UNRESOLVED` | Default MVP to **online delivery only**; add pickup toggle later if Owner confirms a physical location. |
| **OQ-005** | Initial catalog, oversized blank GSM, colours & size chart | `UNRESOLVED` | Design flexible variant schema (Size + Colour + CMS size chart table) so Owner can load exact SKUs/measurements in Admin. |
| **OQ-006** | Ready-made vs. custom DTF `LKR` pricing rules | `UNRESOLVED` | Default MVP to base blank `LKR` price + configurable flat print-zone add-ons (e.g., Front / Back / Sleeve); bulk pricing handled via custom inquiry. |
| **OQ-007** | Custom request form vs. interactive preview studio | `PROPOSED` / `UNRESOLVED` | **Structured form + placement selector + artwork upload + text brief** for MVP; interactive mockup studio deferred to P2. |
| **OQ-008** | Artwork file formats, max size, DPI & copyright notice | `PROPOSED` / `UNRESOLVED` | Allow `PNG`, `PDF`, `SVG`, `AI` up to `25 MB`; advise 300 DPI transparent PNG in UI; require copyright ownership checkbox. |
| **OQ-009** | Target Sri Lankan customer profile & B2B bulk demand | `UNRESOLVED` | Optimize UX for Sri Lankan Gen-Z/Millennial mobile streetwear buyers (16–35) with an inquiry/quantity option for bulk custom orders. |
| **OQ-010** | Sri Lankan delivery model, `LKR` fees & transit times | `UNRESOLVED` | Support configurable flat island-wide `LKR` fee or Colombo vs. Outstation two-tier table in Admin CMS, plus optional free-shipping threshold. |
| **OQ-011** | Unique order number format | `PROPOSED` / `UNRESOLVED` | `VXD-YYYYMMDD-XXXX` (date-scoped sequential or short random suffix, guaranteed unique). |
| **OQ-012** | Unpaid order expiry window | `PROPOSED` / `UNRESOLVED` | **48 hours** unpaid window; Admin reviews and cancels expired orders to release stock. |
| **OQ-013** | Custom order payment timing (immediate vs. post-review) | `UNRESOLVED` | Pay immediately after checkout for standard priced custom uploads; require Admin quote confirmation only for bespoke design-from-scratch requests. |
| **OQ-014** | Separated Payment & Fulfillment lifecycles | `PROPOSED` / `UNRESOLVED` | Adopt the separated status model in Section 6.1 (`PAYMENT_VERIFIED` gate before `PRINTING`). |
| **OQ-015** | Bank transfer only vs. COD / online gateway in MVP | `PROPOSED` / `UNRESOLVED` | **Bank Transfer + WhatsApp slip only** for MVP (`CONFIRMED` core flow); architecture kept extensible for future gateway/COD. |
| **OQ-016** | Return, exchange, cancellation & refund policies | `UNRESOLVED` | Provide CMS-editable policy pages; default template states custom-printed tees are non-returnable unless manufacturing/print defect. |
| **OQ-017** | Existing brand assets (logo, fonts, photography) | `UNRESOLVED` | Resolve at STEP 03 kickoff; use clean monochrome placeholder photography during wireframing/dev if real shoot is pending. |
| **OQ-018** | Guest checkout vs. mandatory customer accounts | `PROPOSED` / `UNRESOLVED` | **Guest-first checkout** with privacy-safe order tracking (order number + phone/email); accounts deferred to P2. |
| **OQ-019** | Domain name, hosting budget & expected traffic | `UNRESOLVED` | Resolve in STEP 05; design architecture to run cleanly on low-cost/free-tier-friendly managed cloud infrastructure. |
| **OQ-020** | Measurable launch KPIs | `UNRESOLVED` | Baseline technical targets: mobile LCP ≤ 3.0s on 4G, 0 unverified orders printed; business sales targets supplied by Owner. |
| **OQ-021** | Order confirmation notifications (on-screen only vs. email/SMS) | `UNRESOLVED` | Default MVP to **on-screen confirmation + WhatsApp handoff + Order Tracking page**; optional automated email confirmation if SMTP/provider is approved in STEP 05. |
