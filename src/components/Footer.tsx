import React from 'react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-16 md:pb-10 border-t border-[#464554]/20 flex flex-col items-center text-center space-y-3">
      <div className="text-[20px] font-semibold text-[#e5e1e5] tracking-tight">
        {PROFILE.name}
      </div>
      <p className="text-[13px] text-[#c7c4d7]">
        {PROFILE.rolePrimary} | {PROFILE.roleSecondary}
      </p>
      <div className="font-mono text-[11px] text-[#908fa0] pt-2">
        © 2026 {PROFILE.name}. All Rights Reserved.
      </div>
    </footer>
  );
};
