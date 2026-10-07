import React from 'react';

export default function StatisticsChart({ darkMode }) {
  const size = 190;
  const outerRadius = 75;
  const innerRadius = 60;
  const strokeWidth = 14;

  const circumference = 2 * Math.PI * outerRadius;
  const soldPercent = 75;
  const strokeDasharray = `${(soldPercent / 100) * circumference} ${circumference}`;

  return (
    <div 
      className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border flex flex-col justify-between shadow-card h-full ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Statistics
      </h4>

      {/* Double Ring Donut Chart matching media_1791354722269.png */}
      <div className="relative flex items-center justify-center my-3">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Inner concentric ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={innerRadius}
            fill="transparent"
            stroke={darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}
            strokeWidth="2"
          />

          {/* Outer base track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={outerRadius}
            fill="transparent"
            stroke={darkMode ? '#363058' : '#E2E8F0'}
            strokeWidth={strokeWidth}
          />

          {/* Outer Purple Segment (Artwork Sold) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={outerRadius}
            fill="transparent"
            stroke="#6F4FF2"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Legend matching Figma screenshot media_1791354722269.png */}
      <div className="flex items-center justify-center gap-6 pt-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6F4FF2]" />
          <span className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
            Artwork Sold
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full border-2 ${darkMode ? 'border-gray-500' : 'border-gray-400'}`} />
          <span className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
            Artwork Cancel
          </span>
        </div>
      </div>
    </div>
  );
}
