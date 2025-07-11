import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { leaders } from '../data/leaders';
import atrocitiesData from '../data/atrocities.json';
import { ArrowLeft, Zap, RotateCcw } from 'lucide-react';
import AtrocityPopup from './AtrocityPopup';
import Footer from './Footer';

const SlapPage: React.FC = () => {
  const { leaderId } = useParams<{ leaderId: string }>();
  const navigate = useNavigate();
  const [slapCount, setSlapCount] = useState(0);
  const [isSlapping, setIsSlapping] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  const [currentAtrocity, setCurrentAtrocity] = useState<string>('');
  const [showAtrocityPopup, setShowAtrocityPopup] = useState(false);
  const [usedAtrocities, setUsedAtrocities] = useState<Set<number>>(new Set());
  const [handAnimation, setHandAnimation] = useState<{
    show: boolean;
    angle: number;
  }>({
    show: false,
    angle: 60
  });

  const leader = leaders.find(l => l.id === leaderId);
  const leaderAtrocities = leaderId ? atrocitiesData[leaderId as keyof typeof atrocitiesData] || [] : [];

  // Get random atrocity for the leader
  const getRandomAtrocity = (): string => {
    if (leaderAtrocities.length === 0) return '';
    
    // If all atrocities have been used, reset the set
    if (usedAtrocities.size >= leaderAtrocities.length) {
      setUsedAtrocities(new Set());
    }
    
    // Get available atrocities (not yet used)
    const availableIndices = leaderAtrocities
      .map((_, index) => index)
      .filter(index => !usedAtrocities.has(index));
    
    // If no available atrocities, use any random one
    const indicesToUse = availableIndices.length > 0 ? availableIndices : 
      leaderAtrocities.map((_, index) => index);
    
    const randomIndex = indicesToUse[Math.floor(Math.random() * indicesToUse.length)];
    
    // Mark this atrocity as used
    setUsedAtrocities(prev => new Set(prev).add(randomIndex));
    
    return leaderAtrocities[randomIndex];
  };

  // Generate random angle within +-15 degrees of base 60 degrees
  const generateRandomAngle = (): number => {
    const baseAngle = 60;
    const variation = (Math.random() - 0.5) * 30; // -15 to +15 degrees
    return baseAngle + variation;
  };

  // Get motivational message based on slap count
  const getMotivationalMessage = (count: number): string => {
    if (count === 0) return "Ready to deliver some justice?";
    if (count < 5) return "Keep going! You're just getting started!";
    if (count < 10) return "Excellent technique! Feel the power!";
    if (count < 15) return "You're building momentum! Historic justice in progress!";
    if (count < 20) return "Impressive dedication! The revolution appreciates your effort!";
    if (count < 25) return "Unstoppable force! You're making history with every slap!";
    if (count < 30) return "Legendary status achieved! The people salute your persistence!";
    if (count < 35) return "Phenomenal technique! You've mastered the art of justice!";
    if (count < 40) return "Elite slapper status! Your dedication is truly remarkable!";
    return "🏆 ETERNAL SLAPPER OG! 🏆 You are the ultimate deliverer of historic justice!";
  };

  // Get level description for stats
  const getLevelDescription = (count: number): string => {
    if (count === 0) return 'Untested';
    if (count < 5) return 'Warming up';
    if (count < 10) return 'Getting good';
    if (count < 15) return 'Building momentum';
    if (count < 20) return 'Impressive';
    if (count < 25) return 'Unstoppable';
    if (count < 30) return 'Legendary';
    if (count < 35) return 'Phenomenal';
    if (count < 40) return 'Elite';
    return 'ETERNAL OG';
  };

  useEffect(() => {
    if (!leader) {
      navigate('/select');
    }
  }, [leader, navigate]);

  const handleSlap = () => {
    setIsSlapping(true);
    setShowImpact(true);
    setSlapCount(prev => prev + 1);
    
    // Show hand animation with random angle
    const newAngle = generateRandomAngle();
    setHandAnimation({
      show: true,
      angle: newAngle
    });
    
    // Hide hand animation after 3 seconds
    setTimeout(() => {
      setHandAnimation(prev => ({ ...prev, show: false }));
    }, 3000);
    
    // Show atrocity toast
    const atrocity = getRandomAtrocity();
    if (atrocity) {
      setCurrentAtrocity(atrocity);
      setTimeout(() => {
        setShowAtrocityPopup(true);
      }, 400); // Show toast after slap animation
    }
    
    // Play slap sound effect
    try {
      const audio = new Audio('/hard-slap.mp3');
      audio.volume = 0.7; // Set volume to 70%
      audio.play().catch((error) => {
        console.warn('Could not play slap sound:', error);
      });
    } catch (error) {
      console.warn('Could not load slap sound:', error);
    }
    
    // Reset animations
    setTimeout(() => {
      setIsSlapping(false);
    }, 600);
    
    setTimeout(() => {
      setShowImpact(false);
    }, 300);
  };

  const handleCloseAtrocityPopup = () => {
    setShowAtrocityPopup(false);
  };

  if (!leader) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-4 sm:py-6 md:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Header with Back Button */}
          <div className="flex items-center justify-start mb-6">
            <button
              onClick={() => navigate('/select')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back</span>
            </button>
          </div>

          {/* Leader Name and Stats Header Row */}
          <div className="flex items-center justify-between mb-6">
            {/* Left Side - Leader Name and Years */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{leader.name}</h2>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="bg-red-600 px-2 py-1 rounded-full text-white text-xs">
                  {leader.country}
                </span>
                <span className="text-xs">{leader.years}</span>
              </div>
            </div>
            
            {/* Right Side - Stats and Refresh Button */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium text-sm">Stats</span>
                </div>
                <div className="text-gray-300 text-xs space-y-1">
                  <p>Slaps: <span className="text-red-400 font-bold">{slapCount}</span></p>
                  <p>Level: <span className="text-green-400 font-bold text-xs">
                    {getLevelDescription(slapCount)}
                  </span></p>
                </div>
              </div>
              <button
                onClick={() => setSlapCount(0)}
                className="p-2 text-gray-400 hover:text-white transition-colors touch-manipulation bg-gray-800 rounded-lg border border-gray-700"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slapping Area - Top on Mobile */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 relative overflow-hidden mb-6">
            <div className="flex flex-col items-center justify-center relative min-h-[400px]">
              {/* Impact Effect */}
              {showImpact && (
                <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse z-10"></div>
              )}
              
              {/* Leader Image */}
              <div className="relative mb-6">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className={`w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-6 border-gray-600 transition-all duration-300 ${
                    isSlapping ? 'animate-pulse scale-95 -rotate-2' : ''
                  }`}
                />
                {showImpact && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-30 animate-ping"></div>
                )}
                
                {/* Slapping Hand Animation */}
                {handAnimation.show && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-20 animate-pulse"
                    style={{
                      animation: 'handSlap 3s ease-out forwards'
                    }}
                  >
                    <img
                      src="/redhand3.png"
                      alt="Slapping hand"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                      style={{
                        transform: `rotate(${handAnimation.angle}deg)`,
                        filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))'
                      }}
                    />
                  </div>
                )}
                
                {/* Atrocity Toast */}
                <AtrocityPopup
                  atrocity={currentAtrocity}
                  isVisible={showAtrocityPopup}
                  onClose={handleCloseAtrocityPopup}
                />
              </div>
              
              {/* Hand Animation */}
              <div className="relative mb-6">
                <div className={`text-5xl sm:text-6xl transition-all duration-300 ${
                  isSlapping ? 'animate-bounce scale-125 -rotate-45' : ''
                }`}>
                  👋
                </div>
                {isSlapping && (
                  <div className="absolute inset-0 text-5xl sm:text-6xl animate-ping opacity-50">
                    💥
                  </div>
                )}
              </div>
              
              {/* Slap Button */}
              <button
                onClick={handleSlap}
                disabled={isSlapping}
                className={`group relative bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-xl sm:text-2xl font-bold shadow-2xl transform transition-all duration-300 touch-manipulation ${
                  isSlapping ? 'scale-95 opacity-75' : 'hover:scale-105 hover:shadow-3xl active:scale-95'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" />
                  <span>{isSlapping ? 'SLAPPING...' : 'SLAP!'}</span>
                </div>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </button>
              
              {/* Motivational Text */}
              <div className="mt-4 text-center px-4">
                <p className="text-gray-400 text-sm sm:text-base">
                  {getMotivationalMessage(slapCount)}
                </p>
              </div>
            </div>
          </div>

          {/* Description - Bottom on Mobile */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-red-400 mb-4">About this Leader</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {leader.description}
            </p>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          {/* Desktop Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/select')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Selection</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-2 rounded-lg">
                <span className="text-white font-bold">Slaps: {slapCount}</span>
              </div>
              <button
                onClick={() => setSlapCount(0)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="grid grid-cols-10 gap-8">
            {/* Left Section - Leader Info */}
            <div className="col-span-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="h-full flex flex-col min-h-[600px]">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-white mb-2">{leader.name}</h2>
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-white text-sm">
                      {leader.country}
                    </span>
                    <span className="text-sm">{leader.years}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">About this Leader</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {leader.description}
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">Slap Statistics</span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    <p>Total slaps delivered: <span className="text-red-400 font-bold">{slapCount}</span></p>
                    <p>Satisfaction level: <span className="text-green-400 font-bold">
                      {getLevelDescription(slapCount)}
                    </span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Slap Area */}
            <div className="col-span-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              <div className="h-full flex flex-col items-center justify-center relative min-h-[600px]">
                {/* Impact Effect */}
                {showImpact && (
                  <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse z-10"></div>
                )}
                
                {/* Leader Image */}
                <div className="relative mb-8">
                  <img
                    src={leader.imageUrl}
                    alt={leader.name}
                    className={`w-96 h-96 object-cover rounded-full border-8 border-gray-600 transition-all duration-300 ${
                      isSlapping ? 'animate-pulse scale-95 -rotate-2' : ''
                    }`}
                  />
                  {showImpact && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-30 animate-ping"></div>
                  )}
                  
                  {/* Slapping Hand Animation */}
                  {handAnimation.show && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center z-20 animate-pulse"
                      style={{
                        animation: 'handSlap 3s ease-out forwards'
                      }}
                    >
                      <img
                        src="/redhand3.png"
                        alt="Slapping hand"
                        className="w-48 h-48 object-contain"
                        style={{
                          transform: `rotate(${handAnimation.angle}deg)`,
                          filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.8))'
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Atrocity Toast */}
                  <AtrocityPopup
                    atrocity={currentAtrocity}
                    isVisible={showAtrocityPopup}
                    onClose={handleCloseAtrocityPopup}
                  />
                </div>
                
                {/* Hand Animation */}
                <div className="relative mb-8">
                  <div className={`text-8xl transition-all duration-300 ${
                    isSlapping ? 'animate-bounce scale-125 -rotate-45' : ''
                  }`}>
                    👋
                  </div>
                  {isSlapping && (
                    <div className="absolute inset-0 text-8xl animate-ping opacity-50">
                      💥
                    </div>
                  )}
                </div>
                
                {/* Slap Button */}
                <button
                  onClick={handleSlap}
                  disabled={isSlapping}
                  className={`group relative bg-gradient-to-r from-red-600 to-yellow-600 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl transform transition-all duration-300 ${
                    isSlapping ? 'scale-95 opacity-75' : 'hover:scale-105 hover:shadow-3xl'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Zap className="w-8 h-8 group-hover:animate-bounce" />
                    <span>{isSlapping ? 'SLAPPING...' : 'SLAP!'}</span>
                  </div>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </button>
                
                {/* Motivational Text */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-lg">
                    {getMotivationalMessage(slapCount)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />


    </div>
  );
};

export default SlapPage;