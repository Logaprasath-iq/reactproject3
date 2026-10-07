import React, { useState } from 'react';
import { X } from 'lucide-react';
import { activeBidsList as allBids } from '../data/mockData';

export default function ActiveBidsTable({ 
  darkMode, 
  showPlaceBidButton = false, 
  onPlaceBid,
  limit
}) {
  const [bids, setBids] = useState(() => limit ? allBids.slice(0, limit) : allBids);
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelectAll = () => {
    if (selectedIds.length === bids.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(bids.map((b) => b.id));
    }
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeBid = (id) => {
    setBids((prev) => prev.filter((b) => b.id !== id));
    setSelectedIds((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div 
      className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border shadow-card mb-8 ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Active Bids
        </h4>

        {/* Place a Bid button (shown on Bids page matching media_1791354752993.png) */}
        {showPlaceBidButton && (
          <button
            onClick={() => onPlaceBid && onPlaceBid({ title: 'Active Bid', image: '/images/items/15.jpg', currentBid: '0.0025 ETH', auctionTime: '2 Hours 1 min 30s' })}
            className="px-5 py-2 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white font-medium text-xs sm:text-sm shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-105 active:scale-95"
          >
            Place a Bid
          </button>
        )}
      </div>

      {/* Table Container with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className={`text-xs font-semibold ${
              darkMode ? 'text-[#8A90A6]' : 'text-gray-500'
            }`}>
              <th className="py-3 px-3 w-10">
                <input
                  type="checkbox"
                  checked={bids.length > 0 && selectedIds.length === bids.length}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-500 text-[#6F4FF2] focus:ring-[#6F4FF2] cursor-pointer"
                />
              </th>
              <th className="py-3 px-4">Item List</th>
              <th className="py-3 px-4">Open Price</th>
              <th className="py-3 px-4">Your Offer</th>
              <th className="py-3 px-4">Recent Offer</th>
              <th className="py-3 px-4">Time Left</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {bids.map((bid) => {
              const isSelected = selectedIds.includes(bid.id);
              return (
                <tr
                  key={bid.id}
                  className={`transition-colors rounded-xl ${
                    darkMode 
                      ? isSelected ? 'bg-[#27214B]' : 'bg-[#15122B]/70 hover:bg-[#1A1636]' 
                      : isSelected ? 'bg-purple-50' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-3.5 px-3 rounded-l-xl">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectOne(bid.id)}
                      className="rounded border-gray-500 text-[#6F4FF2] focus:ring-[#6F4FF2] cursor-pointer"
                    />
                  </td>

                  {/* Item List */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={bid.image}
                        alt={bid.title}
                        className="w-11 h-11 rounded-xl object-cover ring-1 ring-[#6F4FF2]/20 shrink-0"
                      />
                      <div>
                        <h5 className={`font-semibold text-xs ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {bid.title}
                        </h5>
                        <p className={`text-[11px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                          {bid.creator}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Open Price */}
                  <td className={`py-3.5 px-4 font-medium text-xs ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {bid.openPrice}
                  </td>

                  {/* Your Offer */}
                  <td className={`py-3.5 px-4 font-medium text-xs ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {bid.yourOffer}
                  </td>

                  {/* Recent Offer with Avatar */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={bid.recentAvatar}
                        alt="Offer User"
                        className="w-6 h-6 rounded-full object-cover shrink-0"
                      />
                      <span className={`font-medium text-xs ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        {bid.recentOffer}
                      </span>
                    </div>
                  </td>

                  {/* Time Left */}
                  <td className={`py-3.5 px-4 text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                    {bid.timeLeft}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-center rounded-r-xl">
                    <button
                      onClick={() => removeBid(bid.id)}
                      title="Cancel Bid"
                      className={`p-1.5 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-[#6C7AA0] hover:text-[#FF5656]' 
                          : 'text-gray-400 hover:text-[#FF5656]'
                      }`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {bids.length === 0 && (
          <div className="py-8 text-center text-xs text-[#6C7AA0]">
            No active bids found.
          </div>
        )}
      </div>
    </div>
  );
}
