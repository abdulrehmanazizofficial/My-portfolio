import React from 'react';
import { OTHER_PROJECTS } from '../data/portfolioData';
import { ExternalLink, Cpu, Film, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-slate-800/80 bg-[#06080d] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Product Portfolio & AI Research</span>
            <span className="text-slate-600">/</span>
            <span>Independent Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Products, Systems & Fine-Tuned Models
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project demonstrates direct architecture and implementation craft—from web-based video timeline orchestration to parameter-efficient model tuning for agentic reasoning.
          </p>
        </div>

        {/* Project Showcase List (Distinct editorial layouts) */}
        <div className="space-y-16">
          {OTHER_PROJECTS.map((project, idx) => {
            const isModel = project.id === 'enigmacoder-2b';
            const isPulse = project.id === 'enigmapulse';
            const isBuilder = project.id === 'prompt-to-app';

            return (
              <div 
                key={project.id}
                className="rounded-2xl bg-slate-950 border border-slate-800/90 overflow-hidden shadow-2xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Context, Capabilities, Architecture */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      
                      {/* Category & Status */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                          0{idx + 1} · {project.category}
                        </span>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {project.name}
                        </h3>
                        <p className="text-sm font-medium text-cyan-300/80">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Founder Contribution Callout */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                        <span className="text-slate-400 uppercase tracking-wider font-mono text-[10px] block">
                          My Personal Contribution
                        </span>
                        <p className="text-slate-200 leading-relaxed">
                          {project.myContribution}
                        </p>
                      </div>

                      {/* Capabilities Checklist */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-semibold text-slate-300 block">
                          Core Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {project.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-slate-400">
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Technologies & External Links */}
                    <div className="pt-6 border-t border-slate-800/80 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span 
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>Launch Live Application</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.modelUrl && (
                          <a
                            href={project.modelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>View Model Card on Hugging Face</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Visual Preview or Architectural Blueprint */}
                  <div className="lg:col-span-5 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-center p-6 sm:p-8">
                    {project.imageUrl ? (
                      <div className="space-y-3">
                        <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-900">
                          <img 
                            src={project.imageUrl}
                            alt={`${project.name} technical preview`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 font-mono">
                          {isModel && (
                            <p>Architecture: Gemma Transformer Base + Low-Rank Adapter (Rank r=16, Alpha=32) tuned for structured AST code generation.</p>
                          )}
                          {isPulse && (
                            <p>Engine: 60fps Web Audio & Canvas timeline sync with non-linear multi-track editing.</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Prompt-to-App builder interactive preview diagram */
                      <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                          <span>Prompt-to-App Workflow</span>
                          <span className="text-cyan-400">Pipeline</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                            <span className="text-cyan-400 text-[10px] block mb-0.5">STEP 1. PROMPT INGESTION</span>
                            <span>Deconstructs natural language requirements into functional component tree.</span>
                          </div>

                          <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                            <span className="text-cyan-400 text-[10px] block mb-0.5">STEP 2. CODE SCAFFOLDING</span>
                            <span>Generates type-safe React + Tailwind modules with zero bloat.</span>
                          </div>

                          <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                            <span className="text-cyan-400 text-[10px] block mb-0.5">STEP 3. LIVE SANDBOX PREVIEW</span>
                            <span>Instant in-browser rendering with hot component updates.</span>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-500 pt-2">
                          Live on Vercel · enigma-coder-y2xn.vercel.app
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
