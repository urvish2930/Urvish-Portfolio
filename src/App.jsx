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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    achievements: <Achievements />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row relative">
      <CursorGlow mousePosition={mousePosition} />
      <FloatingParticles />

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4 bg-[#0f172a] z-20">
        <h1 className="text-xl font-bold">Urvish</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar - toggle visible on mobile, fixed on desktop */}
      <div
        className={`${
          isSidebarOpen ? 'flex' : 'hidden'
        } md:flex flex-col w-full md:w-56 bg-[#0f172a] fixed md:relative z-20 h-full md:h-auto`}
      >
        <Navigation activeSection={activeSection} setActiveSection={(section) => {
          setActiveSection(section);
          setIsSidebarOpen(false); // auto close on mobile
        }} />
      </div>

      {/* Main content */}
      <main className="flex-1 mt-4 md:mt-0 md:ml-56 px-4 py-8 z-10">
        {sections[activeSection]}
        <Footer />
      </main>
    </div>
  );
};

export default App;
