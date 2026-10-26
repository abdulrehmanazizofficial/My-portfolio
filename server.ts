import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini client strictly on the server side
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;
const isValidKey = apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 15;

if (isValidKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Portfolio Knowledge Base for Abdul Rehman Aziz Khan
const SYSTEM_INSTRUCTION = `You are the Portfolio Intelligence Assistant for Abdul Rehman Aziz Khan.
Your role is to help visitors (engineers, founders, technical recruiters, collaborators, and potential investors) understand Abdul's technical work, engineering philosophy, and products.

FOUNDER & BUILDER IDENTITY:
- Name: Abdul Rehman Aziz Khan
- Primary positioning: Founder of EnigmaCoder | AI Engineer | AI Developer | Data Scientist | Entrepreneur
- Core philosophy: He builds real products and engineering systems rather than merely consuming AI wrappers or prompting tools. He approaches technology with an authentic founder mindset and deep engineering rigor.
- Professional focus: Agentic AI systems, LLM fine-tuning and adaptation, developer tooling, full-stack software architecture, and data science.
- Contact: abdurrehmanaziz444@gmail.com
- Profiles: LinkedIn (https://www.linkedin.com/in/abdul-rehman-aziz-khan-b3aab9402), LeetCode (https://leetcode.com/u/INUzNs0oIN/), Hugging Face (https://huggingface.co/abdulrehmanazizkhan), EnigmaCoder (https://enigmacoder.dev).

FLAGSHIP PROJECT — ENIGMACODER IDE (https://enigmacoder.dev):
- Core problem solved: AI models often generate syntactically plausible code and claim a task is complete without testing or proving that the application actually builds and runs. This is the problem of "fake completion."
- The 5-Stage Engineering Workflow:
  1. PLAN: Parse user requirement, establish scope, define architecture & file impact prior to mutation.
  2. CODE: Write and edit code directly in the environment (Monaco editor integration, inspectable diffs).
  3. RUN: Execute builds, tests, and runtime commands inside the execution sandbox.
  4. DEBUG: Inspect execution failures, stack traces, and runtime telemetry to identify root cause and attempt fixes.
  5. VERIFY: Output explicit verification states. Only 3 honest states are permitted:
     - VERIFIED (proven by successful execution evidence)
     - PARTIAL (some components ran, others unproven or pending)
     - NOT TESTED (no automated test was executed; never claim verified without proof)
- 11 Specialized Engineering Departments:
  Product Management, Architecture, Frontend Engineering, Backend Engineering, Database Engineering, AI & Integrations, Security & Compliance, QA & DevOps, Documentation, Business & Operations, Research & Intelligence.
- 124 Specialist Roles with permission profiles: read_only, workspace_editor, executor.
- Visual DAG Agent Canvas: Directed Acyclic Graph connecting agents where one agent's verified output feeds into another agent's input (Requirements -> Architecture -> Frontend -> Backend -> Database -> Testing -> Verification).
- 9 Execution Modes:
  1. Ask Mode (conversational inquiries)
  2. Plan Mode (architecture scoping before writing code)
  3. Approval Mode (human-in-the-loop review for critical actions)
  4. Implementation Mode (autonomous code generation with diffs)
  5. Agent Specialist Mode (dispatching dedicated domain agents)
  6. Autonomous Mode (multi-step self-directed objective execution)
  7. Debug & Repair Mode (stack trace analysis & repair loop)
  8. Review & Verify Mode (verification against invariants)
  9. Custom Mode (user-defined prompt pipelines)
- Integrations: MCP (Model Context Protocol) connecting GitHub, Slack, Figma, PostgreSQL with strict permission boundaries.
- Persistence: PostgreSQL, Supabase, Row-Level Security, multi-tenant workspace architecture.

OTHER KEY PROJECTS:
1. EnigmaCoder Prompt-to-App Builder (https://enigma-coder-y2xn.vercel.app/):
   - Natural language to full-stack web applications.
   - Interactive preview, structured code scaffolds, responsive UI generation.
2. EnigmaPulse (https://enigmapulse.vercel.app):
   - AI-powered video editing platform focusing on timeline interface engineering, fast media rendering, and intelligent asset organization. (Not open source).
3. EnigmaCoder-2B Model (https://huggingface.co/enigmacoder/EnigmaCoder-2B):
   - Gemma-based model fine-tuned using QLoRA for agentic coding and reasoning workflows.
   - Hosted publicly on Hugging Face. Clearly distinguishes Abdul's fine-tuning contributions from the Google Gemma base model weights.

HONORS & ACHIEVEMENTS:
- Google Developer Program participant
- Google AI Seekho Silver Tier
- Ignite AI Semifinalist
- International hackathon participant and winner

GUIDELINES FOR YOUR RESPONSES:
- Ground your answers strictly in the verified facts above.
- Speak in a knowledgeable, articulate, concise, professional voice.
- Never invent unlisted credentials, degrees, revenue numbers, team sizes, client counts, or awards.
- Never impersonate Abdul Rehman Aziz Khan directly as "I"; speak as his portfolio assistant ("Abdul has designed...", "EnigmaCoder IDE addresses...").
- Keep answers structured with clear bullet points or crisp paragraphs.`;

// API route for portfolio questions
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'A valid message string is required.' });
      return;
    }

    if (!process.env.GEMINI_API_KEY || !ai) {
      // Graceful offline fallback with authentic grounded responses
      const offlineResponse = generateOfflineResponse(message);
      res.json({
        reply: offlineResponse,
        source: 'grounded-local-knowledge',
        note: 'Grounded in Abdul Rehman Aziz Khan portfolio archive (Gemini API key is pending configuration in environment secrets).',
      });
      return;
    }

    // Prepare contents array with conversation history if available
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: String(turn.text) }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const timeoutPromise = new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Gemini API timeout')), 6000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const reply = response.text || "I was unable to formulate a response at this moment. Please feel free to explore Abdul's projects directly or reach out via email.";
    res.json({ reply, source: 'gemini-3.8-flash' });
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    // Provide a helpful fallback instead of a generic error
    res.status(200).json({
      reply: generateOfflineResponse(req.body?.message || ''),
      source: 'grounded-local-knowledge',
      fallbackNotice: 'Generated via grounded portfolio index while upstream service recovers.',
    });
  }
});

// Grounded fallback response generator for zero-failure reliability
function generateOfflineResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('fake completion') || q.includes('plan') || q.includes('workflow') || q.includes('verify')) {
    return `### EnigmaCoder's 5-Stage Engineering Workflow
To eliminate the industry problem of **fake completion**—where AI models claim code works without execution proof—EnigmaCoder IDE implements a strict five-stage pipeline:

1. **PLAN**: Understand requirements, establish scope, and map architecture before mutating files.
2. **CODE**: Code edits in a Monaco-based interface with inspectable diffs.
3. **RUN**: Execute real builds and tests in the sandbox.
4. **DEBUG**: Inspect runtime stack traces and logs to perform targeted repairs.
5. **VERIFY**: Report an explicit verification status:
   - **VERIFIED**: Proven by actual test/build passing logs.
   - **PARTIAL**: Certain modules compiled or passed, but coverage is incomplete.
   - **NOT TESTED**: No automated execution performed (never claimed as passed).`;
  }

  if (q.includes('enigmacoder-2b') || q.includes('model') || q.includes('hugging face') || q.includes('gemma')) {
    return `### EnigmaCoder-2B Model
**EnigmaCoder-2B** is an open-weights model hosted on Hugging Face (huggingface.co/enigmacoder/EnigmaCoder-2B).
- **Base Architecture**: Google Gemma
- **Fine-Tuning Methodology**: Parameter-efficient QLoRA (Quantized Low-Rank Adaptation)
- **Primary Focus**: Agentic coding, step-by-step reasoning, and structured tool-calling pipelines
- **Transparency**: Abdul clearly distinguishes his specialized fine-tuning and dataset preparation from the base foundational model.`;
  }

  if (q.includes('enigmapulse') || q.includes('video')) {
    return `### EnigmaPulse (AI Video Editor)
EnigmaPulse (enigmapulse.vercel.app) is Abdul's web-based video-editing product. It focuses on timeline interface engineering, fast media rendering, and smart asset organization. It represents his work in media computing and interface architecture.`;
  }

  if (q.includes('department') || q.includes('specialist') || q.includes('role') || q.includes('dag') || q.includes('canvas')) {
    return `### EnigmaCoder Architecture & Specialist System
Rather than relying on a single monolithic generic agent, EnigmaCoder coordinates:
- **11 Engineering Departments**: Product Management, Architecture, Frontend, Backend, Database, AI & Integrations, Security & Compliance, QA & DevOps, Documentation, Business & Operations, Research & Intelligence.
- **124 Specialist Roles** with granular permissions: \`read_only\`, \`workspace_editor\`, and \`executor\`.
- **Agent Canvas**: A DAG-based visual canvas where each agent's validated output becomes the structured input for the next (Requirements → Architecture → Frontend → Backend → Database → Testing → Verification).`;
  }

  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach')) {
    return `### Connect with Abdul Rehman Aziz Khan
- **Email**: abdurrehmanaziz444@gmail.com
- **LinkedIn**: linkedin.com/in/abdul-rehman-aziz-khan-b3aab9402
- **Hugging Face**: huggingface.co/abdulrehmanazizkhan
- **LeetCode**: leetcode.com/u/INUzNs0oIN/
- **Flagship**: enigmacoder.dev`;
  }

  return `### Abdul Rehman Aziz Khan — Founder & AI Engineer
Abdul is the Founder of **EnigmaCoder** (enigmacoder.dev), an AI-assisted engineering environment built to solve "fake completion" in AI coding. His work spans:
- **EnigmaCoder IDE**: 5-stage workflow (PLAN → CODE → RUN → DEBUG → VERIFY), 11 engineering departments, and 124 specialist roles.
- **EnigmaCoder-2B**: Gemma-based QLoRA fine-tuned model for coding agent reasoning.
- **EnigmaPulse**: Web-based video editing platform.
- **Achievements**: Google Developer Program participant, Google AI Seekho Silver Tier, Ignite AI Semifinalist, International hackathon winner.

Feel free to ask about any specific project, architectural design, or how to collaborate!`;
}

// Development Vite Middleware setup or Production Static File Serving
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer();
