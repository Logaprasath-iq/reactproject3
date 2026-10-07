import React, { useState } from 'react';
import { User } from 'lucide-react';

export default function SettingView({ darkMode }) {
  const [activeTab, setActiveTab] = useState('Profile');
  const [fullName, setFullName] = useState('John Smith');
  const [email, setEmail] = useState('john.smith@enftx.com');
  const [password, setPassword] = useState('••••••••••••');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const tabs = ['Profile', 'Application', 'Security', 'Activity', 'Payment Method', 'API'];

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Setting
          </h2>
          <p className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
            Welcome Setting Page
          </p>
        </div>

        {/* Breadcrumb */}
        <div className={`text-xs ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-400'}`}>
          <span>Home</span> &gt; <span className={darkMode ? 'text-white' : 'text-gray-800'}>Setting</span>
        </div>
      </div>

      {/* Subnav Tabs matching Figma screenshot media_1791347462156.png */}
      <div className="flex items-center gap-4 sm:gap-6 border-b border-gray-500/10 overflow-x-auto pb-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'text-[#6F4FF2] font-semibold border-b-2 border-[#6F4FF2] pb-1'
                  : darkMode
                    ? 'text-[#6C7AA0] hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Notification Toast */}
      {savedSuccess && (
        <div className="p-3 rounded-xl bg-[#00D289]/15 border border-[#00D289]/30 text-[#00D289] text-xs font-semibold animate-fadeIn">
          Settings updated successfully!
        </div>
      )}

      {/* Top Row: User Profile & Update Profile Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {/* User Profile Card */}
        <form 
          onSubmit={handleSave}
          className={`rounded-2xl p-6 border shadow-card flex flex-col justify-between ${
            darkMode ? 'bg-[#1D1932] border-[#2A2447]' : 'bg-white border-gray-200 shadow-sm'
          }`}
        >
          <div>
            <h4 className={`text-base font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              User profile
            </h4>

            <div className="mb-4">
              <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none border transition-colors ${
                  darkMode 
                    ? 'bg-[#131129] border-[#2A2447] text-white focus:border-[#6F4FF2]' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6F4FF2]'
                }`}
              />
            </div>

            {/* Profile badge item */}
            <div className={`flex items-center gap-3 p-3 rounded-xl border mt-3 ${
              darkMode ? 'bg-[#241F43]/40 border-white/5' : 'bg-gray-50 border-gray-100'
            }`}>
              <div className="w-10 h-10 rounded-full bg-[#6F4FF2] flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h5 className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  John Smith
                </h5>
                <p className={`text-[11px] ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-500'}`}>
                  Welcome Setting Page
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white text-xs font-medium shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-102 active:scale-98"
            >
              Save
            </button>
          </div>
        </form>

        {/* Update Profile Card */}
        <form 
          onSubmit={handleSave}
          className={`rounded-2xl p-6 border shadow-card flex flex-col justify-between ${
            darkMode ? 'bg-[#1D1932] border-[#2A2447]' : 'bg-white border-gray-200 shadow-sm'
          }`}
        >
          <div>
            <h4 className={`text-base font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Update Profile
            </h4>

            <div className="space-y-4">
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none border transition-colors ${
                    darkMode 
                      ? 'bg-[#131129] border-[#2A2447] text-white focus:border-[#6F4FF2]' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6F4FF2]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none border transition-colors ${
                    darkMode 
                      ? 'bg-[#131129] border-[#2A2447] text-white focus:border-[#6F4FF2]' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6F4FF2]'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white text-xs font-medium shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-102 active:scale-98"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Row: Personal Information Card */}
      <form 
        onSubmit={handleSave}
        className={`rounded-2xl p-6 border shadow-card ${
          darkMode ? 'bg-[#1D1932] border-[#2A2447]' : 'bg-white border-gray-200 shadow-sm'
        }`}
      >
        <h4 className={`text-base font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Personal Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx}>
              <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-[#6C7AA0]' : 'text-gray-600'}`}>
                Info
              </label>
              <input
                type="text"
                placeholder="info"
                className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none border transition-colors ${
                  darkMode 
                    ? 'bg-[#131129] border-[#2A2447] text-white focus:border-[#6F4FF2]' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6F4FF2]'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-2 rounded-xl bg-[#6F4FF2] hover:bg-[#5D3DE6] text-white text-xs font-medium shadow-md shadow-[#6F4FF2]/30 transition-all hover:scale-102 active:scale-98"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
