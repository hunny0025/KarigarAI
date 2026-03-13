'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, MapPin, Star } from 'lucide-react';
import { Product } from '@/lib/data';
import { useStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addToCart = useStore((s) => s.addToCart);
  const addToWishlist = useStore((s) => s.addToWishlist);
  const removeFromWishlist = useStore((s) => s.removeFromWishlist);
  const isInWishlist = useStore((s) => s.isInWishlist(product.id));

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-craft group bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-sand)]"
    >
      {/* Image */}
      <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Discount badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-[var(--color-terracotta)] text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-lg ${isInWishlist ? 'bg-[var(--color-terracotta)] text-white' : 'bg-white/90 text-[var(--color-charcoal)] hover:bg-[var(--color-terracotta)] hover:text-white'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={16} fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-saffron)] hover:text-white transition-colors shadow-lg"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>

        {/* Category tag */}
        <span className="absolute bottom-3 left-3 bg-white/90 text-[var(--color-charcoal)] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.craft}
        </span>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-sm text-[var(--color-charcoal)] line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-saffron)] transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mb-2">
          <Link href={`/artisan/${product.artisanId}`} className="flex items-center gap-1.5 group/artisan">
            <img
              src={product.artisanAvatar}
              alt={product.artisanName}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="text-xs text-[var(--color-warm-gray)] group-hover/artisan:text-[var(--color-saffron)] transition-colors">
              {product.artisanName}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <MapPin size={11} className="text-[var(--color-light-gray)]" />
          <span className="text-[11px] text-[var(--color-light-gray)]">{product.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[var(--color-charcoal)]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[var(--color-light-gray)] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} fill="var(--color-gold)" stroke="var(--color-gold)" />
            <span className="text-xs font-medium text-[var(--color-charcoal)]">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
