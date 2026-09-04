import React, { useState, useRef } from 'react';
import { useProfilePhoto, DEFAULT_AVATAR_FALLBACK } from '../context/PhotoContext';

export const PhotoUploadModal: React.FC = () => {
  const { isPhotoModalOpen, closePhotoModal, photoUrl, setPhotoUrl, resetToDefault } = useProfilePhoto();
  const [previewUrl, setPreviewUrl] = useState<string>(photoUrl);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync preview whenever modal opens or photoUrl changes
  React.useEffect(() => {
    if (isPhotoModalOpen) {
      setPreviewUrl(photoUrl);
      setErrorMsg('');
    }
  }, [isPhotoModalOpen, photoUrl]);

  if (!isPhotoModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg('Image size should be under 8MB.');
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyCustomUrl = () => {
    if (!customUrlInput.trim()) return;
    setPreviewUrl(customUrlInput.trim());
    setErrorMsg('');
  };

  const handleSave = () => {
    setPhotoUrl(previewUrl);
    closePhotoModal();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md glass-surface specular-rim rounded-3xl p-6 sm:p-8 text-[#e5e1e5] shadow-2xl border border-[#464554]/40">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#464554]/30">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#7bd0ff]/15 flex items-center justify-center text-[#7bd0ff]">
              <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
            </span>
            <h3 className="text-[17px] font-semibold text-titanium">Update Profile Photo</h3>
          </div>
          <button
            onClick={closePhotoModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Current / Preview Image Display */}
        <div className="mt-6 flex flex-col items-center">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#7bd0ff]/50 shadow-[0_0_25px_rgba(123,208,255,0.25)] bg-[#1c1b1f] group">
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to default avatar if preview fails
                (e.target as HTMLImageElement).src = DEFAULT_AVATAR_FALLBACK;
              }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[12px] font-mono text-white">Preview</span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#908fa0] mt-2">
            Pankaj Chauhan // Official Portrait
          </span>
        </div>

        {/* Drop Zone & File Selector */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="mt-6 border-2 border-dashed border-[#7bd0ff]/40 hover:border-[#7bd0ff] rounded-2xl p-5 text-center cursor-pointer transition-all bg-[#7bd0ff]/5 hover:bg-[#7bd0ff]/10 group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div className="w-12 h-12 mx-auto rounded-full bg-[#7bd0ff]/15 flex items-center justify-center text-[#7bd0ff] mb-2 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">
              add_photo_alternate
            </span>
          </div>
          <p className="text-[14px] font-semibold text-white">
            Apni Photo (profile.png) Select Karein
          </p>
          <p className="text-[12px] text-[#908fa0] mt-1">
            Click to browse file from device or drag &amp; drop
          </p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#c7c4d7]">
            Instant save in browser
          </span>
        </div>

        {errorMsg && (
          <p className="text-red-400 text-[12px] font-mono mt-2 text-center">
            {errorMsg}
          </p>
        )}

        {/* Direct Image URL Option */}
        <div className="mt-4">
          <label className="block text-[11px] font-mono text-[#908fa0] uppercase tracking-wider mb-1">
            Or Paste Image URL
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customUrlInput}
              onChange={(e) => setCustomUrlInput(e.target.value)}
              placeholder="https://... or /profile.png"
              className="flex-1 px-3 py-2 text-[12px] font-mono bg-[#1c1b1f] border border-[#464554]/40 rounded-xl focus:border-[#7bd0ff] focus:outline-none text-white placeholder:text-[#908fa0]/50"
            />
            <button
              type="button"
              onClick={handleApplyCustomUrl}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[12px] font-mono text-white transition-colors cursor-pointer"
            >
              Load
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-[#464554]/30 flex items-center justify-between">
          <button
            type="button"
            onClick={resetToDefault}
            className="text-[12px] font-mono text-[#908fa0] hover:text-white transition-colors cursor-pointer"
          >
            Reset
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closePhotoModal}
              className="px-4 py-2 rounded-full text-[13px] text-[#c7c4d7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7bd0ff] to-[#c0c1ff] text-[#0e0e10] font-semibold text-[13px] hover:shadow-[0_0_20px_rgba(123,208,255,0.4)] active:scale-95 transition-all cursor-pointer"
            >
              Save Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
