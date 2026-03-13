'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, ShoppingBag, Star, MapPin, Truck, Shield, RotateCcw,
  ChevronRight, Minus, Plus, Share2, ZoomIn
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'story' | 'shipping'>('description');

  const addToCart = useStore((s) => s.addToCart);
  const addToWishlist = useStore((s) => s.addToWishlist);
  const removeFromWishlist = useStore((s) => s.removeFromWishlist);
  const isInWishlist = useStore((s) => s.isInWishlist(product?.id || ''));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">Product Not Found</h1>
          <Link href="/marketplace" className="btn-primary">Browse Marketplace</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.region === product.region)
  ).slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-[var(--color-warm-gray)]">
          <Link href="/" className="hover:text-[var(--color-saffron)]">Home</Link>
          <ChevronRight size={12} />
          <Link href="/marketplace" className="hover:text-[var(--color-saffron)]">Marketplace</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--color-charcoal)]">{product.title}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-md aspect-square group">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={18} className="text-[var(--color-charcoal)]" />
              </button>
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-[var(--color-terracotta)] text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{discount}%
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-[var(--color-saffron)]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-saffron)]/10 text-xs font-semibold text-[var(--color-saffron)] uppercase tracking-wider mb-3">
              {product.craft}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-3">
              {product.title}
            </h1>

            {/* Rating & reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                    stroke="var(--color-gold)"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-[var(--color-warm-gray)]">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[var(--color-charcoal)]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-[var(--color-light-gray)] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-semibold text-green-600">Save {discount}%</span>
                </>
              )}
            </div>

            {/* Artisan */}
            <Link
              href={`/artisan/${product.artisanId}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--color-sand)] hover:shadow-md transition-shadow mb-6 group"
            >
              <img src={product.artisanAvatar} alt={product.artisanName} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-saffron)] transition-colors">
                  {product.artisanName}
                </p>
                <p className="text-xs text-[var(--color-warm-gray)] flex items-center gap-1">
                  <MapPin size={11} /> {product.location}
                </p>
              </div>
              <ChevronRight size={16} className="ml-auto text-[var(--color-light-gray)]" />
            </Link>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-[var(--color-sand-dark)] rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-[var(--color-sand-light)] transition-colors rounded-l-lg"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-sm font-semibold min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-[var(--color-sand-light)] transition-colors rounded-r-lg"
                >
                  <Plus size={16} />
                </button>
              </div>
              <span className="text-xs text-[var(--color-warm-gray)]">
                {product.stockQuantity} in stock
              </span>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); }}
                className="btn-primary flex-1 justify-center py-4"
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>
              <button
                onClick={() => isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={`px-4 py-4 rounded-full border-2 transition-colors ${isInWishlist
                  ? 'border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-white'
                  : 'border-[var(--color-sand-dark)] text-[var(--color-charcoal)] hover:border-[var(--color-terracotta)]'
                }`}
              >
                <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
              </button>
              <button className="px-4 py-4 rounded-full border-2 border-[var(--color-sand-dark)] text-[var(--color-charcoal)] hover:border-[var(--color-indigo)] transition-colors">
                <Share2 size={18} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Truck size={18} />, label: 'Free Shipping', sub: 'On orders over ₹999' },
                { icon: <Shield size={18} />, label: 'Authenticity', sub: 'Verified artisan' },
                { icon: <RotateCcw size={18} />, label: 'Easy Returns', sub: '7-day return policy' },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-[var(--color-sand)]">
                  <div className="text-[var(--color-saffron)] mb-1">{badge.icon}</div>
                  <span className="text-[11px] font-semibold text-[var(--color-charcoal)]">{badge.label}</span>
                  <span className="text-[10px] text-[var(--color-light-gray)]">{badge.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-6 border-b border-[var(--color-sand-dark)]">
            {(['description', 'story', 'shipping'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium capitalize transition-colors border-b-2 ${activeTab === tab
                  ? 'border-[var(--color-saffron)] text-[var(--color-saffron)]'
                  : 'border-transparent text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                }`}
              >
                {tab === 'story' ? 'Craft Story' : tab}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-[var(--color-warm-gray)] leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {product.dimensions && (
                    <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                      <span className="text-xs text-[var(--color-light-gray)] uppercase tracking-wider">Dimensions</span>
                      <p className="text-sm font-medium mt-1">{product.dimensions}</p>
                    </div>
                  )}
                  <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                    <span className="text-xs text-[var(--color-light-gray)] uppercase tracking-wider">Material</span>
                    <p className="text-sm font-medium mt-1">{product.material}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                    <span className="text-xs text-[var(--color-light-gray)] uppercase tracking-wider">Craft Region</span>
                    <p className="text-sm font-medium mt-1">{product.region}</p>
                  </div>
                  {product.weight && (
                    <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                      <span className="text-xs text-[var(--color-light-gray)] uppercase tracking-wider">Weight</span>
                      <p className="text-sm font-medium mt-1">{product.weight}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {activeTab === 'story' && (
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">The Story Behind This Craft</h3>
                <p className="text-[var(--color-warm-gray)] leading-relaxed">{product.story}</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                  <h4 className="font-semibold text-sm mb-2">Shipping</h4>
                  <p className="text-sm text-[var(--color-warm-gray)]">Free standard shipping on orders above ₹999. Express shipping available. International shipping to 50+ countries.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                  <h4 className="font-semibold text-sm mb-2">Delivery Time</h4>
                  <p className="text-sm text-[var(--color-warm-gray)]">Standard: 5-7 business days. Express: 2-3 business days. Handmade items may take 7-14 days.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[var(--color-sand)]">
                  <h4 className="font-semibold text-sm mb-2">Returns</h4>
                  <p className="text-sm text-[var(--color-warm-gray)]">7-day hassle-free return policy. Items must be in original condition.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
