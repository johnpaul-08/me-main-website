import React from 'react';
import AdminLogin from './AdminLogin';

const ProtectedAdminRoute = ({ children, onLoginSuccess }) => {
  const isAuthenticated = localStorage.getItem('adminToken');

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={onLoginSuccess} />;
  }

  return children;
};

export default ProtectedAdminRoute;
