import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
      
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full flex flex-col justify-between">
        
        {/* Icon */}
        <div>
          <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {project.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

          {/* Description */}
          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <Github className="w-4 h-4" />
              Code
            </button>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
