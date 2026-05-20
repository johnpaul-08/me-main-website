import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaUsers } from 'react-icons/fa';
import AdminHeader from './AdminHeader';


const AdminMentors = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'John Doe',
      title: 'Mental Health Counselor',
      email: 'john@mindempowered.org',
      image: '/team/john.jpg',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    image: '',
  });

  const handleAddMentor = () => {
    if (formData.name && formData.title && formData.email) {
      setMentors([...mentors, { ...formData, id: Date.now() }]);
      setFormData({ name: '', title: '', email: '', image: '' });
      setIsFormOpen(false);
    }
  };

  const handleDeleteMentor = (id) => {
    setMentors(mentors.filter(mentor => mentor.id !== id));
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
                <FaUsers className="mr-3 text-amber-700" />
                Manage Mentors
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition"
              >
                <FaPlus />
                <span>Add Mentor</span>
              </button>
            </div>

            {/* Add Mentor Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Mentor</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mentor Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter mentor name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title/Position
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter mentor title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter mentor email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter image URL"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleAddMentor}
                      className="flex-1 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition font-medium"
                    >
                      Add Mentor
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

            {/* Mentors Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mentors.map(mentor => (
                      <tr key={mentor.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                              <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-full h-full rounded-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                            <span className="font-medium text-gray-900">{mentor.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{mentor.title}</td>
                        <td className="px-6 py-4 text-gray-700">{mentor.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDeleteMentor(mentor.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {mentors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No mentors yet. Add your first mentor!</p>
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

export default AdminMentors;
