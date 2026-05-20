import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaFileAlt, FaPaperPlane } from 'react-icons/fa';
import AdminHeader from './AdminHeader';


const AdminNewsletter = () => {
  const [newsletters, setNewsletters] = useState([
    {
      id: 1,
      subject: 'Monthly Mental Health Tips',
      sentDate: '2024-01-15',
      subscribers: 250,
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
  });

  const handleSendNewsletter = () => {
    if (formData.subject && formData.content) {
      setNewsletters([...newsletters, { ...formData, id: Date.now(), sentDate: new Date().toISOString().split('T')[0], subscribers: 0 }]);
      setFormData({ subject: '', content: '' });
      setIsFormOpen(false);
    }
  };

  const handleDeleteNewsletter = (id) => {
    setNewsletters(newsletters.filter(n => n.id !== id));
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
                <FaFileAlt className="mr-3 text-amber-700" />
                Manage Newsletter
              </h1>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition"
              >
                <FaPaperPlane />
                <span>Send Newsletter</span>
              </button>
            </div>

            {/* Send Newsletter Form */}
            {isFormOpen && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Send New Newsletter</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter newsletter subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Newsletter Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter newsletter content"
                      rows="6"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSendNewsletter}
                      className="flex-1 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition font-medium flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Newsletter
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

            {/* Newsletter History */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Sent Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subscribers</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {newsletters.map(newsletter => (
                      <tr key={newsletter.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-medium text-gray-900">{newsletter.subject}</td>
                        <td className="px-6 py-4 text-gray-700">{newsletter.sentDate}</td>
                        <td className="px-6 py-4 text-gray-700">{newsletter.subscribers} subscribers</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDeleteNewsletter(newsletter.id)}
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

            {newsletters.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No newsletters sent yet. Send your first newsletter!</p>
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

export default AdminNewsletter;
