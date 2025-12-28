"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { Project, PROJECT_CATEGORIES, ProjectCategory } from '@/lib/types';
import { Plus, Pencil, Trash2, X, Search, Star, AlertTriangle } from 'lucide-react';

export default function AdminProjectsPage() {
  const { projects, projectsLoading, fetchProjects, addProject, updateProject, deleteProject } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch projects from MongoDB on mount
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const projectData = {
      title: formData.get('title') as string,
      grade: formData.get('grade') as string,
      category: formData.get('category') as ProjectCategory,
      caption: formData.get('caption') as string,
      description: formData.get('description') as string,
      studentName: formData.get('studentName') as string,
      imageSrc: formData.get('imageSrc') as string || null,
      emoji: formData.get('emoji') as string || '💡',
      featured: formData.get('featured') === 'on',
    };

    try {
      if (editingProject) {
        await updateProject(editingProject.id, projectData);
      } else {
        await addProject(projectData);
      }
      setIsModalOpen(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Failed to save project:', error);
      alert('Failed to save project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      setImageSrc(editingProject?.imageSrc || '');
    }
  }, [editingProject, isModalOpen]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/projects/upload', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setImageSrc(data.url);
    } catch (err) {
      console.error(err);
      alert('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Failed to delete project:', error);
      alert('Failed to delete project. Please try again.');
    }
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
            <span>🎨</span> Manage Projects
          </h1>
          <p className="text-slate-500 mt-1">{projects.length} total projects</p>
        </div>
        <motion.button 
          onClick={() => { setEditingProject(null); setIsModalOpen(true); }}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          <span>Add Project</span>
        </motion.button>
      </motion.div>

      {/* Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative max-w-md"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
        />
      </motion.div>

      {/* Projects Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="admin-card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-4 px-4 sm:px-6 font-semibold text-slate-700">Project</th>
                <th className="text-left py-4 px-4 font-semibold text-slate-700 hidden sm:table-cell">Category</th>
                <th className="text-left py-4 px-4 font-semibold text-slate-700 hidden md:table-cell">Grade</th>
                <th className="text-left py-4 px-4 font-semibold text-slate-700 hidden lg:table-cell">Featured</th>
                <th className="text-right py-4 px-4 sm:px-6 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProjects.map((project, idx) => (
                <motion.tr 
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-purple-50/50 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                        {project.emoji}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-slate-800 truncate">{project.title}</p>
                        <p className="text-sm text-slate-500 truncate">{project.studentName || 'Anonymous'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 hidden md:table-cell">{project.grade}</td>
                  <td className="py-4 px-4 hidden lg:table-cell">
                    {project.featured ? (
                      <span className="flex items-center gap-1 text-yellow-600">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span className="text-sm">Yes</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm">No</span>
                    )}
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        onClick={() => handleEdit(project)}
                        className="p-2 rounded-lg hover:bg-purple-100 text-purple-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Pencil className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => setDeleteConfirm(project.id)}
                        className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="text-slate-500">No projects found</p>
          </div>
        )}
      </motion.div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setIsModalOpen(false); setEditingProject(null); }}
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
                  {editingProject ? '✏️ Edit Project' : '➕ Add New Project'}
                </h2>
                <button 
                  onClick={() => { setIsModalOpen(false); setEditingProject(null); }}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
                  <input
                    name="title"
                    defaultValue={editingProject?.title}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    placeholder="Fire-Fighting Robot"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Grade *</label>
                    <select
                      name="grade"
                      defaultValue={editingProject?.grade || 'Grade 5'}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    >
                      {['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Category *</label>
                    <select
                      name="category"
                      defaultValue={editingProject?.category || 'robotics'}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    >
                      {PROJECT_CATEGORIES.filter(c => c.value !== 'all').map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.emoji} {cat.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Student Name</label>
                    <input
                      name="studentName"
                      defaultValue={editingProject?.studentName}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="Arjun K."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Emoji</label>
                    <input
                      name="emoji"
                      defaultValue={editingProject?.emoji || '💡'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="🤖"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Caption *</label>
                  <textarea
                    name="caption"
                    defaultValue={editingProject?.caption}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                    placeholder='"This student used AI to..."'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingProject?.description}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                    placeholder="A detailed description of the project..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Image</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="text-sm"
                    />
                    {uploading ? (
                      <div className="text-sm text-slate-500">Uploading...</div>
                    ) : imageSrc ? (
                      <img src={imageSrc} alt="preview" className="w-28 h-20 object-cover rounded-md border" />
                    ) : (
                      <div className="text-sm text-slate-400">No image selected</div>
                    )}
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Or Image URL</label>
                    <input
                      name="imageSrc"
                      value={imageSrc}
                      onChange={(e) => setImageSrc(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    defaultChecked={editingProject?.featured}
                    className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Featured Project
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => { setIsModalOpen(false); setEditingProject(null); }}
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
                    {editingProject ? 'Update Project' : 'Add Project'}
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
                <h3 className="text-lg font-bold text-slate-800 mb-2">Delete Project?</h3>
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
