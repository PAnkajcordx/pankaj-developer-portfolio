import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { useProfilePhoto, DEFAULT_AVATAR_FALLBACK } from '../context/PhotoContext';

export const About: React.FC = () => {
  const { photoUrl } = useProfilePhoto();

  return (
    <section className="py-12 md:py-16" id="about">
      <div className="glass-surface specular-rim rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        {/* Ambient subtle glow within card */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none animate-subtle-pulse" />

        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[#c0c1ff] text-[22px]">fingerprint</span>
          <span className="font-mono text-[12px] text-[#c0c1ff] uppercase tracking-widest font-medium">
            {PROFILE.about.badge}
          </span>
        </div>

        <h2 className="text-[28px] md:text-[38px] font-semibold text-titanium mb-8 tracking-tight">
          About Me
        </h2>

        {/* Bento Split: Bio on Left, Portrait Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-[16px] md:text-[17px] text-[#c7c4d7] leading-relaxed">
            {PROFILE.about.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 2 ? 'text-[#e5e1e5]' : ''}>
                {idx === 0 ? (
                  <>
                    Hello! My name is <strong className="text-[#e5e1e5] font-semibold">{PROFILE.name}</strong>. I am a dedicated computer professional and web developer based in Mau, Uttar Pradesh.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>

          {/* Portrait Showcase Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl p-1 bg-gradient-to-tr from-[#7bd0ff]/40 to-[#c0c1ff]/40 shadow-xl group">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#1c1b1f] relative">
                <img
                  src={photoUrl}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_AVATAR_FALLBACK;
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-[14px] font-semibold text-white block">{PROFILE.name}</span>
              <span className="text-[12px] font-mono text-[#7bd0ff]">B.A. Graduate • ITI Fitter</span>
            </div>
          </div>
        </div>

        {/* Capability Badges inside Bento */}
        <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-[#464554]/25">
          {PROFILE.about.capabilities.map((cap, i) => {
            const colorStyles = [
              'text-[#7bd0ff] border-[#7bd0ff]/25 hover:border-[#7bd0ff]/50 hover:bg-[#7bd0ff]/10',
              'text-[#c0c1ff] border-[#c0c1ff]/25 hover:border-[#c0c1ff]/50 hover:bg-[#c0c1ff]/10',
              'text-[#ddb7ff] border-[#ddb7ff]/25 hover:border-[#ddb7ff]/50 hover:bg-[#ddb7ff]/10',
              'text-[#e5e1e5] border-[#464554]/40 hover:border-[#908fa0] hover:bg-[#39393c]/40',
            ][i % 4];

            return (
              <span
                key={cap}
                className={`px-3.5 py-1 rounded-full bg-[#2a2a2c]/60 text-[11px] font-mono tracking-wider font-semibold border transition-all duration-200 cursor-default ${colorStyles}`}
              >
                {cap}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
