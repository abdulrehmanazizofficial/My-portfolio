import React from 'react';
import { Bot, Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#06080d]/85 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Clean single-element in display face) */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-slate-100 font-bold tracking-tight hover:text-white transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide uppercase text-slate-200">
              Abdul Rehman Aziz Khan
            </span>
            <span className="text-[11px] font-normal text-slate-400 tracking-wider">
              Founder & AI Systems Architect
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links (Single-line, text only) */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-medium text-slate-300">
          <a href="#philosophy" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Philosophy
          </a>
          <a href="#enigmacoder-ide" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            EnigmaCoder IDE
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#expertise" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Expertise
          </a>
          <a href="#achievements" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Achievements
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg transition-all shadow-sm shadow-cyan-950/50 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Open AI Assistant"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Assistant</span>
            <kbd className="hidden lg:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-900/80 border border-slate-700/80 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-100 rounded-md transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#07090e] px-6 py-4 space-y-3">
          <a 
            href="#philosophy" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            Philosophy
          </a>
          <a 
            href="#enigmacoder-ide" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            EnigmaCoder IDE
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            Projects
          </a>
          <a 
            href="#expertise" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            Expertise
          </a>
          <a 
            href="#achievements" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            Achievements
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-slate-300 hover:text-cyan-400 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
