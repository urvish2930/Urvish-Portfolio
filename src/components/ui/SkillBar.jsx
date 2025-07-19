import React from 'react';

const SkillBar = ({ skill, index, isLoaded }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
          style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;