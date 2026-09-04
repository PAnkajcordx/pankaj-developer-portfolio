import React, { createContext, useContext, useState, useEffect } from 'react';

// Custom SVG Monogram Avatar for Pankaj Chauhan — no external stock photo of strangers
export const DEFAULT_AVATAR_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%231e1b4b"/>
      <stop offset="50%" stop-color="%23131316"/>
      <stop offset="100%" stop-color="%230b0b0e"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%237bd0ff"/>
      <stop offset="100%" stop-color="%23c0c1ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(%23bgGrad)"/>
  <circle cx="100" cy="100" r="92" stroke="%23464554" stroke-width="1.5" fill="none" opacity="0.4"/>
  <circle cx="100" cy="74" r="32" fill="url(%23accentGrad)" opacity="0.85"/>
  <path d="M48 160 C48 126, 72 114, 100 114 C128 114, 152 126, 152 160 Z" fill="url(%23accentGrad)" opacity="0.8"/>
  <circle cx="100" cy="74" r="28" fill="%23131316"/>
  <text x="100" y="82" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="%237bd0ff" text-anchor="middle">PC</text>
  <text x="100" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="%23c0c1ff" text-anchor="middle" letter-spacing="1.5">PANKAJ CHAUHAN</text>
</svg>`;

export const DEFAULT_AVATAR_FALLBACK = DEFAULT_AVATAR_SVG;

interface PhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  setPhotoUrl: (url: string) => void;
  openPhotoModal: () => void;
  closePhotoModal: () => void;
  isPhotoModalOpen: boolean;
  resetToDefault: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'pankaj_chauhan_portfolio_photo_v2';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrlState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pankaj_chauhan_portfolio_photo_v2') || localStorage.getItem('pankaj_chauhan_portfolio_photo_v1');
      if (saved) return saved;
    }
    return DEFAULT_AVATAR_SVG;
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const isCustomPhoto = photoUrl !== DEFAULT_AVATAR_SVG;

  // Attempt to check if /profile.png exists on server if no custom photo saved
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pankaj_chauhan_portfolio_photo_v2') || localStorage.getItem('pankaj_chauhan_portfolio_photo_v1');
      if (!saved) {
        const baseUrl = import.meta.env.BASE_URL || './';
        const profilePath = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}profile.png`;
        const testImg = new Image();
        testImg.src = profilePath;
        testImg.onload = () => {
          setPhotoUrlState(profilePath);
        };
        testImg.onerror = () => {
          // Keep DEFAULT_AVATAR_SVG
        };
      }
    }
  }, []);

  const setPhotoUrl = (url: string) => {
    setPhotoUrlState(url);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, url);
      } catch (err) {
        console.warn('Could not save to localStorage:', err);
      }
    }
  };

  const resetToDefault = () => {
    setPhotoUrlState(DEFAULT_AVATAR_SVG);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  const openPhotoModal = () => setIsPhotoModalOpen(true);
  const closePhotoModal = () => setIsPhotoModalOpen(false);

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        isCustomPhoto,
        setPhotoUrl,
        openPhotoModal,
        closePhotoModal,
        isPhotoModalOpen,
        resetToDefault,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a PhotoProvider');
  }
  return context;
};
