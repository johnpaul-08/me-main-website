import React from 'react';
import { FaBars, FaHome, FaArrowLeft, FaGlobe } from 'react-icons/fa';
import CalendarPopup from '../components/CalendarPopup';

const AdminHeader = ({ onMenuClick, adminName, language = 'en', onLanguageClick }) => {
  const handleBack = () => {
    window.history.back();
  };

  const handleHome = () => {
    window.location.hash = '/';
  };

  const handleLanguageClick = () => {
    if (onLanguageClick) {
      onLanguageClick();
    }
  };

  

  return (
    <header className="bg-[#461711] text-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center space-x-4">

            <button
                onClick={handleHome}
                className="flex items-center space-x-2 hover:opacity-90 transition"
              >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/brand/logo.jpeg" 
                  alt="Mind Empowered Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold">Mind Empowered</h1>
                <p className="text-xs text-amber-100">#MEFORYOUTH</p>
              </div>
            </button>
          </div>

          {/* Right Section */}

        <div className="flex items-center gap-2">

          {/* Desktop Only - Home Button */}
          <button
            onClick={handleHome}
            className="
              hidden
              md:flex
              w-12
              h-12
              p-[10px]
              rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-lg
              items-center
              justify-center
              text-white
              hover:scale-105
              transition-all duration-300
            "
            title="Go to Home"
          >
            <FaHome className="w-5 h-5" />
          </button>

          {/* Calendar */}
          <CalendarPopup language={language} scrolled={true} />

          {/* Language Toggle */}
          <button
            onClick={handleLanguageClick}
            aria-label="Change Language"
            className="
              w-12
              h-12
              p-[10px]
              rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-lg
              flex
              items-center
              justify-center
              text-white
              hover:scale-105
              transition-all duration-300
            "
            title={`Current: ${language === 'en' ? 'English' : 'Malayalam'}`}
          >
            <FaGlobe className="w-5 h-5" />
          </button>

          {/* Desktop Only - Back Button */}
          <button
            onClick={handleBack}
            className="
              hidden
              md:flex
              w-12
              h-12
              p-[10px]
              rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-lg
              items-center
              justify-center
              text-white
              hover:scale-105
              transition-all duration-300
            "
            title="Go Back"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          </div>    
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;