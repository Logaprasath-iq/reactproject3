import React from 'react';
import { 
  LayoutGrid, 
  ClipboardList, 
  Heart, 
  Star, 
  User, 
  Settings, 
  LogOut,
  X
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, mobileOpen, setMobileOpen, darkMode }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'bids', label: 'Bids', icon: ClipboardList },
    { id: 'saved', label: 'Saved', icon: Heart },
    { id: 'collection', label: 'Collection', icon: Star },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'setting', label: 'Setting', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col justify-between py-6 transition-all duration-300 ease-in-out
          ${darkMode 
            ? 'bg-[#121026] border-r border-[#1F1B3B]' 
            : 'bg-white border-r border-gray-200 shadow-sm'}
          ${mobileOpen ? 'translate-x-0 w-64 px-4 shadow-2xl' : '-translate-x-full lg:translate-x-0 w-20 items-center px-0'}
        `}
      >
        {/* Top: Brand Logo and Navigation items */}
        <div className="flex flex-col items-center w-full">
          {/* Logo */}
          <div className="flex items-center justify-between w-full px-4 lg:px-0 lg:justify-center mb-8">
            <button 
              onClick={() => {
                setActiveTab('dashboard');
                setMobileOpen(false);
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#6F4FF2] flex items-center justify-center shadow-lg shadow-[#6F4FF2]/30 p-2.5 transition-transform group-hover:scale-105">
                <img 
                  src="/images/logoi.png" 
                  alt="ENFTX Logo" 
                  className="w-full h-full object-contain filter brightness-200"
                />
              </div>
              {mobileOpen && (
                <span className={`text-xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ENFTX
                </span>
              )}
            </button>
            {mobileOpen && (
              <button 
                onClick={() => setMobileOpen(false)}
                className={`lg:hidden p-2 rounded-xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Nav Icons */}
          <nav className="flex flex-col gap-4 w-full">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  title={item.label}
                  className={`relative flex items-center gap-4 transition-all duration-200 rounded-xl font-medium text-sm
                    ${mobileOpen ? 'px-4 py-3 w-full justify-start' : 'w-11 h-11 justify-center mx-auto'}
                    ${isActive 
                      ? 'text-[#6F4FF2]' 
                      : darkMode
                        ? 'text-[#5E6482] hover:text-white' 
                        : 'text-gray-400 hover:text-gray-900'}
                  `}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform ${isActive ? 'scale-110' : ''}`} />
                  {mobileOpen && <span className={isActive ? 'text-[#6F4FF2]' : ''}>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Logout */}
        <div className="w-full">
          <button
            onClick={() => alert('Signing out...')}
            title="Sign Out"
            className={`flex items-center gap-4 transition-all duration-200 rounded-xl font-medium text-sm
              ${mobileOpen ? 'px-4 py-3 w-full justify-start' : 'w-11 h-11 justify-center mx-auto'}
              ${darkMode 
                ? 'text-[#5E6482] hover:text-[#FF5656]' 
                : 'text-gray-400 hover:text-[#FF5656]'}
            `}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {mobileOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
