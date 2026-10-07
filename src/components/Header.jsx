import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Sun, Moon, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { notificationsList } from '../data/mockData';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  searchQuery, 
  setSearchQuery,
  setActiveTab
}) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 mb-4 sm:mb-6">
      {/* Left: Mobile Logo & Search input matching media_1791357795536.png */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-1 max-w-sm sm:max-w-md">
        {/* Mobile Logo Button */}
        <button
          onClick={() => setActiveTab('dashboard')}
          className="lg:hidden shrink-0 w-10 h-10 rounded-xl bg-[#6F4FF2] flex items-center justify-center shadow-md p-2 transition-transform hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <img 
            src="/images/logoi.png" 
            alt="Logo" 
            className="w-full h-full object-contain filter brightness-200"
          />
        </button>

        {/* Search input field with large rounded corners matching screenshot */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className={`w-4 h-4 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Here"
            className={`w-full pl-11 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm outline-none transition-all duration-200 ${
              darkMode 
                ? 'bg-[#1D1932] text-white placeholder-[#6C7AA0] border border-transparent focus:border-[#6F4FF2]' 
                : 'bg-white text-gray-900 placeholder-gray-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-transparent focus:border-[#6F4FF2]'
            }`}
          />
        </div>
      </div>

      {/* Right: Moon/Sun toggle, Bell, Avatar */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          className="p-1.5 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-gray-300 hover:text-white" />
          ) : (
            <Moon className="w-5 h-5 text-gray-400 hover:text-gray-700" />
          )}
        </button>

        {/* Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
            title="Notifications"
            className="p-1.5 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
          >
            <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-700'}`} />
          </button>

          {notificationOpen && (
            <div 
              className={`absolute right-0 mt-3 w-72 sm:w-84 rounded-2xl p-4 shadow-2xl z-50 transition-all border
                ${darkMode 
                  ? 'bg-[#1D1932] border-[#2A2447] text-white' 
                  : 'bg-white border-gray-200 text-gray-900'}
              `}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-500/10">
                <h4 className="font-semibold text-xs sm:text-sm">Recent Notification</h4>
                <span className="text-[11px] text-[#6F4FF2] font-medium cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="mt-3 flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                {notificationsList.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors cursor-pointer ${
                      darkMode ? 'hover:bg-[#241F43]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="mt-0.5">
                      {notif.status === 'success' && <CheckCircle2 className="w-4 h-4 text-[#00D289]" />}
                      {notif.status === 'error' && <XCircle className="w-4 h-4 text-[#FF5656]" />}
                      {notif.status === 'pending' && <Clock className="w-4 h-4 text-yellow-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium leading-tight">{notif.title}</p>
                      <span className={`text-[10px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
                        {notif.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar (avatar 9.jpg) */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
            className="flex items-center transition-transform hover:scale-105 active:scale-95 focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-sm">
              <img 
                src="/images/avatar/9.jpg" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {profileOpen && (
            <div 
              className={`absolute right-0 mt-3 w-60 rounded-2xl p-4 shadow-2xl z-50 transition-all border
                ${darkMode 
                  ? 'bg-[#1D1932] border-[#2A2447] text-white' 
                  : 'bg-white border-gray-200 text-gray-900'}
              `}
            >
              <div className="flex items-center gap-3 pb-3 border-b border-gray-500/10">
                <img 
                  src="/images/avatar/9.jpg" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#6F4FF2]" 
                />
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm">John Smith</h5>
                  <span className={`text-[11px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                    john.smith@enftx.com
                  </span>
                </div>
              </div>

              <div className="mt-2.5 flex flex-col gap-1">
                {[
                  { label: 'Profile', tab: 'profile' },
                  { label: 'Bids', tab: 'bids' },
                  { label: 'Saved', tab: 'saved' },
                  { label: 'Collection', tab: 'collection' },
                  { label: 'Setting', tab: 'setting' },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActiveTab(item.tab);
                      setProfileOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      darkMode ? 'hover:bg-[#241F43] text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
