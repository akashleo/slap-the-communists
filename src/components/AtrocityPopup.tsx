import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface AtrocityPopupProps {
  atrocity: string;
  isVisible: boolean;
  onClose: () => void;
}

const AtrocityPopup: React.FC<AtrocityPopupProps> = ({ atrocity, isVisible, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Auto-close after 3 seconds
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
      <div className="bg-gradient-to-br from-red-900 to-gray-900 rounded-lg p-3 max-w-xs w-36 border border-red-600 shadow-lg">        
        {/* Atrocity Text */}
        <div className="bg-gray-800 rounded p-2 border border-gray-700">
          <p className="text-gray-300 text-xs leading-relaxed">
            {atrocity}
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 bg-gray-700 rounded-full h-1 overflow-hidden">
          <div className="bg-red-500 h-full rounded-full animate-[shrink_3s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default AtrocityPopup; 