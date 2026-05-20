import React from 'react';
import { FaBars, FaHome, FaSignOutAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const AdminHeader = ({ onMenuClick, adminName }) => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    window.location.hash = '/';
  };

  const handleHome = () => {
    window.location.hash = '/';
  };

  return (
    <header className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-amber-800 rounded-lg transition"
              aria-label="Toggle menu"
            >
              <FaBars className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold">Mind Empowered</h1>
                <p className="text-xs text-amber-100">Administrator</p>
              </div>
            </div>
          </div>

          {/* Right Section - Social Icons and Actions */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.instagram.com/mind.empowered/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-amber-800 rounded-lg transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mindempowered"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-amber-800 rounded-lg transition"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.twitter.com/mindempowered"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-amber-800 rounded-lg transition"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mind-empowered"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-amber-800 rounded-lg transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Home Button */}
            <button
              onClick={handleHome}
              className="p-2 hover:bg-amber-800 rounded-lg transition"
              title="Go to Home"
            >
              <FaHome className="w-5 h-5" />
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-amber-800 rounded-lg transition"
              title="Logout"
            >
              <FaSignOutAlt className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
