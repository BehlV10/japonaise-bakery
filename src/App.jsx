import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OurStory from './components/OurStory';
import SpecialsSection from './components/SpecialsSection';
import JobsSection from './components/JobsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ItemModal from './components/ItemModal';
import ApplyModal from './components/ApplyModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2724] flex flex-col font-sans">
      {/* Fixed Header & Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onVisit={() => scrollToSection('contact')}
        />

        <MenuSection
          onSelectItem={(item) => setSelectedItem(item)}
        />

        <OurStory />

        <SpecialsSection />

        <JobsSection
          onOpenApplyModal={(job) => setSelectedJobForApply(job)}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Item Detail / Photo Lightbox Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Job Application Modal */}
      {selectedJobForApply && (
        <ApplyModal
          job={selectedJobForApply}
          onClose={() => setSelectedJobForApply(null)}
        />
      )}
    </div>
  );
}
