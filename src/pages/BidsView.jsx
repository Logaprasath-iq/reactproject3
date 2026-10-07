import React from 'react';
import { Wallet, Gavel, Users, Slash } from 'lucide-react';
import { bidsPageStatCards } from '../data/mockData';
import ActiveBidsTable from '../components/ActiveBidsTable';

export default function BidsView({ darkMode, onPlaceBid }) {
  const getIcon = (type) => {
    switch (type) {
      case 'wallet':
        return <Wallet className="w-5 h-5 text-white" />;
      case 'gavel':
        return <Gavel className="w-5 h-5 text-white" />;
      case 'users':
        return <Users className="w-5 h-5 text-white" />;
      case 'slash':
        return <Slash className="w-5 h-5 text-white" />;
      default:
        return <Wallet className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Page Header & Breadcrumb matching media_1791354752993.png */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Bids
          </h2>
          <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
            Welcome Bids Page
          </p>
        </div>

        {/* Breadcrumb */}
        <div className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
          <span>Home</span> &gt; <span className={darkMode ? 'text-white' : 'text-gray-800'}>Bids</span>
        </div>
      </div>

      {/* 4 Stat Cards in a row matching media_1791354752993.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {bidsPageStatCards.map((stat) => (
          <div
            key={stat.id}
            className={`rounded-2xl p-5 border flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-card ${
              darkMode 
                ? 'bg-[#1D1932] border-[#2A2447]' 
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center shrink-0 shadow-md`}>
              {getIcon(stat.iconType)}
            </div>
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </h3>
              <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Bids Table (7 rows) with Place a Bid button */}
      <ActiveBidsTable 
        darkMode={darkMode} 
        showPlaceBidButton={true} 
        onPlaceBid={onPlaceBid} 
      />
    </div>
  );
}
