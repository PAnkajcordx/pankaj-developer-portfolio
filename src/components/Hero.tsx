import React from 'react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onContactClick }) => {
  return (
    <section className="min-h-[720px] flex flex-col justify-center items-center text-center py-12 md:py-20 relative">
      {/* Pulsing cosmic orb behind hero headline */}
      <div className="absolute w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -top-10 left-1/2 -translate-x-1/2 animate-subtle-pulse" />

      {/* Keynote Tagline Capsule */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface border border-[#464554]/30 mb-6 specular-rim transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
        <span className="material-symbols-outlined text-[#7bd0ff] text-[16px]">stars</span>
        <span className="font-mono text-[11px] md:text-[12px] text-[#7bd0ff] tracking-wider font-medium">
          {PROFILE.taglineCapsule}
        </span>
      </div>

      {/* Massive Apple Keynote Typography Anchor */}
      <h1 className="text-[42px] sm:text-[52px] md:text-[64px] font-bold text-titanium mb-3 tracking-tight leading-[1.1]">
        {PROFILE.name}
      </h1>

      {/* Executive Subtitle with Secondary Glow */}
      <div className="flex items-center justify-center gap-2.5 mb-6 flex-wrap">
        <span className="text-[22px] sm:text-[26px] md:text-[32px] text-[#c0c1ff] font-semibold tracking-tight">
          {PROFILE.rolePrimary}
        </span>
        <span className="text-[#464554] text-[22px] sm:text-[26px] md:text-[32px]">•</span>
        <span className="text-[22px] sm:text-[26px] md:text-[32px] text-[#c7c4d7] font-medium tracking-tight">
          {PROFILE.roleSecondary}
        </span>
      </div>

      {/* Narrative Pitch Line */}
      <p className="text-[16px] sm:text-[18px] text-[#c7c4d7] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        {PROFILE.heroBio}
      </p>

      {/* Keynote Dual Action Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14">
        {/* High-Gloss White Button with Tactile Glow */}
        <button
          onClick={onContactClick}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#e5e1e5] text-[#0e0e10] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          <span>Contact Me</span>
        </button>

        {/* Translucent Glass Action with Neon Outline Glow */}
        <button
          onClick={onOpenResume}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-surface text-[#e5e1e5] hover:text-white font-medium text-[15px] flex items-center justify-center gap-2 border border-[#464554]/40 hover:border-indigo-400/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>View Resume</span>
        </button>
      </div>

      {/* Quick Metrics Strip / Keynote Spec Sheet */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-xl">
        {PROFILE.metrics.map((metric) => (
          <div
            key={metric.label}
            className="glass-surface specular-rim p-3.5 rounded-xl flex flex-col items-center hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300"
          >
            <span className={`text-[20px] md:text-[24px] font-bold ${metric.colorClass}`}>
              {metric.value}
            </span>
            <span className="font-mono text-[11px] text-[#c7c4d7] mt-0.5">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
