/**
 * Pivot My Career - Universal Career Pivot Intelligence & Pathways
 * Maps any working professional's existing tooling, vertical experience, and instincts to high-growth career tracks.
 * Features 3-Tier Architecture: Free AI Diagnostic, ₹1,999 Psychometric Audit, and ₹5,999 1:1 Consultant Call.
 */

const CAREER_DATA = {
  // Brand Configuration
  brand: {
    name: "Pivot My Career",
    tagline: "AI Speed. Psychometric Rigor. 1:1 Human Mentorship.",
    subtext: "Analyze your daily tools, resume, and behavioral instincts — backed by veteran career consultants."
  },

  // 3-Tier Pricing and Service Structure
  tiers: [
    {
      id: "tier_free",
      name: "Quick AI Diagnostic",
      badge: "Free Starter",
      price: "₹0",
      originalPrice: "Free Forever",
      period: "Instant access",
      description: "Quick 5-question capability audit + resume upload to identify your immediate pivot direction.",
      features: [
        "5-Question Tool & Capability Audit",
        "AI Resume Parsing & Skill Extraction",
        "Instant Career Alignment Index (0–100)",
        "Primary Recommended Career Path",
        "Top Superpower vs. Growth Delta Signal"
      ],
      notIncluded: [
        "Detailed Psychometric Behavioral Profile",
        "Comprehensive 7–8 Page Transition Blueprint",
        "Skill Bridge & 90-Day Weekly Milestones",
        "1-on-1 Senior Career Consultant Strategy Call"
      ],
      ctaText: "Start Free Diagnostic",
      ctaClass: "btn-secondary",
      isPopular: false
    },
    {
      id: "tier_psychometric",
      name: "Psychometric & Capability Audit",
      badge: "Most Popular",
      price: "₹1,999",
      originalPrice: "₹4,500",
      discount: "55% OFF",
      period: "One-time investment",
      description: "Comprehensive behavioral psychometric test and detailed intake to build your verified 90-day transition plan.",
      features: [
        "Everything in Free Diagnostic",
        "Detailed 40-Question Psychometric Behavioral Assessment",
        "10-Dimension Behavioral & Technical Scorecard",
        "The Complete 7–8 Page Personalized Pivot Blueprint",
        "Custom Skill Bridge Matrix (What you own vs. what to close)",
        "90-Day Week-by-Week Technical Portfolio Projects",
        "Calibrated Mentor & Coffee-Chat LinkedIn Scripts",
        "Verified Salary Benchmarks & Hiring Verticals",
        "Direct WhatsApp Priority Query Support"
      ],
      notIncluded: [
        "1-on-1 Senior Career Consultant Strategy Call"
      ],
      ctaText: "Get Psychometric Audit (₹1,999)",
      ctaClass: "btn-primary",
      isPopular: true
    },
    {
      id: "tier_consultant",
      name: "Executive 1:1 Guided Transition",
      badge: "Highest Success Rate",
      price: "₹5,999",
      originalPrice: "₹12,000",
      discount: "50% OFF",
      period: "Complete Guided Package",
      description: "Everything in Tier 2 plus a dedicated 60-minute 1-on-1 strategy call with an industry career director.",
      features: [
        "Everything in Tier 2 Psychometric Audit",
        "60-Minute 1-on-1 Video Strategy Call with a Senior Career Consultant",
        "Personalized Resume & LinkedIn Profile Teardown for Your Target Role",
        "Live Pressure-Testing of Your 90-Day Transition Blueprint",
        "Insider Interview Preparation & Domain Case Study Frameworks",
        "Direct Referral Guidance to Hiring Companies in Our Network",
        "30 Days of Direct WhatsApp/Email Access with Your Consultant",
        "Guaranteed Actionable Transition Roadmap or 100% Refund"
      ],
      notIncluded: [],
      ctaText: "Book 1:1 Consultant Package (₹5,999)",
      ctaClass: "btn-amber",
      isPopular: false
    }
  ],

  // Senior Career Consultants Roster for Tier 3
  consultants: [
    {
      id: "vikram_m",
      name: "Vikram Malhotra",
      role: "Ex-Director of Analytics & BI @ Grab & Flipkart",
      experience: "14+ Years in Data & Tech Transitions",
      specialization: "Excel / MIS / Finance → Data Analyst, BI & Analytics Engineering",
      bio: "Has hired and mentored over 80+ career pivoters from non-CS backgrounds into senior analytics roles.",
      avatar: "👨‍💼"
    },
    {
      id: "ananya_s",
      name: "Ananya Sen",
      role: "Former Principal Consultant @ BCG & Product Ops Lead",
      experience: "11+ Years in Strategy & Operations",
      specialization: "Admin / EA / Presentations → BizOps, Chief of Staff & PMM",
      bio: "Specializes in helping operational generalists translate backstage coordination into high-salary executive leadership.",
      avatar: "👩‍💼"
    },
    {
      id: "rajesh_n",
      name: "Rajesh Nair",
      role: "VP of Global Supply Chain Strategy @ Unilever / Maersk",
      experience: "16+ Years in Logistics & SCM Tech",
      specialization: "Logistics / Procurement → SCM Analytics & Strategic Sourcing",
      bio: "Advises enterprise logistics executives and mentors mid-career coordinators into predictive supply chain leaders.",
      avatar: "👨‍💻"
    }
  ],

  // Psychometric Assessment Framework (Tier 2 & 3)
  psychometricFramework: [
    {
      dimension: "Ambiguity & Uncertainty Tolerance",
      description: "Measures whether you freeze under unstructured problems or thrive by imposing structured logic.",
      idealFor: "Strategic Consulting, Analytics, Product Ops"
    },
    {
      dimension: "Decision Velocity Under Scarcity",
      description: "How quickly you reach 80% confidence decisions when 100% of data is not available.",
      idealFor: "Executive Leadership, RevOps, BizOps"
    },
    {
      dimension: "Cognitive Conflict & Influence Style",
      description: "How you persuade stubborn cross-functional stakeholders when you lack formal hierarchical authority.",
      idealFor: "Product Marketing (PMM), Business Operations"
    },
    {
      dimension: "Execution Grit & Self-Directed Runway",
      description: "Predicts your probability of completing 90-day independent upskilling alongside a 45-hour work week.",
      idealFor: "All High-Growth Pivots"
    }
  ],

  // Diverse Presets for Instant Demonstration
  presets: {
    excel_analyst: {
      id: "excel_analyst",
      name: "Rohan M. (Excel & MIS Specialist)",
      currentRole: "MIS & Operations Executive",
      vertical: "Spreadsheets & Reporting",
      yearsExp: "3.5 Years",
      currentSalary: "$62,000 / ₹9 LPA",
      resumeFileName: "Rohan_Sharma_MIS_Operations_Resume.pdf",
      resumeParsedSkills: ["Excel (XLOOKUP, Power Query)", "MIS Reporting", "VBA Basics", "Data Cleaning", "Google Sheets"],
      primaryTools: ["Advanced Excel", "Power Query", "Google Sheets", "ERP"],
      answers: {
        current_vertical: "reporting_spreadsheets",
        primary_toolset: "excel_power",
        cognitive_superpower: "pattern_and_numbers",
        career_friction: "manual_repetitive",
        upskill_bandwidth: "8_12_hours"
      }
    },
    supply_chain: {
      id: "supply_chain",
      name: "Kavita R. (Supply Chain & Logistics Specialist)",
      currentRole: "Supply Chain & Inventory Coordinator",
      vertical: "Supply Chain & Procurement",
      yearsExp: "4 Years",
      currentSalary: "$68,000 / ₹11 LPA",
      resumeFileName: "Kavita_Rao_Logistics_SCM_Resume.pdf",
      resumeParsedSkills: ["SAP SCM", "Inventory Control", "Purchase Orders", "Vendor Management", "Excel"],
      primaryTools: ["SAP SCM", "Inventory ERP", "Excel", "Vendor Portals"],
      answers: {
        current_vertical: "supply_chain_logistics",
        primary_toolset: "erp_supply_chain",
        cognitive_superpower: "resource_optimization",
        career_friction: "operational_firefighting",
        upskill_bandwidth: "8_12_hours"
      }
    },
    admin_ops: {
      id: "admin_ops",
      name: "Sarah T. (Executive Assistant & Office Admin)",
      currentRole: "Executive Assistant / Admin Operations Lead",
      vertical: "Administration & Office Ops",
      yearsExp: "5 Years",
      currentSalary: "$58,000 / ₹8.5 LPA",
      resumeFileName: "Sarah_Taylor_Executive_Admin_Resume.pdf",
      resumeParsedSkills: ["Executive Coordination", "Asana/Notion", "Calendar Management", "Cross-Team Ops", "Google Workspace"],
      primaryTools: ["Google Workspace", "Notion", "Slack", "Asana", "Travel/Expense ERP"],
      answers: {
        current_vertical: "admin_operations",
        primary_toolset: "ops_pm_tools",
        cognitive_superpower: "chaos_orchestration",
        career_friction: "salary_ceiling",
        upskill_bandwidth: "8_12_hours"
      }
    },
    finance_pro: {
      id: "finance_pro",
      name: "Amit P. (Senior Accountant & Billing Lead)",
      currentRole: "Senior Financial Accountant",
      vertical: "Finance & Accounting",
      yearsExp: "4.5 Years",
      currentSalary: "$65,000 / ₹10.5 LPA",
      resumeFileName: "Amit_Patel_Senior_Accountant_Resume.pdf",
      resumeParsedSkills: ["Tally Prime", "SAP FICO", "Financial Reconciliations", "GST / Tax Filings", "Excel Modeling"],
      primaryTools: ["Tally / QuickBooks", "Excel (Financials)", "SAP FICO", "Tax Portals"],
      answers: {
        current_vertical: "finance_accounting",
        primary_toolset: "financial_accounting_tools",
        cognitive_superpower: "reconciliation_and_audit",
        career_friction: "month_end_burnout",
        upskill_bandwidth: "8_12_hours"
      }
    },
    powerpoint_pitch: {
      id: "powerpoint_pitch",
      name: "Elena G. (PowerPoint & Pitch Deck Specialist)",
      currentRole: "Presentation Designer & Sales Enablement Associate",
      vertical: "Presentations & Visual Communication",
      yearsExp: "3 Years",
      currentSalary: "$64,000 / ₹9.5 LPA",
      resumeFileName: "Elena_G_Presentation_Designer_Resume.pdf",
      resumeParsedSkills: ["PowerPoint Mastery", "Pitch Decks", "Keynote", "Visual Hierarchy", "Sales Collateral"],
      primaryTools: ["PowerPoint (Master)", "Keynote", "Canva", "Figma (Basics)", "Pitch Decks"],
      answers: {
        current_vertical: "presentation_marketing",
        primary_toolset: "decks_visuals",
        cognitive_superpower: "visual_storytelling",
        career_friction: "undervalued_creativity",
        upskill_bandwidth: "8_12_hours"
      }
    }
  },

  // 10 Dimensions of Professional Capability
  dimensions: [
    {
      id: "analytical_rigor",
      name: "Quantitative & Analytical Rigor",
      icon: "📊",
      description: "Ability to parse numerical data, test assumptions, and identify root anomalies."
    },
    {
      id: "tool_fluency",
      name: "Tool Leverage & Software Fluency",
      icon: "⚡",
      description: "Speed and depth in commanding spreadsheets, enterprise software, or creative suites."
    },
    {
      id: "process_orchestration",
      name: "Process Orchestration & Logistics",
      icon: "⚙️",
      description: "Organizing fragmented workflows, managing vendors, and eliminating operational drag."
    },
    {
      id: "narrative_persuasion",
      name: "Visual Storytelling & Executive Persuasion",
      icon: "🎨",
      description: "Distilling complex arguments into polished slides, documents, and stakeholder narratives."
    },
    {
      id: "commercial_acumen",
      name: "Commercial Acumen & P&L Intuition",
      icon: "💼",
      description: "Connecting daily work to business profitability, unit economics, and cost drivers."
    },
    {
      id: "execution_reliability",
      name: "Execution Reliability & Closes",
      icon: "🎯",
      description: "Delivering dependable, audit-proof results under tight recurring deadlines."
    },
    {
      id: "strategic_problem_solving",
      name: "Root-Cause Grit & Problem Solving",
      icon: "🔍",
      description: "Digging through chaos until an operational or financial bottleneck is resolved."
    },
    {
      id: "learning_agility",
      name: "Upskilling Velocity & New Tech Agility",
      icon: "🚀",
      description: "Capacity to adopt modern tools (SQL, BI, automation, AI) while working full-time."
    },
    {
      id: "stakeholder_empathy",
      name: "Cross-Functional Influence & Empathy",
      icon: "🤝",
      description: "Comfort aligning executives, technical peers, clients, and external suppliers."
    },
    {
      id: "autonomy_drive",
      name: "Autonomy & Initiative Runway",
      icon: "🧭",
      description: "Building automated workflows and proactive solutions without waiting for instructions."
    }
  ],

  // Universal Intake Questions (Tier 1 Diagnostic)
  questions: [
    {
      id: "current_vertical",
      category: "Step 1 of 5 · Background",
      title: "What is your primary functional domain or current focus?",
      subtitle: "Select the area where the bulk of your experience and daily responsibilities lie.",
      options: [
        {
          value: "reporting_spreadsheets",
          label: "Spreadsheets, MIS & Data Reporting",
          sub: "Managing heavy workbooks, data hygiene, dashboards, and operational trackers.",
          badge: "High Tech Pivot Potential",
          scoreImpact: { analytical_rigor: 26, tool_fluency: 28, execution_reliability: 20 }
        },
        {
          value: "supply_chain_logistics",
          label: "Supply Chain, Logistics & Procurement",
          sub: "Tracking shipments, purchase orders, vendor delivery, inventory levels, and ERP entries.",
          badge: "High Demand Pivot",
          scoreImpact: { process_orchestration: 30, commercial_acumen: 24, strategic_problem_solving: 22 }
        },
        {
          value: "admin_operations",
          label: "Administration, Office Ops & Executive Support",
          sub: "Managing calendars, office workflow, internal communications, cross-team coordination.",
          badge: "Leadership Bridge",
          scoreImpact: { process_orchestration: 28, stakeholder_empathy: 28, autonomy_drive: 22 }
        },
        {
          value: "finance_accounting",
          label: "Finance, Accounting, Audit & Billing",
          sub: "General ledger, monthly closes, invoices, reconciliations, financial statements.",
          badge: "Strategic Finance Fit",
          scoreImpact: { commercial_acumen: 30, analytical_rigor: 26, execution_reliability: 25 }
        },
        {
          value: "presentation_marketing",
          label: "Presentations, Pitch Decks & Marketing Support",
          sub: "Crafting executive slides, investor pitch decks, sales collateral, visual branding.",
          badge: "Creative & Strategy Fit",
          scoreImpact: { narrative_persuasion: 32, stakeholder_empathy: 24, tool_fluency: 22 }
        }
      ]
    },
    {
      id: "primary_toolset",
      category: "Step 2 of 5 · Tool Fluency",
      title: "What is your primary daily tool capability?",
      subtitle: "Where do you spend the majority of your keyboard hours?",
      options: [
        {
          value: "excel_power",
          label: "Excel / Google Sheets (Advanced / Power User)",
          sub: "XLOOKUP, nested logic, Pivot Tables, Power Query, cleaning messy CSV exports.",
          scoreImpact: { tool_fluency: 30, analytical_rigor: 25, autonomy_drive: 20 }
        },
        {
          value: "erp_supply_chain",
          label: "ERP & SCM Platforms (SAP, Oracle, NetSuite, Zoho)",
          sub: "PO creation, inventory allocation, master data management, logistics portals.",
          scoreImpact: { process_orchestration: 28, commercial_acumen: 22, tool_fluency: 22 }
        },
        {
          value: "ops_pm_tools",
          label: "Ops & Collaboration Suites (Notion, Jira, Asana, Slack, GSuite)",
          sub: "Standard Operating Procedures (SOPs), ticketing, documentation, scheduling.",
          scoreImpact: { process_orchestration: 26, stakeholder_empathy: 24, autonomy_drive: 22 }
        },
        {
          value: "financial_accounting_tools",
          label: "Accounting & Tax Software (Tally, QuickBooks, SAP FICO, Xero)",
          sub: "Reconciliation modules, trial balance generation, tax compliance forms.",
          scoreImpact: { commercial_acumen: 28, execution_reliability: 28, analytical_rigor: 24 }
        },
        {
          value: "decks_visuals",
          label: "Presentation Software (PowerPoint Master, Keynote, Canva)",
          sub: "Master slide templates, animations, visual hierarchy, infographic synthesis.",
          scoreImpact: { narrative_persuasion: 30, tool_fluency: 24, stakeholder_empathy: 22 }
        }
      ]
    },
    {
      id: "cognitive_superpower",
      category: "Step 3 of 5 · Behavioral Instinct",
      title: "What is your genuine, instinctive superpower at work?",
      subtitle: "What do colleagues instinctively come to you for help with?",
      options: [
        {
          value: "pattern_and_numbers",
          label: "Investigating Numbers: Finding why numbers don't tie or spotting the hidden anomaly.",
          scoreImpact: { analytical_rigor: 28, strategic_problem_solving: 26 }
        },
        {
          value: "resource_optimization",
          label: "Supply & Cost Optimization: Ensuring goods arrive on time while cutting unnecessary costs.",
          scoreImpact: { commercial_acumen: 26, process_orchestration: 28 }
        },
        {
          value: "chaos_orchestration",
          label: "Organizing Chaos: Turning disorganized projects and confused teams into clear, structured timelines.",
          scoreImpact: { process_orchestration: 30, autonomy_drive: 26, stakeholder_empathy: 24 }
        },
        {
          value: "reconciliation_and_audit",
          label: "Financial Precision: Ensuring every rupee or dollar is accounted for with zero margin for error.",
          scoreImpact: { execution_reliability: 30, commercial_acumen: 26 }
        },
        {
          value: "visual_storytelling",
          label: "Executive Storytelling: Taking messy ideas or data and turning them into stunning, persuasive slide decks.",
          scoreImpact: { narrative_persuasion: 32, stakeholder_empathy: 26 }
        }
      ]
    },
    {
      id: "career_friction",
      category: "Step 4 of 5 · Friction & Goals",
      title: "What is your #1 frustration with your current job trajectory?",
      subtitle: "This helps identify which career pivot will deliver the highest job satisfaction.",
      options: [
        {
          value: "manual_repetitive",
          label: "Tired of repetitive, manual grunt work with zero voice in strategic decisions.",
          sub: "Goal: Move toward analytics or strategy where insights drive high-level decisions.",
          scoreImpact: { learning_agility: 25, autonomy_drive: 22 }
        },
        {
          value: "operational_firefighting",
          label: "Endless firefighting: Delayed shipments and constant escalations without better systems.",
          sub: "Goal: Move toward tech-enabled supply chain analytics and strategic sourcing.",
          scoreImpact: { strategic_problem_solving: 26, process_orchestration: 22 }
        },
        {
          value: "salary_ceiling",
          label: "Stuck behind an administrative or support salary ceiling despite running the office.",
          sub: "Goal: Formalize ops experience into high-leverage Business Operations or Chief of Staff roles.",
          scoreImpact: { autonomy_drive: 28, stakeholder_empathy: 24 }
        },
        {
          value: "month_end_burnout",
          label: "Drowning in repetitive month-end closes instead of forward-looking financial forecasting.",
          sub: "Goal: Pivot from compliance accounting to Strategic FP&A and FinTech analytics.",
          scoreImpact: { commercial_acumen: 26, analytical_rigor: 22 }
        },
        {
          value: "undervalued_creativity",
          label: "Treated as a 'deck formatter' instead of a strategic communication architect.",
          sub: "Goal: Pivot into Product Marketing (PMM) or Corporate Strategy Consulting.",
          scoreImpact: { narrative_persuasion: 28, commercial_acumen: 20 }
        }
      ]
    },
    {
      id: "upskill_bandwidth",
      category: "Step 5 of 5 · Transition Runway",
      title: "How many hours per week can you realistically dedicate to upskilling?",
      subtitle: "Built specifically for professionals working 40+ hours a week.",
      options: [
        {
          value: "4_6_hours",
          label: "4–6 hours / week (Weekends primarily)",
          sub: "Sustainable 6-month roadmap with zero weekday burnout.",
          scoreImpact: { execution_reliability: 18, learning_agility: 15 }
        },
        {
          value: "8_12_hours",
          label: "8–12 hours / week (1 hour on weekdays + weekend sprint)",
          sub: "Recommended 90-day transition timeline with high conversion.",
          scoreImpact: { execution_reliability: 28, learning_agility: 28, autonomy_drive: 25 }
        },
        {
          value: "15_plus_hours",
          label: "15+ hours / week (High intensity sprint)",
          sub: "Fast-track 60-day career pivot.",
          scoreImpact: { learning_agility: 34, autonomy_drive: 32 }
        }
      ]
    }
  ],

  // 5 Specialized Career Transition Pathways
  paths: {
    data_analyst: {
      id: "data_analyst",
      title: "Data & Business Intelligence Analyst",
      category: "Analytics & Business Intelligence",
      bestForVerticals: ["reporting_spreadsheets"],
      subtitle: "The natural, high-converting evolution of the Excel / MIS Specialist",
      salaryRange: {
        entry: "$75,000 - $95,000",
        india: "₹8.5 LPA - ₹16 LPA",
        senior: "$120,000+ / ₹25 LPA+"
      },
      whyYouFit: "Your mastery of spreadsheet logic, data cleaning, and reporting covers 60% of what commercial data analysts do every day. The remaining 40% is simply syntactical: replacing multi-sheet formulas with SQL queries, and static charts with dynamic Power BI/Tableau data models.",
      demandOutlook: "Very High & Resilient. Companies are awash in raw data from SaaS tools and desperately need analysts who understand commercial context and can bridge business users with modern cloud warehouses.",
      
      skillBridge: {
        existing: [
          { skill: "Spreadsheet Data Modeling", transferability: "95%", note: "VLOOKUP and XLOOKUP logic directly maps to SQL JOIN operations." },
          { skill: "Pivot Tables & Grouping", transferability: "90%", note: "Identical mental model for SQL GROUP BY and metric aggregations." },
          { skill: "Business Context & Metric Sense", transferability: "100%", note: "Pure CS graduates often lack this commercial intuition." },
          { skill: "Data Cleaning & Sanitation", transferability: "85%", note: "Trimming text, handling blank cells, and formatting dates." }
        ],
        toAcquire: [
          { skill: "SQL (Joins, CTEs, Window Functions)", difficulty: "Moderate", estHours: "25–35 Hours", priority: "Highest Priority (Month 1)" },
          { skill: "Power BI or Tableau Dashboarding", difficulty: "Low-Moderate", estHours: "20–25 Hours", priority: "High Priority (Month 2)" },
          { skill: "Cloud Data Warehouse Basics (BigQuery/Snowflake)", difficulty: "Low", estHours: "10 Hours", priority: "Medium Priority (Month 3)" }
        ]
      },

      blueprint: [
        {
          phase: "Month 1 (Days 1–30)",
          title: "The SQL Bridge & Query Fluency",
          focus: "Translate your existing Excel formulas into clean, scalable SQL code.",
          weeklySteps: [
            "Week 1: Master SELECT, WHERE, ORDER BY, and basic aggregations using free PostgreSQL or Google BigQuery sandbox.",
            "Week 2: Deep dive into JOINs (INNER, LEFT, FULL) — explicitly note how they replace messy VLOOKUP sheets.",
            "Week 3: Advanced querying: GROUP BY, HAVING, subqueries, and CASE WHEN statements.",
            "Week 4: Window Functions (ROW_NUMBER, RANK, LAG/LEAD). Complete 30 LeetCode/StrataScratch business SQL drills."
          ],
          deliverable: "A documented GitHub repository with 5 business queries solving real sales & churn questions."
        },
        {
          phase: "Month 2 (Days 31–60)",
          title: "Executive BI Dashboarding & Data Modeling",
          focus: "Transform static tabular summaries into interactive, self-serve executive dashboards.",
          weeklySteps: [
            "Week 5: Learn Star Schema data modeling: Fact tables vs. Dimension tables in Power BI or Tableau.",
            "Week 6: Build dynamic DAX measures (YTD Growth, MoM Churn, Rolling Averages).",
            "Week 7: Create Project #1: Executive Revenue & Customer Churn Dashboard with dynamic slicers.",
            "Week 8: Create Project #2: Operational Efficiency & SLA Tracker with clear anomaly callouts."
          ],
          deliverable: "A live published web dashboard link + a 2-minute Loom walkthrough explaining business findings."
        },
        {
          phase: "Month 3 (Days 61–90)",
          title: "Resume Reframing & Targeted Networking",
          focus: "Reframe your past experience from 'reporting helper' to 'data-driven decision driver'.",
          weeklySteps: [
            "Week 9: Rewrite past resume bullet points using the Google XYZ formula: 'Accomplished [X] measured by [Y] by doing [Z]'.",
            "Week 10: Optimize LinkedIn headline to: 'Data & BI Analyst | SQL | Power BI | Translating Raw Data into Revenue Decisions'.",
            "Week 11: Conduct 5 targeted networking coffee chats with Analytics Managers on LinkedIn.",
            "Week 12: Target 10 mid-tier growth companies and apply through warm referrals."
          ],
          deliverable: "Polished portfolio site, optimized LinkedIn profile, and an active interview pipeline."
        }
      ],

      mentorQuestions: [
        {
          q: "When hiring a career-changer into an analytics role, what is the #1 red flag you see on portfolio projects?",
          whyAsk: "Prevents you from building toy tutorial projects (like Titanic or Iris datasets) that hiring managers immediately ignore."
        },
        {
          q: "How does your team split work between ad-hoc SQL pulls and self-serve dashboard maintenance?",
          whyAsk: "Reveals whether the open role is a strategic business partner or a ticket-taking data assistant."
        },
        {
          q: "Given my strong background in complex operational spreadsheets, how would you recommend framing my transition to sound like an asset rather than a liability?",
          whyAsk: "Gives you the exact wording industry leaders use to advocate for non-traditional candidates."
        }
      ]
    },

    supply_chain_analytics: {
      id: "supply_chain_analytics",
      title: "Supply Chain Analytics & Strategic Sourcing Specialist",
      category: "Logistics & SCM Intelligence",
      bestForVerticals: ["supply_chain_logistics"],
      subtitle: "For Supply Chain, Logistics, and Procurement coordinators moving to high-impact planning",
      salaryRange: {
        entry: "$80,000 - $105,000",
        india: "₹10 LPA - ₹18 LPA",
        senior: "$130,000+ / ₹28 LPA+"
      },
      whyYouFit: "You already know how messy physical supply chains really are: stockouts, customs delays, vendor lead times, and freight volatility. By pairing that operational scar tissue with predictive inventory modeling and SQL/BI analytics, you become 10x more valuable than a pure software hire.",
      demandOutlook: "Massive. Geopolitical volatility, e-commerce quick delivery, and nearshoring have made predictive supply chain analysts top corporate hires in manufacturing, retail, and tech.",
      
      skillBridge: {
        existing: [
          { skill: "Inventory & Lead-Time Intuition", transferability: "95%", note: "Understanding safety stock, stockout risks, and supplier reliability." },
          { skill: "Vendor & Purchase Order Operations", transferability: "90%", note: "Knowing real commercial contracts and logistics documentation." },
          { skill: "ERP Master Data Awareness", transferability: "85%", note: "Familiarity with SAP/Oracle item masters, SKUs, and purchase orders." }
        ],
        toAcquire: [
          { skill: "Supply Chain Analytics with SQL & Power BI", difficulty: "Moderate", estHours: "25 Hours", priority: "Highest Priority" },
          { skill: "Inventory Optimization & Safety Stock Modeling", difficulty: "Moderate", estHours: "20 Hours", priority: "High Priority" },
          { skill: "Freight Cost Analysis & Route Optimization", difficulty: "Low-Moderate", estHours: "15 Hours", priority: "Medium Priority" }
        ]
      },

      blueprint: [
        {
          phase: "Month 1 (Days 1–30)",
          title: "SCM Metrics & Analytical Foundations",
          focus: "Upgrade day-to-day coordination into quantitative supply chain modeling.",
          weeklySteps: [
            "Week 1: Master core SCM equations in spreadsheets: EOQ, Reorder Point, and Safety Stock.",
            "Week 2: Learn SQL querying against ERP database schemas (Orders, Shipments, Line Items).",
            "Week 3: Build an automated Supplier On-Time In-Full (OTIF) tracking model in SQL.",
            "Week 4: Analyze Freight Spend & Logistics Cost per kg across multiple shipping lanes."
          ],
          deliverable: "A comprehensive OTIF & Freight Cost Analyzer model connected to a SQL database."
        },
        {
          phase: "Month 2 (Days 31–60)",
          title: "Predictive Inventory Dashboards",
          focus: "Build executive visibility into stockout risks and working capital efficiency.",
          weeklySteps: [
            "Week 5: Connect warehouse stock data to Power BI or Tableau.",
            "Week 6: Build an interactive 'Stockout Risk & Inventory Ageing Dashboard'.",
            "Week 7: Model SKU rationalization (ABC/XYZ analysis) to identify dead inventory.",
            "Week 8: Build a simulation showing how a 10% reduction in lead time saves $100k in working capital."
          ],
          deliverable: "An interactive Power BI Supply Chain Command Center dashboard."
        },
        {
          phase: "Month 3 (Days 61–90)",
          title: "Strategic Positioning & Hiring Channels",
          focus: "Position yourself as a modern supply chain strategist who cuts millions in waste.",
          weeklySteps: [
            "Week 9: Rebrand resume around 'Working Capital Optimization', 'Lead Time Reduction', and 'SCM Intelligence'.",
            "Week 10: Connect with Directors of Supply Chain and Procurement at retail, automotive, and D2C brands.",
            "Week 11: Share your inventory optimization case study on LinkedIn.",
            "Week 12: Interview preparation for case interviews."
          ],
          deliverable: "Case study portfolio deck showcasing supplier evaluation and working capital reduction."
        }
      ],

      mentorQuestions: [
        {
          q: "What is currently your organization's biggest bottleneck in predicting inventory stockouts?",
          whyAsk: "Positions you immediately as someone thinking about their balance sheet."
        },
        {
          q: "How does your team bridge the gap between ERP transactional data and real-time logistics tracking?",
          whyAsk: "Demonstrates high-level system awareness beyond basic data entry."
        }
      ]
    },

    bizops_manager: {
      id: "bizops_manager",
      title: "Business Operations Manager & Chief of Staff",
      category: "Strategic Operations & Leadership",
      bestForVerticals: ["admin_operations"],
      subtitle: "For Executive Assistants, Office Managers, and Admin Leads ready to run strategic operations",
      salaryRange: {
        entry: "$85,000 - $110,000",
        india: "₹12 LPA - ₹20 LPA",
        senior: "$140,000+ / ₹30 LPA+"
      },
      whyYouFit: "You already know how the company actually breathes: who makes decisions, where cross-functional friction happens, and how executive priorities get lost in translation. Transitioning to BizOps or Chief of Staff formalizes your coordination superpower into high-leverage business leadership.",
      demandOutlook: "Very High in tech startups and scaling companies. Founders and VPs desperately need operational partners who can take nebulous initiatives, build SOPs, and execute them across departments.",
      
      skillBridge: {
        existing: [
          { skill: "Executive Stakeholder Management", transferability: "95%", note: "Managing C-suite schedules, confidential briefs, and board materials." },
          { skill: "Chaos & Project Orchestration", transferability: "90%", note: "Keeping 15 concurrent moving parts on schedule with zero supervision." },
          { skill: "Company Culture & Internal Navigation", transferability: "90%", note: "Knowing how to get things done without official managerial authority." }
        ],
        toAcquire: [
          { skill: "KPI Frameworks & OKR Tracking (Asana / ClickUp / Notion)", difficulty: "Low", estHours: "15 Hours", priority: "Highest Priority" },
          { skill: "Financial Modeling Basics (Operating Budgets & Headcount)", difficulty: "Moderate", estHours: "20 Hours", priority: "High Priority" },
          { skill: "Process Automation (Zapier / Make / Workflow Scripts)", difficulty: "Low-Moderate", estHours: "15 Hours", priority: "High Priority" }
        ]
      },

      blueprint: [
        {
          phase: "Month 1 (Days 1–30)",
          title: "Operating Systems & Process Design",
          focus: "Upgrade ad-hoc admin tasks into repeatable company-wide operating procedures.",
          weeklySteps: [
            "Week 1: Master modern BizOps frameworks: Company OKRs, Operating Cadence, and RACI matrices.",
            "Week 2: Build an end-to-end Onboarding & Cross-Departmental Knowledge Base in Notion or ClickUp.",
            "Week 3: Automate internal request triage using Zapier/Make connected to Slack and email.",
            "Week 4: Learn basic departmental P&L budgeting and vendor contract review."
          ],
          deliverable: "A comprehensive Company Operating Manual & Automated Workflow in Notion."
        },
        {
          phase: "Month 2 (Days 31–60)",
          title: "Executive Business Metrics & Project Governance",
          focus: "Learn how to run quarterly business reviews (QBRs) and track operational milestones.",
          weeklySteps: [
            "Week 5: Build an Executive Dashboard in Sheets/Looker tracking company headcount and burn rate.",
            "Week 6: Conduct an internal friction audit: interview 3 team leads and map where workflow gets stuck.",
            "Week 7: Draft a 10-slide Board of Directors quarterly review deck template.",
            "Week 8: Build an automated vendor renewal and software license tracker."
          ],
          deliverable: "Executive Quarterly Review Template and Strategic Resource Allocation Deck."
        },
        {
          phase: "Month 3 (Days 61–90)",
          title: "The BizOps / Chief of Staff Pivot Launch",
          focus: "Rebrand from 'supportive assistant' to 'the operator who scales the company'.",
          weeklySteps: [
            "Week 9: Rebrand resume around 'Operational Efficiency', 'Executive Leverage', and 'Strategic Project Delivery'.",
            "Week 10: Target Series A to Series C startups hiring their first Operations Manager or Chief of Staff.",
            "Week 11: Join Chief of Staff communities (Chief of Staff Network, Operator Guild).",
            "Week 12: Interview prep on operational crises."
          ],
          deliverable: "Operational portfolio showcasing process automation, company operating cadence, and executive briefs."
        }
      ],

      mentorQuestions: [
        {
          q: "How does your leadership team measure the ROI of a dedicated BizOps or Chief of Staff role?",
          whyAsk: "Allows you to mirror their exact value metrics in your resume and interview."
        },
        {
          q: "What is the biggest operational headache currently slowing down your company's growth?",
          whyAsk: "Identifies the exact problem you should offer to solve in your second interview."
        }
      ]
    },

    fpa_finance: {
      id: "fpa_finance",
      title: "Strategic FP&A & Corporate Finance Analyst",
      category: "Strategic Finance & Forecasting",
      bestForVerticals: ["finance_accounting"],
      subtitle: "For Accountants, Bookkeepers, and Auditors moving from historical bookkeeping to forward forecasting",
      salaryRange: {
        entry: "$85,000 - $110,000",
        india: "₹12 LPA - ₹22 LPA",
        senior: "$145,000+ / ₹32 LPA+"
      },
      whyYouFit: "Traditional accounting looks in the rearview mirror (what was spent last month). FP&A looks through the front windshield (how much cash will we have in 12 months?). Your accounting precision means you'll never build a mathematically flawed forecast, giving you instant credibility with CFOs.",
      demandOutlook: "High & Recession-Proof. CFOs are cutting vanity spend and relying heavily on FP&A analysts who can model headcount, cash runways, and unit economics under volatile market conditions.",
      
      skillBridge: {
        existing: [
          { skill: "Accounting Principles & Double Entry", transferability: "100%", note: "Income statement, balance sheet, and cash flow fundamentals." },
          { skill: "Audit-Proof Precision & Reconciliations", transferability: "95%", note: "Zero-tolerance for unexplained numerical variances." },
          { skill: "General Ledger & Transactional Knowledge", transferability: "90%", note: "Knowing where each expense and revenue item originates." }
        ],
        toAcquire: [
          { skill: "3-Statement Dynamic Financial Modeling", difficulty: "Moderate", estHours: "30 Hours", priority: "Highest Priority" },
          { skill: "SaaS & Modern Unit Economics (ARR, LTV, CAC)", difficulty: "Low", estHours: "15 Hours", priority: "High Priority" },
          { skill: "Data Automation with Power BI / Adaptive Insights", difficulty: "Moderate", estHours: "20 Hours", priority: "High Priority" }
        ]
      },

      blueprint: [
        {
          phase: "Month 1 (Days 1–30)",
          title: "3-Statement Forecasting & Dynamic Scenarios",
          focus: "Upgrade static historical ledgers into dynamic forward-looking projection models.",
          weeklySteps: [
            "Week 1: Build an integrated 3-Statement Model with dynamic debt & depreciation schedules.",
            "Week 2: Implement sensitivity tables (Base case, Bull case, Bear case) using Excel Data Tables.",
            "Week 3: Build a 13-week rolling Cash Flow Forecast model.",
            "Week 4: Model Headcount Planning & Departmental Budget Variance tracking."
          ],
          deliverable: "A fully linked 3-Statement Model with scenario toggles and monthly variance analysis."
        },
        {
          phase: "Month 2 (Days 31–60)",
          title: "Unit Economics & Commercial Finance",
          focus: "Master forward metrics that drive valuation and capital allocation decisions.",
          weeklySteps: [
            "Week 5: Master SaaS economics: ARR, Net Retention Rate (NRR), CAC Payback Period.",
            "Week 6: Connect financial statements to Power BI for automated executive reporting.",
            "Week 7: Build a Pricing Sensitivity & Gross Margin contribution model.",
            "Week 8: Draft a CFO Executive Memo summarizing quarterly budget variance."
          ],
          deliverable: "Executive Financial Summary Dashboard & CFO Board Memo."
        },
        {
          phase: "Month 3 (Days 61–90)",
          title: "Strategic Finance Career Pivot",
          focus: "Position yourself as the CFO's commercial co-pilot, not a historical bookkeeper.",
          weeklySteps: [
            "Week 9: Rewrite resume highlighting 'Financial Modeling', 'Scenario Planning', and 'Cash Runway'.",
            "Week 10: Target high-growth tech startups, D2C brands, and private equity portfolio companies.",
            "Week 11: Engage with VP Finance / Directors of FP&A on LinkedIn.",
            "Week 12: Interview case study prep."
          ],
          deliverable: "Production-grade financial model portfolio and case study presentation deck."
        }
      ],

      mentorQuestions: [
        {
          q: "What is currently your most challenging variable to forecast accurately in your quarterly budget?",
          whyAsk: "Proves you understand forecasting volatility rather than simple mechanical additions."
        },
        {
          q: "How does your finance team work with product and sales leaders to enforce budget discipline?",
          whyAsk: "Demonstrates you understand cross-departmental partnership, not just isolated spreadsheet work."
        }
      ]
    },

    product_marketing: {
      id: "product_marketing",
      title: "Product Marketing Manager (PMM) & Strategy Consultant",
      category: "Go-to-Market & Strategic Communication",
      bestForVerticals: ["presentation_marketing"],
      subtitle: "For PowerPoint experts, pitch deck creators, and sales enablement leads moving into high-salary strategy",
      salaryRange: {
        entry: "$90,000 - $115,000",
        india: "₹14 LPA - ₹24 LPA",
        senior: "$160,000+ / ₹35 LPA+"
      },
      whyYouFit: "Most product engineers and executives have great ideas but terrible communication. You already possess the rare skill of translating technical concepts into visual hierarchy, persuasive narratives, and clean slide decks. Moving into PMM or Strategy turns your presentation craft into million-dollar go-to-market leadership.",
      demandOutlook: "Extremely High. As generative AI commoditizes generic code, companies are starving for professionals who can position products clearly, conduct competitor teardowns, and win enterprise deals.",
      
      skillBridge: {
        existing: [
          { skill: "Visual Hierarchy & Slide Craft", transferability: "100%", note: "PowerPoint mastery, master templates, and visual information design." },
          { skill: "Executive Narrative Structuring", transferability: "90%", note: "The Pyramid Principle: starting with the answer and building logical proof." },
          { skill: "Sales & Stakeholder Empathy", transferability: "85%", note: "Knowing what makes prospects lean in vs tune out." }
        ],
        toAcquire: [
          { skill: "Product Positioning & Messaging Frameworks", difficulty: "Low-Moderate", estHours: "20 Hours", priority: "Highest Priority" },
          { skill: "Competitive Intelligence & Battlecards", difficulty: "Low", estHours: "15 Hours", priority: "High Priority" },
          { skill: "Go-to-Market (GTM) Launch Architecture", difficulty: "Moderate", estHours: "20 Hours", priority: "High Priority" }
        ]
      },

      blueprint: [
        {
          phase: "Month 1 (Days 1–30)",
          title: "Product Positioning & Customer Psychology",
          focus: "Upgrade slide aesthetics into structured customer positioning and value propositions.",
          weeklySteps: [
            "Week 1: Master April Dunford's Positioning Framework.",
            "Week 2: Conduct a 10-point Competitor Feature Teardown of two competing SaaS products.",
            "Week 3: Build an enterprise Sales Battlecard (Objection handling, 'Why We Win').",
            "Week 4: Write a customer Case Study deck detailing a 3x ROI story."
          ],
          deliverable: "Complete Product Positioning Guide & Competitive Sales Battlecard."
        },
        {
          phase: "Month 2 (Days 31–60)",
          title: "Go-to-Market (GTM) Launch Strategy",
          focus: "Architect full launch campaigns across product, sales enablement, and marketing.",
          weeklySteps: [
            "Week 5: Design an end-to-end Product Launch Tiering Matrix.",
            "Week 6: Build an executive Sales Enablement Pitch Deck.",
            "Week 7: Create interactive Product Demo script & video walkthrough narrative.",
            "Week 8: Design customer pricing & packaging comparison slides."
          ],
          deliverable: "Full Go-To-Market Launch Plan & Enterprise Sales Deck in Google Slides/PowerPoint."
        },
        {
          phase: "Month 3 (Days 61–90)",
          title: "PMM Portfolio & Strategy Hiring Launch",
          focus: "Showcase your portfolio of positioning frameworks and GTM decks to hiring managers.",
          weeklySteps: [
            "Week 9: Publish an in-depth teardown on LinkedIn: 'Why [Company X] repositioned and doubled revenue'.",
            "Week 10: Rebrand resume as: 'Product Marketing Manager | Positioning & GTM'.",
            "Week 11: Connect with Directors of Product Marketing and VP Strategy on LinkedIn.",
            "Week 12: Interview case study prep."
          ],
          deliverable: "Public PMM Portfolio Website featuring positioning decks, battlecards, and launch plans."
        }
      ],

      mentorQuestions: [
        {
          q: "How does your PMM team measure the commercial success of a major product launch?",
          whyAsk: "Proves you care about closed revenue, not just vanity launch-day website traffic."
        },
        {
          q: "What is the biggest source of friction between your sales reps and your product engineering team?",
          whyAsk: "Positions you as the ideal bridge who can translate between tech and commercial teams."
        }
      ]
    }
  }
};
