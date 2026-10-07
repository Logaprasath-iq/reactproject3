import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { recentBidsData as initialBids } from '../data/mockData';

export default function RecentBidTable({ darkMode }) {
  const [bids, setBids] = useState(initialBids);
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
      className={`rounded-2xl p-6 transition-all duration-200 border shadow-card mb-8 ${
        darkMode 
          ? 'bg-[#1D1932] border-[#2A2447]' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Bid
        </h4>
        {selectedIds.length > 0 && (
          <span className="text-xs text-[#6F4FF2] font-medium">
            {selectedIds.length} item(s) selected
          </span>
        )}
      </div>

      {/* Table responsive scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b text-xs font-medium ${
              darkMode ? 'border-white/10 text-[#6C7AA0]' : 'border-gray-200 text-gray-500'
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
          <tbody className={`divide-y text-xs ${darkMode ? 'divide-white/5' : 'divide-gray-100'}`}>
            {bids.map((bid) => {
              const isSelected = selectedIds.includes(bid.id);
              return (
                <tr
                  key={bid.id}
                  className={`transition-colors ${
                    isSelected 
                      ? darkMode ? 'bg-[#241F43]/70' : 'bg-purple-50/50' 
                      : darkMode ? 'hover:bg-[#241F43]/40' : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-4 px-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectOne(bid.id)}
                      className="rounded border-gray-500 text-[#6F4FF2] focus:ring-[#6F4FF2] cursor-pointer"
                    />
                  </td>

                  {/* Item List */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={bid.image}
                        alt={bid.title}
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-[#6F4FF2]/20"
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
                  <td className={`py-4 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {bid.openPrice}
                  </td>

                  {/* Your Offer */}
                  <td className={`py-4 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {bid.yourOffer}
                  </td>

                  {/* Recent Offer */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={bid.recentAvatar}
                        alt="Offer user"
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-[#6F4FF2]"
                      />
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {bid.recentOffer}
                      </span>
                    </div>
                  </td>

                  {/* Time Left */}
                  <td className={`py-4 px-4 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                    {bid.timeLeft}
                  </td>

                  {/* Action */}
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => removeBid(bid.id)}
                      title="Cancel Bid"
                      className={`p-1.5 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-[#6C7AA0] hover:text-[#FF5656] hover:bg-[#FF5656]/10' 
                          : 'text-gray-400 hover:text-[#FF5656] hover:bg-red-50'
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
            No recent bids available.
          </div>
        )}
      </div>
    </div>
  );
}
