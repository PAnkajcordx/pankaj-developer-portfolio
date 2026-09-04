import React, { useState } from 'react';
import {
  PROFILE,
  FORMAL_EDUCATION_RECORDS,
  TECHNICAL_QUALIFICATIONS_RECORDS,
  RESUME_COMPUTER_SKILLS,
  RESUME_TECHNICAL_SKILLS,
  PRACTICAL_TRAINING_RECORDS,
  STRENGTHS,
  CONTACT_INFO,
} from '../data/portfolioData';
import { useProfilePhoto, DEFAULT_AVATAR_FALLBACK } from '../context/PhotoContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl } = useProfilePhoto();
  const [viewFormat, setViewFormat] = useState<'document' | 'modern'>('document');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-surface specular-rim rounded-3xl p-5 sm:p-8 md:p-10 my-6 max-h-[92vh] overflow-y-auto text-[#e5e1e5] shadow-2xl border border-[#464554]/40">
        
        {/* Sticky Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#464554]/30 sticky top-0 bg-[#131316]/95 backdrop-blur-lg z-20 -mx-5 -mt-5 px-5 pt-5 sm:-mx-8 sm:-mt-8 sm:px-8 sm:pt-8 md:-mx-10 md:-mt-10 md:px-10 md:pt-10">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#8083ff]/15 flex items-center justify-center text-[#c0c1ff]">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </span>
            <div>
              <h2 className="text-[17px] sm:text-[19px] font-semibold text-titanium leading-tight">
                Curriculum Vitae
              </h2>
              <span className="font-mono text-[11px] text-[#7bd0ff]">
                PANKAJ CHAUHAN // OFFICIAL RESUME
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Style Switcher */}
            <div className="hidden sm:flex items-center bg-white/5 rounded-full p-1 border border-white/10 font-mono text-[11px]">
              <button
                onClick={() => setViewFormat('document')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewFormat === 'document'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#908fa0] hover:text-white'
                }`}
              >
                Formal Sheet
              </button>
              <button
                onClick={() => setViewFormat('modern')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewFormat === 'modern'
                    ? 'bg-[#7bd0ff]/20 text-[#7bd0ff] border border-[#7bd0ff]/30 font-semibold'
                    : 'text-[#908fa0] hover:text-white'
                }`}
              >
                Obsidian Vision
              </button>
            </div>

            {/* Print / Save PDF Trigger */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7bd0ff] to-[#c0c1ff] text-[#0e0e10] text-[12px] font-mono font-semibold transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(123,208,255,0.3)]"
              title="Print or Save as PDF"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DOCUMENT VIEW: Exact 1-to-1 match to Pankaj Chauhan's official resume     */}
        {/* ========================================================================= */}
        {viewFormat === 'document' ? (
          <div className="mt-6 bg-[#fcfcfd] text-[#1a1a1e] rounded-2xl p-6 sm:p-10 font-sans shadow-xl border border-white/20 transition-all">
            {/* Header: Name, Contact & Photo */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b-2 border-gray-200">
              <div className="flex-1">
                <h1 className="text-[26px] sm:text-[32px] font-extrabold text-[#111827] tracking-wider uppercase font-sans">
                  {PROFILE.name}
                </h1>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mt-2 font-medium flex flex-wrap items-center gap-x-2">
                  <span>{CONTACT_INFO.place}</span>
                  <span className="text-gray-300">|</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-600">
                    {CONTACT_INFO.phone}
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600">
                    {CONTACT_INFO.email}
                  </a>
                </p>
              </div>

              {/* Profile Photo in top right */}
              <div className="self-center sm:self-auto">
                <div className="w-28 h-36 rounded-lg overflow-hidden border-2 border-gray-300 shadow-md bg-gray-100 flex-shrink-0">
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
            </div>

            {/* Career Objective */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                CAREER OBJECTIVE
              </h3>
              <p className="text-[13.5px] text-gray-700 mt-2.5 leading-relaxed font-normal">
                {PROFILE.careerObjective}
              </p>
            </div>

            {/* Education Table */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                EDUCATION
              </h3>
              <div className="mt-2.5 overflow-x-auto">
                <table className="w-full text-left text-[13px] border border-gray-200">
                  <thead className="bg-gray-100 text-gray-800 font-semibold border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-3">Qualification</th>
                      <th className="py-2 px-3">Institution / Board</th>
                      <th className="py-2 px-3">Year</th>
                      <th className="py-2 px-3">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {FORMAL_EDUCATION_RECORDS.map((edu, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80">
                        <td className="py-2 px-3 font-medium text-gray-900">{edu.qualification}</td>
                        <td className="py-2 px-3">{edu.institution}</td>
                        <td className="py-2 px-3">{edu.year}</td>
                        <td className="py-2 px-3 font-medium text-blue-700">{edu.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical Qualifications Table */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                TECHNICAL QUALIFICATIONS
              </h3>
              <div className="mt-2.5 overflow-x-auto">
                <table className="w-full text-left text-[13px] border border-gray-200">
                  <thead className="bg-gray-100 text-gray-800 font-semibold border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-3">Qualification</th>
                      <th className="py-2 px-3">Institution</th>
                      <th className="py-2 px-3">Year</th>
                      <th className="py-2 px-3">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {TECHNICAL_QUALIFICATIONS_RECORDS.map((tech, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80">
                        <td className="py-2 px-3 font-medium text-gray-900">{tech.qualification}</td>
                        <td className="py-2 px-3">{tech.institution}</td>
                        <td className="py-2 px-3">{tech.year}</td>
                        <td className="py-2 px-3 font-medium text-emerald-700">{tech.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Skills */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                KEY SKILLS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-[13px] font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-blue-600">desktop_windows</span>
                    Computer Skills
                  </h4>
                  <p className="text-[12.5px] text-gray-700 leading-relaxed">
                    {RESUME_COMPUTER_SKILLS.join(', ')}.
                  </p>
                </div>
                <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-[13px] font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-emerald-600">build</span>
                    Technical Skills
                  </h4>
                  <p className="text-[12.5px] text-gray-700 leading-relaxed">
                    {RESUME_TECHNICAL_SKILLS.join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Knowledge */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                PRACTICAL KNOWLEDGE
              </h3>
              <div className="mt-3 space-y-3 text-[13px] text-gray-700">
                {PRACTICAL_TRAINING_RECORDS.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-gray-600 pl-1">
                      {item.tasks.map((task, tidx) => (
                        <li key={tidx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="mt-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider uppercase pb-1 border-b border-gray-300">
                STRENGTHS
              </h3>
              <p className="text-[13px] text-gray-700 mt-2 font-medium">
                {STRENGTHS.join(' | ')}
              </p>
            </div>

            {/* Declaration & Signature */}
            <div className="mt-8 pt-5 border-t border-gray-200 text-[12.5px] text-gray-600">
              <p className="italic">
                I hereby declare that the information provided above is true and correct to the best of my knowledge.
              </p>
              <div className="flex items-end justify-between mt-6">
                <div>
                  <span className="font-semibold text-gray-900">Place:</span> {CONTACT_INFO.place}
                </div>
                <div className="text-right">
                  <span className="font-bold text-gray-900 block text-[14px]">{PROFILE.name}</span>
                  <span className="text-[11px] text-gray-500 font-mono">(Candidate Signature)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MODERN OBSIDIAN VIEW: Styled in visionOS dark glassmorphism aesthetic     */
          /* ========================================================================= */
          <div className="mt-6 space-y-8">
            {/* Identity & Contacts */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#464554]/25">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#7bd0ff]/40 shadow-lg bg-[#1c1b1f] flex-shrink-0">
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
                <div>
                  <h1 className="text-[26px] font-bold text-titanium">{PROFILE.name}</h1>
                  <p className="text-[#c0c1ff] text-[15px] font-medium">
                    {PROFILE.rolePrimary} &amp; {PROFILE.roleSecondary}
                  </p>
                  <p className="text-[#908fa0] text-[13px] mt-0.5">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="space-y-1 font-mono text-[12px] text-[#c7c4d7] bg-white/5 p-3 rounded-xl border border-white/5">
                <div>Email: {CONTACT_INFO.email}</div>
                <div>Phone: {CONTACT_INFO.phone}</div>
                <div>GitHub: github.com/PAnkajcordx</div>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h3 className="font-mono text-[12px] text-[#7bd0ff] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">target</span>
                Career Objective
              </h3>
              <p className="text-[14px] text-[#c7c4d7] leading-relaxed bg-white/5 p-4 rounded-xl border border-[#464554]/30">
                {PROFILE.careerObjective}
              </p>
            </div>

            {/* Formal Education Grid */}
            <div>
              <h3 className="font-mono text-[12px] text-[#c0c1ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">school</span>
                Formal Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FORMAL_EDUCATION_RECORDS.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="block text-[14px] font-medium text-white">{edu.qualification}</span>
                      <span className="block text-[12px] text-[#908fa0] mt-1">{edu.institution}</span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-[#908fa0]">{edu.year}</span>
                      <span className="text-[#7bd0ff] font-semibold">{edu.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Qualifications Grid */}
            <div>
              <h3 className="font-mono text-[12px] text-[#ddb7ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Technical Certifications &amp; Diplomas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TECHNICAL_QUALIFICATIONS_RECORDS.map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-[#8083ff]/20 flex flex-col justify-between">
                    <div>
                      <span className="block text-[14px] font-medium text-white">{tech.qualification}</span>
                      <span className="block text-[12px] text-[#908fa0] mt-1">{tech.institution}</span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-[#908fa0]">{tech.year}</span>
                      <span className="text-[#c0c1ff] font-semibold">{tech.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-[#464554]/30">
                <h4 className="font-mono text-[12px] text-[#7bd0ff] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">computer</span>
                  Computer Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_COMPUTER_SKILLS.map((sk) => (
                    <span key={sk} className="px-2.5 py-1 rounded-md bg-[#1c1b1f] border border-[#464554]/30 text-[11px] font-mono text-[#c7c4d7]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#464554]/30">
                <h4 className="font-mono text-[12px] text-[#ddb7ff] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                  Technical Workshop Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_TECHNICAL_SKILLS.map((sk) => (
                    <span key={sk} className="px-2.5 py-1 rounded-md bg-[#1c1b1f] border border-[#464554]/30 text-[11px] font-mono text-[#c7c4d7]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Knowledge */}
            <div>
              <h3 className="font-mono text-[12px] text-[#7bd0ff] uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">engineering</span>
                Practical Knowledge &amp; Training
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRACTICAL_TRAINING_RECORDS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-[14px] font-semibold text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#7bd0ff]">{item.icon}</span>
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#908fa0] mt-0.5 mb-2">{item.subtitle}</p>
                    <ul className="space-y-1 text-[12px] text-[#c7c4d7] list-disc list-inside">
                      {item.tasks.map((task, tidx) => (
                        <li key={tidx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="font-mono text-[12px] text-[#c0c1ff] uppercase tracking-wider mb-2 font-semibold">
                Strengths
              </h3>
              <p className="text-[13px] text-[#c7c4d7]">
                {STRENGTHS.join('  •  ')}
              </p>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 pt-5 border-t border-[#464554]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-[#908fa0]">
            Candidate: Pankaj Chauhan • Location: Mau, Uttar Pradesh
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-[#0e0e10] font-semibold text-[13px] hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
