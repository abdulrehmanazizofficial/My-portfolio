import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { FlagshipEnigmaCoder } from './components/FlagshipEnigmaCoder';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GeminiAssistantModal } from './components/GeminiAssistantModal';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K toggles the Gemini Portfolio Assistant
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsChatOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isChatOpen) {
        setIsChatOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isChatOpen]);

  const handleExploreIDE = () => {
    const element = document.getElementById('enigmacoder-ide');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenChat={() => setIsChatOpen(true)}
          onExploreIDE={handleExploreIDE}
        />

        <PhilosophySection />

        <FlagshipEnigmaCoder />

        <ProjectsSection />

        <TechnicalExpertise />

        <AchievementsSection />

        <ContactSection onOpenChat={() => setIsChatOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Server-Side Gemini Portfolio Intelligence Assistant Modal */}
      <GeminiAssistantModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}
