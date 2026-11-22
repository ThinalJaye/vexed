# 04 – Team Roles and Responsibilities

> **Document Status:** STEP 01 Deliverable
> **Operating Model (`CONFIRMED`):** Roles are activated **sequentially at their designated project phases**—never all simultaneously. **QA Engineer participates continuously across the lifecycle**, not only at the end.

---

## 1. Role Activation Matrix Across Lifecycle (`PROPOSED`)

Legend: **L** = Lead | **A** = Active Contributor | **R** = Review / Advisory | **—** = Inactive

| # | Role | S01 | S02 | S03 | S04 | S05 | S06 | S07 | S08 | S09 | S10 | S11 | S12 | S13 | S14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Project Manager | **L** | A | A | A | A | **L** | A | A | A | A | A | A | A | **L** |
| 2 | Business Analyst | — | **L** | R | R | R | R | — | — | R | R | R | A | — | R |
| 3 | Creative Director | — | — | **L** | A | — | — | R | — | — | — | R | — | — | R |
| 4 | UI/UX Designer | — | — | R | **L** | — | — | R | — | R | R | A | R | — | R |
| 5 | UI Designer | — | — | — | **L** | — | — | A | — | — | — | A | R | — | R |
| 6 | UX Researcher | — | — | A | A | — | — | — | — | — | — | — | R | — | R |
| 7 | Solution Architect | — | — | — | R | **L** | A | R | R | R | R | R | — | R | R |
| 8 | Frontend Developer | — | — | — | — | — | R | **L** | — | A | A | A | A | R | A |
| 9 | Backend Developer | — | — | — | — | — | R | — | **L** | A | A | A | A | R | A |
| 10 | Full-stack Developer | — | — | — | — | — | A | — | — | **L** | **L** | **L** | A | R | A |
| 11 | Database Engineer | — | — | — | — | **L** | R | — | **L** | R | — | — | R | A | R |
| 12 | QA Engineer | — | A | — | A | A | A | A | A | A | A | A | **L** | A | A |
| 13 | Security Engineer | — | — | — | — | A | R | — | A | — | A | A | **L** | A | A |
| 14 | DevOps Engineer | — | — | — | — | A | **L** | — | — | — | — | — | R | **L** | **L** |

---

## 2. Detailed Role Specifications

### 1. Project Manager
- **Responsibilities:** Own project governance, scope control, phase sequencing, risk management, stakeholder reporting, decision logging, change management, and ensuring Business Owner approval before every phase transition.
- **When the Role Joins:** STEP 01 (continuous oversight through STEP 14).
- **Required Inputs:** Business Owner vision, constraints, phase deliverables from leads, QA/Security gate reports.
- **Expected Deliverables:** Foundation documentation (STEP 01), Phase status/risk updates, Decision & Open Question logs, Milestone plans (STEP 06), Phase Gate Approval packages, Launch coordination (STEP 13), Maintenance cadence (STEP 14).
- **Dependencies:** Business Owner decisions and phase approvals; timely inputs from active phase leads.
- **Approval Responsibilities:** Reviews completeness and governance compliance of every phase package prior to Business Owner submission; never bypasses Business Owner sign-off.
- **Handover Process:** Conducts formal phase close-out, updates `PROJECT-STATUS.md` and `PHASE-APPROVALS.md`, and briefs the incoming phase lead once owner approval is recorded.

### 2. Business Analyst
- **Responsibilities:** Elicit and document detailed functional and non-functional requirements, resolve open business questions, define the exact 17-step ordering and manual payment verification rules, specify custom DTF order edge cases, and write testable acceptance criteria.
- **When the Role Joins:** Leads STEP 02; advisory reviews in STEPs 03–06, 09–11, 14; supports Business Owner UAT in STEP 12.
- **Required Inputs:** STEP 01 foundation docs, `OPEN-QUESTIONS.md`, Business Owner clarifications.
- **Expected Deliverables:** Business Requirements Document (BRD), Functional Specification, User Stories & Acceptance Criteria, Order/Payment State Transition Rules, Finalized MVP Scope Matrix.
- **Dependencies:** Approved STEP 01 foundation and timely Business Owner responses to `OPEN-QUESTIONS.md`.
- **Approval Responsibilities:** Signs off that requirements are complete, unambiguous, and faithfully represent owner intent; validates UAT alignment with BRD in STEP 12.
- **Handover Process:** Walks Creative Director, UI/UX Designer, Solution Architect, and QA Engineer through the approved BRD and updates `DECISION-LOG.md`.

### 3. Creative Director
- **Responsibilities:** Define VEXED's distinct streetwear brand identity, art direction, monochrome/neutral colour-transition system, photography presentation guidelines, homepage storytelling narrative, and motion/animation language inspired by `suwada.lk` without copying it.
- **When the Role Joins:** Leads STEP 03; collaborates in STEP 04; visual fidelity reviews in STEP 07 and STEP 11.
- **Required Inputs:** `00-PROJECT-VISION.md`, approved STEP 02 BRD, Business Owner brand assets/preferences.
- **Expected Deliverables:** Brand & Creative Direction Guide, Visual Moodboard/Direction Spec, Storytelling Concept, Motion & Scroll-Transition Principles.
- **Dependencies:** Approved STEP 02 requirements and Business Owner brand inputs.
- **Approval Responsibilities:** Approves creative fidelity of wireframes/high-fidelity UI (STEP 04) and implemented storefront aesthetics/animations (STEP 07).
- **Handover Process:** Hands over approved Creative Direction Guide to UI/UX Designer, UI Designer, and UX Researcher at the start of STEP 04.

### 4. UI/UX Designer
- **Responsibilities:** Design information architecture, responsive end-to-end user journeys (discovery, variant selection, custom design request, artwork upload, cart, checkout, bank transfer & WhatsApp handoff, order tracking), interactive wireframes, and Admin Dashboard usability flows.
- **When the Role Joins:** Advisory in STEP 03; co-leads STEP 04; supports STEP 07, 09–11, 12.
- **Required Inputs:** Approved BRD (STEP 02), Creative Direction Guide (STEP 03), UX Researcher insights.
- **Expected Deliverables:** Sitemap & Information Architecture, User Flow Diagrams, Mobile & Desktop Wireframes, Interactive Prototype Specs, Admin UX Flows.
- **Dependencies:** Creative Director's brand direction and UX Researcher's findings.
- **Approval Responsibilities:** Signs off UX usability and flow completeness across storefront and Admin implementations.
- **Handover Process:** Conducts design-to-engineering handover with UI Designer, Solution Architect, Frontend Developer, and QA Engineer upon STEP 04 owner approval.

### 5. UI Designer
- **Responsibilities:** Craft pixel-accurate visual layouts, typography scales, dark/light/black/white/grey surface tokens, micro-interaction and parallax timing specs, responsive breakpoints, and a reusable UI design system covering storefront and Admin UI.
- **When the Role Joins:** Co-leads STEP 04; actively supports Frontend Developer in STEP 07 and Admin UI in STEP 11; visual QA support in STEP 12.
- **Required Inputs:** Creative Direction Guide (STEP 03), UX Wireframes (STEP 04).
- **Expected Deliverables:** High-Fidelity Desktop & Mobile Screen Specs, Component & Token Design System, Responsive & Animation Specifications.
- **Dependencies:** Approved Creative Direction (STEP 03) and UX Wireframes (STEP 04).
- **Approval Responsibilities:** Reviews and signs off visual polish, typography, spacing, and animation fidelity of implemented UI (STEP 07 & STEP 11).
- **Handover Process:** Delivers finalized design tokens, component specs, and asset guidelines to Frontend Developer at STEP 06/07 kickoff.

### 6. UX Researcher
- **Responsibilities:** Analyze reference experiences (`suwada.lk` visual experience and `primeracing.lk` ordering flow concepts, strictly noting only verified observations), evaluate Sri Lankan mobile shopping/bank-transfer/WhatsApp ergonomics, and validate usability of custom DTF artwork upload and checkout flows.
- **When the Role Joins:** Active in STEP 03 and STEP 04; advisory usability review in STEP 12 and post-launch optimization in STEP 14.
- **Required Inputs:** `00-PROJECT-VISION.md`, `01-BUSINESS-OVERVIEW.md`, STEP 02 BRD, STEP 04 prototypes.
- **Expected Deliverables:** Reference & Competitor UX Analysis, Mobile & Checkout Friction Assessment, Usability Review Findings & Recommendations.
- **Dependencies:** Approved STEP 02 requirements and accessible research inputs.
- **Approval Responsibilities:** Validates that core customer journeys minimize mobile checkout and WhatsApp handoff friction.
- **Handover Process:** Delivers structured research briefs to Creative Director (STEP 03) and UI/UX Designer (STEP 04) with prioritized action items.

### 7. Solution Architect
- **Responsibilities:** Select the optimal technical stack, define overall system architecture, API boundaries, file/artwork storage pipeline, caching/performance strategy (supporting heavy fashion imagery & animations on Sri Lankan mobile networks), SEO rendering approach, and scalability/maintainability standards.
- **When the Role Joins:** Feasibility review in STEP 04; leads STEP 05; active in STEP 06; architectural oversight in STEPs 07–11, 13–14.
- **Required Inputs:** Approved BRD (STEP 02), Approved UI/UX Specs (STEP 04), Budget/hosting constraints (`OPEN-QUESTIONS.md`).
- **Expected Deliverables:** System Architecture Document, Technology Stack Decision Record, API Contract Blueprint, Non-Functional Performance & Reliability Plan.
- **Dependencies:** Approved STEP 02 requirements and STEP 04 UI/UX design specs; Security Engineer & Database Engineer collaboration.
- **Approval Responsibilities:** Signs off technical architecture, critical design decisions, and major code-structure reviews.
- **Handover Process:** Briefs DevOps Engineer, Database Engineer, Backend, Frontend, and Full-stack Developers at STEP 06 kickoff with documented architecture blueprints.

### 8. Frontend Developer
- **Responsibilities:** Implement the high-craft responsive storefront: cinematic hero, scroll-driven colour transitions, parallax/image reveals, micro-interactions, product catalogue, collections, PDP variants, custom request & artwork upload UI, cart/checkout UI, and Admin UI views—maintaining mobile performance and accessibility.
- **When the Role Joins:** Reviews technical readiness in STEP 06; leads STEP 07; active in STEPs 09, 10, 11, 12, 14.
- **Required Inputs:** Approved UI/UX Design System (STEP 04), System Architecture & API Contracts (STEP 05), Engineering Backlog (STEP 06).
- **Expected Deliverables:** Production Frontend Codebase, Responsive Component Library, Optimized Animations & Media Handling, Frontend Unit/Component Tests.
- **Dependencies:** Approved design specs, architecture setup, and API contracts from Backend Developer.
- **Approval Responsibilities:** Peer-reviews frontend code quality, responsive behavior, and Core Web Vitals targets before QA handover.
- **Handover Process:** Submits verified feature builds with acceptance checklist and demo notes to QA Engineer and Full-stack Developer at each milestone.

### 9. Backend Developer
- **Responsibilities:** Build core server-side services, REST/RPC APIs, business rules for unique order numbering, inventory consistency, custom design metadata, secure customer artwork upload validation & storage, WhatsApp message payload generation, manual payment verification endpoints, admin authentication, and audit logging.
- **When the Role Joins:** Technical readiness review in STEP 06; leads STEP 08; active in STEPs 09, 10, 11, 12, 14.
- **Required Inputs:** Approved System Architecture & API Contracts (STEP 05), Database Schema (STEP 05/08), Security Requirements.
- **Expected Deliverables:** Backend Services & APIs, Artwork Upload & Validation Service, Auth & Audit Logging Services, Automated API/Integration Tests.
- **Dependencies:** Database Engineer schema/migrations and Security Engineer controls.
- **Approval Responsibilities:** Verifies API contract compliance, input validation, and backend test coverage prior to QA handover.
- **Handover Process:** Publishes updated API documentation and test evidence to Frontend Developer, Full-stack Developer, and QA Engineer.

### 10. Full-stack Developer
- **Responsibilities:** Integrate frontend and backend into cohesive end-to-end features across Shopping Cart & Checkout (STEP 09), Unique Order Management & Order Tracking (STEP 09), Bank Transfer Instructions, WhatsApp Handoff & Manual Payment Verification (STEP 10), and the Admin Dashboard (STEP 11); resolve cross-layer defects during UAT and maintenance.
- **When the Role Joins:** Active in STEP 06; leads STEPs 09, 10, 11; active in STEP 12 (bug fixes) and STEP 14.
- **Required Inputs:** Frontend storefront components (STEP 07), Backend APIs & DB (STEP 08), Approved BRD & UI/UX Specs.
- **Expected Deliverables:** End-to-End E-Commerce Checkout & Order Flow, Payment Instruction & WhatsApp Integration, Full Admin Dashboard, Integrated E2E Feature Verifications.
- **Dependencies:** Completed STEP 07 Frontend and STEP 08 Backend milestones; Security & QA reviews.
- **Approval Responsibilities:** Confirms end-to-end feature integration meets acceptance criteria prior to QA sign-off.
- **Handover Process:** Hands over integrated modules with setup notes and test credentials to QA Engineer and Security Engineer at the close of STEPs 09, 10, and 11.

### 11. Database Engineer
- **Responsibilities:** Design normalized, high-integrity relational data models (products, variants, stock, custom requests, uploaded artwork references, orders, unique order sequence, payment verification records, audit logs, customers, CMS content), implement migrations, indexing, backup/restore strategy, and query performance tuning.
- **When the Role Joins:** Co-leads STEP 05; advisory in STEP 06; co-leads STEP 08; supports performance/migration verification in STEPs 09, 12, 13, 14.
- **Required Inputs:** Approved BRD & Order State Rules (STEP 02), System Architecture (STEP 05).
- **Expected Deliverables:** Entity-Relationship Diagram (ERD), Schema & Migration Scripts, Indexing & Data Integrity Rules, Backup & Recovery Procedures.
- **Dependencies:** Solution Architect data-store selection and Security Engineer data-privacy rules.
- **Approval Responsibilities:** Approves all schema changes, migrations, and production database readiness.
- **Handover Process:** Delivers versioned migrations, seed scripts, and schema documentation to Backend Developer, Full-stack Developer, and DevOps Engineer.

### 12. QA Engineer *(Continuous Lifecycle Role)*
- **Responsibilities:** Embed quality across the entire project—review requirements for testability (STEP 02), inspect UX flows for edge cases (STEP 04), validate architecture testability (STEP 05), author the Master Test Plan (STEP 06), independently test every build increment (STEPs 07–11), lead full functional/mobile/cross-browser/regression QA & UAT facilitation (STEP 12), run production smoke tests (STEP 13), and verify post-launch fixes (STEP 14).
- **When the Role Joins:** Active from **STEP 02 through STEP 14** (Leads STEP 12 QA).
- **Required Inputs:** BRD & Acceptance Criteria (STEP 02), UI/UX Specs (STEP 04), Architecture (STEP 05), Feature Builds & Test Environments (STEPs 07–11).
- **Expected Deliverables:** Requirements Traceability & Testability Review (STEP 02), Design Edge-Case Review (STEP 04), Master QA Test Plan (STEP 06), Phase Verification Reports (STEPs 07–11), Full QA & Defect Closure Report + UAT Pack (STEP 12), Production Smoke Test Sign-off (STEP 13).
- **Dependencies:** Clear acceptance criteria and working test builds with release notes from developers.
- **Approval Responsibilities:** Independent quality gatekeeper—no engineering phase (STEPs 07–11) or launch (STEPs 12–13) may be declared complete without QA verification evidence.
- **Handover Process:** Issues formal QA Sign-Off Reports (pass/fail + residual risks) to Project Manager and Business Owner at every gate.

### 13. Security Engineer
- **Responsibilities:** Define and verify security & privacy controls: admin authentication/authorization, protection of customer PII and order lookup privacy, secure customer artwork file upload handling (type/size/malware/path-traversal defenses), CSRF/XSS/SQLi prevention, rate limiting, tamper-evident audit logging for manual payment approvals, secrets management, and HTTPS/security headers.
- **When the Role Joins:** Active in STEP 05 (security architecture), STEP 06 (review), STEP 08 (backend & upload security), STEP 10 (payment workflow integrity), STEP 11 (admin access control), co-leads STEP 12 (security audit), active in STEP 13 (production hardening) and STEP 14 (patching).
- **Required Inputs:** Architecture & Data Flows (STEP 05), Backend/Upload/Admin Code & Infra Configs (STEPs 08–13).
- **Expected Deliverables:** Security Architecture & Threat Model (STEP 05), Secure Coding & Upload Checklist, Security Audit & Remediation Report (STEP 12), Production Hardening Sign-off (STEP 13).
- **Dependencies:** Solution Architect blueprints, Backend/Admin implementations, DevOps infrastructure specs.
- **Approval Responsibilities:** Mandatory security sign-off before production launch (STEP 12/13) and on any auth, file upload, or payment-status workflow changes.
- **Handover Process:** Logs prioritized findings with remediation steps for developers/DevOps and verifies fixes before issuing Security Sign-off to Project Manager.

### 14. DevOps Engineer
- **Responsibilities:** Design and operate hosting infrastructure, environments (dev/staging/prod), CI/CD pipelines, secrets management, domain/DNS/SSL setup, object storage & automated database backups, uptime monitoring, centralized error logging, and deployment/rollback runbooks.
- **When the Role Joins:** Active in STEP 05 (infra planning), co-leads STEP 06 (env & CI/CD preparation), supports STEP 12 (staging/perf), leads STEP 13 (deployment & go-live), co-leads STEP 14 (operations & maintenance).
- **Required Inputs:** System Architecture (STEP 05), Hosting/Domain/Budget Decisions (`OPEN-QUESTIONS.md`), Security Hardening Checklist, Signed UAT Build (STEP 12).
- **Expected Deliverables:** Infrastructure & Environment Setup Plan (STEP 06), CI/CD Pipeline, Production Deployment, Automated Backup & Monitoring Configuration, Operational & Rollback Runbook (STEP 13).
- **Dependencies:** Solution Architect stack decision, Business Owner domain/hosting provisioning, QA & Security sign-offs before go-live.
- **Approval Responsibilities:** Approves deployment readiness, backup verifiability, and production health checks.
- **Handover Process:** Delivers live environment documentation, access recovery procedures, and maintenance runbooks to Project Manager and Business Owner at STEP 13 close.
