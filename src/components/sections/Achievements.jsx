import React from 'react';
import { Award } from 'lucide-react';
import { achievementsData } from '../../data/achievementsData';

const Achievements = () => {
  return (
    <div className="max-w-4xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Achievements</h2>
        <p className="text-gray-400 text-lg">
          Recognition and milestones in my development journey
        </p>
      </div>
      
      <div className="space-y-8">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span>{achievement.year}</span>
                    <span>•</span>
                    <span>{achievement.org}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;