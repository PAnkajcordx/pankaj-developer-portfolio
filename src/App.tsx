/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = [
        { id: 'contact', element: document.getElementById('contact') },
        { id: 'education', element: document.getElementById('education') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'about', element: document.getElementById('about') },
      ];

      for (const section of sections) {
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setActiveSection(section.id);
          return;
        }
      }
      setActiveSection('overview');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('overview');
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#131316] text-[#e5e1e5] min-h-screen relative overflow-x-hidden selection:bg-[#8083ff] selection:text-white">
      {/* VisionOS Animated Cosmic Background & Particle Matrix */}
      <AnimatedBackground />

      {/* Top Header / App Bar */}
      <Header
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Stage Canvas */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-24 md:pb-28">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={() => handleNavigate('contact')}
        />

        <About />

        <Skills />

        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        <Education />

        <Contact />

        <Footer />
      </main>

      {/* Mobile Floating Bottom Navigation */}
      <BottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
