import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'overview', label: 'Overview', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'terminal' },
    { id: 'projects', label: 'Projects', icon: 'layers' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-[#0e0e10]/90 backdrop-blur-2xl shadow-2xl border-t border-[#464554]/30">
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center px-4 py-1 rounded-full transition-all duration-200 active:scale-90 cursor-pointer ${
              isActive
                ? 'bg-[#39393c]/50 text-[#c0c1ff] shadow-sm'
                : 'text-[#c7c4d7] hover:text-[#c0c1ff]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
            <span className="font-mono text-[11px] font-semibold mt-0.5">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
