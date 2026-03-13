'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown, Grid3X3, LayoutList } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { craftCategories, regions, materials, Product } from '@/lib/data';

type SortOption = 'newest' | 'price-low' | 'price-high' | 'popular' | 'rating';

export default function MarketplacePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sort, setSort] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Fetch live products from the deployed Render backend
    fetch('https://karigarai-push.onrender.com/api/products/')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch API", err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)) ||
          p.artisanName.toLowerCase().includes(q)
      );
    }
    if (selectedCategory) result = result.filter((p) => p.category === selectedCategory);
    if (selectedRegion) result = result.filter((p) => p.region === selectedRegion);
    if (selectedMaterial) result = result.filter((p) => p.material === selectedMaterial);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'popular': result.sort((a, b) => b.reviewCount - a.reviewCount); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [search, selectedCategory, selectedRegion, selectedMaterial, priceRange, sort]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedRegion('');
    setSelectedMaterial('');
    setPriceRange([0, 50000]);
    setSearch('');
  };

  const activeFilterCount = [selectedCategory, selectedRegion, selectedMaterial].filter(Boolean).length +
    (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-ivory)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--color-sand)] border-t-[var(--color-saffron)] rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)]">Connecting to the Studio...</h2>
          <p className="text-[var(--color-warm-gray)] mt-2">Fetching live artisanal treasures</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--color-indigo-dark)] to-[var(--color-indigo)] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">
            Marketplace
          </h1>
          <p className="text-white/60 text-sm">
            Discover authentic handcrafted products from across India
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-2xl">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search crafts, artisans, materials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)] focus:border-transparent backdrop-blur-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                  <X size={16} className="text-white/40 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${showFilters ? 'bg-[var(--color-saffron)] text-white' : 'bg-white border border-[var(--color-sand-dark)] text-[var(--color-charcoal)]'}`}
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white/20 text-[10px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-[var(--color-saffron)] hover:underline">
                Clear all
              </button>
            )}
            <span className="text-sm text-[var(--color-warm-gray)]">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <div className="hidden sm:flex border border-[var(--color-sand-dark)] rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[var(--color-saffron)] text-white' : 'bg-white text-[var(--color-charcoal)]'}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[var(--color-saffron)] text-white' : 'bg-white text-[var(--color-charcoal)]'}`}
              >
                <LayoutList size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 260, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="hidden md:block shrink-0 overflow-hidden"
              >
                <div className="w-[260px] space-y-6">
                  {/* Category */}
                  <FilterSection title="Craft Type">
                    {craftCategories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                          className="accent-[var(--color-saffron)]"
                        />
                        <span className="text-sm text-[var(--color-warm-gray)] group-hover:text-[var(--color-charcoal)] transition-colors">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </FilterSection>

                  {/* Region */}
                  <FilterSection title="Region">
                    {regions.map((r) => (
                      <label key={r} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="region"
                          checked={selectedRegion === r}
                          onChange={() => setSelectedRegion(selectedRegion === r ? '' : r)}
                          className="accent-[var(--color-saffron)]"
                        />
                        <span className="text-sm text-[var(--color-warm-gray)] group-hover:text-[var(--color-charcoal)] transition-colors">
                          {r}
                        </span>
                      </label>
                    ))}
                  </FilterSection>

                  {/* Material */}
                  <FilterSection title="Material">
                    {materials.slice(0, 8).map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="material"
                          checked={selectedMaterial === m}
                          onChange={() => setSelectedMaterial(selectedMaterial === m ? '' : m)}
                          className="accent-[var(--color-saffron)]"
                        />
                        <span className="text-sm text-[var(--color-warm-gray)] group-hover:text-[var(--color-charcoal)] transition-colors">
                          {m}
                        </span>
                      </label>
                    ))}
                  </FilterSection>

                  {/* Price range */}
                  <FilterSection title="Price Range">
                    <div className="space-y-3">
                      <input
                        type="range"
                        min={0}
                        max={50000}
                        step={500}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-[var(--color-saffron)]"
                      />
                      <div className="flex justify-between text-xs text-[var(--color-warm-gray)]">
                        <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                        <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </FilterSection>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-2">
                  No crafts found
                </p>
                <p className="text-sm text-[var(--color-warm-gray)] mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button onClick={clearFilters} className="btn-primary text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
              }`}>
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl p-4 border border-[var(--color-sand)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-3"
      >
        <h4 className="text-sm font-semibold text-[var(--color-charcoal)]">{title}</h4>
        <ChevronDown size={14} className={`text-[var(--color-warm-gray)] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
}
