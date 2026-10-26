import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Play, RefreshCw, FileCode, Cpu, Bug, Terminal, ArrowRight, Code2, ShieldCheck } from 'lucide-react';

interface Stage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  codeSnippet: string;
  outputLog: string;
  resultStatus: 'VERIFIED' | 'PARTIAL' | 'NOT TESTED';
}

const STAGES: Stage[] = [
  {
    id: 'plan',
    number: '01',
    title: 'PLAN',
    tagline: 'Scope before Mutation',
    icon: FileCode,
    description: 'Deconstruct user intent into formal acceptance criteria, file boundary definitions, and architectural contracts before a single line of code is modified on disk.',
    codeSnippet: `// 01. PLAN STAGE: Architectural Blueprinting
export const ExecutionPlan = {
  objective: "Implement Verified JWT Auth Middleware",
  affectedModules: ["src/auth/jwt.ts", "src/routes/api.ts"],
  invariants: [
    "Verify Bearer token structure",
    "Reject expired signatures with HTTP 401",
    "Preserve zero unhandled promise rejections"
  ],
  riskLevel: "Critical",
  approvalMode: "Human-in-the-Loop Required"
};`,
    outputLog: `[PLAN] Requirement normalized: JWT Authentication handler
[PLAN] Module boundary scoped: 2 target files identified
[PLAN] Architecture dependency tree validated. Ready for implementation.`,
    resultStatus: 'NOT TESTED'
  },
  {
    id: 'code',
    number: '02',
    title: 'CODE',
    tagline: 'Monaco Integration & Unified Diffs',
    icon: Code2,
    description: 'Implement code modifications directly inside the development environment, rendering inspectable unified diffs so developers can audit surgical edits line by line.',
    codeSnippet: `// 02. CODE STAGE: Type-Safe Implementation with Diffs
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    (req as any).user = user;
    next();
  });
}`,
    outputLog: `[CODE] Writing unified diff to src/auth/jwt.ts (+18 lines)
[CODE] Monaco AST syntax check: 0 syntax errors detected
[CODE] TypeScript AST tree successfully compiled in memory.`,
    resultStatus: 'NOT TESTED'
  },
  {
    id: 'run',
    number: '03',
    title: 'RUN',
    tagline: 'Hermetic Sandbox Execution',
    icon: Play,
    description: 'Trigger actual builds, compilers, and automated test runners inside the configured sandbox container. Code is never trusted on faith or syntax alone.',
    codeSnippet: `// 03. RUN STAGE: Vitest / Jest Automated Suite Execution
describe("JWT Auth Suite", () => {
  it("rejects unauthorized calls with 401", async () => {
    const res = await request(app).get("/api/protected");
    expect(res.status).toBe(401);
  });

  it("authorizes valid cryptographic signatures", async () => {
    const validToken = generateTestJwt({ role: "admin" });
    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", \`Bearer \${validToken}\`);
    expect(res.status).toBe(200);
  });
});`,
    outputLog: `[RUN] Executing: npm test -- --runInBand
[RUN] Test runner dispatched to hermetic node container
[RUN] FAIL: src/auth/jwt.test.ts:34 (Missing JWT_SECRET mock in test harness)
[RUN] Execution halted with exit code 1. Stack trace forwarded to DEBUG stage.`,
    resultStatus: 'PARTIAL'
  },
  {
    id: 'debug',
    number: '04',
    title: 'DEBUG',
    tagline: 'Stack Trace Forensics & Repair',
    icon: Bug,
    description: 'Analyze real runtime exceptions, compiler diagnostic codes, and failure logs. The system creates targeted surgical patches instead of hallucinating whole-file rewrites.',
    codeSnippet: `// 04. DEBUG STAGE: Automated Root-Cause Repair Loop
// Error: process.env.JWT_SECRET was undefined during hermetic runner spinup
// Patch: Injected deterministic test environment fallback in test config

process.env.JWT_SECRET = process.env.JWT_SECRET || 'test_deterministic_secret_key_8921';
console.log('[DEBUG] Applied surgical environment patch to test harness.');`,
    outputLog: `[DEBUG] Stack trace parsed: JsonWebTokenError (secretOrPrivateKey must have a value)
[DEBUG] Isolated root cause: Test execution environment missed mock secret
[DEBUG] Re-running sandbox execution harness with patch...
[RUN] Re-executing tests... PASS src/auth/jwt.test.ts (2/2 passing)`,
    resultStatus: 'PARTIAL'
  },
  {
    id: 'verify',
    number: '05',
    title: 'VERIFY',
    tagline: 'Grounded Evidence Reporting',
    icon: ShieldCheck,
    description: 'Report the final, verifiable outcome. EnigmaCoder enforces three explicit, honest states: VERIFIED (proven by logs), PARTIAL (incomplete coverage), or NOT TESTED. Never false promises.',
    codeSnippet: `// 05. VERIFY STAGE: Grounded Truth Contract
export interface VerificationEvidence {
  status: "VERIFIED" | "PARTIAL" | "NOT TESTED";
  testsExecuted: 2;
  testsPassed: 2;
  buildStatus: "SUCCESS (0 errors, 0 warnings)";
  sandboxExitCode: 0;
  telemetryHash: "0x89f2a71d4b";
  claimPermitted: true; // Only true when exit code === 0 && tests > 0
}`,
    outputLog: `===========================================================
VERIFICATION STATUS: VERIFIED
===========================================================
✔ Compiler: TypeScript 5.8 (0 errors)
✔ Test Runner: 2/2 Passed (100% Assertion Coverage)
✔ Runtime Invariant: Zero unhandled rejections
✔ Evidence Signature: VERIFIED-HASH-8921-OK
Task marked as completed with authenticated runtime evidence.`,
    resultStatus: 'VERIFIED'
  }
];

export const PhilosophySection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false);

  const activeStage = STAGES[activeStageIndex];

  const handleRunSimulation = () => {
    setIsRunningSim(true);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < STAGES.length) {
        setActiveStageIndex(current);
      } else {
        clearInterval(interval);
        setIsRunningSim(false);
      }
    }, 1400);
  };

  return (
    <section id="philosophy" className="py-20 border-b border-slate-800/80 bg-[#06080d] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
            <span>Engineering Philosophy</span>
            <span className="text-slate-600">/</span>
            <span>First Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            The Problem of Fake Completion in AI Coding
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Standard AI coding tools suffer from an endemic flaw: language models can output syntactically plausible code and claim a task is completed without ever running tests or verifying the software builds.
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            EnigmaCoder was founded on a fundamental rule: <span className="text-cyan-300 font-semibold">Never claim an engineering task is complete without empirical execution evidence</span>. Below is our deterministic five-stage workflow.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons (Interactive tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-8">
          {STAGES.map((s, idx) => {
            const isActive = activeStageIndex === idx;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-start p-3 sm:p-4 rounded-lg text-left transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-slate-800 text-white shadow-md border border-cyan-500/40' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-mono text-xs text-cyan-400 font-semibold">{s.number}</span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
                <span className="text-sm font-bold tracking-tight">{s.title}</span>
                <span className="text-[11px] text-slate-400 truncate max-w-full">{s.tagline}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Stage Visualizer Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar with Status and Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Stage {activeStage.number}: {activeStage.title}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {activeStage.tagline}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Truth State Indicator */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Result State:</span>
                {activeStage.resultStatus === 'VERIFIED' && (
                  <span className="inline-flex items-center gap-1 font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                )}
                {activeStage.resultStatus === 'PARTIAL' && (
                  <span className="inline-flex items-center gap-1 font-mono font-semibold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">
                    <AlertTriangle className="w-3 h-3" />
                    PARTIAL
                  </span>
                )}
                {activeStage.resultStatus === 'NOT TESTED' && (
                  <span className="inline-flex items-center gap-1 font-mono font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    NOT TESTED
                  </span>
                )}
              </div>

              {/* Run Sequence Simulation Button */}
              <button
                onClick={handleRunSimulation}
                disabled={isRunningSim}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 rounded-md transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRunningSim ? 'animate-spin' : ''}`} />
                <span>{isRunningSim ? 'Executing Workflow...' : 'Simulate 5-Stage Run'}</span>
              </button>
            </div>
          </div>

          {/* Description Callout */}
          <div className="px-6 py-4 bg-slate-900/30 border-b border-slate-800/60">
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          {/* Split View: Code Inspection vs Terminal Sandbox Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left: Code / Monaco Inspection */}
            <div className="lg:col-span-7 p-6 font-mono text-xs">
              <div className="flex items-center justify-between mb-3 text-slate-400 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Code & Diff Inspector</span>
                </div>
                <span className="text-[11px] text-slate-500">TypeScript / Sandbox</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#080b12] border border-slate-800/80 text-slate-300 overflow-x-auto leading-relaxed">
                <code>{activeStage.codeSnippet}</code>
              </pre>
            </div>

            {/* Right: Runtime Sandbox Execution Terminal */}
            <div className="lg:col-span-5 p-6 font-mono text-xs bg-[#05070c]">
              <div className="flex items-center justify-between mb-3 text-slate-400 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Execution Sandbox Telemetry</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold">Live Prober</span>
              </div>
              <div className="p-4 rounded-xl bg-black border border-slate-800/80 text-emerald-400 overflow-x-auto leading-relaxed whitespace-pre-wrap min-h-[220px]">
                {activeStage.outputLog}
              </div>
            </div>

          </div>

          {/* Bottom Explicit Result Contract */}
          <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="font-semibold text-slate-200">EnigmaCoder Invariant:</span>
              <span>Only 3 honest result states are structurally allowed in output artifacts.</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-mono">1. VERIFIED</span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400 font-mono">2. PARTIAL</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-mono">3. NOT TESTED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
