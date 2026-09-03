# Pivot My Career — Product Requirements Document & Technical Architecture Specification

**Document Version:** 1.0.0  
**Target Audience:** Full-Stack Developers, UI/UX Engineers, Backend Architects, QA Engineers, Product Managers  
**Live Prototype Reference:** `http://localhost:8085`  
**Brand Identity:** *Pivot My Career* (`pivotmycareer.ai`)  
**Design Reference Aesthetic:** [Alison.com](https://alison.com/) (Crisp, clean, professional, soothing off-white and forest emerald green palette)

---

## 1. Executive Summary & Platform Purpose

### 1.1 Problem Statement
Generative AI and automated tooling are systematically displacing routine execution tasks across legacy corporate functions:
* **Spreadsheet / MIS Specialists:** Basic Excel formulas and manual aggregation are being replaced by automated BI pipelines and natural language query engines.
* **Administrative & Executive Assistants:** Calendar scheduling, basic memo drafting, and travel coordination are heavily automated by LLM agents.
* **Supply Chain & Logistics Coordinators:** Basic ERP tracking, manual order reconciliation, and shipment tracking are being ingested into automated TMS systems.
* **Finance & Accounting Executives:** Routine ledger posting, basic reconciliation, and compliance checklists are automated by modern fintech software.
* **PowerPoint / Presentation Builders:** Presentation formatting and layout assembly are increasingly handled by automated generative design tools.

Working professionals trapped in these roles struggle with transition paralysis:
1. **Generic AI Chatbot Fatigue:** Entering *"What career should I switch to?"* into ChatGPT yields vague, boilerplate advice (e.g., *"Learn Python or become a Project Manager"*).
2. **Predatory EdTech / Bootcamp Debt:** Bootcamps charge ₹2,00,000–₹5,00,000 for generic curriculums that require students to quit their full-time jobs, with low hiring conversion rates.
3. **Loss of Transferable Equity:** Professionals believe they must start from zero, completely discarding 4–8 years of hard-won domain knowledge, executive presence, and business empathy.

### 1.2 The Solution: Pivot My Career
*Pivot My Career* is a **3-Tier Hybrid Career Pivot Platform** engineered specifically for full-time working professionals. It combines:
1. **AI-Powered Capability Ingestion:** Instant extraction of tools, workflows, and domain context from existing resumes.
2. **Clinical Psychometric Science:** A 10-dimension behavioral evaluation measuring ambiguity tolerance, decision speed, and execution grit under real corporate pressure.
3. **Veteran 1:1 Human Career Mentorship:** Direct video strategy calls with former hiring directors from top tech and consulting firms who pressure-test transition blueprints and rewrite candidate positioning.

---

## 2. 3-Tier Business Architecture & Monetization Engine

```
┌────────────────────────────────────────┐  ┌────────────────────────────────────────┐  ┌────────────────────────────────────────┐
│         Level 1: Free Starter          │  │    Level 2: Psychometric Audit (★)     │  │      Level 3: Executive 1:1 Call       │
│                  ₹0                    │  │                 ₹1,999                 │  │                 ₹5,999                 │
│             (Lead Magnet)              │  │        (55% off ₹4,500 Base)           │  │         (50% off ₹12,000 Base)         │
├────────────────────────────────────────┤  ├────────────────────────────────────────┤  ├────────────────────────────────────────┤
│ • 5-Question Rapid Capability Audit    │  │ • Includes Everything in Level 1       │  │ • Includes Everything in Level 2       │
│ • Resume Upload Zone (.pdf/.docx)      │  │ • 40-Question Psychometric Test        │  │ • 60-Minute 1:1 Consultant Video Call  │
│ • Instant AI Skill & Tool Extraction   │  │ • 10-Dimension Behavioral Scorecard    │  │ • Dedicated Resume & LinkedIn Teardown │
│ • Directional Alignment Index (0–100)  │  │ • Full 7–8 Page 90-Day Transition Plan │  │ • Strategic Blueprint Pressure-Test    │
│ • Primary Recommended Target Track     │  │ • Custom Skill Bridge Gap Matrix       │  │ • Mock Interview & Domain Case Prep    │
│ • Top Superpower vs. Growth Delta Read │  │ • Calibrated Mentor Networking Scripts │  │ • 30 Days Direct WhatsApp VIP Support  │
└────────────────────────────────────────┘  └────────────────────────────────────────┘  └────────────────────────────────────────┘
```

### 2.1 Gatekeeping & Conversion Flow
1. **Unregistered / Free User (Level 1):**
   - Land on homepage → Can select a quick preset or drop a custom resume.
   - Answer 5 rapid questions (Tooling, Business Impact, Frustration, Domain, Risk Tolerance).
   - Real-time telemetry barometer calculates capability deltas in browser.
   - Generates **Phase 1 Teaser Readout**: Shows Alignment Index (e.g. `92/100`), primary target role title, top superpower, and primary growth area.
   - The complete 7–8 page report, 90-day weekly blueprint, and mentor networking scripts are locked behind Level 2 / Level 3.
2. **Level 2 Conversion (₹1,999):**
   - Click *"Unlock Full 90-Day Blueprint & Psychometric Audit"* → Checkout modal triggered.
   - Post-payment, user takes the 40-question clinical psychometric assessment.
   - Full 5-tab interactive report unlocked and permanently accessible in their user dashboard.
3. **Level 3 Conversion (₹5,999):**
   - User books a 1-on-1 strategy call with an industry director (Vikram Malhotra, Ananya Sen, Rajesh Nair).
   - Booking modal collects preferred consultant, date, and time slot.
   - Synchronizes with Google Calendar / Cal.com API and assigns a dedicated WhatsApp concierge.

---

## 3. Algorithmic Engine & Scoring Models

### 3.1 The 10 Professional Capability Dimensions
Every candidate profile is evaluated across 10 normalized dimensions on a 0–100 scale:

| Dimension ID | Dimension Name | Description | Key Indicator Tools / Signals |
| :--- | :--- | :--- | :--- |
| `quantitative_rigor` | Quantitative Rigor | Numerical precision, statistical modeling, data hygiene | Excel, SQL, Financial Models, R, SPSS |
| `operational_efficiency` | Operational Efficiency | Process re-engineering, bottleneck elimination, standard operating procedures | Six Sigma, Lean, ERP, TMS, SOPs |
| `stakeholder_comm` | Stakeholder Communication | Executive storytelling, cross-functional alignment, presentation design | C-Suite Decks, Memos, Client Pitches |
| `data_intuition` | Data Intuition & Storytelling | Translating raw tables into strategic executive decisions | Power BI, Tableau, Looker, Metabase |
| `strategic_problem_solving` | Strategic Problem Solving | Root-cause analysis under imperfect information | MECE Framework, Hypothesis Testing |
| `tech_adaptability` | Modern Tech Agility | Speed of learning modern software, automation, and AI workflows | Python, dbt, Zapier, APIs, Airtable |
| `commercial_acumen` | Commercial & Business Acumen | Understanding P&L drivers, margin structures, revenue velocity | EBITDA, Unit Economics, COGS, CAC |
| `project_execution` | Project Execution & Ownership | Delivering multi-week initiatives on time across diverse teams | Jira, Asana, Agile, Resource Allocation |
| `ambiguity_tolerance` | Ambiguity & Uncertainty Tolerance | Thriving without rigid playbooks, structuring messy environments | Startups, Greenfield Projects, Scoping |
| `system_architecture` | Systems & Architecture Thinking | Designing scalable data pipelines, automated integrations | ETL, Relational DBs, API Schemas, Webhooks |

### 3.2 Dynamic Telemetry & Alignment Index Formula

#### Real-Time Telemetry Updates
Each answer choice in the 5 questions carries a multi-dimensional impact vector $\vec{\Delta} = \{\text{dim}_i: \delta_i\}$. When a user selects an answer, the running dimension score $S_i$ is updated:
$$S_i = \min(100, \max(0, S_i^{\text{base}} + \sum \delta_{i,\text{selected}}))$$

#### Target Track Alignment Index Calculation
For each available career transition track $T$, the target track defines a required dimension vector $\vec{R}_T = \{w_1, w_2, \dots, w_{10}\}$ where $\sum w_i = 1.0$.

The Alignment Index $A_T$ (0–100) is calculated via weighted Euclidean proximity:
$$A_T = 100 - \sqrt{\sum_{i=1}^{10} w_{T,i} \cdot (R_{T,i} - S_i)^2}$$
- If $A_T \ge 85$: Classified as **"Direct High-Probability Pivot (60–90 Days)"**.
- If $70 \le A_T < 85$: Classified as **"Strategic Pivot (90–120 Days with Bridge Upskilling)"**.
- If $A_T < 70$: Classified as **"High-Upside Expansion (Requires Foundational Grounding)"**.

---

## 4. Multi-Vertical Data Models & Standard Launch Personas

The system ships with 5 pre-configured personas and paths to validate end-to-end functionality immediately:

```
                  ┌────────────────────────────────────────────────────────┐
                  │              CANDIDATE INTAKE VERTICAL                 │
                  └──────────────────────────┬─────────────────────────────┘
                                             │
      ┌──────────────────┬───────────────────┼──────────────────┬──────────────────┐
      ▼                  ▼                   ▼                  ▼                  ▼
┌───────────┐      ┌───────────┐       ┌───────────┐      ┌───────────┐      ┌───────────┐
│ Excel/MIS │      │SupplyChain│       │ Admin/EA  │      │  Finance  │      │PowerPoint │
└─────┬─────┘      └─────┬─────┘       └─────┬─────┘      └─────┬─────┘      └─────┬─────┘
      │                  │                   │                  │                  │
      ▼                  ▼                   ▼                  ▼                  ▼
┌───────────┐      ┌───────────┐       ┌───────────┐      ┌───────────┐      ┌───────────┐
│  Data &   │      │    SCM    │       │  BizOps   │      │   FP&A    │      │  Product  │
│BI Analyst │      │ Analytics │       │  Manager  │      │ Specialist│      │ Marketing │
└───────────┘      └───────────┘       └───────────┘      └───────────┘      └───────────┘
```

### Persona 1: Excel / MIS Specialist → Data & BI Analyst
* **Candidate Baseline:** Rohan M., 5.5 Years Exp, Senior MIS Executive (Retail/FMCG).
* **Superpowers:** VLOOKUP, INDEX-MATCH, complex pivot tables, VBA macros, daily KPI reconciliation.
* **Frustrations:** Manual copy-pasting across disparate spreadsheets; management treats them as a "report generator" rather than a decision partner.
* **Target Transition Tracks:**
  * Track A (Optimal): **Data & Business Intelligence Analyst** (₹8.5 LPA – ₹16 LPA / $75k–$95k)
  * Track B (Strategic): **Analytics Engineer / Data Operations** (₹11 LPA – ₹19 LPA)
  * Track C (Upside): **Commercial Strategy & Operations Manager** (₹14 LPA – ₹24 LPA)
* **The 90-Day Transition Blueprint:**
  * **Phase 1 (Days 1–30): The Syntactical Translation.** Replace nested Excel formulas with standard ANSI SQL (`SELECT`, `JOIN`, `GROUP BY`, Window Functions `ROW_NUMBER()`, `DENSE_RANK()`).
  * **Phase 2 (Days 31–60): Automated Star-Schema Modeling.** Move from flat Excel tables to dimensional star-schema modeling in Power BI / Tableau. Connect directly to PostgreSQL / BigQuery instances.
  * **Phase 3 (Days 61–90): Executive Portfolio & Behavioral Interviewing.** Build 2 production-grade GitHub/NovyPro portfolio dashboards demonstrating revenue retention and margin leak detection.

### Persona 2: Supply Chain Specialist → SCM Analytics & Strategic Sourcing
* **Candidate Baseline:** Priya S., 4.0 Years Exp, Logistics & Procurement Specialist.
* **Superpowers:** Vendor negotiations, purchase order lifecycles, inventory replenishment, freight logistics.
* **Target Transition:** SCM Analytics & Strategic Sourcing Specialist (₹9.5 LPA – ₹18 LPA).

### Persona 3: Executive Assistant / Admin → Business Operations (BizOps) Manager
* **Candidate Baseline:** Amit V., 6.0 Years Exp, Executive Assistant to Managing Director.
* **Superpowers:** C-suite stakeholder alignment, cross-departmental scheduling, crisis management, confidential project tracking.
* **Target Transition:** Business Operations (BizOps) / Chief of Staff Track (₹12 LPA – ₹22 LPA).

### Persona 4: Finance & Accounting Associate → FP&A Specialist
* **Candidate Baseline:** Sneha K., 5.0 Years Exp, Senior Accounts & Audit Executive.
* **Superpowers:** Ledger accuracy, GAAP/IFRS statutory compliance, balance sheet reconciliation.
* **Target Transition:** Strategic Financial Planning & Analysis (FP&A) (₹10 LPA – ₹20 LPA).

### Persona 5: PowerPoint / Pitch Specialist → Product Marketing Manager (PMM)
* **Candidate Baseline:** Kunal D., 4.5 Years Exp, Executive Presentation & RFP Specialist.
* **Superpowers:** Visual storytelling, simplifying technical complexity, competitive benchmarking.
* **Target Transition:** B2B SaaS Product Marketing Manager (₹14 LPA – ₹26 LPA).

---

## 5. Senior Career Consultants Specification (Level 3)

The Level 3 offering requires a dedicated consultant roster engine:

```json
[
  {
    "id": "cons_vikram",
    "name": "Vikram Malhotra",
    "avatar": "👨‍💼",
    "role": "Ex-Director of Analytics @ Grab & Flipkart",
    "specialization": "Excel / MIS / Finance → Data, BI & Analytics Engineering",
    "bio": "14+ years scaling commercial analytics teams across Southeast Asia and India. Has interviewed and hired over 120+ data professionals from non-traditional backgrounds.",
    "hourly_rate_inr": 5999,
    "available_slots": ["Tue 19:30 IST", "Thu 19:30 IST", "Sat 11:00 IST"]
  },
  {
    "id": "cons_ananya",
    "name": "Ananya Sen",
    "avatar": "👩‍💼",
    "role": "Former Principal Consultant @ BCG & Product Ops Lead",
    "specialization": "Admin / EA / Presentation Specialists → BizOps & Chief of Staff",
    "bio": "Specializes in helping operational powerhouses translate behind-the-scenes executive support into high-visibility Strategic Operations and Chief of Staff roles.",
    "hourly_rate_inr": 5999,
    "available_slots": ["Mon 20:00 IST", "Wed 20:00 IST", "Sat 15:00 IST"]
  },
  {
    "id": "cons_rajesh",
    "name": "Rajesh Nair",
    "avatar": "👨‍💼",
    "role": "VP of Global SCM Strategy @ Unilever / Maersk",
    "specialization": "Logistics & Procurement → SCM Analytics & Strategic Sourcing",
    "bio": "20+ years navigating global freight, vendor supply risk, and ERP transformations. Mentors logistics coordinators into strategic sourcing directors.",
    "hourly_rate_inr": 5999,
    "available_slots": ["Wed 19:00 IST", "Fri 19:00 IST", "Sun 11:00 IST"]
  }
]
```

---

## 6. Front-End Design System & UI Specifications

The UI must adhere strictly to the **soothing, crisp, professional, and neat aesthetic inspired by [Alison.com](https://alison.com/)**.

### 6.1 Color Palette & Design Tokens
```css
:root {
  /* Page Canvas */
  --bg-page: #F8FAFC;            /* Soothing Off-White Canvas */
  --bg-surface: #FFFFFF;         /* Crisp Pure White Surface */
  --bg-surface-alt: #F1F5F9;     /* Light Slate Tint for Presets & Subsections */
  --bg-card: #FFFFFF;

  /* Crisp Borders */
  --border-subtle: #E2E8F0;      /* Standard 1px Card Border */
  --border-card: #E5E7EB;
  --border-focus: #00A862;       /* Focus Outline */
  --border-hover: #CBD5E1;

  /* Typography Colors */
  --text-primary: #0F172A;       /* Deep Slate for Headers (High legibility) */
  --text-secondary: #475569;     /* Charcoal Slate for Body & Explanations */
  --text-muted: #64748B;         /* Soft Slate for Metadata & Timestamps */
  --text-light: #94A3B8;

  /* Alison Signature Emerald Green */
  --emerald: #00A862;            /* Alison Core Green (Primary Buttons, Active States) */
  --emerald-dark: #00875A;       /* Deep Forest Green (Hover & High Contrast) */
  --emerald-tint: #ECFDF5;       /* Soft Mint Background Tint (Selected Cards, Badges) */
  --emerald-border: #A7F3D0;     /* Mint Border */
  --emerald-glow: rgba(0, 168, 98, 0.15);

  /* Executive Accents */
  --amber: #D97706;              /* Warm Honey Amber (Tier 3 Consultant Calls) */
  --amber-dark: #B45309;
  --amber-tint: #FEF3C7;
  --amber-border: #FDE68A;

  /* Typography */
  --font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Elevation */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-card: 0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04);
  --shadow-hover: 0 12px 28px -4px rgba(15, 23, 42, 0.1), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
}
```

### 6.2 Component Interactions & State Rules
1. **Persona Switcher Bar:** Sticky or prominent banner beneath the navbar. Clicking any persona instantly animates and fills the diagnostic questions and sets the telemetry meters to calibrated test baselines.
2. **Resume Drag & Drop Box:**
   - Dropzone bordered with `2px dashed var(--emerald-border)`.
   - On dragover: Background shifts to `var(--emerald-tint)` with subtle scale transition.
   - On file drop: Triggers simulated parsing with spinner/progress bar, displays parsed file name chip, extracted years of experience, and tags for discovered tools.
3. **Wizard Question Stepper:**
   - Single active question shown at a time with smooth fade-in.
   - Radio option cards display custom SVG checkmark circles.
   - Clicking an option immediately updates the live telemetry radar/bars on the right-hand side.
4. **3-Tier Pricing Cards:**
   - Level 2 card has a prominent `2.5px solid var(--emerald)` border and a `badge-popular` tag (`55% OFF`).
   - Level 3 card has a warm amber border and `badge-executive` tag (`Highest Success Rate`).
   - CTA buttons must trigger corresponding workflows (Level 1: smooth scroll to intake; Level 2: payment modal; Level 3: consultant scheduling modal).

---

## 7. Backend Architecture & Database Schema

### 7.1 Recommended Production Stack
* **Framework:** Next.js 14+ (App Router) or Remix (Full-stack TypeScript)
* **Alternative Stack:** FastAPI (Python 3.11+) + React (Vite)
* **Database:** PostgreSQL (v15+) hosted on AWS RDS or Supabase
* **ORM:** Prisma or Drizzle ORM
* **Cache & Rate Limiting:** Redis (Upstash or AWS ElastiCache)
* **File Storage:** AWS S3 or Cloudflare R2 for resume PDF/DOCX storage
* **Payments:** Razorpay API (for INR) + Stripe (for International USD payments)
* **Messaging:** Meta WhatsApp Business Cloud API (or Interakt/Twilio)

### 7.2 Relational Database Schema (PostgreSQL DDL)

```sql
-- 1. Candidates / Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    whatsapp_opt_in BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Resume Ingestion Table
CREATE TABLE resumes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size_bytes INTEGER NOT NULL,
    raw_text TEXT,
    parsed_json JSONB, -- Stores extracted tools, years_exp, domain, keywords
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Assessment Submissions Table
CREATE TABLE assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    resume_id UUID REFERENCES resumes(id) ON DELETE SET NULL,
    tier_level VARCHAR(20) NOT NULL DEFAULT 'tier_free', -- 'tier_free', 'tier_psychometric', 'tier_consultant'
    current_vertical VARCHAR(50) NOT NULL, -- 'excel_analyst', 'supply_chain', etc.
    answers JSONB NOT NULL, -- Stores Q1..Q5 (and Q1..Q40 if Level 2)
    alignment_score NUMERIC(5, 2) NOT NULL,
    recommended_track_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. 10-Dimension Scores Table
CREATE TABLE dimension_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
    quantitative_rigor NUMERIC(4, 1) NOT NULL,
    operational_efficiency NUMERIC(4, 1) NOT NULL,
    stakeholder_comm NUMERIC(4, 1) NOT NULL,
    data_intuition NUMERIC(4, 1) NOT NULL,
    strategic_problem_solving NUMERIC(4, 1) NOT NULL,
    tech_adaptability NUMERIC(4, 1) NOT NULL,
    commercial_acumen NUMERIC(4, 1) NOT NULL,
    project_execution NUMERIC(4, 1) NOT NULL,
    ambiguity_tolerance NUMERIC(4, 1) NOT NULL,
    system_architecture NUMERIC(4, 1) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Orders & Payments Table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE RESTRICT,
    assessment_id UUID REFERENCES assessments(id) ON DELETE SET NULL,
    tier_id VARCHAR(30) NOT NULL, -- 'tier_psychometric', 'tier_consultant'
    amount_inr NUMERIC(10, 2) NOT NULL, -- 1999.00 or 5999.00
    currency VARCHAR(10) DEFAULT 'INR',
    gateway VARCHAR(30) NOT NULL, -- 'razorpay' or 'stripe'
    gateway_order_id VARCHAR(100) UNIQUE NOT NULL,
    gateway_payment_id VARCHAR(100),
    status VARCHAR(30) NOT NULL DEFAULT 'created', -- 'created', 'paid', 'failed'
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Senior Career Consultants Table
CREATE TABLE consultants (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    avatar VARCHAR(50) NOT NULL,
    role_title VARCHAR(200) NOT NULL,
    specialization TEXT NOT NULL,
    bio TEXT NOT NULL,
    hourly_rate_inr NUMERIC(10, 2) NOT NULL DEFAULT 5999.00,
    calendar_sync_url TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- 7. 1:1 Booking Slots Table
CREATE TABLE booking_slots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    consultant_id VARCHAR(50) REFERENCES consultants(id) ON DELETE RESTRICT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    meeting_link TEXT, -- Google Meet or Zoom URL
    status VARCHAR(30) DEFAULT 'confirmed', -- 'confirmed', 'completed', 'rescheduled', 'cancelled'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 8. API Specifications & Data Contracts

### 8.1 Resume Upload & Parsing Endpoint
* **Endpoint:** `POST /api/v1/resume/parse`
* **Content-Type:** `multipart/form-data`
* **Request Payload:** `file: [binary .pdf or .docx]`
* **Response (200 OK):**
```json
{
  "success": true,
  "resume_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "extracted_data": {
    "detected_name": "Rohan Malhotra",
    "years_of_experience": 5.5,
    "primary_vertical": "excel_analyst",
    "current_title": "Senior MIS & Reporting Executive",
    "core_tools": ["Microsoft Excel", "VBA", "SQL", "SAP ERP", "PowerPoint"],
    "transferable_superpowers": [
      "Advanced Spreadsheet Modeling",
      "Daily Inventory Reconciliation",
      "Executive Deck Preparation"
    ],
    "flagged_skill_gaps": [
      "Power BI / DAX Star Schema",
      "Production ANSI SQL"
    ]
  }
}
```

### 8.2 Assessment Submission & Alignment Scoring
* **Endpoint:** `POST /api/v1/assessment/submit`
* **Request Payload:**
```json
{
  "user_email": "rohan.malhotra@example.com",
  "user_name": "Rohan Malhotra",
  "resume_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "vertical_id": "excel_analyst",
  "answers": {
    "q1": "opt_excel_macros",
    "q2": "opt_mgmt_reports",
    "q3": "opt_manual_dumping",
    "q4": "opt_supply_logistics",
    "q5": "opt_balanced_90"
  }
}
```
* **Response (200 OK):**
```json
{
  "assessment_id": "5f98c8f0-1a2b-4c3d-8e9f-0a1b2c3d4e5f",
  "alignment_index": 92.4,
  "primary_path": {
    "id": "data_analyst",
    "title": "Data & Business Intelligence Analyst",
    "target_salary_india": "₹8.5 LPA - ₹16 LPA",
    "target_salary_global": "$75,000 - $95,000",
    "top_superpower": {
      "name": "Quantitative Rigor",
      "score": 94.0
    },
    "priority_growth_delta": {
      "name": "New Tech Agility",
      "score": 66.0
    }
  },
  "tier_unlocked": "tier_free",
  "preview_insights": "Your spreadsheet modeling acumen represents 60% of what modern data analysts do. Transitioning requires translating formulas to SQL and static tables to Power BI dimensional models."
}
```

### 8.3 Payment Order Creation (Razorpay / Stripe)
* **Endpoint:** `POST /api/v1/payment/create-order`
* **Request Payload:**
```json
{
  "assessment_id": "5f98c8f0-1a2b-4c3d-8e9f-0a1b2c3d4e5f",
  "tier_id": "tier_psychometric",
  "currency": "INR"
}
```
* **Response (200 OK):**
```json
{
  "order_id": "ord_88291a82f",
  "amount": 199900,
  "currency": "INR",
  "razorpay_key_id": "rzp_live_xxxxxxxxxxxx",
  "customer": {
    "name": "Rohan Malhotra",
    "email": "rohan.malhotra@example.com"
  }
}
```

---

## 9. AI Integration Specification (Resume & Report Generator)

For backend teams integrating LLM services (Google Gemini 1.5 Flash / OpenAI GPT-4o):

### 9.1 System Prompt for Resume Parsing
```
You are an executive talent analytics engine specializing in corporate career transitions.
Given raw text from a candidate's resume, extract and structure their operational profile into strict JSON:
1. Detected candidate name and years of experience.
2. Primary corporate vertical ('excel_analyst', 'supply_chain', 'admin_ops', 'finance_pro', 'powerpoint_pitch', or 'general').
3. Tools used with proficiency level ('expert', 'proficient', 'basic').
4. Quantifiable business impacts (e.g. "Saved 12 hours/week automating MIS report").
5. Top 3 transferable superpowers and top 2 syntax/tooling gaps for a high-salary pivot.
Do not hallucinate or flatter. Be clinically objective.
Output strict JSON matching the provided schema.
```

---

## 10. Engineering Sprint Roadmap (5-Sprint Plan)

```
Sprint 1 ──► Foundation, Auth & DB Schema Setup
Sprint 2 ──► Rapid Intake Wizard & Real-Time Telemetry Barometer
Sprint 3 ──► Resume Upload Pipeline & LLM Skill Extraction
Sprint 4 ──► 3-Tier Monetization, Razorpay Integration & Level 2 Report
Sprint 5 ──► Consultant Scheduling, WhatsApp Concierge & Production Hardening
```

* **Sprint 1 (Days 1–10): Core Foundation & Data Layer**
  * Spin up Next.js / FastAPI repository.
  * Initialize PostgreSQL database with the 7 core tables.
  * Implement authentication (NextAuth / Supabase Auth) with email & Google OAuth.
* **Sprint 2 (Days 11–20): Diagnostic Wizard & Telemetry Engine**
  * Port the Alison-inspired design system (`style.css` design tokens).
  * Build the 5-question intake wizard with real-time telemetry updates.
  * Implement the 10-dimension mathematical formula and calculate Alignment Index.
* **Sprint 3 (Days 21–30): Resume Ingestion & AI Parsing**
  * Build the drag-and-drop resume upload component with file size/type validation.
  * Connect to AWS S3 / Cloudflare R2 for secure PDF storage.
  * Integrate Gemini 1.5 Flash / GPT-4o endpoint for structured JSON extraction.
* **Sprint 4 (Days 31–40): 3-Tier Pricing & Razorpay Integration**
  * Build 3-tier pricing UI (Free, ₹1,999, ₹5,999).
  * Integrate Razorpay order creation, payment gateway modal, and secure webhook signature verification (`razorpay_signature`).
  * Implement paywall gating: unlocking Level 2 dynamically displays the full 5-tab 90-day blueprint.
* **Sprint 5 (Days 41–50): Consultant Booking, WhatsApp & QA**
  * Implement consultant profile cards and modal slot selection.
  * Integrate Google Calendar API / Cal.com webhook to issue meeting links upon Level 3 payment.
  * Set up WhatsApp transactional alerts (`+91 85279 60661`) via Meta Cloud API.
  * Conduct cross-browser, mobile responsiveness, and Lighthouse performance auditing.

---

## 11. Developer Checklist & Quality Gates

Before production deployment, verify the following:
- [ ] **Lighthouse Performance Score:** $\ge 90$ on desktop, $\ge 85$ on mobile.
- [ ] **Accessibility (WCAG 2.1 AA):** High contrast on all text elements (minimum 4.5:1 ratio for body copy).
- [ ] **Payment Webhook Idempotency:** Webhook handles duplicate events without duplicate database row insertion.
- [ ] **Resume Data Privacy:** Resumes stored in private buckets with time-limited pre-signed URLs; PII encrypted at rest.
- [ ] **Fallback Grace Period:** If resume parsing fails, smoothly fallback to manual 5-question intake without breaking the session.
