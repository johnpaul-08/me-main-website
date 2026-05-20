import React from 'react';
import {
  FaCalendarAlt,
  FaImages,
  FaUsers,
  FaHeart,
  FaTimes,
  FaChartLine,
  FaFileAlt,
  FaCog,
} from 'react-icons/fa';

const AdminSidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      id: 1,
      label: 'Dashboard',
      icon: <FaChartLine className="w-5 h-5" />,
      href: '#/admin',
    },
    {
      id: 2,
      label: 'Events',
      icon: <FaCalendarAlt className="w-5 h-5" />,
      href: '#/admin/events',
    },
    {
      id: 3,
      label: 'Photo Gallery',
      icon: <FaImages className="w-5 h-5" />,
      href: '#/admin/gallery',
    },
    {
      id: 4,
      label: 'Mentors',
      icon: <FaUsers className="w-5 h-5" />,
      href: '#/admin/mentors',
    },
    {
      id: 5,
      label: 'Testimonials',
      icon: <FaHeart className="w-5 h-5" />,
      href: '#/admin/testimonials',
    },
    {
      id: 6,
      label: 'Newsletter',
      icon: <FaFileAlt className="w-5 h-5" />,
      href: '#/admin/newsletter',
    },
    {
      id: 7,
      label: 'Settings',
      icon: <FaCog className="w-5 h-5" />,
      href: '#/admin/settings',
    },
  ];

  const handleNavClick = (href) => {
    window.location.href = href;
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-20 px-6 bg-amber-900 border-b border-amber-800">
          <h2 className="text-xl font-bold">Administrator Menu</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-amber-800 rounded-lg transition"
            aria-label="Close sidebar"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="space-y-2 px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-amber-700 transition text-left group"
              >
                <span className="text-amber-400 group-hover:text-amber-300 transition">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
