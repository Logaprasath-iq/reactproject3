import React, { useState } from 'react';
import { Check, Lock } from 'lucide-react';
import { 
  profileFollowingCreators as initialFollowing, 
  myBoughtNFTs, 
  myCollectionsNFTs 
} from '../data/mockData';

export default function ProfileView({ darkMode }) {
  const [followingList, setFollowingList] = useState(initialFollowing);

  const toggleUnfollow = (id) => {
    setFollowingList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn pb-8">
      {/* 1. Header & Breadcrumb matching media_1791357795536.png */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
            Profile
          </h2>
          <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-[#8A90A6]'}`}>
            Welcome Profile Page
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="text-xs">
          <span className={darkMode ? 'text-[#6C7AA0]' : 'text-[#8A90A6]'}>Home</span>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-[#6F4FF2] font-medium">Profile</span>
        </div>
      </div>

      {/* 2. Top Section: User Card (Left) & Following (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        {/* Left: User Status Card */}
        <div 
          className={`lg:col-span-5 rounded-2xl p-6 sm:p-7 shadow-sm transition-all ${
            darkMode 
              ? 'bg-[#1D1932] border border-[#2A2447]' 
              : 'bg-white shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* Avatar with yellow ring */}
          <div className="w-12 h-12 rounded-full bg-yellow-400 p-0.5 mb-4 shadow-sm">
            <img 
              src="/images/avatar/1.jpg" 
              alt="John Smith" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
            Welcome, John Smith
          </h3>

          <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
            Looks like you are not verified yet. Verify yourself to use the full potential of Xtrader.
          </p>

          {/* Verification Items matching media_1791357795536.png */}
          <div className="flex flex-col gap-3.5">
            {/* Verify Account */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#00D289] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <button 
                onClick={() => alert('Account verification initiated')}
                className="text-xs font-medium text-[#6F4FF2] hover:underline"
              >
                Verify account
              </button>
            </div>

            {/* Two-factor Authentication */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#6F4FF2] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Lock className="w-3 h-3 stroke-[2.5]" />
              </span>
              <button 
                onClick={() => alert('2FA setup')}
                className="text-xs font-medium text-[#6F4FF2] hover:underline"
              >
                Two-factor Authentication ( 2FA )
              </button>
            </div>
          </div>
        </div>

        {/* Right: Following Section (2x2 Grid of Cards) */}
        <div className="lg:col-span-7">
          <h4 className={`text-sm sm:text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
            Following
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {followingList.map((creator) => (
              <div 
                key={creator.id}
                className={`rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm transition-all ${
                  darkMode 
                    ? 'bg-[#1D1932] border border-[#2A2447]' 
                    : 'bg-white shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 p-0.5 shrink-0 shadow-sm">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="truncate">
                    <h5 className={`text-xs font-bold truncate ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
                      {creator.name}
                    </h5>
                    <p className={`text-[11px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
                      {creator.items}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => toggleUnfollow(creator.id)}
                  className="px-4 py-1.5 rounded-xl bg-[#E03A3A] hover:bg-[#C53030] text-white text-xs font-semibold shrink-0 shadow-sm transition-transform active:scale-95"
                >
                  Unfollow
                </button>
              </div>
            ))}
          </div>

          {followingList.length === 0 && (
            <p className="text-xs text-[#6C7AA0] py-6 text-center">No following creators</p>
          )}
        </div>
      </div>

      {/* 3. Middle Section: My bought (4 Cards in a row) */}
      <div>
        <h3 className={`text-xs sm:text-sm font-semibold mb-3 ${darkMode ? 'text-[#6C7AA0]' : 'text-[#8A90A6]'}`}>
          My bought
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {myBoughtNFTs.map((nft) => (
            <div 
              key={nft.id}
              className={`rounded-2xl p-3 sm:p-3.5 shadow-sm transition-transform hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-[#1D1932] border border-[#2A2447]' 
                  : 'bg-white shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
              }`}
            >
              {/* Artwork Image with bottom-right avatar */}
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={nft.image} 
                  alt={nft.title} 
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Yellow circular avatar badge in bottom-right matching screenshot */}
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-yellow-400 p-0.5 shadow-md">
                  <img 
                    src={nft.avatar} 
                    alt="Creator" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className={`text-xs sm:text-sm font-bold pt-3 pb-1 ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
                {nft.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Section: My Collections (4 Cards in a row) */}
      <div>
        <h3 className={`text-xs sm:text-sm font-semibold mb-3 ${darkMode ? 'text-[#6C7AA0]' : 'text-[#8A90A6]'}`}>
          My Collections
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {myCollectionsNFTs.map((nft) => (
            <div 
              key={nft.id}
              className={`rounded-2xl p-3 sm:p-3.5 shadow-sm transition-transform hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-[#1D1932] border border-[#2A2447]' 
                  : 'bg-white shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
              }`}
            >
              {/* Artwork Image with bottom-right avatar */}
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={nft.image} 
                  alt={nft.title} 
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Yellow circular avatar badge in bottom-right matching screenshot */}
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-yellow-400 p-0.5 shadow-md">
                  <img 
                    src={nft.avatar} 
                    alt="Creator" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className={`text-xs sm:text-sm font-bold pt-3 pb-1 ${darkMode ? 'text-white' : 'text-[#1A202C]'}`}>
                {nft.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
