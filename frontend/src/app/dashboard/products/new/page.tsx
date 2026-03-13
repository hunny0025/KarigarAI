'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Sparkles, X, Plus } from 'lucide-react';
import Link from 'next/link';
import { craftCategories, regions, materials } from '@/lib/data';

export default function NewProductPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');
  const [material, setMaterial] = useState('');
  const [craft, setCraft] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const generateDescription = async () => {
    if (!title || !craft || !material) return;
    setAiGenerating(true);
    // Simulate AI generation
    await new Promise((r) => setTimeout(r, 2000));
    setDescription(
      `This exquisite ${title.toLowerCase()} is a masterpiece of ${craft || 'traditional'} craftsmanship from ${region || 'India'}. ` +
      `Meticulously handcrafted using premium ${material.toLowerCase()}, each piece showcases the artisan's dedication to preserving centuries-old techniques. ` +
      `The intricate details and superior quality make this a perfect addition to any collection, blending traditional artistry with timeless elegance. ` +
      `Every purchase directly supports the artisan community and helps preserve this magnificent craft tradition.`
    );
    setAiGenerating(false);
  };

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  return (
    <div>
      <Link href="/dashboard/products" className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] mb-6">
        <ArrowLeft size={16} /> Back to Products
      </Link>

      <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">Add New Product</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic info */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
            <h2 className="text-sm font-bold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Product Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Banarasi Silk Saree — Royal Blue"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-medium text-[var(--color-warm-gray)]">Description *</label>
                  <button
                    onClick={generateDescription}
                    disabled={aiGenerating || !title}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-indigo)] hover:text-[var(--color-saffron)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Sparkles size={14} className={aiGenerating ? 'animate-spin' : ''} />
                    {aiGenerating ? 'Generating...' : 'AI Generate Description'}
                  </button>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  placeholder="Describe your product in detail..."
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)] resize-none"
                />
                {description && (
                  <p className="text-[10px] text-[var(--color-warm-gray)] mt-1">
                    ✨ AI-generated descriptions are suggestions. Edit freely before publishing.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Craft Type *</label>
                  <input
                    type="text"
                    value={craft}
                    onChange={(e) => setCraft(e.target.value)}
                    placeholder="e.g., Banarasi Weaving"
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  >
                    <option value="">Select</option>
                    {craftCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  >
                    <option value="">Select</option>
                    {regions.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Material</label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  >
                    <option value="">Select</option>
                    {materials.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron)]">
                      {tag}
                      <button onClick={() => setTags(tags.filter((t) => t !== tag))}><X size={12} /></button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Add a tag"
                    className="flex-1 px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                  />
                  <button onClick={addTag} className="btn-secondary text-xs px-4 py-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
            <h2 className="text-sm font-bold mb-4">Product Images</h2>
            <div className="border-2 border-dashed border-[var(--color-sand-dark)] rounded-xl p-8 text-center">
              <Upload size={32} className="text-[var(--color-light-gray)] mx-auto mb-3" />
              <p className="text-sm text-[var(--color-warm-gray)] mb-1">Drag & drop images or click to browse</p>
              <p className="text-xs text-[var(--color-light-gray)]">PNG, JPG up to 10MB. First image is the cover.</p>
              <button className="btn-secondary text-xs mt-4 px-6">Browse Files</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
            <h2 className="text-sm font-bold mb-4">Publish</h2>
            <div className="space-y-3">
              <button className="btn-primary w-full justify-center">Publish Product</button>
              <button className="btn-secondary w-full justify-center">Save Draft</button>
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
            <h2 className="text-sm font-bold mb-4">Inventory</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Stock Quantity</label>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Dimensions</label>
                <input
                  type="text"
                  placeholder="e.g., 5.5m x 1.1m"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Weight</label>
                <input
                  type="text"
                  placeholder="e.g., 800g"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                />
              </div>
            </div>
          </div>

          {/* Craft story */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
            <h2 className="text-sm font-bold mb-4">Craft Story</h2>
            <textarea
              rows={4}
              placeholder="Share the story behind this craft..."
              className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
