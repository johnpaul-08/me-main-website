import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaImages, FaUsers, FaHeart } from 'react-icons/fa';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: 'World Mental Health Day',
      date: 'October 10th, 2020',
      isNew: true,
    },
  ]);

  const [adminName, setAdminName] = useState('Administrator');

  useEffect(() => {
    // Load admin data from localStorage or API
    const storedAdminName = localStorage.getItem('adminName');
    if (storedAdminName) {
      setAdminName(storedAdminName);
    }
  }, []);

  const handleManageEvents = () => {
    window.location.hash = '/admin/events';
  };

  const handleManageTestimonials = () => {
    window.location.hash = '/admin/testimonials';
  };

  const handleManageGallery = () => {
    window.location.hash = '/admin/gallery';
  };

  const handleManageMentors = () => {
    window.location.hash = '/admin/mentors';
  };

  const actionButtons = [
    {
      id: 1,
      label: 'MANAGE TESTIMONIALS',
      icon: <FaHeart className="mr-2" />,
      onClick: handleManageTestimonials,
      color: 'bg-amber-700',
    },
    {
      id: 2,
      label: 'MANAGE PHOTO GALLERY',
      icon: <FaImages className="mr-2" />,
      onClick: handleManageGallery,
      color: 'bg-amber-700',
    },
    {
      id: 3,
      label: 'MANAGE MENTORS',
      icon: <FaUsers className="mr-2" />,
      onClick: handleManageMentors,
      color: 'bg-amber-700',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      {/* Header */}
      <AdminHeader onMenuClick={() => {}} adminName={adminName} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto w-full p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Welcome back, {adminName}!
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Events Section */}
            <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCalendarAlt className="mr-3 text-amber-700" />
                Upcoming Events
              </h2>

              {upcomingEvents.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100">
                          <FaCalendarAlt className="h-6 w-6 text-amber-700" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                        {event.isNew && (
                          <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded">
                            A MOVEMENT WAS BORN
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No upcoming events</p>
                </div>
              )}

              <button
                onClick={handleManageEvents}
                className="w-full py-3 px-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                MANAGE EVENTS
              </button>
            </div>

            {/* Other Actions Section */}
            <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Actions</h2>

              <div className="space-y-3">
                {actionButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={button.onClick}
                    className={`w-full py-3 px-4 ${button.color} hover:opacity-90 text-white font-semibold rounded-lg transition flex items-center justify-center`}
                  >
                    {button.icon}
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </main>
    </div>
  );
};

export default AdminDashboard;
