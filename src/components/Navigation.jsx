import React from 'react';
import { Code, Palette, Award, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const NavItem = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
        activeSection === id
          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 h-full w-56 bg-[#0f172a] z-50 shadow-lg border-r border-gray-800 flex flex-col justify-between py-8 px-4">
      <div>
        <div className="text-white text-2xl font-bold mb-8 px-2">Urvish</div>
        <div className="flex flex-col gap-2">
          <NavItem
            id="home"
            label="Home"
            icon={<div className="w-2 h-2 bg-blue-500 rounded-full ml-1" />}
          />
          <NavItem
            id="about"
            label="About"
            icon={<Code className="w-5 h-5" />}
          />
          <NavItem
            id="projects"
            label="Projects"
            icon={<Palette className="w-5 h-5" />}
          />
          
          <NavItem
            id="contact"
            label="Contact"
            icon={<Mail className="w-5 h-5" />}
          />
        </div>
      </div>

      <div className="text-gray-600 text-sm text-center px-2">
        <p>© {new Date().getFullYear()} Urvish</p>
        <p className="opacity-50">Crafted with ❤️ & code</p>
      </div>
    </nav>
  );
};

export default Navigation;
