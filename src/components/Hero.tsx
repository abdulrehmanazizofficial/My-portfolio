import React from 'react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { ArrowRight, Bot, ShieldCheck, Cpu, Code2, Sparkles, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
  onExploreIDE: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onExploreIDE }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/80 bg-radial-vignette overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Presence & Founder Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Personal Digital Headquarters</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Production Portfolio</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Abdul Rehman Aziz Khan
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-300/90 tracking-wide">
                Founder of EnigmaCoder · AI Engineer · Technology Builder
              </p>
            </div>

            {/* Founder Philosophy & Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I architect autonomous software systems and developer infrastructure designed around verifiable execution. Rather than building shallow AI wrappers, I focus on solving the critical problem of <strong className="text-white font-semibold">fake completion</strong> in AI coding tools through multi-agent orchestration, parameter-efficient fine-tuning, and rigorous 5-stage verification pipelines.
            </p>

            {/* Three Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">01. Engineer AI Systems</span>
                <span className="text-slate-400">Model adaptation, QLoRA, and deterministic agent DAGs.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">02. Build Real Products</span>
                <span className="text-slate-400">Production IDE, video suite, and full-stack software.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">03. Founder Mindset</span>
                <span className="text-slate-400">First-principles engineering from concept to deployment.</span>
              </div>
            </div>

            {/* Primary Calls to Action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreIDE}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-950/50 cursor-pointer"
              >
                <span>Discover EnigmaCoder IDE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Assistant</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder Portal / High-Tech Identity Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0b0f19] border border-slate-800 p-6 shadow-2xl overflow-hidden">
              {/* Corner decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

              {/* Founder Profile Lockup */}
              <div className="space-y-5">
                
                {/* Visual Identity Anchor / Photo Placeholder Slot */}
                <div className="relative aspect-square max-h-72 w-full mx-auto rounded-xl bg-slate-950 border border-slate-800/90 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  {/* Architectural grid background inside card */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
                  
                  {/* Central emblem */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-950/40">
                    <span className="text-3xl font-extrabold tracking-tighter text-cyan-400">
                      AK
                    </span>
                  </div>

                  <div className="relative z-10 mt-4 space-y-1">
                    <p className="text-sm font-semibold text-slate-200">
                      Abdul Rehman Aziz Khan
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      FOUNDER & PRINCIPAL ARCHITECT
                    </p>
                  </div>

                  {/* Respecting user instruction: Real professional photo slot */}
                  <div className="relative z-10 mt-3 px-3 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400">
                    <span>Verified Professional Identity</span>
                  </div>
                </div>

                {/* Identity Telemetry Strip */}
                <div className="space-y-2.5 pt-1 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Primary Ecosystem</span>
                    <a 
                      href="https://enigmacoder.dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      enigmacoder.dev
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Open-Weights Model</span>
                    <a 
                      href="https://huggingface.co/enigmacoder/EnigmaCoder-2B" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      EnigmaCoder-2B (HF)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Flagship Innovation</span>
                    <span className="text-slate-200 font-medium">5-Stage Verified Execution Engine</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Engineering Philosophy</span>
                    <span className="text-emerald-400 font-medium">Zero Tolerance for Fake Completion</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip below hero split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-800/80">
          {FOUNDER_INFO.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
