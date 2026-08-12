import { SkillEntry, Project, Experience, AboutData } from "@/types/types";
import { Tech } from "@/lib/technology";

export const SKILL_DATA: SkillEntry[] = [
  {
    key: "aiLlms",
    title: "AI / LLMs",
    tech: [
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "RAG",
      "PageIndex",
      "Gemini",
      "QLoRA",
    ],
    achievements: [
      "Built Unlearn-LLM, an approximate model-unlearning pipeline with reinforcement, anchor extraction, generic-label generation and an unlearning stage.",
      "Built Vectorless RAG with PageIndex-style tree retrieval, PDF indexing, retrieval traces, multi-model routing and a React/FastAPI interface.",
      "Turned Stockfish engine analysis into practical chess coaching reports using local storage, FastAPI and LLM-generated explanations.",
    ],
    photo: {
      src: "skills/CoreCS.svg",
      size: 160,
      rotation: -7,
      defaultX: 120,
      defaultY: 42,
      orientation: "portrait",
      caption: "AI / LLMs",
    },
  },
  {
    key: "machineLearning",
    title: "Machine Learning",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "NetworkX",
    ],
    achievements: [
      "Built UPI Risk Sentinel with UPI-style transaction simulation, behavioral risk scoring, fraud network graphs, ring detection and investigation dashboards.",
      "Built Cardiac Risk AI with biomarker classification, cross-validation, SMOTE, model comparison, LightGBM/XGBoost experiments and SHAP explanations.",
      "Built DriverPulse for Bengaluru ward-level ride analytics, demand-gap analysis, reliability patterns, clustering, risk classification and SHAP-based interpretation.",
    ],
    photo: {
      src: "skills/Database.svg",
      size: 168,
      rotation: 5,
      defaultX: 365,
      defaultY: 24,
      orientation: "portrait",
      caption: "Machine Learning",
    },
  },
  {
    key: "backendApis",
    title: "Backend / APIs",
    tech: [
      "FastAPI",
      "Python",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "SQLite",
    ],
    achievements: [
      "Built FastAPI services that connect PDF retrieval, fraud scoring, cardiac-risk prediction, chess analysis and ward-level analytics to usable interfaces.",
      "Built API mocking infrastructure that turns natural-language endpoint descriptions into schemas, synthetic JSON, CRUD simulation, validation and chaos-mode failures.",
      "Worked across MongoDB, SQLite, Dockerized services, webhook flows and model-serving APIs for deployment-ready project structure.",
    ],
    photo: {
      src: "skills/Backend.svg",
      size: 162,
      rotation: -3,
      defaultX: 610,
      defaultY: 58,
      orientation: "portrait",
      caption: "Backend / APIs",
    },
  },
  {
    key: "fullStack",
    title: "Full-Stack",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
    ],
    achievements: [
      "Built complete AI/ML applications that connect React or Next.js interfaces with FastAPI/Node backends, model workflows and dashboards.",
      "Built product-focused web apps including Smart AI API Mocking Tool, Nirmaan 2026, Vectorless RAG and DriverPulse with TypeScript-first frontend workflows.",
      "Built Stellar payment products with wallet integration, GitHub-triggered bounty releases, Soroban/Rust contracts and proposal/approval payroll flows.",
    ],
    photo: {
      src: "skills/Frontend.svg",
      size: 158,
      rotation: 7,
      defaultX: 835,
      defaultY: 32,
      orientation: "portrait",
      caption: "Full-Stack",
    },
  },
];

// ----

export const projects: Project[] = [
  {
    id: 1,
    title: "UPI Risk Sentinel",
    tagline: "Fraud detection and risk intelligence",
    description:
      "Digital-payment fraud monitoring system with UPI-style transaction simulation, behavioral risk scoring, fraud network graphs, ring detection, suspicious-node analysis, heatmaps, alerts, and explainability.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.Python,
      Tech.FastAPI,
      Tech.Streamlit,
      Tech.Pandas,
      Tech.ScikitLearn,
    ],
    github: "https://github.com/Kishan0703/UPI-Risk-Sentinel",
    achievements: [
      "Built a fraud monitoring workflow that scores transactions and highlights risky payment behavior.",
      "Detected suspicious relationships with graph analysis, fraud-ring detection and suspicious-node analysis.",
      "Added investigation dashboards with heatmaps, alerts and explainability for risk review.",
    ],
  },
  {
    id: 2,
    title: "Unlearn-LLM",
    tagline: "Approximate LLM unlearning",
    description:
      "Implementation of an approximate LLM unlearning pipeline exploring targeted knowledge removal through reinforce, translate, relabel, and unlearn stages with GPU and CPU-friendly paths.",
    image: "/projects/placeholder.png",
    technologies: [Tech.Python, Tech.PyTorch, Tech.HuggingFace, Tech.Jupyter],
    github: "https://github.com/Kishan0703/unlearn-llm",
    achievements: [
      "Implemented the unlearning flow based on the Who's Harry Potter approach.",
      "Built reinforcement, anchor extraction, generic-label generation and unlearning stages.",
      "Supported GPU and CPU-friendly paths for experimentation.",
    ],
  },
  {
    id: 3,
    title: "Aadhaar Demographics Analysis",
    tagline: "UIDAI enrollment analytics",
    description:
      "End-to-end analytics pipeline on Aadhaar enrollment data across Indian states, districts and pincodes, with Python ETL, statistical modeling, Streamlit exploration and a React dashboard.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.Python,
      Tech.Streamlit,
      Tech.React,
      Tech.TypeScript,
      Tech.Pandas,
      Tech.ScikitLearn,
      Tech.Plotly,
    ],
    github: "https://github.com/Kishan0703/aadhar-data-analysis",
    achievements: [
      "Built ETL for cleaning, feature engineering, state standardization, rolling averages and anomaly detection.",
      "Created Streamlit and React dashboards for trends, states, seasonality, districts, clusters and forecasting.",
      "Generated cleaned exports, publication-ready plots and a documented analysis report.",
    ],
  },
  {
    id: 4,
    title: "Vectorless RAG",
    tagline: "Tree-based document Q&A",
    description:
      "Document Q&A app that indexes uploaded PDFs with tree-structured retrieval instead of traditional vector search, then answers questions from retrieved document sections with query tracing.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.FastAPI,
      Tech.Python,
      Tech.React,
      Tech.TypeScript,
      Tech.Vite,
    ],
    github: "https://github.com/Kishan0703/vectorless-rag",
    achievements: [
      "Used PageIndex-style tree retrieval to reduce dependence on chunking and vector similarity.",
      "Built PDF indexing, retrieval traces, multi-model routing and a React/FastAPI interface.",
      "Connected document retrieval to grounded answer generation from retrieved sections.",
    ],
  },
  {
    id: 5,
    title: "Smart AI API Mocking Tool",
    tagline: "Natural-language API mock generator",
    description:
      "AI-powered API mocking platform that turns plain-English API descriptions into realistic schemas, synthetic JSON, live mock endpoints, CRUD simulation, validation, and chaos-mode failures.",
    image: "/projects/placeholder.png",
    technologies: [Tech.NextJs, Tech.TypeScript, Tech.Tailwind],
    github: "https://github.com/Kishan0703/Smart-AI-API-Mocking-Tool",
    achievements: [
      "Turned plain-language endpoint descriptions into structured API schemas.",
      "Generated synthetic JSON, live mock endpoints, CRUD behavior and validation flows.",
      "Added chaos-mode failures to help frontend teams test unstable API states.",
    ],
  },
  {
    id: 6,
    title: "ChessCoach",
    tagline: "AI chess analysis and coaching",
    description:
      "Local chess analysis app that imports Chess.com games, stores analysis in SQLite, evaluates moves with Stockfish, and uses LLMs to turn engine lines into practical coaching reports.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.Python,
      Tech.FastAPI,
      Tech.React,
      Tech.TypeScript,
      Tech.SQLite,
    ],
    github: "https://github.com/Kishan0703/chess_analyser",
    achievements: [
      "Imported Chess.com games and persisted analysis locally in SQLite.",
      "Evaluated moves with Stockfish and transformed engine lines into readable coaching reports.",
      "Built a local FastAPI and React workflow for reviewing games with context.",
    ],
  },
  {
    id: 7,
    title: "Cardiac Risk AI",
    tagline: "Explainable cardiac risk prediction",
    description:
      "End-to-end ML system for classifying cardiac risk from biomarker measurements with cross-validation, SMOTE, model comparison, SHAP explanations, FastAPI, dashboarding, and API protections.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.Python,
      Tech.FastAPI,
      Tech.ScikitLearn,
      Tech.ChartJs,
      Tech.Docker,
    ],
    github: "https://github.com/Kishan0703/Heart_attack_prediction",
    achievements: [
      "Processed clinical inputs and predicted heart-attack risk with model evaluation.",
      "Compared ML models and added explainability through SHAP outputs.",
      "Wrapped prediction workflows with FastAPI, dashboarding and API protections.",
    ],
  },
  {
    id: 8,
    title: "DriverPulse",
    tagline: "Namma Yatri ward-level insights",
    description:
      "Analytics and ML system using Bengaluru ward-level ride data to identify operational patterns, reliability, demand gaps, revenue leakage, risk classification, clustering, and SHAP explanations.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.Python,
      Tech.Pandas,
      Tech.ScikitLearn,
      Tech.FastAPI,
      Tech.React,
      Tech.Vite,
    ],
    github: "https://github.com/Kishan0703/DriverPulse",
    achievements: [
      "Built feature engineering for ward-level ride data analysis.",
      "Added risk classification, clustering and explainability for operational patterns.",
      "Presented demand gaps, reliability issues and revenue leakage through a FastAPI/React interface.",
    ],
  },
  {
    id: 9,
    title: "LGTM",
    tagline: "AI-powered PR review and security platform",
    description:
      "Full-stack GitHub-integrated review platform with AST-based repository indexing, code knowledge graph, LLM reviews, security scanning, CI/CD protection, background jobs, and real-time dashboard updates.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.React,
      Tech.TypeScript,
      Tech.Node,
      Tech.MongoDB,
      Tech.Redis,
      Tech.SocketIO,
    ],
    github: "https://github.com/Kishan0703/pr_shield",
    achievements: [
      "Built repository indexing around AST parsing and a code knowledge graph.",
      "Connected LLM-backed reviews with GitHub integration, security gates and background queues.",
      "Added real-time dashboard updates for review and security activity.",
    ],
  },
  {
    id: 10,
    title: "Orbit Ledger",
    tagline: "On-chain payroll infrastructure",
    description:
      "Stellar Testnet payroll dApp with wallet integration, live balances, a Rust Soroban treasury contract, proposal/approval/execution payroll flow, multi-signature release, and currency value display.",
    image: "/projects/placeholder.png",
    technologies: [Tech.React, Tech.Vite, Tech.Rust, Tech.TypeScript],
    github: "https://github.com/Kishan0703/Orbit_Ledger",
    demo: "https://stellarpay.vercel.app/",
    achievements: [
      "Built wallet-connected Stellar Testnet payroll flows with live balances.",
      "Implemented proposal, approval and execution steps around a Soroban treasury contract.",
      "Added multi-signature release and currency value display for payroll operations.",
    ],
  },
  {
    id: 11,
    title: "Stellar Bounty Board",
    tagline: "Open-source bounty payments on Stellar",
    description:
      "Decentralized bounty platform for rewarding open-source contributions with USDC on Stellar Testnet, using GitHub webhooks to release payments when qualifying pull requests are merged.",
    image: "/projects/placeholder.png",
    technologies: [Tech.NextJs, Tech.Node, Tech.Rust, Tech.GitHub],
    github: "https://github.com/Kishan0703/stellar-GitHub-Bounty-Board",
    achievements: [
      "Connected GitHub webhook events to bounty payment release logic.",
      "Built Stellar Testnet payment flows for open-source contribution rewards.",
      "Integrated wallet-oriented approval and payout behavior.",
    ],
  },
  {
    id: 12,
    title: "Nirmaan 2026",
    tagline: "Hackathon website and event platform",
    description:
      "Design-led national-level student hackathon website covering tracks, timeline, sponsors, submissions, venue, teams, demo-day flow, registration, modal interactions, and motion-driven sections.",
    image: "/projects/placeholder.png",
    technologies: [Tech.NextJs, Tech.React, Tech.TypeScript, Tech.Tailwind],
    github: "https://github.com/Kishan0703/Nirmaan_2026",
    demo: "https://nirmaan-2026-tau.vercel.app/",
    achievements: [
      "Built event pages for tracks, timeline, sponsors, submissions, venue and teams.",
      "Implemented registration, modal interactions and demo-day flow.",
      "Used motion-driven sections while keeping the site structured around event operations.",
    ],
  },
  {
    id: 13,
    title: "AgriTech AI",
    tagline: "Smart farming assistant",
    description:
      "Smart farming platform combining multilingual AI assistance, crop advisory, plant disease detection, fertilizer and irrigation planning, real-time weather alerts, and separate web/API/ML services.",
    image: "/projects/placeholder.png",
    technologies: [
      Tech.React,
      Tech.Node,
      Tech.Express,
      Tech.MongoDB,
      Tech.Flask,
      Tech.TensorFlow,
      Tech.PyTorch,
    ],
    github: "https://github.com/Kishan0703/agri-smart-inception",
    achievements: [
      "Combined multilingual AI assistance with crop advisory workflows.",
      "Added plant disease detection, fertilizer planning, irrigation planning and weather alerts.",
      "Separated web, API and ML services for a complete product structure.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bitwise Learn",
    role: "Software Development Intern",
    logo: "/company/BitwiseLearn.svg",
    from: "Dec 2025",
    to: "June 2026",
    location: "Remote",
    description: [
      "Engineered 5+ production features for the assessment platform, reducing candidate submission errors by 20% and navigation speed by 10%.",
      "Partnered with a cross-functional team of 5+ backend engineers to ship backend features for the online assessment platform.",
      "Coded and integrated RESTful APIs and scalable backend services, supporting 20+ simultaneous assessment sessions.",
      "Analyzed system bottlenecks and improved backend performance, lowering API response latency by 20%.",
    ],
    technologies: [
      Tech.Node,
      Tech.Express,
      Tech.MongoDB,
      Tech.NextJs,
      Tech.TypeScript,
      Tech.Docker,
    ],
  },
];

export const Socials = {
  LinkedIn: "https://www.linkedin.com/in/kishan-mn-898b67334",
  GitHub: "https://github.com/Kishan0703",
  Mail: "mailto:kishanmncontact@gmail.com",
};

export const aboutData: AboutData = {
  goal: "I like making things that work. Not just code that runs, but stuff people can actually use. Right now I'm into AI and ML, but that's just what I'm building with, not the whole story.",

  abilities: [
    {
      title: "Frontend",
      subtitle: "React.js & Next.js",
      level: 90,
    },
    {
      title: "AI / LLMs",
      subtitle: "RAG & Review Flows",
      level: 89,
    },
    {
      title: "Database",
      subtitle: "MongoDB & SQL",
      level: 82,
    },
    {
      title: "ML Systems",
      subtitle: "Scoring & Explainability",
      level: 85,
    },
    {
      title: "Data Systems",
      subtitle: "Analytics & Graphs",
      level: 86,
    },
    {
      title: "Problem Solving",
      subtitle: "DSA & Core CS",
      level: 95,
    },
  ],

  stats: {
    projects: 13,
    githubContributions: 0,
  },
};
