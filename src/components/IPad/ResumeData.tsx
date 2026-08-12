import { ResumeData } from "./ResumeTypes";

export const resumeData: ResumeData = {
  personal: {
    name: "Kishan MN",
    role: "AI, Full-Stack, ML and Blockchain Builder",
    summary:
      "I build technical products across fraud detection, RAG systems, blockchain infrastructure, analytics platforms and applied machine learning.",
    email: "kishanmncontact@gmail.com",
    github: "github.com/Kishan0703",
    linkedin: "linkedin.com/in/kishan-mn-898b67334",
  },

  education: [
    {
      degree: "Bachelor of Engineering",
      university: "BMS Institute of Technology and Management",
      duration: "Expected graduation: 2028",
    },
  ],

  projects: [
    {
      name: "UPI Risk Sentinel",
      stack: ["Python", "FastAPI", "Streamlit", "NetworkX"],
      type: "Fraud ML",
      points: [
        "UPI-style transaction simulation with behavioral risk scoring.",
        "Fraud network graphs, ring detection, heatmaps and explainability.",
      ],
    },
    {
      name: "Unlearn-LLM",
      stack: ["Python", "PyTorch", "Hugging Face", "QLoRA"],
      type: "LLM Research",
      points: [
        "Approximate LLM unlearning pipeline based on the Who's Harry Potter approach.",
        "Reinforcement, anchor extraction, generic-label generation and unlearning stages.",
      ],
    },
    {
      name: "Vectorless RAG",
      stack: ["FastAPI", "Python", "React", "TypeScript", "Gemini"],
      type: "RAG",
      points: [
        "Tree-based document Q&A without traditional vector search.",
        "PDF indexing, retrieval traces and multi-model routing.",
      ],
    },
    {
      name: "Smart AI API Mocking Tool",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Faker.js"],
      type: "Dev Tool",
      points: [
        "Turns plain-English API descriptions into realistic schemas and synthetic JSON.",
        "Live mock endpoints with CRUD simulation, validation and chaos-mode failures.",
      ],
    },
    {
      name: "Orbit Ledger",
      stack: ["React", "Vite", "Rust", "Soroban", "Stellar"],
      type: "Web3",
      points: [
        "Stellar Testnet payroll dApp with wallet integration and live balances.",
        "Treasury contract with proposal, approval and execution payroll flow.",
      ],
    },
    {
      name: "DriverPulse",
      stack: ["Python", "Pandas", "Scikit-learn", "FastAPI", "React"],
      type: "Analytics",
      points: [
        "Ward-level Bengaluru ride analytics for reliability and demand-gap patterns.",
        "Risk classification, clustering and SHAP explanations.",
      ],
    },
  ],

  openSource: [
    {
      name: "nix-security-tracker",
      focus: "Security tooling for the Nix ecosystem.",
      github: "github.com/Kishan0703/nix-security-tracker",
    },
    {
      name: "pico-sdl",
      focus: "Lua-based SDL bindings.",
      github: "github.com/Kishan0703/pico-sdl",
    },
    {
      name: "DsKit",
      focus: "Community-driven Python tooling for data science and ML.",
      github: "github.com/Kishan0703/DsKit",
    },
  ],

  skills: [
    {
      title: "AI / LLMs",
      skills: ["PyTorch", "Transformers", "RAG", "PageIndex", "Gemini"],
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "XGBoost", "LightGBM", "Pandas", "SHAP"],
    },
    {
      title: "Full-Stack",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend / Data",
      skills: ["FastAPI", "Node.js", "Express", "MongoDB", "SQLite"],
    },
  ],
};
