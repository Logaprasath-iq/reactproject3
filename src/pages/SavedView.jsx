import React from 'react';
import NFTCard from '../components/NFTCard';
import { trendingNFTs } from '../data/mockData';

export default function SavedView({ darkMode, onPlaceBid }) {
  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Saved Items
          </h2>
          <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
            Welcome Saved Page
          </p>
        </div>

        {/* Breadcrumb */}
        <div className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
          <span>Home</span> &gt; <span className={darkMode ? 'text-white' : 'text-gray-800'}>Saved</span>
        </div>
      </div>

      {/* Grid of 8 Cards matching Figma screenshot media_1791347439536.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {trendingNFTs.map((nft) => (
          <NFTCard 
            key={nft.id} 
            nft={nft} 
            darkMode={darkMode} 
            onPlaceBid={onPlaceBid} 
          />
        ))}
      </div>
    </div>
  );
}
