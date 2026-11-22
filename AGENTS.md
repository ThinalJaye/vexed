# VEXED — Permanent Agent Rules (`AGENTS.md`)

> **Classification:** `CONFIRMED` governance baseline established in STEP 01.
> **Scope:** Applies permanently to all AI agents and contributors operating in `E:\vexed`.

---

## 1. Project Identity (`CONFIRMED`)

- **Project:** VEXED Complete Software Project
- **Workspace Root:** `E:\vexed` (fresh project built from zero; do not search for, copy, import, or depend on outside/previous VEXED folders)
- **Brand:** **VEXED** — *"NOT MADE TO BLEND IN."*
- **Domain:** Premium Streetwear & Custom DTF T-Shirt Printing E-Commerce Platform
- **Initial Market & Currency:** Sri Lanka | `LKR`
- **Core Ordering Rule:** Customers place orders online, receive a unique order number and business bank details, transfer payment, and send the deposit slip via an order-specific WhatsApp link. **WhatsApp is NOT automatic payment verification.** The business owner must manually confirm receipt of funds before any order is marked as paid.

---

## 2. Source-of-Truth Documentation Map

Read **only** the documents relevant to your assigned phase and task:

| Document | Purpose |
|---|---|
| `README.md` | Project overview and navigation |
| `docs/00-PROJECT-VISION.md` | Permanent brand, experience, and design vision |
| `docs/01-BUSINESS-OVERVIEW.md` | Business model, 17-step ordering journey, operational rules |
| `docs/02-HIGH-LEVEL-SCOPE.md` | Platform modules (A–T), MVP vs. Future Enhancements |
| `docs/03-PROJECT-ROADMAP.md` | 14-step lifecycle, phase gates, and exit criteria |
| `docs/04-TEAM-ROLES-AND-RESPONSIBILITIES.md` | 14 company roles, activation stages, handovers |
| `project-management/PROJECT-STATUS.md` | Current phase, live status, risks, next action |
| `project-management/OPEN-QUESTIONS.md` | Unresolved business/technical questions (`UNRESOLVED`) |
| `project-management/DECISION-LOG.md` | Recorded project and business decisions |
| `project-management/PHASE-APPROVALS.md` | Formal phase-gate approval ledger |

---

## 3. Mandatory Project Governance & Quality Rules (`CONFIRMED`)

1. **One Phase at a Time:** Work strictly within the currently approved phase. Never start the next phase without explicit Business Owner approval recorded in `project-management/PHASE-APPROVALS.md`.
2. **One Assigned Task at a Time:** Execute small, discrete, verifiable tasks rather than broad unapproved leaps.
3. **Role Activation Discipline:** Only activate the team role(s) assigned to the current phase (see `docs/04-TEAM-ROLES-AND-RESPONSIBILITIES.md`). Do not run all roles simultaneously.
4. **Continuous QA:** QA participates across the lifecycle (requirements, design, architecture, implementation, release), not solely at the end.
5. **No Silent Scope Changes:** Never modify approved business requirements silently. Route any change through formal change management and log it in `project-management/DECISION-LOG.md`.
6. **Zero Hallucinated Business Facts:** Never invent pricing, bank details, WhatsApp numbers, legal policies, delivery fees, or unverified third-party website behaviors. Log unknowns in `project-management/OPEN-QUESTIONS.md`.
7. **Evidence Before Completion:** Define clear acceptance criteria for every development task. Never claim untested work is complete or claim to have verified inaccessible external websites.
8. **Maintain Source of Truth:** Preserve existing approved documentation and keep all project-management trackers synchronized at the end of every phase or milestone.

---

## 4. Information Classification Standard (`CONFIRMED`)

Every substantive statement in project documentation must be classified as:

- **`CONFIRMED`** — Explicitly provided or approved by the Business Owner.
- **`PROPOSED`** — Recommended by the project team; requires owner review/approval.
- **`UNRESOLVED`** — Missing information requiring discussion or an owner decision.

---

## 5. Token & Resource Management Rules (`CONFIRMED`)

Operate efficiently within available free AI quota:

- Default to the available free-tier model; avoid unnecessary premium model usage.
- Avoid unnecessary parallel agents/subagents.
- Read only the specific project files required for the active task.
- Never repeatedly regenerate unchanged documentation.
- Write deliverables directly into project files—do not reproduce entire files in chat responses.
- Keep chat reports concise, structured, and action-oriented.
- Break work into small, verifiable increments.
- Avoid unnecessary web searches and repeated identical tool calls.

---

## 6. End-of-Task / End-of-Phase Checklist

Before closing any phase or major milestone:

1. Verify all deliverables exist at their intended paths and are internally consistent.
2. Confirm no out-of-phase artifacts (code, dependencies, future-phase specs) were created prematurely.
3. Update `project-management/PROJECT-STATUS.md`.
4. Record new decisions in `project-management/DECISION-LOG.md`.
5. Log new unknowns in `project-management/OPEN-QUESTIONS.md`.
6. Update `project-management/PHASE-APPROVALS.md` and pause for Business Owner approval before advancing.
