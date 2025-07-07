import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - responsive sizes and positions */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-8 sm:top-32 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 right-1/3 w-10 h-10 sm:w-20 sm:h-20 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 sm:px-6 w-full max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-bounce">
          <img src="/hammer-sickle.png" className="w-16 h-20 sm:w-30 sm:h-40 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6" alt="Hammer and Sickle" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            SLAP THE
          </span>
          <br />
          <span className="text-red-300">COMMUNISTS</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-red-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Choose your favorite communist leader and give them a satisfying slap! 
          <br />
          <span className="text-yellow-300">A therapeutic experience awaits...</span>
        </p>
        
        <button
          onClick={() => navigate('/select')}
          className="group relative bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-out touch-manipulation"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300" />
            <span>ENTER</span>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="text-center py-4 px-4">
          <p className="text-gray-300 text-sm">
            Made with ❤️ by <span className="text-yellow-400 font-semibold">Akash Ghosh</span>. 2025 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;