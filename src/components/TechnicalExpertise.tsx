import React from 'react';
import { TECHNICAL_EXPERTISE } from '../data/portfolioData';
import { Brain, Code, Database, Sparkles, Rocket, CheckCircle } from 'lucide-react';

export const TechnicalExpertise: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'AI & Machine Learning':
        return Brain;
      case 'Software Engineering':
        return Code;
      case 'Data Science & Storage':
        return Database;
      case 'AI Product Engineering':
        return Sparkles;
      case 'Founder & Entrepreneurship':
        return Rocket;
      default:
        return Code;
    }
  };

  return (
    <section id="expertise" className="py-24 border-b border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Core Competencies & Stack</span>
            <span className="text-slate-600">/</span>
            <span>Project-Backed Evidence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Technical Expertise & Engineering Domains
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I evaluate skills through working software rather than arbitrary percentage bars. Below are the core domains proven in my deployed systems, model adaptations, and open repositories.
          </p>
        </div>

        {/* 5 Technical Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_EXPERTISE.map((domain, idx) => {
            const Icon = getIcon(domain.title);
            return (
              <div
                key={domain.title}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Domain Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                        Domain 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Skills Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                      Specific Competencies
                    </span>
                    <ul className="space-y-1.5 text-xs">
                      {domain.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Grounded Demonstration Reference */}
                <div className="pt-4 mt-6 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                    Demonstrated In
                  </span>
                  <span className="text-xs font-medium text-cyan-300 font-mono">
                    {domain.demonstratedIn}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
