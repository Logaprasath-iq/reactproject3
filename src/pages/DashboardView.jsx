import React from 'react';
import HeroSection from '../components/HeroSection';
import TrendingBids from '../components/TrendingBids';
import StatsSection from '../components/StatsSection';
import EthPriceChart from '../components/EthPriceChart';
import StatisticsChart from '../components/StatisticsChart';
import RecentActivity from '../components/RecentActivity';
import TopCreators from '../components/TopCreators';
import ActiveBidsTable from '../components/ActiveBidsTable';

export default function DashboardView({ darkMode, onPlaceBid, searchQuery }) {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* 1. Above the Fold (media_1791354703361.png): Promo Banner & Featured Bid */}
      <HeroSection darkMode={darkMode} onPlaceBid={onPlaceBid} />

      {/* 2. Trending Bids Grid (8 Liquid Wave cards) */}
      <TrendingBids 
        darkMode={darkMode} 
        onPlaceBid={onPlaceBid} 
        searchQuery={searchQuery} 
      />

      {/* 3. Middle Section 1 (media_1791354722269.png): Trending Bids Stats + ETH Price + Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Column 1: Trending Bids Stats (3 vertical cards) */}
        <div className="lg:col-span-3">
          <StatsSection darkMode={darkMode} />
        </div>

        {/* Column 2: ETH Price line chart */}
        <div className="lg:col-span-5">
          <EthPriceChart darkMode={darkMode} />
        </div>

        {/* Column 3: Statistics donut chart */}
        <div className="lg:col-span-4">
          <StatisticsChart darkMode={darkMode} />
        </div>
      </div>

      {/* 4. Middle Section 2 (media_1791354722269.png): Recent Activity + Top Creators */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-4">
          <RecentActivity darkMode={darkMode} />
        </div>

        {/* Top Creators (2x4 grid) */}
        <div className="lg:col-span-8">
          <TopCreators darkMode={darkMode} />
        </div>
      </div>

      {/* 5. Bottom Section (media_1791354736718.png): Active Bids Table (5 rows) */}
      <ActiveBidsTable 
        darkMode={darkMode} 
        onPlaceBid={onPlaceBid} 
        limit={5} 
      />
    </div>
  );
}
