import React from 'react';
import { PROFILE, SKILLS, EDUCATION, PROJECTS, CONTACT_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-surface specular-rim rounded-3xl p-6 sm:p-8 md:p-10 my-8 max-h-[90vh] overflow-y-auto text-[#e5e1e5] shadow-2xl border border-[#464554]/40">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-[#464554]/30 sticky top-0 bg-[#131316]/90 backdrop-blur-lg z-10 -mx-6 -mt-6 px-6 pt-6 sm:-mx-8 sm:-mt-8 sm:px-8 sm:pt-8 md:-mx-10 md:-mt-10 md:px-10 md:pt-10">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#8083ff]/15 flex items-center justify-center text-[#c0c1ff]">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </span>
            <div>
              <h2 className="text-[18px] font-semibold text-titanium">
                Curriculum Vitae
              </h2>
              <span className="font-mono text-[11px] text-[#7bd0ff]">
                PANKAJ CHAUHAN // VERIFIED
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#e5e1e5] text-[12px] font-mono transition-colors cursor-pointer"
              title="Print Resume"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-8">
          {/* Identity & Contacts */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#464554]/20">
            <div>
              <h1 className="text-[28px] font-bold text-titanium">{PROFILE.name}</h1>
              <p className="text-[#c0c1ff] text-[16px] font-medium">
                {PROFILE.rolePrimary} &amp; {PROFILE.roleSecondary}
              </p>
              <p className="text-[#908fa0] text-[13px] mt-1">{CONTACT_INFO.location}</p>
            </div>
            <div className="space-y-1 font-mono text-[12px] text-[#c7c4d7]">
              <div>Email: {CONTACT_INFO.email}</div>
              <div>Phone: {CONTACT_INFO.phone}</div>
              <div>GitHub: github.com/PAnkajcordx</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-mono text-[12px] text-[#7bd0ff] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">person</span>
              Professional Summary
            </h3>
            <p className="text-[14px] text-[#c7c4d7] leading-relaxed">
              {PROFILE.heroBio} Completed formal graduation alongside vocational ITI, O Level, and CCC technical certifications. Proficient in frontend website development, responsive architectures, IoT embedded systems with Arduino, and Python application development.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-[12px] text-[#c0c1ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">code</span>
              Technical Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKILLS.map((s) => (
                <div key={s.id} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[14px] font-medium text-white">{s.name}</span>
                  <span className="block text-[11px] text-[#908fa0]">{s.subtitle} • {s.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="font-mono text-[12px] text-[#ddb7ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">layers</span>
              Key Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-white/5 border border-[#464554]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[15px] text-white">{p.title}</span>
                    <span className="font-mono text-[11px] text-[#7bd0ff]">{p.tags.join(', ')}</span>
                  </div>
                  <p className="text-[13px] text-[#c7c4d7] mt-1">{p.description}</p>
                  {p.features && (
                    <ul className="mt-2 text-[12px] text-[#908fa0] list-disc list-inside space-y-0.5">
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="font-mono text-[12px] text-[#7bd0ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">school</span>
              Education &amp; Qualifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-[14px] font-medium text-white">{edu.title}</span>
                    <span className="block text-[12px] text-[#908fa0]">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#c0c1ff]">
                    {edu.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-[#464554]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-[#0e0e10] font-semibold text-[14px] hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
