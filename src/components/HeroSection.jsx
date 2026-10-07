import React from 'react';
import { heroPromo, topBidNFT } from '../data/mockData';

export default function HeroSection({ darkMode, onPlaceBid }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
      {/* Promo Banner Card */}
      <div 
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-9 flex flex-col justify-center min-h-[240px] sm:min-h-[260px] shadow-lg"
        style={{
          backgroundImage: `url(${heroPromo.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Violet Gradient Overlay matching Figma */}
        <div className="absolute inset-0 bg-[#6F4FF2]/50 backdrop-brightness-90 z-0" />

        <div className="relative z-10 max-w-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2 whitespace-pre-line">
            {heroPromo.title}
          </h2>
          <p className="text-xs sm:text-sm text-purple-100 font-normal mb-5 max-w-md opacity-90 leading-relaxed">
            {heroPromo.subtitle}
          </p>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                const trendingEl = document.getElementById('trending-bids');
                if (trendingEl) trendingEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 sm:px-6 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-medium text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              {heroPromo.exploreText}
            </button>
            <button 
              onClick={() => alert('Create your NFT modal')}
              className="px-5 sm:px-6 py-2.5 rounded-xl bg-[#FF5656] hover:bg-[#E04848] text-white font-medium text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#FF5656]/30"
            >
              {heroPromo.createText}
            </button>
          </div>
        </div>
      </div>

      {/* Featured NFT Card ("Birghten LQ") */}
      <div 
        className={`rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-200 border flex flex-col justify-between shadow-card ${
          darkMode 
            ? 'bg-[#1D1932] border-[#2A2447]' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {/* Artwork Image */}
          <div className="w-full sm:w-44 h-48 sm:h-44 rounded-xl overflow-hidden shrink-0 relative group">
            <img 
              src={topBidNFT.image} 
              alt={topBidNFT.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="flex-1 w-full flex flex-col justify-between">
            {/* Creator Info */}
            <div className="flex items-center gap-2 mb-2">
              <img 
                src={topBidNFT.creator.avatar} 
                alt={topBidNFT.creator.name} 
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover ring-1 ring-[#6F4FF2]"
              />
              <span className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {topBidNFT.creator.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D289] ml-0.5" />
            </div>

            {/* Title */}
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {topBidNFT.title}
            </h3>

            {/* Auction Time & Current Bid */}
            <div className="flex items-center justify-between gap-4 py-1.5 sm:py-2 mb-3">
              <div>
                <span className={`text-[11px] sm:text-xs block mb-0.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  Auction time
                </span>
                <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {topBidNFT.auctionTime}
                </span>
              </div>
              <div className="text-right">
                <span className={`text-[11px] sm:text-xs block mb-0.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  Current Bid : <strong className="text-[#6F4FF2]">{topBidNFT.currentBid}</strong>
                </span>
                <span className={`text-[11px] sm:text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
                  {topBidNFT.highestBid}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button 
                onClick={() => onPlaceBid(topBidNFT)}
                className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white font-medium text-xs sm:text-sm text-center shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-102 active:scale-98"
              >
                Place a Bid
              </button>
              <button 
                onClick={() => alert(`Details for ${topBidNFT.title}`)}
                className="py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl bg-[#FF5656] hover:bg-[#E04848] text-white font-medium text-xs sm:text-sm transition-all hover:scale-102 active:scale-98 shadow-md shadow-[#FF5656]/20"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
