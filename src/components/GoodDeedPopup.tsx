import React, { useEffect, useState } from 'react';

interface GoodDeedPopupProps {
  goodDeed: string;
  isVisible: boolean;
  onClose: () => void;
}

const GoodDeedPopup: React.FC<GoodDeedPopupProps> = ({ goodDeed, isVisible, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={`absolute left-1/2 top-9/10 transform -translate-y-1/2 -translate-x-2 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
    }`}>
      {/* Toast Container */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg p-3 max-w-xs w-36 border border-green-500 shadow-lg">        
        {/* Good Deed Text */}
        <div className="bg-green-800 rounded p-2 border border-green-700">
          <p className="text-green-50 text-xs leading-relaxed">
            {goodDeed}
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 bg-green-700 rounded-full h-1 overflow-hidden">
          <div className="bg-green-300 h-full rounded-full animate-[shrink_3s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default GoodDeedPopup; 