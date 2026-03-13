'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Eye, MoreVertical, Package } from 'lucide-react';
import { products } from '@/lib/data';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const artisanProducts = products.filter((p) => p.artisanId === 'a1');
  const filtered = search
    ? artisanProducts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : artisanProducts;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Products</h1>
          <p className="text-sm text-[var(--color-warm-gray)] mt-1">{artisanProducts.length} products listed</p>
        </div>
        <Link href="/dashboard/products/new" className="btn-primary text-sm">
          <Plus size={16} /> Add Product
        </Link>
      </div>

      {/* Search & filters */}
      <div className="bg-white rounded-xl p-4 border border-[var(--color-sand)] mb-6">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)]" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
          />
        </div>
      </div>

      {/* Product table */}
      <div className="bg-white rounded-xl border border-[var(--color-sand)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-sand)] bg-[var(--color-ivory)]">
                <th className="text-left text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Product</th>
                <th className="text-left text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Category</th>
                <th className="text-left text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Price</th>
                <th className="text-left text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Stock</th>
                <th className="text-left text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-right text-xs font-semibold text-[var(--color-warm-gray)] uppercase tracking-wider px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product, i) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-[var(--color-sand)] last:border-0 hover:bg-[var(--color-ivory)] transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="text-sm font-medium text-[var(--color-charcoal)] line-clamp-1">{product.title}</p>
                        <p className="text-[11px] text-[var(--color-warm-gray)]">{product.craft}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-sand-light)] text-[var(--color-warm-gray)]">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">₹{product.price.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${product.stockQuantity <= 3 ? 'text-red-500' : 'text-green-600'}`}>
                      {product.stockQuantity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {product.inStock ? 'Active' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-[var(--color-sand-light)] transition-colors" title="View">
                        <Eye size={14} className="text-[var(--color-warm-gray)]" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-[var(--color-sand-light)] transition-colors" title="Edit">
                        <Edit2 size={14} className="text-[var(--color-warm-gray)]" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors" title="Delete">
                        <Trash2 size={14} className="text-red-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Package size={40} className="text-[var(--color-light-gray)] mx-auto mb-3" />
            <p className="text-sm text-[var(--color-warm-gray)]">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
