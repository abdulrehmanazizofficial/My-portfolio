import React from 'react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070c] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm tracking-tight">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Abdul Rehman Aziz Khan</span>
            </div>
            <p className="text-slate-400 text-xs">
              Founder of EnigmaCoder · AI Engineer · Technology Builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-slate-300">
            <a href="#philosophy" className="hover:text-cyan-400 transition-colors">
              Philosophy
            </a>
            <a href="#enigmacoder-ide" className="hover:text-cyan-400 transition-colors">
              EnigmaCoder IDE
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">
              Expertise
            </a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">
              Achievements
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Abdul Rehman Aziz Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://enigmacoder.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              enigmacoder.dev
            </a>
            <span>·</span>
            <a 
              href="https://huggingface.co/enigmacoder/EnigmaCoder-2B" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              EnigmaCoder-2B (HF)
            </a>
            <span>·</span>
            <a 
              href="https://www.linkedin.com/in/abdul-rehman-aziz-khan-b3aab9402" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
