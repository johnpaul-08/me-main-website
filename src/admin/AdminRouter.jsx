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
  switch (currentPage) {
    case 'events':
      return <AdminEvents />;
    case 'gallery':
      return <AdminGallery />;
    case 'mentors':
      return <AdminMentors />;
    case 'testimonials':
      return <AdminTestimonials />;
    case 'newsletter':
      return <AdminNewsletter />;
    case 'settings':
      return <AdminSettings />;
    case 'dashboard':
    default:
      return <AdminDashboard />;
  }
};

export default AdminRouter;
