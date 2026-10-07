import React from 'react';
import { Wallet, Gavel, Users } from 'lucide-react';
import { homeStatCards } from '../data/mockData';

export default function StatsSection({ darkMode }) {
  const getIcon = (type) => {
    switch (type) {
      case 'artworks':
        return <Wallet className="w-5 h-5 text-white" />;
      case 'auction':
        return <Gavel className="w-5 h-5 text-white" />;
      case 'creators':
        return <Users className="w-5 h-5 text-white" />;
      default:
        return <Wallet className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h4 className={`text-base font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Trending Bids
      </h4>

      {/* 3 Vertical Stat Cards matching Figma screenshot media_1791354722269.png */}
      <div className="flex flex-col gap-3.5 flex-1 justify-between">
        {homeStatCards.map((stat) => (
          <div
            key={stat.id}
            className={`rounded-2xl p-4 border flex items-center justify-between shadow-card transition-transform hover:scale-[1.01] ${
              darkMode 
                ? 'bg-[#1D1932] border-[#2A2447]' 
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            {/* Left: Round colored icon & count */}
            <div className="flex items-center gap-3.5">
              <div className={`w-11 h-11 rounded-full ${stat.bgColor} flex items-center justify-center shrink-0 shadow-md`}>
                {getIcon(stat.type)}
              </div>
              <div>
                <h3 className={`text-xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </h3>
                <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  {stat.title}
                </p>
              </div>
            </div>

            {/* Right: Percentage Badge matching screenshot */}
            <div className="text-right">
              <span className={`text-xs font-semibold ${
                stat.isPositive ? 'text-[#00D289]' : 'text-[#FF5656]'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
