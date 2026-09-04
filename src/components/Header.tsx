import React from 'react';
import { PROFILE } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0e0e10]/80 backdrop-blur-2xl border-b border-[#464554]/20 transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-5 max-w-[1200px] mx-auto h-16">
        {/* Leading Identity / Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#c0c1ff] to-[#7bd0ff] transition-transform duration-300 group-hover:scale-105">
            <img
              className="w-full h-full object-cover rounded-full"
              src={PROFILE.avatar}
              alt={PROFILE.name}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold text-[#e5e1e5] tracking-tight leading-none group-hover:text-white transition-colors">
              {PROFILE.name}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-[10px] text-[#7bd0ff] tracking-wider font-medium">
                {PROFILE.statusText}
              </span>
            </div>
          </div>
        </button>

        {/* Trailing Actions */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Education', id: 'education' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[14px] px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[#c0c1ff] bg-white/10 font-medium'
                    : 'text-[#c7c4d7] hover:text-[#c0c1ff] hover:bg-[#353437]/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-surface text-[#c0c1ff] font-mono text-[12px] border border-[#464554]/40 active:scale-95 transition-all duration-200 shadow-sm hover:border-[#c0c1ff]/60 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] cursor-pointer"
            title="View or Download Resume"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};
