import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Trophy, BookmarkCheck, Globe } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Program':
        return Globe;
      case 'Certification':
        return BookmarkCheck;
      case 'Competition':
        return Trophy;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-24 border-b border-slate-800/80 bg-[#06080d] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Honors & Milestones</span>
            <span className="text-slate-600">/</span>
            <span>Verified Recognition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Recognitions & Competitive Milestones
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Documented participation, competitive placements, and official program milestones in artificial intelligence and developer engineering.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(item.category);
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Item Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                          {item.organization}
                        </span>
                        <h3 className="text-base font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-slate-400 shrink-0 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* Status Badge */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Official Standing:</span>
                  <span className="font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/30 font-semibold">
                    {item.tierOrStatus}
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
