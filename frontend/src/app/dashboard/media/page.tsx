'use client';

import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Film, Trash2 } from 'lucide-react';

const mediaItems = [
  { id: 1, type: 'image', name: 'saree-blue-front.jpg', size: '2.4 MB', date: '2026-03-10', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400' },
  { id: 2, type: 'image', name: 'saree-blue-detail.jpg', size: '1.8 MB', date: '2026-03-10', url: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400' },
  { id: 3, type: 'image', name: 'kurta-white-front.jpg', size: '1.5 MB', date: '2026-03-08', url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
  { id: 4, type: 'image', name: 'workshop-loom.jpg', size: '3.1 MB', date: '2026-03-05', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400' },
];

export default function MediaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Media Manager</h1>
          <p className="text-sm text-[var(--color-warm-gray)] mt-1">{mediaItems.length} files uploaded</p>
        </div>
        <button className="btn-primary text-sm"><Upload size={16} /> Upload Files</button>
      </div>

      {/* Upload area */}
      <div className="bg-white rounded-xl p-8 border-2 border-dashed border-[var(--color-sand-dark)] text-center mb-8 hover:border-[var(--color-saffron)] transition-colors">
        <Upload size={40} className="text-[var(--color-light-gray)] mx-auto mb-3" />
        <p className="text-sm text-[var(--color-warm-gray)] mb-1">Drag & drop files here or click to browse</p>
        <p className="text-xs text-[var(--color-light-gray)]">Supports JPG, PNG, WEBP, MP4 — Max 50MB per file</p>
      </div>

      {/* Media grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group relative rounded-xl overflow-hidden bg-white border border-[var(--color-sand)] shadow-sm"
          >
            <div className="aspect-square overflow-hidden">
              <img src={item.url} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all">
                <Trash2 size={14} />
              </button>
            </div>
            <div className="p-3">
              <p className="text-xs font-medium text-[var(--color-charcoal)] truncate">{item.name}</p>
              <p className="text-[10px] text-[var(--color-warm-gray)]">{item.size} • {item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
