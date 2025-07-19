import React from 'react';
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent works.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;