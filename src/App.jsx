import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/effects/CursorGlow';
import FloatingParticles from './components/effects/FloatingParticles';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen bg-black text-white flex relative">
      <CursorGlow mousePosition={mousePosition} />
      <FloatingParticles />

      {/* Sidebar */}
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main content area shifted right of the sidebar */}
      <main className="ml-56 flex-1 px-6 py-8 relative z-10">
        {sections[activeSection]}
        <Footer />
      </main>
    </div>
  );
};

export default App;
