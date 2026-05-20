import React, { useState } from 'react';
import { FaCog, FaSave, FaLock } from 'react-icons/fa';
import AdminHeader from './AdminHeader';


const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Mind Empowered',
    siteDescription: 'Empowering minds, transforming lives',
    adminEmail: 'admin@mindempowered.org',
    maintenanceMode: false,
    enableComments: true,
    enableNewsletter: true,
  });

  const [saveMessage, setSaveMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSaveSettings = () => {
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <AdminHeader onMenuClick={() => {}} adminName="Administrator" />
      
      <main className="flex-1 overflow-auto flex flex-col">
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <FaCog className="mr-3 text-amber-700" />
              Settings
            </h1>
          </div>

          {saveMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">{saveMessage}</p>
            </div>
          )}

            {/* General Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter site name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Description
                  </label>
                  <textarea
                    name="siteDescription"
                    value={settings.siteDescription}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter site description"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    name="adminEmail"
                    value={settings.adminEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter admin email"
                  />
                </div>
              </div>
            </div>

            {/* Feature Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="maintenanceMode"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-700 rounded focus:ring-2 focus:ring-amber-500"
                  />
                  <label htmlFor="maintenanceMode" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                    Enable Maintenance Mode
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableComments"
                    name="enableComments"
                    checked={settings.enableComments}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-700 rounded focus:ring-2 focus:ring-amber-500"
                  />
                  <label htmlFor="enableComments" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                    Enable Comments
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableNewsletter"
                    name="enableNewsletter"
                    checked={settings.enableNewsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-700 rounded focus:ring-2 focus:ring-amber-500"
                  />
                  <label htmlFor="enableNewsletter" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                    Enable Newsletter Signup
                  </label>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaLock className="mr-2" />
                Security Settings
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg transition font-medium"
              >
                <FaSave />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6 text-center">
            <p className="text-sm text-gray-600">
              © 2024 Mind Empowered. All rights reserved.
            </p>
          </div>
        </footer>
    </div>
  );
};

export default AdminSettings;
