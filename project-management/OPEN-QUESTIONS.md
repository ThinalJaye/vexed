# VEXED — Open Questions Register

> **Classification:** Items below preserve original IDs from STEP 01 and now include STEP 02 Business Analysis status (`UNRESOLVED` vs. `PROPOSED` default awaiting Owner confirmation).
> **Rule:** Never invent real business facts (bank accounts, WhatsApp numbers, pricing, legal details). See `docs/05-BUSINESS-REQUIREMENTS.md` §11 for full recommended defaults.

---

## 1. Business Identity & Operational Details

| ID | Question | Target Phase | Priority | Status | Recommended Default (`PROPOSED`) |
|---|---|---|---|---|---|
| **OQ-001** | What is the official legal business name, registration status (if applicable), and business address to display on policies/invoices? | STEP 02 | Medium | `UNRESOLVED` | Admin-editable legal footer; supply real details pre-launch. |
| **OQ-002** | What are VEXED's official customer support email address, phone number, and dedicated WhatsApp Business number for receiving bank deposit slips? | STEP 02 | High | `UNRESOLVED` | Admin CMS/env config; mandatory pre-launch check. |
| **OQ-003** | Which business bank account(s) (bank name, branch, account holder name, account number) should be displayed on the post-order bank transfer screen? | STEP 02 | High | `UNRESOLVED` | Admin CMS settings; Owner enters real details pre-launch. |
| **OQ-004** | Is VEXED strictly online-only, or will local studio pickup / physical showroom visits be supported? | STEP 02 | Medium | `UNRESOLVED` | Online delivery only for MVP. |

---

## 2. Products, Pricing & Custom DTF Printing

| ID | Question | Target Phase | Priority | Status | Recommended Default (`PROPOSED`) |
|---|---|---|---|---|---|
| **OQ-005** | What is the initial product catalog size, blank T-shirt types (e.g., oversized GSM weights, fits), available colours, and exact size chart (e.g., S–XXL measurements)? | STEP 02 | High | `UNRESOLVED` | Flexible variant & CMS size-chart schema populated by Owner. |
| **OQ-006** | How are ready-made T-shirts vs. custom DTF T-shirts priced in `LKR` (e.g., flat price per print zone/size, front/back/sleeve surcharges, bulk discounts)? | STEP 02 | High | `UNRESOLVED` | Blank `LKR` price + flat print-zone add-ons; bulk via inquiry. |
| **OQ-007** | For MVP custom T-shirt design requests (Module E), is a structured form + artwork upload + text brief sufficient, or are specific interactive placement previews required? | STEP 02 | High | `PROPOSED` / `UNRESOLVED` | Structured form + placement selector + artwork upload + brief. |
| **OQ-008** | What are the technical requirements for customer-uploaded artwork (allowed file formats such as PNG/SVG/PDF/AI, max file size, minimum DPI, transparent background rules, copyright disclaimer)? | STEP 02 | High | `PROPOSED` / `UNRESOLVED` | `PNG`/`PDF`/`SVG`/`AI`, max `25 MB`, 300 DPI guidance, copyright checkbox. |

---

## 3. Target Market, Delivery & Policies

| ID | Question | Target Phase | Priority | Status | Recommended Default (`PROPOSED`) |
|---|---|---|---|---|---|
| **OQ-009** | Who is the primary target customer profile in Sri Lanka (age group, style subculture, individual streetwear buyers vs. corporate/event bulk custom orders)? | STEP 02 | Medium | `UNRESOLVED` | Sri Lankan mobile streetwear buyers (16–35) + bulk inquiry support. |
| **OQ-010** | How will Sri Lankan delivery work (island-wide courier partner vs. Colombo express vs. district-based `LKR` delivery charges, free-shipping thresholds, estimated delivery days)? | STEP 02 | High | `UNRESOLVED` | Admin-configurable flat or Colombo/Outstation `LKR` fee + threshold. |
| **OQ-011** | What is the preferred format for the unique order number (e.g., `VXD-2026-0001` vs. randomized alphanumeric)? | STEP 02 | Medium | `PROPOSED` / `UNRESOLVED` | `VXD-YYYYMMDD-XXXX` (collision-free). |
| **OQ-012** | After an order is placed, how long do customers have to send the bank transfer slip before an unpaid order automatically expires or is manually cancelled? | STEP 02 | High | `PROPOSED` / `UNRESOLVED` | 48-hour unpaid window; Admin cancels expired orders to restore stock. |
| **OQ-013** | For custom-designed or customer-uploaded artwork orders, does the customer pay immediately upon ordering or only after the owner reviews/approves artwork printability and quote? | STEP 02 | High | `UNRESOLVED` | Standard custom upload = pay after checkout; bespoke design = quote confirm. |
| **OQ-014** | Are the proposed separated Payment Status and Fulfillment Status lifecycles (`01-BUSINESS-OVERVIEW.md` §5) approved, or are additional print-shop states needed? | STEP 02 | Medium | `PROPOSED` / `UNRESOLVED` | Separated Payment & Fulfillment lifecycles (`05-BUSINESS-REQUIREMENTS.md` §6). |
| **OQ-015** | Will MVP strictly support Bank Transfer + WhatsApp slip only, or is Cash on Delivery (COD) / an online Sri Lankan payment gateway needed at launch? | STEP 02 | High | `PROPOSED` / `UNRESOLVED` | Bank Transfer + WhatsApp slip only for MVP. |
| **OQ-016** | What are VEXED's return, exchange, cancellation, and refund policies (especially for custom-printed T-shirts vs. ready-made items)? | STEP 02 | Medium | `UNRESOLVED` | CMS policy pages; custom prints non-returnable unless defective. |
| **OQ-021** | Should MVP include automated email/SMS order confirmations, or rely on on-screen confirmation, WhatsApp handoff, and Order Tracking? *(Added in STEP 02)* | STEP 02 | Medium | `UNRESOLVED` | On-screen confirmation + WhatsApp + Order Tracking for MVP; email optional in STEP 05. |

---

## 4. Brand Assets, Content & Technical Constraints

| ID | Question | Target Phase | Priority | Status | Recommended Default (`PROPOSED`) |
|---|---|---|---|---|---|
| **OQ-017** | Does VEXED already have a finalized logo, typography, and high-resolution fashion/product photography, or will placeholder/brand-creation assets be needed during design? | STEP 03 | High | `UNRESOLVED` | Confirm at STEP 03; use clean monochrome placeholders if pending. |
| **OQ-018** | Should customers be required to create an account to order, or should checkout remain guest-first (with order tracking via unique order number + phone/email)? | STEP 02 | High | `PROPOSED` / `UNRESOLVED` | Guest-first checkout + Order Tracking (order # + phone/email). |
| **OQ-019** | What are the domain name status (e.g., `.lk` / `.com`), hosting budget constraints (free/low-cost vs. paid managed cloud), and expected initial monthly traffic/order volume? | STEP 05 | High | `UNRESOLVED` | Confirm in STEP 05; design for low-cost managed cloud portability. |
| **OQ-020** | What measurable launch KPIs (e.g., order turnaround SLA, mobile page load target, initial monthly order target) define business success for VEXED? | STEP 02 | Low | `UNRESOLVED` | Mobile LCP ≤ 3.0s, 0 unverified orders printed; sales targets from Owner. |
