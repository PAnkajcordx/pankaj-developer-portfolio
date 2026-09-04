import React from 'react';
import { ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section className="py-12 md:py-16" id="projects">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8083ff]/10 border border-[#8083ff]/25 mb-3 hover:border-[#8083ff]/50 transition-all">
          <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">layers</span>
          <span className="font-mono text-[12px] text-[#c0c1ff] tracking-wider font-medium">
            PORTFOLIO SHIPMENTS
          </span>
        </div>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-titanium tracking-tight">
          My Projects
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#c7c4d7] mt-2 max-w-md leading-normal">
          Curated interactive creations combining modern web interfaces, IoT hardware integrations, and Python arcade systems.
        </p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="glass-surface specular-rim rounded-2xl md:rounded-3xl p-6 md:p-8 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7bd0ff] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">{project.icon}</span>
                  </span>
                  <span className="font-mono text-[11px] md:text-[12px] text-[#7bd0ff] tracking-wider font-medium">
                    {project.projectNumber} // {project.categoryTag}
                  </span>
                </div>

                <h3 className="text-[22px] md:text-[26px] font-semibold text-[#e5e1e5] group-hover:text-[#c0c1ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[14px] md:text-[15px] text-[#c7c4d7] leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#2a2a2c]/80 text-[#e5e1e5] border border-[#464554]/30 group-hover:border-[#8083ff]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-mono text-[11px] text-[#7bd0ff] hover:underline flex items-center gap-1 ml-2 py-1 px-2 rounded hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">info</span>
                    <span>System Specs</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {project.id === 'smart-parking' ? (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#e5e1e5] hover:bg-white text-[#0e0e10] font-semibold text-[14px] flex items-center justify-center gap-1.5 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full glass-surface hover:bg-white/10 text-[#e5e1e5] border border-[#464554]/40 hover:border-indigo-400/60 font-medium text-[14px] flex items-center justify-center gap-1.5 active:scale-95 transition-all duration-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                    >
                      <span className="material-symbols-outlined text-[16px]">code</span>
                      <span>GitHub Code</span>
                    </a>
                  </>
                ) : (
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#39393c]/40 hover:bg-[#39393c] text-[#c0c1ff] border border-[#8083ff]/30 flex items-center justify-center gap-2 text-[14px] font-semibold active:scale-95 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(192,193,255,0.3)]"
                  >
                    <span>View Project</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      arrow_outward
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
