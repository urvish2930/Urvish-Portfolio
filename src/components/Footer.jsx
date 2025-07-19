import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <>
    <footer className="relative z-10 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            © 2025 Urvish Pandya. 
          </div>
         <div className="flex gap-4">
      <a 
        href="https://github.com/urvish2930/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <Github className="w-5 h-5" />
      </a>
      
      <a 
        href="https://www.linkedin.com/in/urvish-pandya-2b5832216/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      
      <a 
        href="mailto:urvishpandya14@gmail.com"
        className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;