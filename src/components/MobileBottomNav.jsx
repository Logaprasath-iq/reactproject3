import React from 'react';
import { 
  LayoutGrid, 
  ClipboardList, 
  Heart, 
  User, 
  Star, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function MobileBottomNav({ activeTab, setActiveTab, darkMode }) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: LayoutGrid },
    { id: 'bids', label: 'Bids', icon: ClipboardList },
    { id: 'saved', label: 'Saved', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'collection', label: 'Collection', icon: Star },
    { id: 'setting', label: 'Setting', icon: Settings },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center justify-around py-3 px-2 border-t backdrop-blur-lg transition-colors ${
        darkMode 
          ? 'bg-[#121026]/95 border-[#1F1B3B] text-[#5E6482]' 
          : 'bg-white/95 border-gray-200 text-gray-400 shadow-lg'
      }`}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            aria-label={item.label}
            className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-all ${
              isActive 
                ? 'text-[#6F4FF2] scale-110' 
                : darkMode 
                  ? 'hover:text-white' 
                  : 'hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        );
      })}

      {/* Logout button */}
      <button
        onClick={() => alert('Signing out...')}
        aria-label="Logout"
        className={`p-1.5 rounded-xl transition-all ${
          darkMode ? 'hover:text-[#FF5656]' : 'hover:text-[#FF5656]'
        }`}
      >
        <LogOut className="w-5 h-5" />
      </button>
    </nav>
  );
}
