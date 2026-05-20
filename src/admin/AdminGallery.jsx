import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaImages } from 'react-icons/fa';
import AdminHeader from './AdminHeader';

const AdminGallery = () => {
  const [gallery, setGallery] = useState([
    {
      id: 1,
      title: 'Sample Gallery Image',
      url: '/gallery/sample.jpg',
      uploadDate: '2024-01-15',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
  });

  const handleAddImage = () => {
    if (formData.title && formData.url) {
      setGallery([...gallery, { ...formData, id: Date.now(), uploadDate: new Date().toISOString().split('T')[0] }]);
      setFormData({ title: '', url: '' });
      setIsFormOpen(false);
    }
  };

  const handleDeleteImage = (id) => {
    setGallery(gallery.filter(img => img.id !== id));
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
                <FaImages className="mr-3 text-amber-700" />
                Manage Photo Gallery
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition"
              >
                <FaPlus />
                <span>Add Photo</span>
              </button>
            </div>

            {/* Add Image Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Upload New Photo</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Photo Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter photo title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter photo URL or path"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleAddImage}
                      className="flex-1 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition font-medium"
                    >
                      Upload Photo
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

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map(image => (
                <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{image.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">Uploaded: {image.uploadDate}</p>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition flex items-center justify-center">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="flex-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {gallery.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No photos yet. Upload your first photo!</p>
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

export default AdminGallery;
