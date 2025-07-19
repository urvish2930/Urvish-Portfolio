import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

const Home = () => {
  // Open default mail client
  const handleEmailClick = () => {
    window.location.href = 'mailto:urvishpandya14@gmail.com';
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
            <img
              src="/urvish.jpg"
              alt="Urvish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Urvish Pandya
          </span>
        </h1>

        {/* Title */}
        <p className="text-2xl text-gray-400 mb-8">
          Full Stack Developer
        </p>

        {/* Bio */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          React-Powered, API-Integrated, AI-Enhanced — That’s How I Build.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          {/* Hire Me Button */}
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
          >
            <span>Hire Me</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Download Resume Button */}
          <button
            className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl hover:bg-white/10 transition-all duration-300"
            onClick={() => window.open('/Urvish Resume.pdf', '_blank')}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
