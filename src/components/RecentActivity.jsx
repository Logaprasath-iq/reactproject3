import React from 'react';
import { recentActivities } from '../data/mockData';

export default function RecentActivity({ darkMode }) {
  return (
    <div 
      className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border flex flex-col justify-between shadow-card h-full ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h4>
        <button 
          onClick={() => alert('View all activities')}
          className="text-xs text-[#6F4FF2] hover:underline font-medium"
        >
          See more
        </button>
      </div>

      {/* Activity List matching media_1791354722269.png */}
      <div className="flex flex-col divide-y divide-gray-500/10">
        {recentActivities.map((act) => (
          <div key={act.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-yellow-400 p-0.5 shrink-0 shadow-sm">
                <img 
                  src={act.avatar} 
                  alt={act.user} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h5 className={`text-xs font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {act.user}
                </h5>
                <p className={`text-[11px] truncate ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  {act.action}
                </p>
              </div>
            </div>

            <span className={`text-[10px] shrink-0 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
              {act.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
