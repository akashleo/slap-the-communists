import React from 'react';
import { useNavigate } from 'react-router-dom';
import { leaders } from '../data/leaders';
import { Star, Users, Calendar } from 'lucide-react';

const SelectionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLeaderSelect = (leaderId: string) => {
    navigate(`/slap/${leaderId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Choose Your Favorite
            </span>
            <br />
            <span className="text-red-300">Communist Leader</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Select the leader you'd like to... interact with. Each choice leads to a unique slapping experience!
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => handleLeaderSelect(leader.id)}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 sm:p-6 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-red-500 touch-manipulation"
            >
              {/* Leader Image */}
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-full h-64 sm:h-56 md:h-64 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <span className="text-xs sm:text-sm font-medium">Leader</span>
                  </div>
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {leader.name}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{leader.country}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{leader.years}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {leader.description}
                </p>
              </div>

              {/* Touch-friendly tap indicator for mobile */}
              <div className="mt-4 sm:mt-6 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-center font-medium text-sm">
                  <span className="sm:hidden">Tap to Slap!</span>
                  <span className="hidden sm:inline">Click to Slap!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center py-6 px-4">
        <p className="text-gray-300 text-sm">
          Made with ❤️ by <span className="text-yellow-400 font-semibold">Akash Ghosh</span>. 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SelectionPage;