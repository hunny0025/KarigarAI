'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { artisans } from '@/lib/data';

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-terracotta-dark)] to-[var(--color-terracotta)]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Meet Our Artisans
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            The heart of KarigarAI — master craftspeople preserving centuries of tradition.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisans.map((artisan, i) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/artisan/${artisan.id}`} className="card-craft block bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-sand)]">
                <div className="relative h-40 overflow-hidden">
                  <img src={artisan.coverImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative px-5 pb-5">
                  <div className="w-20 h-20 rounded-xl border-4 border-white overflow-hidden -mt-10 relative shadow-lg">
                    <img src={artisan.avatar} alt={artisan.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mt-3">{artisan.name}</h3>
                  <p className="text-sm text-[var(--color-saffron)] font-medium">{artisan.craft}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[var(--color-warm-gray)]">
                    <MapPin size={12} /> {artisan.location}
                  </div>
                  <p className="text-xs text-[var(--color-warm-gray)] mt-3 line-clamp-2 leading-relaxed">{artisan.bio}</p>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-[var(--color-sand)]">
                    <span className="flex items-center gap-1 text-xs">
                      <Star size={12} fill="var(--color-gold)" stroke="var(--color-gold)" />
                      <strong>{artisan.rating}</strong>
                    </span>
                    <span className="text-xs text-[var(--color-warm-gray)]">{artisan.productCount} products</span>
                    <span className="text-xs text-[var(--color-warm-gray)]">{artisan.experience}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
