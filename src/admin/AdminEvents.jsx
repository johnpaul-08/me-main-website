import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import AdminHeader from './AdminHeader';

const AdminEvents = ({ language = 'en', onLanguageClick }) => {
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
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: '',
  });

  // Handle Add Event - Create new event
  const handleAddEvent = () => {
    if (formData.title && formData.date) {
      setEvents([...events, { ...formData, id: Date.now() }]);
      setFormData({ title: '', date: '', location: '', description: '', image: '' });
      setIsFormOpen(false);
    }
  };

  // Handle Edit Event - Update existing event
  const handleEditEvent = () => {
    if (formData.title && formData.date && editingId) {
      setEvents(events.map(event => 
        event.id === editingId ? { ...formData, id: editingId } : event
      ));
      setFormData({ title: '', date: '', location: '', description: '', image: '' });
      setEditingId(null);
      setIsFormOpen(false);
    }
  };

  // Handle Start Edit - Populate form with event data
  const handleStartEdit = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
      image: event.image || '',
    });
    setEditingId(event.id);
    setIsFormOpen(true);
  };

  // Handle Cancel Edit - Clear form and exit edit mode
  const handleCancelEdit = () => {
    setFormData({ title: '', date: '', location: '', description: '', image: '' });
    setEditingId(null);
    setIsFormOpen(false);
  };

  // Handle Delete Event - Remove event
  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  // Handle Input Change - Update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Image Change - Convert image to Base64 and store
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <AdminHeader onMenuClick={() => {}} adminName="Administrator" language={language} onLanguageClick={onLanguageClick} />
      
      <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 max-w-6xl mx-auto w-full p-6 lg:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaCalendarAlt className="mr-3 text-amber-700" />
                Manage Events
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-[#963D07] hover:opacity-90 text-white px-4 py-2 rounded-[24px] transition"
              >
                <FaPlus />
                <span>Add Event</span>
              </button>
            </div>

            {/* Add/Edit Event Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {editingId ? 'Edit Event' : 'Create New Event'}
                </h2>
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
                      Event Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#963D07] file:text-white hover:file:opacity-90"
                      />
                      {formData.image && (
                        <img 
                          src={formData.image} 
                          alt="Event preview" 
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      )}
                    </div>
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
                      onClick={editingId ? handleEditEvent : handleAddEvent}
                      className="flex-1 bg-[#963D07] hover:opacity-90 text-white px-4 py-2 rounded-[24px] transition font-medium"
                    >
                      {editingId ? 'Update Event' : 'Create Event'}
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-[24px] transition font-medium"
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
                <div key={event.id} className="bg-white rounded-[24px] shadow-md overflow-hidden hover:shadow-lg transition">
                  {event.image && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 mt-2">📅 {event.date}</p>
                        <p className="text-gray-600">📍 {event.location}</p>
                        <p className="text-gray-700 mt-2">{event.description}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button 
                          onClick={() => handleStartEdit(event)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-[24px] transition"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-[24px] transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
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
        
    </div>
  );
};

export default AdminEvents;
