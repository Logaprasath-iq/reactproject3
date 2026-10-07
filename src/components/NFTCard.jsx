import React from 'react';

export default function NFTCard({ nft, darkMode, onPlaceBid }) {
  return (
    <div 
      className={`rounded-2xl p-4 transition-all duration-300 border flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447] hover:border-[#6F4FF2]/50' 
          : 'bg-white border-gray-200 hover:border-[#6F4FF2]/40 shadow-sm'
      }`}
    >
      {/* Artwork Image Container */}
      <div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
        <img 
          src={nft.image} 
          alt={nft.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* NFT Details */}
      <div>
        <h4 className={`text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {nft.title}
        </h4>

        {/* Auction Time & Current Bid Block */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div>
            <span className={`text-[11px] block mb-0.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
              Auction time
            </span>
            <span className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {nft.auctionTime}
            </span>
          </div>

          <div className="text-right">
            <span className={`text-[11px] block mb-0.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
              Current Bid
            </span>
            <span className="text-xs font-bold text-[#6F4FF2] block">
              {nft.currentBid}
            </span>
            <span className={`text-[10px] block ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
              {nft.highestBid}
            </span>
          </div>
        </div>

        {/* Place a Bid Button */}
        <button
          onClick={() => onPlaceBid(nft)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white font-medium text-xs sm:text-sm text-center shadow-md shadow-[#6F4FF2]/25 transition-all duration-200 active:scale-98"
        >
          Place a Bid
        </button>
      </div>
    </div>
  );
}
