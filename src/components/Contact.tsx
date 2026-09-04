import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    // Simulate real-time dispatch transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setTransmissionSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setTransmissionSuccess(false), 6000);
    }, 700);
  };

  return (
    <section className="py-12 md:py-16" id="contact">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7bd0ff]/10 border border-[#7bd0ff]/25 mb-3 hover:border-[#7bd0ff]/50 transition-all">
          <span className="material-symbols-outlined text-[#7bd0ff] text-[16px]">alternate_email</span>
          <span className="font-mono text-[12px] text-[#7bd0ff] tracking-wider font-medium">
            SECURE TRANSMISSION
          </span>
        </div>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-titanium tracking-tight">
          Contact Me
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#c7c4d7] mt-2 max-w-md leading-normal">
          Reach out for collaborations, full-time engineering appointments, or technology consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Direct Coordinates Bento (5 Cols) */}
        <div className="lg:col-span-5 glass-surface specular-rim rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-indigo-400/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-300">
          <div>
            <h3 className="text-[22px] md:text-[24px] font-semibold text-[#e5e1e5] mb-2">
              Get In Touch
            </h3>
            <p className="text-[15px] text-[#c7c4d7] mb-8 leading-relaxed">
              If you have any questions or opportunities, feel free to contact me.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#201f22]/60 hover:bg-[#201f22] border border-transparent hover:border-[#7bd0ff]/30 transition-all duration-200 group">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#7bd0ff]/10 border border-[#7bd0ff]/20 flex items-center justify-center text-[#7bd0ff] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(123,208,255,0.3)] transition-all shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[11px] text-[#908fa0] uppercase tracking-wider">
                      Email
                    </span>
                    <span className="block text-[14px] text-[#e5e1e5] truncate group-hover:text-[#7bd0ff] transition-colors">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  className="p-2 rounded-lg text-[#908fa0] hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
                  title="Copy email address"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedItem === 'email' ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#201f22]/60 hover:bg-[#201f22] border border-transparent hover:border-[#8083ff]/30 transition-all duration-200 group">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8083ff]/10 border border-[#8083ff]/20 flex items-center justify-center text-[#c0c1ff] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-[#908fa0] uppercase tracking-wider">
                      Phone
                    </span>
                    <span className="block text-[14px] text-[#e5e1e5] group-hover:text-[#c0c1ff] transition-colors font-medium">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className="p-2 rounded-lg text-[#908fa0] hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
                  title="Copy phone number"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedItem === 'phone' ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#201f22]/60 border border-transparent">
                <div className="w-10 h-10 rounded-lg bg-[#b76dff]/10 border border-[#b76dff]/20 flex items-center justify-center text-[#ddb7ff] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] text-[#908fa0] uppercase tracking-wider">
                    Location
                  </span>
                  <span className="block text-[14px] text-[#e5e1e5] font-medium">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Buttons Cluster */}
          <div className="pt-8 mt-6 border-t border-[#464554]/20 flex items-center gap-2.5">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-[#2a2a2c]/60 hover:bg-[#353437] border border-[#464554]/30 hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] text-[#e5e1e5] flex items-center justify-center gap-1.5 font-mono text-[12px] active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[16px]">deployed_code</span>
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Collaboration%20Inquiry`}
              className="flex-1 py-2.5 rounded-xl bg-[#2a2a2c]/60 hover:bg-[#353437] border border-[#464554]/30 hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] text-[#e5e1e5] flex items-center justify-center gap-1.5 font-mono text-[12px] active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[16px]">work</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Hello%20Pankaj`}
              className="flex-1 py-2.5 rounded-xl bg-[#2a2a2c]/60 hover:bg-[#353437] border border-[#464554]/30 hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] text-[#e5e1e5] flex items-center justify-center gap-1.5 font-mono text-[12px] active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* VisionOS Transmission Form Terminal (7 Cols) */}
        <div className="lg:col-span-7 glass-surface specular-rim rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-indigo-400/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-300 relative flex flex-col justify-center">
          {transmissionSuccess && (
            <div className="mb-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 animate-fade-in">
              <span className="material-symbols-outlined text-[22px]">verified</span>
              <div>
                <span className="font-semibold block text-[14px]">Transmission Received</span>
                <span className="text-[12px] text-emerald-200/80">
                  Thank you! Pankaj Chauhan will respond to your message promptly.
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Pankaj Chauhan"
                className="w-full bg-[#0e0e10]/80 border border-[#464554]/30 rounded-xl px-4 py-3 text-[#e5e1e5] placeholder:text-[#908fa0]/40 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50 text-[14px] transition-all duration-200"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@organization.com"
                className="w-full bg-[#0e0e10]/80 border border-[#464554]/30 rounded-xl px-4 py-3 text-[#e5e1e5] placeholder:text-[#908fa0]/40 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50 text-[14px] transition-all duration-200"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discuss project requirements, web applications, or role inquiries..."
                className="w-full bg-[#0e0e10]/80 border border-[#464554]/30 rounded-xl px-4 py-3 text-[#e5e1e5] placeholder:text-[#908fa0]/40 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50 text-[14px] resize-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8083ff] via-indigo-500 to-[#7bd0ff] text-[#0e0e10] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(99,102,241,0.3)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isSubmitting ? 'sync' : 'send'}
              </span>
              <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
