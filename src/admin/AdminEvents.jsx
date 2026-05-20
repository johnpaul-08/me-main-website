import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import AdminHeader from './AdminHeader';

const AdminEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'World Mental Health Day',
      date: '2024-10-10',
      location: 'Virtual',
      description: 'A movement was born',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleAddEvent = () => {
    if (formData.title && formData.date) {
      setEvents([...events, { ...formData, id: Date.now() }]);
      setFormData({ title: '', date: '', location: '', description: '' });
      setIsFormOpen(false);
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <AdminHeader onMenuClick={() => {}} adminName="Administrator" />
      
      <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 max-w-6xl mx-auto w-full p-6 lg:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaCalendarAlt className="mr-3 text-amber-700" />
                Manage Events
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition"
              >
                <FaPlus />
                <span>Add Event</span>
              </button>
            </div>

            {/* Add Event Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Create New Event</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter event description"
                      rows="4"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleAddEvent}
                      className="flex-1 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition font-medium"
                    >
                      Create Event
                    </button>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Events List */}
            <div className="grid gap-4">
              {events.map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 mt-2">📅 {event.date}</p>
                      <p className="text-gray-600">📍 {event.location}</p>
                      <p className="text-gray-700 mt-2">{event.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {events.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No events yet. Create your first event!</p>
              </div>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 text-center">
            <p className="text-sm text-gray-600">
              © 2024 Mind Empowered. All rights reserved.
            </p>
          </div>
        </footer>
    </div>
  );
};

export default AdminEvents;
