import React, { useState } from 'react';
import { filterCategories, trendingNFTs } from '../data/mockData';
import NFTCard from './NFTCard';

export default function TrendingBids({ darkMode, onPlaceBid, searchQuery = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNFTs = trendingNFTs.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="trending-bids" className="mb-8 sm:mb-10">
      {/* Header with Title and Category Filters matching media_1791354703361.png */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Trending Bids
        </h3>

        {/* Filter Pills */}
        <div className="flex items-center gap-1">
          {filterCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#6F4FF2] text-white shadow-sm'
                    : darkMode
                      ? 'text-[#6C7AA0] hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of NFT Cards (4 columns x 2 rows = 8 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredNFTs.map((nft) => (
          <NFTCard 
            key={nft.id} 
            nft={nft} 
            darkMode={darkMode} 
            onPlaceBid={onPlaceBid} 
          />
        ))}
      </div>
    </section>
  );
}
