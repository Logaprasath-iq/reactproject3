import React, { useState } from 'react';
import NFTCard from '../components/NFTCard';
import { filterCategories, trendingNFTs } from '../data/mockData';

export default function CollectionView({ darkMode, onPlaceBid }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = trendingNFTs.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Collections
          </h2>
          <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
            Welcome Collections Page
          </p>
        </div>

        {/* Breadcrumb */}
        <div className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
          <span>Home</span> &gt; <span className={darkMode ? 'text-white' : 'text-gray-800'}>Collections</span>
        </div>
      </div>

      {/* Filter Tabs matching Figma screenshot media_1791347439536.png */}
      <div className="flex items-center gap-1.5">
        <div className={`flex items-center gap-1.5 p-1 rounded-full border ${
          darkMode 
            ? 'bg-[#1D1932] border-[#2A2447]' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#6F4FF2] text-white shadow-sm'
                    : darkMode
                      ? 'text-[#6C7AA0] hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of 8 Cards matching Figma screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredItems.map((nft) => (
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
