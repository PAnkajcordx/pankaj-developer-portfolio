import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="py-12 md:py-16" id="education">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b76dff]/10 border border-[#b76dff]/25 mb-3 hover:border-[#b76dff]/50 transition-all">
          <span className="material-symbols-outlined text-[#ddb7ff] text-[16px]">school</span>
          <span className="font-mono text-[12px] text-[#ddb7ff] tracking-wider font-medium">
            ACADEMIC FOUNDATION
          </span>
        </div>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-titanium tracking-tight">
          My Education
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#c7c4d7] mt-2 max-w-md leading-normal">
          A progression of accredited university degrees, industrial vocational certifications, and technical computation diplomas.
        </p>
      </div>

      {/* Chronology Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {EDUCATION.map((item) => (
          <div
            key={item.id}
            className="glass-surface specular-rim rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 group cursor-default"
          >
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${item.accentClass}`}>
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <span
                className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full ${
                  item.tagType === 'year'
                    ? 'bg-[#8083ff]/20 text-[#c0c1ff] border border-[#8083ff]/30 font-medium'
                    : 'bg-[#2a2a2c] text-[#c7c4d7] border border-[#464554]/30'
                }`}
              >
                {item.tag}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-[19px] font-semibold text-[#e5e1e5] group-hover:text-[#c0c1ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#c7c4d7] mt-1 font-normal">
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
