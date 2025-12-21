"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Search, Edit, Trash2, X, Mail, User as UserIcon, Phone, MapPin, Shield, UserPlus } from 'lucide-react';
import { User } from '@/lib/types';

export default function AdminUsersPage() {
  const { isAuthenticated, currentUser, users, addUser, updateUser, deleteUser } = useAppStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    role: 'user' as 'admin' | 'user',
  });

  useEffect(() => {
    if (!isAuthenticated || currentUser?.role !== 'admin') {
      router.push('/login');
    }
  }, [isAuthenticated, currentUser, router]);

  if (!isAuthenticated || currentUser?.role !== 'admin') {
    return null;
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        password: '', // Don't populate password for security
        phone: user.phone || '',
        location: user.location || '',
        role: user.role,
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        location: '',
        role: 'user',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      location: '',
      role: 'user',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      // Update existing user
      const updates: Partial<User> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        role: formData.role,
      };
      
      // Only update password if provided
      if (formData.password) {
        updates.password = formData.password;
      }
      
      updateUser(editingUser.id, updates);
    } else {
      // Add new user
      if (!formData.password) {
        alert('Password is required for new users');
        return;
      }
      
      addUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        location: formData.location,
        role: formData.role,
        enrolledCourses: [],
      });
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    const user = users.find(u => u.id === id);
    if (user?.role === 'admin') {
      alert('Cannot delete admin user');
      return;
    }
    
    if (confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
    }
  };

  const totalUsers = users.length;
  const adminCount = users.filter(u => u.role === 'admin').length;
  const userCount = users.filter(u => u.role === 'user').length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
          <Users className="w-7 h-7 text-purple-600" />
          User Management
        </h1>
        <p className="text-slate-600">Manage all users and their roles</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl p-4 text-white">
          <div className="text-3xl font-extrabold">{totalUsers}</div>
          <div className="text-sm opacity-90">Total Users</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
          <div className="text-3xl font-extrabold">{adminCount}</div>
          <div className="text-sm opacity-90">Admins</div>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl p-4 text-white">
          <div className="text-3xl font-extrabold">{userCount}</div>
          <div className="text-sm opacity-90">Regular Users</div>
        </div>
      </div>

      {/* Search and Add */}
      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-purple-100 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="btn-primary flex items-center gap-2 whitespace-nowrap"
          >
            <UserPlus className="w-5 h-5" />
            Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-lg border-2 border-purple-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-100 to-fuchsia-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredUsers.map((user, idx) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-purple-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{user.name}</div>
                        <div className="text-sm text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      {user.phone && (
                        <div className="flex items-center gap-1 text-slate-700">
                          <Phone className="w-3 h-3" />
                          {user.phone}
                        </div>
                      )}
                      {user.location && (
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          {user.location}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'admin' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      <Shield className="w-3 h-3" />
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenModal(user)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      {user.role !== 'admin' && (
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No users found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-extrabold text-slate-900">
                  {editingUser ? 'Edit User' : 'Add New User'}
                </h2>
                <button onClick={handleCloseModal} className="p-2 hover:bg-slate-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Password {editingUser && '(leave blank to keep current)'}
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                    required={!editingUser}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Role *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'user' })}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary"
                  >
                    {editingUser ? 'Update' : 'Add User'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
