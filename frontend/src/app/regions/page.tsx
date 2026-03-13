'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { craftRegions } from '@/lib/data';

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-indigo-dark)] to-[var(--color-indigo)]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Craft Regions of India
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every region of India has its unique craft DNA. Explore the diverse traditions that make Indian craftsmanship extraordinary.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-8">
          {craftRegions.map((region, i) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-craft bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-sand)]"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={region.image} alt={region.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-saffron)] font-semibold uppercase tracking-wider mb-2">
                    <MapPin size={14} /> {region.state}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">
                    {region.name}
                  </h2>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
                    {region.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {region.crafts.map((craft) => (
                      <span key={craft} className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] font-medium">
                        {craft}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[var(--color-warm-gray)]">
                      <strong className="text-[var(--color-charcoal)]">{region.artisanCount}</strong> artisans
                    </span>
                    <Link href={`/marketplace?region=${region.name}`} className="text-sm font-semibold text-[var(--color-saffron)] hover:underline">
                      Explore crafts →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
