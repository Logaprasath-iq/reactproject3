import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileBottomNav from './components/MobileBottomNav';
import Header from './components/Header';
import DashboardView from './pages/DashboardView';
import BidsView from './pages/BidsView';
import SavedView from './pages/SavedView';
import CollectionView from './pages/CollectionView';
import ProfileView from './pages/ProfileView';
import SettingView from './pages/SettingView';
import BidModal from './components/BidModal';

export default function App() {
  // Theme state: defaults to dark theme, supports light/white theme
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('enftx_theme');
    return saved !== null ? saved === 'dark' : false; // Default to white theme if user is reviewing Profile - white theme, or let user toggle
  });

  // Current active navigation tab (defaults to 'profile' if user asked for profile, or 'dashboard')
  const [activeTab, setActiveTab] = useState('profile');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Bid modal state
  const [bidModalOpen, setBidModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);

  // Sync theme changes with documentElement and localStorage
  useEffect(() => {
    localStorage.setItem('enftx_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleOpenBidModal = (nft) => {
    setSelectedNFT(nft);
    setBidModalOpen(true);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-[#131129] text-white' : 'bg-[#EEEEEE] text-gray-900'
      }`}
    >
      {/* 1. Desktop Left Navigation Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        darkMode={darkMode}
      />

      {/* 2. Main Content Container */}
      <div className="lg:pl-20 min-h-screen flex flex-col transition-all">
        <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 pb-24 lg:pb-8 flex-1">
          {/* Header */}
          <Header 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveTab={setActiveTab}
          />

          {/* Dynamic Page Views */}
          {activeTab === 'dashboard' && (
            <DashboardView 
              darkMode={darkMode} 
              onPlaceBid={handleOpenBidModal} 
              searchQuery={searchQuery} 
            />
          )}

          {activeTab === 'bids' && (
            <BidsView 
              darkMode={darkMode} 
              onPlaceBid={handleOpenBidModal} 
            />
          )}

          {activeTab === 'saved' && (
            <SavedView 
              darkMode={darkMode} 
              onPlaceBid={handleOpenBidModal} 
            />
          )}

          {activeTab === 'collection' && (
            <CollectionView 
              darkMode={darkMode} 
              onPlaceBid={handleOpenBidModal} 
            />
          )}

          {activeTab === 'profile' && (
            <ProfileView 
              darkMode={darkMode} 
            />
          )}

          {activeTab === 'setting' && (
            <SettingView 
              darkMode={darkMode} 
            />
          )}
        </main>
      </div>

      {/* 3. Mobile Bottom Navigation Bar */}
      <MobileBottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
      />

      {/* 4. Interactive Bid Modal */}
      <BidModal 
        isOpen={bidModalOpen}
        onClose={() => setBidModalOpen(false)}
        nft={selectedNFT}
        darkMode={darkMode}
      />
    </div>
  );
}
