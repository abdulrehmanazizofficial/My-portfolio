import React, { useState } from 'react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ExternalLink, Linkedin, Code2, Bot, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Direct Channels</span>
              <span className="text-slate-600">/</span>
              <span>Founder Collaboration</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                Let's Build Grounded Systems Together
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Whether you are exploring agentic AI architectures, looking to collaborate on developer tooling, discussing research on parameter-efficient models, or discussing founder opportunities—reach out directly.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                  Primary Email Address
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-white selection:bg-cyan-500/30">
                  {FOUNDER_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Interactive Gemini Assistant Invitation */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Want an instant walkthrough of Abdul's technical work?</span>
              </div>
              <button
                onClick={onOpenChat}
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Ask Assistant</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Right Column: Profiles & Ecosystem Links */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase font-mono text-slate-400 tracking-wider block mb-2">
              Verified Profiles & Ecosystem
            </span>

            {/* LinkedIn */}
            <a
              href={FOUNDER_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-cyan-400 transition-colors">
                    LinkedIn Network
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Professional background & updates
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Hugging Face */}
            <a
              href={FOUNDER_INFO.links.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-cyan-400 transition-colors">
                    Hugging Face Profile
                  </span>
                  <span className="text-[11px] text-slate-400">
                    EnigmaCoder-2B & model repositories
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* LeetCode */}
            <a
              href={FOUNDER_INFO.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-cyan-400 transition-colors">
                    LeetCode Profile
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Algorithms & data structure problem solving
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Flagship EnigmaCoder */}
            <a
              href={FOUNDER_INFO.links.flagship}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-cyan-300 transition-colors">
                    EnigmaCoder IDE
                  </span>
                  <span className="text-[11px] text-cyan-400/80">
                    enigmacoder.dev · Live Platform
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
