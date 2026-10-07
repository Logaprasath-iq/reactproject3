import React, { useState } from 'react';
import { topCreators as initialCreators } from '../data/mockData';

export default function TopCreators({ darkMode }) {
  const [creators, setCreators] = useState(initialCreators);

  const toggleFollow = (id) => {
    setCreators((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isFollowing: !c.isFollowing } : c
      )
    );
  };

  return (
    <div 
      className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border flex flex-col justify-between shadow-card h-full ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Header */}
      <h4 className={`text-base font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Top Creators
      </h4>

      {/* 2-column Grid of 8 Creators matching Figma screenshot media_1791354722269.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
              darkMode 
                ? 'bg-[#241F43]/40 border-white/5 hover:border-[#6F4FF2]/30' 
                : 'bg-gray-50 border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-yellow-400 p-0.5 shrink-0 shadow-sm">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="truncate">
                <h5 className={`text-xs font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {creator.name}
                </h5>
                <p className={`text-[11px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  {creator.items}
                </p>
              </div>
            </div>

            <button
              onClick={() => toggleFollow(creator.id)}
              className={`px-3.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
                creator.isFollowing
                  ? darkMode 
                    ? 'bg-[#2D2755] text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                  : 'bg-transparent text-white border border-white/20 hover:border-[#6F4FF2] hover:bg-[#6F4FF2]'
              }`}
            >
              {creator.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
