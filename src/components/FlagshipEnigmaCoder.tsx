import React, { useState } from 'react';
import { 
  ENIGMACODER_DEPARTMENTS, 
  EXECUTION_MODES, 
  DAG_NODES_DATA 
} from '../data/portfolioData';
import { Department, ExecutionMode, DagNode } from '../types/portfolio';
import { 
  ExternalLink, 
  Layers, 
  Sliders, 
  GitFork, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Database, 
  Lock, 
  Workflow, 
  X, 
  BookOpen,
  ArrowRight,
  Code
} from 'lucide-react';

export const FlagshipEnigmaCoder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dag' | 'departments' | 'modes' | 'mcp'>('dag');
  const [selectedDept, setSelectedDept] = useState<Department>(ENIGMACODER_DEPARTMENTS[0]);
  const [selectedMode, setSelectedMode] = useState<ExecutionMode>(EXECUTION_MODES[3]); // Implementation Mode default
  const [selectedDagNode, setSelectedDagNode] = useState<DagNode>(DAG_NODES_DATA[0]);
  const [caseStudyOpen, setCaseStudyOpen] = useState<boolean>(false);

  return (
    <section id="enigmacoder-ide" className="py-24 border-b border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Flagship Engineering Architecture</span>
              <span className="text-slate-600">/</span>
              <span>Central Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              EnigmaCoder IDE
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              The AI-assisted engineering environment engineered to eliminate fake completion. 
              Built around multi-department agent choreography, DAG workflow graphs, and verifiable execution evidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setCaseStudyOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Read 12-Section Case Study</span>
            </button>

            <a
              href="https://enigmacoder.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <span>Visit enigmacoder.dev</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Flagship Hero Visual & Technical Callouts */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 overflow-hidden shadow-2xl mb-12 group">
          <div className="relative aspect-[16/9] w-full max-h-[580px] overflow-hidden bg-slate-950">
            <img 
              src="/src/assets/images/enigmacoder_ide_preview_1793012167430.jpg" 
              alt="EnigmaCoder IDE workspace with DAG workflow graph and verified test terminal"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
            {/* Visual contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
          </div>

          {/* Overlay Strip: Architectural Highlights */}
          <div className="p-6 bg-slate-900/95 border-t border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Development Core</span>
              <span className="text-white font-semibold">Monaco Editor + Diffs</span>
              <p className="text-slate-400 mt-0.5 text-[11px]">Inspectable line-by-line syntax trees and patch inspection.</p>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Agent Organization</span>
              <span className="text-white font-semibold">11 Specialized Departments</span>
              <p className="text-slate-400 mt-0.5 text-[11px]">124 specialist roles replacing monolithic single-agent bottlenecks.</p>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Execution Control</span>
              <span className="text-white font-semibold">9 Dedicated Execution Modes</span>
              <p className="text-slate-400 mt-0.5 text-[11px]">Ranging from read-only Ask Mode to bounded Autonomous runs.</p>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Verified Truth</span>
              <span className="text-emerald-400 font-semibold font-mono">VERIFIED / PARTIAL / NOT TESTED</span>
              <p className="text-slate-400 mt-0.5 text-[11px]">Zero false completion claims without execution logs.</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Interactive Architecture Showcase */}
        <div className="flex items-center gap-2 border-b border-slate-800 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('dag')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'dag'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>01. Visual DAG Agent Canvas</span>
          </button>

          <button
            onClick={() => setActiveTab('departments')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'departments'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>02. 11 Departments & 124 Roles</span>
          </button>

          <button
            onClick={() => setActiveTab('modes')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'modes'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>03. Nine Execution Modes</span>
          </button>

          <button
            onClick={() => setActiveTab('mcp')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'mcp'
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>04. MCP Tool Security & Supabase</span>
          </button>
        </div>

        {/* Tab 1: Visual DAG Agent Canvas */}
        {activeTab === 'dag' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="max-w-2xl mb-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  Directed Acyclic Graph (DAG) Agent Pipeline
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  EnigmaCoder splits complex coding objectives into deterministic sequential and parallel stages. 
                  One agent’s verified output becomes the strict validated schema input for the next agent in the graph. Click any node to inspect data flow.
                </p>
              </div>

              {/* Interactive Flow Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
                {DAG_NODES_DATA.map((node) => {
                  const isSelected = selectedDagNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedDagNode(node)}
                      className={`relative p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/50' 
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-cyan-400">{node.department}</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-xs font-bold text-white block mb-1">
                        {node.label}
                      </span>
                      <span className="text-[10px] text-slate-400 block truncate font-mono">
                        {node.role}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Node Inspector Drawer */}
              <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                      DAG Node Inspection
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {selectedDagNode.label} · {selectedDagNode.role}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Node Evidence:</span>
                    <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                      {selectedDagNode.verifiedResult}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Validated Inputs (From Prior Node)
                    </span>
                    <ul className="space-y-1 font-mono text-slate-300">
                      {selectedDagNode.inputs.map((inp, idx) => (
                        <li key={idx} className="p-2 rounded bg-slate-950 border border-slate-800">
                          → {inp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Structured Outputs (Passed Downstream)
                    </span>
                    <ul className="space-y-1 font-mono text-cyan-300">
                      {selectedDagNode.outputs.map((out, idx) => (
                        <li key={idx} className="p-2 rounded bg-slate-950 border border-slate-800">
                          ✔ {out}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Verification Proof & Notes
                    </span>
                    <p className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed">
                      {selectedDagNode.detail}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: 11 Specialized Engineering Departments & 124 Specialist Roles */}
        {activeTab === 'departments' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Department List */}
            <div className="lg:col-span-5 space-y-2">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 mb-3 text-xs text-slate-400 flex items-center justify-between">
                <span>11 Specialized Departments</span>
                <span className="font-mono text-cyan-400 font-semibold">124 Total Specialist Roles</span>
              </div>
              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {ENIGMACODER_DEPARTMENTS.map((dept) => {
                  const isSelected = selectedDept.id === dept.id;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDept(dept)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                        isSelected 
                          ? 'bg-slate-800 text-white border-cyan-500/50 shadow-sm' 
                          : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-cyan-400 font-semibold">{dept.number}</span>
                        <div>
                          <span className="text-xs font-semibold block">{dept.name}</span>
                          <span className="text-[11px] text-slate-500">{dept.leadRole}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {dept.specialistCount} roles
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Department Detail View */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-5">
                  <div>
                    <span className="font-mono text-xs text-cyan-400">Department {selectedDept.number}</span>
                    <h3 className="text-xl font-bold text-white">{selectedDept.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {selectedDept.permissions.map((p) => (
                      <span 
                        key={p} 
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300 uppercase"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Department Mission & Mandate
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedDept.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Specialist Roles in Department ({selectedDept.specialistCount} Total)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono">
                      {selectedDept.sampleRoles.map((role, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                          <span className="text-cyan-400 mr-2">›</span>
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Why This Outperforms Monolithic AI Agents
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Generic single-agent systems suffer from context pollution and role drift. EnigmaCoder’s department model enforces discrete system prompts, isolated AST permissions, and role-specific validation assertions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Architectural System: 124 Discrete Permission Sets</span>
                <span>EnigmaCoder IDE</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Nine Execution Modes */}
        {activeTab === 'modes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {EXECUTION_MODES.map((mode) => {
                const isSelected = selectedMode.id === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-800 text-white border-cyan-400 shadow-md shadow-cyan-950/40' 
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-cyan-400">Mode 0{mode.index}</span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {mode.permissionLevel}
                      </span>
                    </div>
                    <span className="text-sm font-bold block mb-1">{mode.name}</span>
                    <span className="text-xs text-slate-400 block line-clamp-2">{mode.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Mode Detail Panel */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">Selected Execution Profile</span>
                  <h3 className="text-lg font-bold text-white">Mode 0{selectedMode.index}: {selectedMode.name}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Human Guardrail:</span>
                    <span className="font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {selectedMode.humanIntervention}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Permission:</span>
                    <span className="font-mono text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {selectedMode.permissionLevel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                    Operational Control & Behavior
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    {selectedMode.description}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                    Primary Engineering Use Case
                  </span>
                  <p className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 leading-relaxed font-mono">
                    {selectedMode.primaryUseCase}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: MCP Protocol & External Integrations */}
        {activeTab === 'mcp' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Permission-Aware Model Context Protocol (MCP) & Supabase
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                External tools and persistence engines are integrated through strict capability contracts. 
                Agents cannot arbitrarily execute terminal scripts or mutate production databases without verified permission profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Lock className="w-4 h-4" />
                  <span className="font-bold">1. Permission Profiles</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Three discrete access tiers govern agent capabilities: <code className="text-slate-200">read_only</code> (querying ASTs), <code className="text-slate-200">workspace_editor</code> (staging unified diffs), and <code className="text-slate-200">executor</code> (running containerized builds).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Database className="w-4 h-4" />
                  <span className="font-bold">2. Supabase & PostgreSQL</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Workspace state, conversation turns, and verified execution logs are persisted in PostgreSQL with Row-Level Security (RLS) guaranteeing strict multi-tenant isolation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span className="font-bold">3. MCP Server Connections</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Connects to external systems (GitHub, Slack, Figma, PostgreSQL) through standard Model Context Protocol servers with schema validation on every call.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Full 12-Section Case Study Modal */}
      {caseStudyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#080b12] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                  Engineering Whitepaper & Case Study
                </span>
                <h3 className="text-xl font-bold text-white">
                  EnigmaCoder IDE: Architectural Deconstruction
                </h3>
              </div>
              <button
                onClick={() => setCaseStudyOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content: 12 Sections */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-slate-300 leading-relaxed">
              
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  01. The Engineering Problem
                </h4>
                <p>
                  Modern large language models excel at surface-level code completion but fail consistently at systemic engineering verification. Standard code assistants generate code blocks that look convincing but break at runtime due to missing dependencies, unhandled type invariants, or invalid API boundaries.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  02. Why Fake Completion Matters
                </h4>
                <p>
                  When an AI tool claims "I have implemented your feature" without running a compiler or test runner, developers waste significant cognitive cycles debugging code that was never executed. This erosion of trust slows developer velocity.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  03. The PLAN → CODE → RUN → DEBUG → VERIFY Architecture
                </h4>
                <p>
                  EnigmaCoder enforces a deterministic five-stage engineering cycle. PLAN maps module boundaries before writing code; CODE applies unified diffs in a Monaco interface; RUN executes sandbox test suites; DEBUG performs automated root-cause stack trace repair; and VERIFY reports only 3 explicit states: VERIFIED, PARTIAL, or NOT TESTED.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  04. The Multi-Department Agent System (11 Depts, 124 Roles)
                </h4>
                <p>
                  Rather than burdening a single monolithic agent with product requirements, frontend styling, backend routing, database normalization, and security auditing simultaneously, EnigmaCoder partitions work into 11 specialized departments with 124 discrete specialist roles.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  05. The Nine Execution Modes
                </h4>
                <p>
                  From conversational exploration in Ask Mode to surgical fixes in Debug & Repair Mode, EnigmaCoder provides nine distinct operating modes, allowing engineers to calibrate human intervention from per-action approval to bounded autonomous iteration.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  06. The Development Environment
                </h4>
                <p>
                  Built around the Monaco code editor, multi-tab file exploration, real-time diff rendering, an integrated virtual terminal with build logs, and project explorer navigation.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  07. Tool Integrations and Permissions
                </h4>
                <p>
                  Model Context Protocol (MCP) integrations connect agents to external sources (GitHub, Slack, Figma, PostgreSQL) through capability tokens (read_only, workspace_editor, executor).
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  08. Model Integration: EnigmaCoder-2B
                </h4>
                <p>
                  In addition to frontier cloud models, EnigmaCoder integrates EnigmaCoder-2B—an open-weights model fine-tuned on Google Gemma using QLoRA specifically for low-latency coding agent reasoning loops.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  09. Persistence and State Management
                </h4>
                <p>
                  Supabase and PostgreSQL handle project storage, user sessions, conversation turns, and audit trails with Row-Level Security ensuring multi-tenant data boundaries.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  10. Technical Challenges & Design Decisions
                </h4>
                <p>
                  Key decisions included rejecting unstructured text stream outputs in favor of strict JSON schema AST diffs, implementing deterministic test sandboxes, and establishing the 3-state truth contract.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  11. Verified Results & Available Demonstrations
                </h4>
                <p>
                  The platform has been demonstrated across real developer workflows and international hackathon prototypes, proving that verified completion dramatically reduces developer debugging overhead.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white font-mono text-cyan-400">
                  12. What Abdul Rehman Aziz Khan Personally Designed and Implemented
                </h4>
                <p>
                  Abdul personally conceptualized the core architecture, authored the 5-stage verification methodology, structured the 11 department schemas, implemented the prompt parsing engine, fine-tuned the EnigmaCoder-2B model, and directed the product design from the ground up.
                </p>
              </section>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">EnigmaCoder Technical Documentation</span>
              <button
                onClick={() => setCaseStudyOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
