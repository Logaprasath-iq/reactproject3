import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function BidModal({ isOpen, onClose, nft, darkMode }) {
  const [bidAmount, setBidAmount] = useState('0.10');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !nft) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-md rounded-2xl p-6 shadow-2xl border transition-all ${
          darkMode 
            ? 'bg-[#1D1932] border-[#2A2447] text-white' 
            : 'bg-white border-gray-200 text-gray-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="text-lg font-bold">Place a Bid</h3>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center justify-center text-center animate-scaleUp">
            <CheckCircle2 className="w-16 h-16 text-[#00D289] mb-3 animate-bounce" />
            <h4 className="text-lg font-bold mb-1">Bid Placed Successfully!</h4>
            <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
              You placed a bid of <strong className="text-[#6F4FF2]">{bidAmount} ETH</strong> for {nft.title}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="mt-4 flex flex-col gap-4">
            {/* NFT Preview */}
            <div className={`flex items-center gap-4 p-3 rounded-xl border ${
              darkMode ? 'bg-[#241F43]/40 border-white/5' : 'bg-gray-50 border-gray-200'
            }`}>
              <img 
                src={nft.image} 
                alt={nft.title} 
                className="w-16 h-16 rounded-xl object-cover ring-1 ring-[#6F4FF2]/20"
              />
              <div className="flex-1">
                <h4 className="font-bold text-sm">{nft.title}</h4>
                <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  Current Bid: <span className="text-[#6F4FF2] font-semibold">{nft.currentBid || '0.05 ETH'}</span>
                </p>
                <p className={`text-[10px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
                  Time Left: {nft.auctionTime || '3h 1m 50s'}
                </p>
              </div>
            </div>

            {/* Bid Input */}
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Bid (ETH)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min="0.05"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-sm font-semibold outline-none border transition-all ${
                    darkMode
                      ? 'bg-[#131129] border-[#2A2447] text-white focus:border-[#6F4FF2]'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-[#6F4FF2]'
                  }`}
                />
                <span className="absolute right-4 top-2.5 text-xs font-bold text-[#6F4FF2]">
                  ETH
                </span>
              </div>
              <p className={`text-[11px] mt-1 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
                Must be at least 0.05 ETH
              </p>
            </div>

            {/* Fee summary */}
            <div className={`p-3 rounded-xl text-xs flex justify-between ${
              darkMode ? 'bg-[#131129] text-[#6C7AA0]' : 'bg-gray-50 text-gray-500'
            }`}>
              <span>Network Fee</span>
              <span className="font-medium">0.001 ETH (~$3.20)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                  darkMode 
                    ? 'border-white/10 hover:bg-white/5 text-gray-300' 
                    : 'border-gray-200 hover:bg-gray-100 text-gray-700'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white text-xs font-medium shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-102 active:scale-98"
              >
                Place Bid
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
