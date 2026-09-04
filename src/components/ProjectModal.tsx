import React from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl glass-surface specular-rim rounded-3xl p-6 sm:p-8 text-[#e5e1e5] shadow-2xl border border-[#464554]/40 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#464554]/30">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7bd0ff]">
              <span className="material-symbols-outlined text-[24px]">{project.icon}</span>
            </span>
            <div>
              <span className="font-mono text-[11px] text-[#7bd0ff] tracking-wider font-medium">
                {project.projectNumber} // {project.categoryTag}
              </span>
              <h2 className="text-[20px] sm:text-[22px] font-semibold text-titanium">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="mt-5 space-y-6">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#908fa0] mb-1.5">
              Architecture &amp; Overview
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#c7c4d7] leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          {project.features && (
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#908fa0] mb-2">
                Key Features &amp; Capabilities
              </h4>
              <div className="space-y-2">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 text-[13px] text-[#e5e1e5]">
                    <span className="material-symbols-outlined text-[#7bd0ff] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#908fa0] mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] px-3 py-1 rounded-md bg-[#2a2a2c] text-[#7bd0ff] border border-[#7bd0ff]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="pt-4 border-t border-[#464554]/20 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#e5e1e5] hover:bg-white text-[#0e0e10] font-semibold text-[14px] flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">play_circle</span>
                <span>Open Live Project</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full glass-surface hover:bg-white/10 text-[#e5e1e5] border border-[#464554]/40 font-medium text-[14px] flex items-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>View Source Repository</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
