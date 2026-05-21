import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaHeart, FaStar } from 'react-icons/fa';
import AdminHeader from './AdminHeader';

const AdminTestimonials = ({ language = 'en', onLanguageClick }) => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      author: 'Jane Smith',
      content: 'This program changed my life and helped me find peace.',
      rating: 5,
      date: '2024-01-15',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 5,
  });

  const handleAddTestimonial = () => {
    if (formData.author && formData.content) {
      setTestimonials([...testimonials, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
      setFormData({ author: '', content: '', rating: 5 });
      setIsFormOpen(false);
    }
  };

  const handleEditTestimonial = () => {
    if (formData.author && formData.content && editingId) {
      setTestimonials(testimonials.map(t => 
        t.id === editingId ? { ...formData, id: editingId, date: t.date } : t
      ));
      setFormData({ author: '', content: '', rating: 5 });
      setEditingId(null);
      setIsFormOpen(false);
    }
  };

  const handleStartEdit = (testimonial) => {
    setFormData({
      author: testimonial.author,
      content: testimonial.content,
      rating: testimonial.rating,
    });
    setEditingId(testimonial.id);
    setIsFormOpen(true);
  };

  const handleCancelEdit = () => {
    setFormData({ author: '', content: '', rating: 5 });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleDeleteTestimonial = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'rating' ? parseInt(value) : value }));
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <AdminHeader onMenuClick={() => {}} adminName="Administrator" language={language} onLanguageClick={onLanguageClick} />
      
      <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 max-w-6xl mx-auto w-full p-6 lg:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaHeart className="mr-3 text-amber-700" />
                Manage Testimonials
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-[#963D07] hover:bg-opacity-90 text-white px-4 py-2 rounded-[24px] transition"
              >
                <FaPlus />
                <span>Add Testimonial</span>
              </button>
            </div>

            {/* Add/Edit Testimonial Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author Name
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter author name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Testimonial Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter testimonial content"
                      rows="4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ Excellent (5 stars)</option>
                      <option value="4">⭐⭐⭐⭐ Very Good (4 stars)</option>
                      <option value="3">⭐⭐⭐ Good (3 stars)</option>
                      <option value="2">⭐⭐ Fair (2 stars)</option>
                      <option value="1">⭐ Poor (1 star)</option>
                    </select>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={editingId ? handleEditTestimonial : handleAddTestimonial}
                      className="flex-1 bg-[#963D07] hover:bg-opacity-90 text-white px-4 py-2 rounded-[24px] transition font-medium"
                    >
                      {editingId ? 'Update Testimonial' : 'Add Testimonial'}
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

            {/* Testimonials List */}
            <div className="grid gap-4">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.author}</h3>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{testimonial.content}</p>
                      <p className="text-sm text-gray-500">Submitted on: {testimonial.date}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button 
                        onClick={() => handleStartEdit(testimonial)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {testimonials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No testimonials yet. Add your first testimonial!</p>
              </div>
            )}
          </div>
        </main>
           </div>
  );
};

export default AdminTestimonials;
