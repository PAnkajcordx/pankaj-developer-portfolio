import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Programming', 'Office Tool'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-12 md:py-16" id="skills">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7bd0ff]/10 border border-[#7bd0ff]/25 mb-3 hover:border-[#7bd0ff]/50 transition-all">
          <span className="material-symbols-outlined text-[#7bd0ff] text-[16px]">terminal</span>
          <span className="font-mono text-[12px] text-[#7bd0ff] tracking-wider font-medium">
            COMPETENCY MATRIX
          </span>
        </div>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-titanium tracking-tight">
          My Skills
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#c7c4d7] mt-2 max-w-md leading-normal">
          Structured frontend interfaces, backend programming logic, and essential enterprise documentation suites.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-6 p-1 rounded-full glass-surface border border-[#464554]/30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-[12px] font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#8083ff]/30 to-[#7bd0ff]/30 text-white font-medium border border-[#c0c1ff]/40 shadow-sm'
                  : 'text-[#c7c4d7] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredSkills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="glass-surface specular-rim rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7bd0ff] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(123,208,255,0.3)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px]">{skill.icon}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#908fa0] group-hover:text-white transition-colors">
                    {skill.percentage}%
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#2a2a2c] text-[#7bd0ff] border border-[#7bd0ff]/20 group-hover:border-[#7bd0ff]/50 transition-colors">
                    {skill.category}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-semibold text-[#e5e1e5] group-hover:text-[#c0c1ff] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-[13px] text-[#c7c4d7] mt-1 font-normal">
                  {skill.subtitle}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#2a2a2c] h-1.5 rounded-full mt-5 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${skill.gradientClass} h-full rounded-full group-hover:brightness-125 transition-all duration-500`}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
