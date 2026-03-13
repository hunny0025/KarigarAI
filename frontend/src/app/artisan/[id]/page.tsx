'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Award, Calendar, Package, ShoppingBag, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { artisans, products } from '@/lib/data';

export default function ArtisanPage() {
  const params = useParams();
  const artisan = artisans.find((a) => a.id === params.id);

  if (!artisan) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">Artisan Not Found</h1>
          <Link href="/artisans" className="btn-primary">Browse Artisans</Link>
        </div>
      </div>
    );
  }

  const artisanProducts = products.filter((p) => p.artisanId === artisan.id);

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Cover */}
      <div className="relative h-64 sm:h-80">
        <img src={artisan.coverImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Profile header */}
        <div className="relative -mt-16 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden"
            >
              <img src={artisan.avatar} alt={artisan.name} className="w-full h-full object-cover" />
            </motion.div>

            <div className="flex-1 pt-2">
              <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)]">
                {artisan.name}
              </h1>
              <p className="text-[var(--color-saffron)] font-medium mt-1">{artisan.craft}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-[var(--color-warm-gray)]">
                <span className="flex items-center gap-1"><MapPin size={14} /> {artisan.location}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {artisan.experience} experience</span>
                <span className="flex items-center gap-1">
                  <Star size={14} fill="var(--color-gold)" stroke="var(--color-gold)" />
                  {artisan.rating} ({artisan.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 pb-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-sand)]">
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">About</h2>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">{artisan.bio}</p>
            </div>

            {/* Story */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-sand)]">
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">My Journey</h2>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">{artisan.story}</p>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-6">
                Products by {artisan.name}
              </h2>
              {artisanProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {artisanProducts.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              ) : (
                <p className="text-[var(--color-warm-gray)] text-sm">No products listed yet.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-sand)]">
              <h3 className="text-sm font-bold text-[var(--color-charcoal)] mb-4 uppercase tracking-wider">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Products', value: artisan.productCount, icon: <Package size={16} /> },
                  { label: 'Sales', value: artisan.totalSales, icon: <ShoppingBag size={16} /> },
                  { label: 'Rating', value: artisan.rating, icon: <Star size={16} /> },
                  { label: 'Reviews', value: artisan.reviewCount, icon: <Award size={16} /> },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-[var(--color-ivory)]">
                    <div className="text-[var(--color-saffron)] flex justify-center mb-1">{stat.icon}</div>
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-sand)]">
              <h3 className="text-sm font-bold text-[var(--color-charcoal)] mb-4 uppercase tracking-wider">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {artisan.specialties.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Awards */}
            {artisan.awards.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-sand)]">
                <h3 className="text-sm font-bold text-[var(--color-charcoal)] mb-4 uppercase tracking-wider">Awards</h3>
                <div className="space-y-2">
                  {artisan.awards.map((award) => (
                    <div key={award} className="flex items-start gap-2">
                      <Award size={14} className="text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-sm text-[var(--color-warm-gray)]">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
