import React from 'react';

export default function EthPriceChart({ darkMode }) {
  // Y-axis tick values matching media_1791354722269.png
  const yTicks = [350, 300, 250, 200, 150, 100, 50, 0];

  // Data points matching the exact vertex path in Figma screenshot
  const dataPoints = [
    { x: 45, yVal: 0 },
    { x: 100, yVal: 110 },
    { x: 155, yVal: 95 },
    { x: 210, yVal: 165 },
    { x: 265, yVal: 150 },
    { x: 320, yVal: 230 },
    { x: 375, yVal: 135 },
    { x: 420, yVal: 115 },
    { x: 455, yVal: 145 },
  ];

  const svgWidth = 470;
  const svgHeight = 220;
  const maxVal = 350;
  const plotHeight = 180;
  const plotTop = 15;
  const plotBottom = plotTop + plotHeight;

  // Map values to SVG coordinates
  const coords = dataPoints.map((pt) => {
    const y = plotBottom - (pt.yVal / maxVal) * plotHeight;
    return { x: pt.x, y };
  });

  // Smooth line path
  const linePath = coords.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    const prev = coords[idx - 1];
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }, '');

  return (
    <div 
      className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border flex flex-col justify-between shadow-card h-full ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Title */}
      <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        ETH Price
      </h4>

      {/* Line Chart SVG matching Figma screenshot media_1791354722269.png */}
      <div className="relative w-full h-56 my-auto">
        <svg 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          className="w-full h-full overflow-visible"
        >
          {/* Y-axis tick values on left */}
          {yTicks.map((tick) => {
            const y = plotBottom - (tick / maxVal) * plotHeight;
            return (
              <text
                key={tick}
                x="28"
                y={y + 3}
                textAnchor="end"
                className={`text-[10px] select-none font-medium ${
                  darkMode ? 'fill-[#6C7AA0]' : 'fill-gray-400'
                }`}
              >
                {tick}
              </text>
            );
          })}

          {/* Curved violet line */}
          <path
            d={linePath}
            fill="none"
            stroke="#6F4FF2"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Dots on data points */}
          {coords.map((c, i) => (
            <circle
              key={i}
              cx={c.x}
              cy={c.y}
              r={4}
              fill="#6F4FF2"
              stroke={darkMode ? '#1D1932' : '#FFFFFF'}
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
