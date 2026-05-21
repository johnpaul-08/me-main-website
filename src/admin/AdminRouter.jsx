import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminEvents from './AdminEvents';
import AdminGallery from './AdminGallery';
import AdminMentors from './AdminMentors';
import AdminTestimonials from './AdminTestimonials';
import AdminNewsletter from './AdminNewsletter';
import AdminSettings from './AdminSettings';

const AdminRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [language, setLanguage] = useState(() => localStorage.getItem('adminLanguage') || 'en');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('adminLanguage', language);
  }, [language]);

  useEffect(() => {
    // Check if admin is authenticated
    const adminToken = localStorage.getItem('adminToken');
    setIsAuthenticated(!!adminToken);

    // Parse current page from hash
    const updatePageFromHash = () => {
      const hash = window.location.hash;
      if (hash.includes('/admin/events')) setCurrentPage('events');
      else if (hash.includes('/admin/gallery')) setCurrentPage('gallery');
      else if (hash.includes('/admin/mentors')) setCurrentPage('mentors');
      else if (hash.includes('/admin/testimonials')) setCurrentPage('testimonials');
      else if (hash.includes('/admin/newsletter')) setCurrentPage('newsletter');
      else if (hash.includes('/admin/settings')) setCurrentPage('settings');
      else setCurrentPage('dashboard');
    };

    updatePageFromHash();
    window.addEventListener('hashchange', updatePageFromHash);

    return () => window.removeEventListener('hashchange', updatePageFromHash);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    window.location.hash = '/admin';
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    setIsAuthenticated(false);
    window.location.hash = '/';
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Render current page
  const renderPage = () => {
    const commonProps = { language, onLanguageClick: () => setIsLanguageModalOpen(true) };
    
    switch (currentPage) {
      case 'events':
        return <AdminEvents {...commonProps} />;
      case 'gallery':
        return <AdminGallery {...commonProps} />;
      case 'mentors':
        return <AdminMentors {...commonProps} />;
      case 'testimonials':
        return <AdminTestimonials {...commonProps} />;
      case 'newsletter':
        return <AdminNewsletter {...commonProps} />;
      case 'settings':
        return <AdminSettings {...commonProps} />;
      case 'dashboard':
      default:
        return <AdminDashboard {...commonProps} />;
    }
  };

  return (
    <div>
      {renderPage()}
      
      {/* Language Selection Modal */}
      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-fast" onClick={() => setIsLanguageModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl md:text-2xl font-bold text-[#461711] mb-6 text-center">Choose a Language</h3>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsLanguageModalOpen(false);
                }}
                className={`w-full text-left p-4 rounded-lg text-lg font-semibold transition-all duration-200 border-2 ${language === 'en' ? 'bg-[#ff7612] text-white border-transparent' : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800'}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('ml');
                  setIsLanguageModalOpen(false);
                }}
                className={`w-full text-left p-4 rounded-lg text-lg font-semibold transition-all duration-200 border-2 ${language === 'ml' ? 'bg-[#ff7612] text-white border-transparent' : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800'}`}
                style={{ fontFamily: 'Manjari, sans-serif' }}
              >
                മലയാളം
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRouter;
