import React, { useState, useEffect } from 'react';
import SkillBar from "../ui/SkillBar";

import { skillsData } from '../../data/skillsData';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-400 text-lg mb-6">
            I'm Urvish Pandya, a fresher full-stack developer with a strong focus on backend technologies like Node.js, Express, and MySQL. I enjoy building scalable APIs and efficient server-side logic, and I'm passionate about turning ideas into reliable web applications.


          </p>
          <p className="text-gray-400 text-lg mb-8">
            I believe in the power of clean code, beautiful design, and user-centered 
            thinking. Every project I work on is an opportunity to push creative boundaries 
            and deliver exceptional user experiences.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
          {skillsData.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              index={index} 
              isLoaded={isLoaded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;