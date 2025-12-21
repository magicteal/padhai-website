"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { Testimonial } from '@/lib/types';
import { Plus, Pencil, Trash2, X, Search, Star, AlertTriangle, Video, MessageSquare } from 'lucide-react';

export default function AdminTestimonialsPage() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [testimonialType, setTestimonialType] = useState<'video' | 'text'>('text');

  const filteredTestimonials = testimonials.filter(t => 
    t.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.quote?.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (t.location?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const testimonialData: Omit<Testimonial, 'id' | 'createdAt'> = {
      type: testimonialType,
      author: formData.get('author') as string,
      rating: parseInt(formData.get('rating') as string),
      featured: formData.get('featured') === 'on',
      ...(testimonialType === 'video' 
        ? { videoSrc: formData.get('videoSrc') as string }
        : { 
            quote: formData.get('quote') as string,
            location: formData.get('location') as string,
          }
      ),
    };

    if (editingTestimonial) {
      updateTestimonial(editingTestimonial.id, testimonialData);
    } else {
      addTestimonial(testimonialData);
    }

    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setTestimonialType(testimonial.type);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteTestimonial(id);
    setDeleteConfirm(null);
  };

  const openAddModal = () => {
    setEditingTestimonial(null);
    setTestimonialType('text');
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 flex items-center gap-2">
            <span>💬</span> Manage Testimonials
          </h1>
          <p className="text-slate-500 mt-1">{testimonials.length} total testimonials</p>
        </div>
        <motion.button 
          onClick={openAddModal}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          <span>Add Testimonial</span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { label: 'Video', count: testimonials.filter(t => t.type === 'video').length, emoji: '🎥' },
          { label: 'Text', count: testimonials.filter(t => t.type === 'text').length, emoji: '📝' },
          { label: 'Featured', count: testimonials.filter(t => t.featured).length, emoji: '⭐' },
          { label: '5-Star', count: testimonials.filter(t => t.rating === 5).length, emoji: '🌟' },
        ].map((stat, idx) => (
          <div key={idx} className="admin-card p-4 text-center">
            <span className="text-2xl block mb-1">{stat.emoji}</span>
            <p className="text-2xl font-bold text-slate-800">{stat.count}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative max-w-md"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search testimonials..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
        />
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredTestimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="admin-card p-5 relative group"
          >
            {/* Type Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                testimonial.type === 'video' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {testimonial.type === 'video' ? '🎥 Video' : '📝 Text'}
              </span>
              {testimonial.featured && (
                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="pr-24">
              {testimonial.type === 'video' ? (
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-2xl mb-3">
                    🎥
                  </div>
                  <h3 className="font-medium text-slate-800 mb-1">{testimonial.author}</h3>
                  <p className="text-sm text-slate-500 truncate">{testimonial.videoSrc}</p>
                </div>
              ) : (
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-2xl mb-3">
                    📝
                  </div>
                  <p className="text-slate-700 text-sm mb-2 line-clamp-2">{testimonial.quote}</p>
                  <p className="text-sm text-slate-500">— {testimonial.author}, {testimonial.location}</p>
                </div>
              )}

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button
                onClick={() => handleEdit(testimonial)}
                className="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Pencil className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => setDeleteConfirm(testimonial.id)}
                className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <span className="text-5xl block mb-4">🔍</span>
          <p className="text-slate-500">No testimonials found</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setIsModalOpen(false); setEditingTestimonial(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingTestimonial ? '✏️ Edit Testimonial' : '➕ Add New Testimonial'}
                </h2>
                <button 
                  onClick={() => { setIsModalOpen(false); setEditingTestimonial(null); }}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Type Selector */}
                {!editingTestimonial && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Type *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTestimonialType('text')}
                        className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                          testimonialType === 'text'
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-slate-200 hover:border-purple-200'
                        }`}
                      >
                        <MessageSquare className={`w-5 h-5 ${testimonialType === 'text' ? 'text-purple-600' : 'text-slate-400'}`} />
                        <span className={testimonialType === 'text' ? 'text-purple-700 font-medium' : 'text-slate-600'}>Text Review</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTestimonialType('video')}
                        className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                          testimonialType === 'video'
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-slate-200 hover:border-purple-200'
                        }`}
                      >
                        <Video className={`w-5 h-5 ${testimonialType === 'video' ? 'text-purple-600' : 'text-slate-400'}`} />
                        <span className={testimonialType === 'video' ? 'text-purple-700 font-medium' : 'text-slate-600'}>Video</span>
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Author Name *</label>
                  <input
                    name="author"
                    defaultValue={editingTestimonial?.author}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    placeholder={testimonialType === 'video' ? 'Student Name' : 'Parent'}
                  />
                </div>

                {testimonialType === 'video' ? (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Video URL *</label>
                    <input
                      name="videoSrc"
                      defaultValue={editingTestimonial?.videoSrc}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="https://res.cloudinary.com/..."
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Quote *</label>
                      <textarea
                        name="quote"
                        defaultValue={editingTestimonial?.quote}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                        placeholder='"My child loves learning with PadhAI..."'
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                      <input
                        name="location"
                        defaultValue={editingTestimonial?.location}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                        placeholder="Koramangala"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rating *</label>
                  <select
                    name="rating"
                    defaultValue={editingTestimonial?.rating || 5}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                  >
                    {[5, 4, 3, 2, 1].map(r => (
                      <option key={r} value={r}>{'⭐'.repeat(r)} ({r} stars)</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    defaultChecked={editingTestimonial?.featured}
                    className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Featured Testimonial
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => { setIsModalOpen(false); setEditingTestimonial(null); }}
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingTestimonial ? 'Update' : 'Add'} Testimonial
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Delete Testimonial?</h3>
                <p className="text-slate-500 mb-6">This action cannot be undone.</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteConfirm)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
