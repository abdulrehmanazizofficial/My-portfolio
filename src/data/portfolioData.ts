import { Department, ExecutionMode, DagNode, Project, Achievement, SkillCategory } from '../types/portfolio';

export const FOUNDER_INFO = {
  name: 'Abdul Rehman Aziz Khan',
  title: 'Founder & AI Systems Architect',
  positioning: 'Founder of EnigmaCoder · AI Engineer · AI Developer · Data Scientist · Entrepreneur',
  bio: 'I build autonomous software systems and developer infrastructure designed around verifiable execution. Rather than treating AI as a conversational toy, my work focuses on eliminating fake completion through multi-agent orchestration, parameter-efficient model tuning, and rigorous 5-stage engineering pipelines.',
  email: 'abdurrehmanaziz444@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/abdul-rehman-aziz-khan-b3aab9402',
    leetcode: 'https://leetcode.com/u/INUzNs0oIN/',
    huggingface: 'https://huggingface.co/abdulrehmanazizkhan',
    flagship: 'https://enigmacoder.dev',
    modelHf: 'https://huggingface.co/enigmacoder/EnigmaCoder-2B',
    promptToApp: 'https://enigma-coder-y2xn.vercel.app/',
    enigmaPulse: 'https://enigmapulse.vercel.app',
  },
  metrics: [
    { label: 'Engineering Departments', value: '11' },
    { label: 'Specialist Agent Roles', value: '124' },
    { label: 'Execution Modes', value: '9' },
    { label: 'Fine-Tuned Model', value: 'Gemma 2B QLoRA' },
  ]
};

export const ENIGMACODER_DEPARTMENTS: Department[] = [
  {
    id: 'pm',
    number: '01',
    name: 'Product Management',
    specialistCount: 10,
    leadRole: 'Spec & Requirement Synthesizer',
    permissions: ['read_only'],
    description: 'Deconstructs natural language prompts into formal product specifications, user stories, and acceptance boundaries.',
    sampleRoles: ['User Story Architect', 'PRD Generator', 'Edge Case Auditor', 'Feature Scoper']
  },
  {
    id: 'arch',
    number: '02',
    name: 'Architecture',
    specialistCount: 14,
    leadRole: 'System Topology & Contract Planner',
    permissions: ['read_only', 'workspace_editor'],
    description: 'Designs file structures, interface contracts, and module boundaries before any code edits begin.',
    sampleRoles: ['DAG Pipeline Modeler', 'Schema Boundary Designer', 'API Contract Planner', 'State Machine Architect']
  },
  {
    id: 'frontend',
    number: '03',
    name: 'Frontend Engineering',
    specialistCount: 16,
    leadRole: 'UI/UX Component Engineer',
    permissions: ['workspace_editor'],
    description: 'Generates accessible, type-safe interface components, layout containers, and reactive state stores.',
    sampleRoles: ['Tailwind Design System Lead', 'React Hook Specialist', 'Motion & Transition Coder', 'Accessibility Auditor']
  },
  {
    id: 'backend',
    number: '04',
    name: 'Backend Engineering',
    specialistCount: 15,
    leadRole: 'API & Services Architect',
    permissions: ['workspace_editor', 'executor'],
    description: 'Implements REST/RPC endpoints, middleware logic, session security, and microservices.',
    sampleRoles: ['Express Server Engineer', 'Auth Middleware Specialist', 'Rate Limiter Designer', 'Webhook Coordinator']
  },
  {
    id: 'db',
    number: '05',
    name: 'Database Engineering',
    specialistCount: 11,
    leadRole: 'Relational & Storage Specialist',
    permissions: ['workspace_editor'],
    description: 'Manages SQL schemas, migrations, indices, and PostgreSQL Row-Level Security rules.',
    sampleRoles: ['Postgres DDL Architect', 'RLS Policy Writer', 'Index Optimization Specialist', 'Supabase Integrator']
  },
  {
    id: 'ai',
    number: '06',
    name: 'AI & Integrations',
    specialistCount: 12,
    leadRole: 'Model Orchestration Specialist',
    permissions: ['workspace_editor', 'executor'],
    description: 'Handles LLM prompt chaining, tool calling schemas, embedding pipelines, and MCP servers.',
    sampleRoles: ['MCP Protocol Engineer', 'Prompt Invariant Specialist', 'Context Compactor', 'Fine-Tune Evaluator']
  },
  {
    id: 'sec',
    number: '07',
    name: 'Security & Compliance',
    specialistCount: 9,
    leadRole: 'Static Analysis & Vulnerability Auditor',
    permissions: ['read_only'],
    description: 'Audits dependencies, verifies secret boundaries, checks CSRF/XSS vectors, and checks permission rules.',
    sampleRoles: ['Secrets Leak Detector', 'OWASP Top 10 Prober', 'Dependency Vulnerability Scanner', 'Permission Validator']
  },
  {
    id: 'qa',
    number: '08',
    name: 'QA & DevOps',
    specialistCount: 13,
    leadRole: 'Execution Sandbox & Test Runner',
    permissions: ['executor'],
    description: 'Runs real compilers, unit tests, integration suites, and linter passes inside isolated runners.',
    sampleRoles: ['Test Runner Automator', 'Vite Build Verifier', 'E2E Simulation Agent', 'Container Runtime Inspector']
  },
  {
    id: 'docs',
    number: '09',
    name: 'Documentation',
    specialistCount: 8,
    leadRole: 'Technical Writer & API Doc Agent',
    permissions: ['workspace_editor'],
    description: 'Generates API specifications, setup instructions, architecture decision records (ADRs), and changelogs.',
    sampleRoles: ['ADR Generator', 'README Architect', 'TypeDoc Synthesizer', 'Changelog Curator']
  },
  {
    id: 'biz',
    number: '10',
    name: 'Business & Operations',
    specialistCount: 8,
    leadRole: 'Token & Compute Budgeter',
    permissions: ['read_only'],
    description: 'Monitors token consumption, LLM latency budgets, cloud costs, and workflow telemetry.',
    sampleRoles: ['Token Economics Auditor', 'Latency Profiler', 'Compute Cost Estimator', 'Workflow Optimizer']
  },
  {
    id: 'research',
    number: '11',
    name: 'Research & Intelligence',
    specialistCount: 8,
    leadRole: 'Model Benchmark & Strategy Analyst',
    permissions: ['read_only'],
    description: 'Tracks emerging AI architectures, context caching advancements, and fine-tuning innovations.',
    sampleRoles: ['Gemma Adaptation Specialist', 'Context Window Researcher', 'Quantization Analyst', 'Inference Benchmark Lead']
  }
];

export const EXECUTION_MODES: ExecutionMode[] = [
  {
    id: 'ask',
    index: 1,
    name: 'Ask Mode',
    tag: 'Exploration & Scoping',
    description: 'Strictly conversational Q&A without modifying any files or executing terminal processes.',
    humanIntervention: 'Continuous Dialogue',
    permissionLevel: 'read_only',
    primaryUseCase: 'Understanding unfamiliar codebases, asking architectural questions, and code review.'
  },
  {
    id: 'plan',
    index: 2,
    name: 'Plan Mode',
    tag: 'Architectural Blueprinting',
    description: 'Produces a step-by-step structural blueprint, file mutation map, and risk analysis before touching disk.',
    humanIntervention: 'Final Approval',
    permissionLevel: 'read_only',
    primaryUseCase: 'Complex multi-file refactoring, database migrations, and major feature scoping.'
  },
  {
    id: 'approval',
    index: 3,
    name: 'Approval Mode',
    tag: 'Human-in-the-Loop Guardrail',
    description: 'Prompts for explicit developer approval on every individual file write, shell command, or external API call.',
    humanIntervention: 'Per-Action',
    permissionLevel: 'workspace_editor',
    primaryUseCase: 'Sensitive production environments, critical security modules, and regulated codebases.'
  },
  {
    id: 'implementation',
    index: 4,
    name: 'Implementation Mode',
    tag: 'Active Code Generation',
    description: 'Writes, refactors, and updates code directly with unified diffs rendered in the Monaco editor.',
    humanIntervention: 'Final Approval',
    permissionLevel: 'workspace_editor',
    primaryUseCase: 'Standard engineering workflows where architecture has already been agreed upon.'
  },
  {
    id: 'specialist',
    index: 5,
    name: 'Agent Specialist Mode',
    tag: 'Domain Department Dispatch',
    description: 'Dispatches targeted agents from the 11 departments (e.g. Database Engineer, Security Auditor) with constrained permissions.',
    humanIntervention: 'Final Approval',
    permissionLevel: 'workspace_editor',
    primaryUseCase: 'Deep-dive domain tasks such as writing PostgreSQL RLS rules or optimizing Vite build configs.'
  },
  {
    id: 'autonomous',
    index: 6,
    name: 'Autonomous Mode',
    tag: 'Goal-Directed Iteration',
    description: 'Runs multiple iterations of Plan -> Code -> Run -> Debug -> Verify autonomously until explicit verification passes.',
    humanIntervention: 'None',
    permissionLevel: 'executor',
    primaryUseCase: 'Automated test suite repair, end-to-end bug fixing, and hermetic build stabilization.'
  },
  {
    id: 'debug',
    index: 7,
    name: 'Debug & Repair Mode',
    tag: 'Stack Trace Forensics',
    description: 'Captures runtime crashes, compiler errors, and failed test assertions, creating targeted minimal surgical patches.',
    humanIntervention: 'Final Approval',
    permissionLevel: 'executor',
    primaryUseCase: 'Diagnosing build crashes, TypeScript type mismatch errors, and runtime null exceptions.'
  },
  {
    id: 'review',
    index: 8,
    name: 'Review & Verify Mode',
    tag: 'Truth & Proof Reporting',
    description: 'Runs automated verification harnesses and strictly produces one of three truthful status outputs: VERIFIED, PARTIAL, or NOT TESTED.',
    humanIntervention: 'None',
    permissionLevel: 'executor',
    primaryUseCase: 'Pre-flight merge checks, CI/CD parity assurance, and preventing fake task completions.'
  },
  {
    id: 'custom',
    index: 9,
    name: 'Custom Mode',
    tag: 'Pipeline Scripting',
    description: 'Allows developers to chain custom agent nodes, execution gates, MCP tool servers, and prompt pipelines.',
    humanIntervention: 'Final Approval',
    permissionLevel: 'executor',
    primaryUseCase: 'Bespoke enterprise engineering protocols and custom QA compliance chains.'
  }
];

export const DAG_NODES_DATA: DagNode[] = [
  {
    id: 'node-req',
    label: '01. Requirements & Spec',
    department: 'Product Management',
    role: 'PRD Generator',
    status: 'completed',
    inputs: ['User Natural Language Intent'],
    outputs: ['JSON Acceptance Criteria', 'Feature Scope Map'],
    verifiedResult: 'VERIFIED',
    detail: 'Normalized 4 user requirements into measurable invariants and verified that scope does not violate security constraints.'
  },
  {
    id: 'node-arch',
    label: '02. Architecture & DAG',
    department: 'Architecture',
    role: 'DAG Pipeline Modeler',
    status: 'completed',
    inputs: ['JSON Acceptance Criteria'],
    outputs: ['Module Tree Graph', 'TypeScript Data Contracts'],
    verifiedResult: 'VERIFIED',
    detail: 'Defined schemas in src/types/ and mapped dependency tree for client and server runtime.'
  },
  {
    id: 'node-fe',
    label: '03. Frontend Implementation',
    department: 'Frontend Engineering',
    role: 'React Component Specialist',
    status: 'completed',
    inputs: ['TypeScript Data Contracts', 'UI Spec'],
    outputs: ['React 19 Components', 'Tailwind CSS Classes'],
    verifiedResult: 'VERIFIED',
    detail: 'Generated responsive views, Monaco editor wrapper, and interactive workflow stage runner.'
  },
  {
    id: 'node-be',
    label: '04. Backend & API Services',
    department: 'Backend Engineering',
    role: 'Express Server Engineer',
    status: 'completed',
    inputs: ['API Contracts', 'Frontend Endpoints'],
    outputs: ['Express API Routes', 'Gemini Model Handlers'],
    verifiedResult: 'VERIFIED',
    detail: 'Implemented server-side proxy route with environment API key shielding and fallback logic.'
  },
  {
    id: 'node-db',
    label: '05. Persistence & Schema',
    department: 'Database Engineering',
    role: 'Postgres DDL Architect',
    status: 'completed',
    inputs: ['Entity Contracts'],
    outputs: ['PostgreSQL Schema', 'Row-Level Security Rules'],
    verifiedResult: 'VERIFIED',
    detail: 'Validated table schemas, multi-tenant workspace isolation, and query indexing.'
  },
  {
    id: 'node-test',
    label: '06. Sandbox Execution & Test',
    department: 'QA & DevOps',
    role: 'Test Runner Automator',
    status: 'completed',
    inputs: ['Full Codebase Tree'],
    outputs: ['Compiler Diagnostics', 'Test Execution Logs'],
    verifiedResult: 'VERIFIED',
    detail: 'Executed TypeScript compile pass (0 errors) and validated component rendering passes.'
  },
  {
    id: 'node-ver',
    label: '07. Grounded Verification',
    department: 'Review & Verify',
    role: 'Execution Validator',
    status: 'completed',
    inputs: ['Test Execution Logs'],
    outputs: ['Honest Status Report: VERIFIED'],
    verifiedResult: 'VERIFIED',
    detail: 'Execution proof logged. Zero unverified assertions. Status marked as VERIFIED.'
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'prompt-to-app',
    name: 'EnigmaCoder — Prompt-to-App Builder',
    category: 'Developer Platform',
    tagline: 'Transforming natural language intent into functional software applications',
    description: 'A web-based application generation system allowing developers and founders to scaffold software applications through prompt-guided architecture. It focuses on generating clean, inspectable codebases with preview environments.',
    myContribution: 'Designed and engineered the prompt parsing engine, code generation pipeline, live sandbox preview bridge, and modular component template architecture.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Vercel'],
    capabilities: [
      'Natural-language requirements deconstruction',
      'Instant interactive web application preview',
      'Direct file tree inspection and export',
      'Modular component generation'
    ],
    liveUrl: 'https://enigma-coder-y2xn.vercel.app/',
    status: 'Deployed & Live',
    highlights: [
      'Engineered rapid prompt-to-scaffold transformation pipeline',
      'Clean isolated preview sandboxing',
      'Zero-dependency code export capability'
    ]
  },
  {
    id: 'enigmapulse',
    name: 'EnigmaPulse',
    category: 'Creative AI Suite',
    tagline: 'High-performance AI-assisted video editing & media timeline suite',
    description: 'A proprietary web application built for video editing workflows. It implements multi-track timeline sequencing, audio waveform visualization, intelligent asset categorization, and media preview rendering without requiring heavyweight desktop installs.',
    myContribution: 'Sole creator and lead engineer. Architected the custom canvas-based video timeline, audio track synchronizer, asset bin state management, and real-time playback controller.',
    technologies: ['React', 'TypeScript', 'Web Audio API', 'HTML5 Canvas', 'Tailwind CSS', 'Vercel'],
    capabilities: [
      'Multi-track magnetic video & audio timeline',
      'Real-time scrubbing and frame synchronization',
      'Audio waveform generation and beat alignment',
      'Asset metadata indexing and fast project switching'
    ],
    liveUrl: 'https://enigmapulse.vercel.app',
    imageUrl: '/src/assets/images/enigmapulse_studio_preview_1793012167875.jpg',
    status: 'Deployed & Live',
    highlights: [
      'Custom 60fps canvas timeline scrubber',
      'Proprietary media orchestration engine (closed source)',
      'Zero-install browser video production'
    ]
  },
  {
    id: 'enigmacoder-2b',
    name: 'EnigmaCoder-2B',
    category: 'Model Research & Fine-Tuning',
    tagline: 'Specialized 2B parameter open-weights model for agentic coding and reasoning',
    description: 'An open-weights AI model adapted specifically for developer tool workflows and multi-step reasoning. Built by fine-tuning Google Gemma using parameter-efficient QLoRA methodologies, it targets low-latency on-device and edge agent dispatch.',
    myContribution: 'Curated and prepared the agentic coding instruction dataset, configured QLoRA rank hyperparameters, conducted fine-tuning runs, and published open weights with model card on Hugging Face.',
    technologies: ['Google Gemma', 'QLoRA', 'PyTorch', 'Hugging Face Transformers', 'PEFT', 'BitsAndBytes'],
    capabilities: [
      'Structured tool-calling and function schema synthesis',
      'Step-by-step code reasoning and bug localization',
      'Low memory footprint suitable for local agent execution',
      'Transparent documentation clearly distinguishing base weights from fine-tuning'
    ],
    modelUrl: 'https://huggingface.co/enigmacoder/EnigmaCoder-2B',
    imageUrl: '/src/assets/images/enigmacoder_2b_architecture_1793012167302.jpg',
    status: 'Open Weights on Hugging Face',
    highlights: [
      'Publicly hosted weights and model card on Hugging Face',
      'QLoRA adapter matrices fine-tuned on agentic programming workflows',
      'Evaluated for low-latency coding agent loops'
    ]
  }
];

export const TECHNICAL_EXPERTISE: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Engineering systems with foundation models, parameter-efficient adaptation, and multi-agent loops.',
    skills: [
      'Large Language Models (LLMs)',
      'QLoRA / PEFT Fine-Tuning',
      'Multi-Agent System Architecture',
      'Model Context Protocol (MCP)',
      'Prompt Invariant Design',
      'Dataset Preparation & Cleaning',
      'Model Evaluation & Error Analysis'
    ],
    demonstratedIn: 'EnigmaCoder-2B Model, EnigmaCoder IDE Agent Dispatch'
  },
  {
    title: 'Software Engineering',
    description: 'Production frontend and backend architectures with emphasis on type safety and runtime resilience.',
    skills: [
      'TypeScript & JavaScript (ESNext)',
      'React 19 & Next.js Architecture',
      'Express.js & Node.js Services',
      'MERN Stack Development',
      'RESTful & RPC API Contracts',
      'Monaco Editor Integration',
      'Tailwind CSS & Design Systems'
    ],
    demonstratedIn: 'EnigmaCoder IDE, EnigmaPulse, Prompt-to-App Builder'
  },
  {
    title: 'Data Science & Storage',
    description: 'Structured data modeling, relational databases, and empirical experimentation.',
    skills: [
      'PostgreSQL & Relational Schemas',
      'Supabase & Row-Level Security',
      'Data Transformation Pipelines',
      'Dataset Synthesis & Curation',
      'Experimentation & Benchmark Tracking'
    ],
    demonstratedIn: 'EnigmaCoder-2B Training Corpora, Supabase Persistence'
  },
  {
    title: 'AI Product Engineering',
    description: 'Translating cutting-edge AI capabilities into reliable, user-facing digital products.',
    skills: [
      'DAG Workflow Orchestration',
      'Tool Calling & Function Declarations',
      'Execution Sandbox Management',
      'Fake Completion Elimination',
      'Unified Code Diff Visualization'
    ],
    demonstratedIn: 'EnigmaCoder 5-Stage Verification Engine, Agent Canvas'
  },
  {
    title: 'Founder & Entrepreneurship',
    description: 'Driving product vision from zero to production with technical rigor and user empathy.',
    skills: [
      'Product Strategy & Scoping',
      'Technical Architecture Decisions',
      'Rapid Prototyping & Deployment',
      'Developer Community Engagement',
      'Iterative Product Shipping'
    ],
    demonstratedIn: 'Founding EnigmaCoder, Shipping 3 Flagship Products'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'google-dev',
    title: 'Google Developer Program Member',
    organization: 'Google Developers',
    tierOrStatus: 'Official Participant',
    year: 'Active',
    description: 'Selected participant in Google Developer Program, engaging with emerging Google Cloud, AI Studio, and Gemini developer technologies.',
    category: 'Program'
  },
  {
    id: 'seekho-silver',
    title: 'Google AI Seekho — Silver Tier',
    organization: 'Google',
    tierOrStatus: 'Silver Tier Recipient',
    year: '2024 - 2025',
    description: 'Earned the Silver Tier recognition in Google AI Seekho for rigorous completion and evaluation of AI and machine learning engineering milestones.',
    category: 'Certification'
  },
  {
    id: 'ignite-ai',
    title: 'Ignite AI Semifinalist',
    organization: 'Ignite AI Competition',
    tierOrStatus: 'Semifinalist',
    year: '2024',
    description: 'Selected as a semifinalist in Ignite AI for demonstrating original artificial intelligence product architecture and real-world engineering viability.',
    category: 'Competition'
  },
  {
    id: 'international-hackathons',
    title: 'International Hackathon Competitor & Winner',
    organization: 'Global AI & Dev Hackathons',
    tierOrStatus: 'Award Winner & Finalist',
    year: '2023 - 2025',
    description: 'Participated and earned honors across global developer hackathons, engineering functional prototypes in agentic computing and full-stack software.',
    category: 'Competition'
  }
];
