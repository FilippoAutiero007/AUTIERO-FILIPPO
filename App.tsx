import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Section } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-10% 0px -50% 0px" // Adjusts the "active" area of the viewport
      }
    );

    const sections = Object.values(Section);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex bg-[#F5F5F7] min-h-screen text-apple-text font-sans selection:bg-apple-blue/20">

      {/* Navigation - Sidebar on desktop, Topbar on mobile */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1 w-full lg:pl-72 transition-all duration-300">
        <Hero scrollToSection={scrollToSection} />
        <Portfolio />
        <About />
        <Footer />
      </main>

      {/* Chat Bot */}
      <ChatWidget />

    </div>
  );
}

export default App;
