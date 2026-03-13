'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, MapPin, Star, User } from 'lucide-react';
import Link from 'next/link';
import { useStore } from '@/lib/store';

export default function ProductCard({ product, index }: { product: any; index: number }) {
  const addToWishlist = useStore((state) => state.addToWishlist);
  const wishlist = useStore((state) => state.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card-cultural group block bg-white h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-sand)]">
        <Link href={`/product/${product.id}`} className="block h-full">
          <img
            src={product.images?.[0] || 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500'}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
           <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
             {product.craft}
           </span>
           {product.originalPrice && (
             <span className="text-[9px] font-bold px-2 py-1 bg-[var(--color-terracotta)] text-white rounded-lg shadow-sm">
               -20%
             </span>
           )}
        </div>

        {/* Action Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToWishlist(product);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isInWishlist 
              ? 'bg-[var(--color-terracotta)] text-white' 
              : 'bg-white/80 text-[var(--color-charcoal)] hover:bg-[var(--color-terracotta)] hover:text-white shadow-sm'
          }`}
        >
          <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
          <div className="flex items-center gap-1.5 mb-2">
            <User size={12} className="text-[var(--color-light-gray)]" />
            <span className="text-[10px] font-bold text-[var(--color-warm-gray)] tracking-wide uppercase">
              {product.artisanName}
            </span>
          </div>

          <Link href={`/product/${product.id}`} className="block mb-2">
            <h3 className="text-lg font-bold text-[var(--color-charcoal)] leading-tight hover:text-[var(--color-saffron)] transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
          
          <div className="flex items-center gap-1.5 mb-4 mt-auto">
            <MapPin size={12} className="text-[var(--color-light-gray)]" />
            <span className="text-[11px] text-[var(--color-light-gray)]">{product.region}</span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-sand)]">
            <div className="flex flex-col">
               <span className="text-xl font-bold text-[var(--color-charcoal)]">
                 ₹{product.price.toLocaleString('en-IN')}
               </span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={12} fill="var(--color-gold)" stroke="var(--color-gold)" />
              <span className="text-xs font-bold">{product.rating}</span>
            </div>
          </div>
      </div>
    </motion.div>
  );
}
