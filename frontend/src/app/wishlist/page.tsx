'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { useStore } from '@/lib/store';

export default function WishlistPage() {
  const wishlist = useStore((s) => s.wishlist);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="w-24 h-24 rounded-full bg-[var(--color-sand-light)] flex items-center justify-center mx-auto mb-6">
            <Heart size={40} className="text-[var(--color-light-gray)]" />
          </div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">Your Wishlist is Empty</h1>
          <p className="text-[var(--color-warm-gray)] mb-6">Save crafts you love and come back to them later</p>
          <Link href="/marketplace" className="btn-primary">Explore Crafts <ArrowRight size={16} /></Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">
          My Wishlist
        </h1>
        <p className="text-[var(--color-warm-gray)] text-sm mb-8">
          {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
