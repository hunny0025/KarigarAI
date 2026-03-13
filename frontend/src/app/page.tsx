'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Shield, Globe, BookOpen, Award, HandHeart,
  MapPin, Star, ChevronRight, Play
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, artisans, craftRegions, platformFeatures } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  HandHeart: <HandHeart size={28} />,
  Award: <Award size={28} />,
  Sparkles: <Sparkles size={28} />,
  Shield: <Shield size={28} />,
  BookOpen: <BookOpen size={28} />,
  Globe: <Globe size={28} />,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  }),
};

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ivory)] via-[var(--color-sand-light)] to-[var(--color-ivory)]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />

        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--color-saffron)]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--color-indigo)]/10 to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-saffron)]/10 border border-[var(--color-saffron)]/20 mb-6">
              <Sparkles size={14} className="text-[var(--color-saffron)]" />
              <span className="text-xs font-semibold text-[var(--color-saffron)] uppercase tracking-wider">
                AI-Powered Artisan Marketplace
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-6">
              <span className="text-[var(--color-charcoal)]">Empowering</span>
              <br />
              <span className="text-gradient-saffron">Artisans</span>
              <br />
              <span className="text-[var(--color-charcoal)]">Through </span>
              <span className="text-[var(--color-indigo)]">Technology</span>
            </h1>

            <p className="text-lg text-[var(--color-warm-gray)] leading-relaxed mb-8 max-w-lg">
              Discover authentic handcrafted treasures from India&apos;s master craftspeople.
              Every purchase preserves centuries-old traditions and empowers artisan communities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/marketplace" className="btn-primary text-base px-8 py-4">
                Explore Crafts <ArrowRight size={18} />
              </Link>
              <Link href="/join" className="btn-secondary text-base px-8 py-4">
                Become an Artisan
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">
              {[
                { value: '2,500+', label: 'Artisans' },
                { value: '15,000+', label: 'Products' },
                { value: '12', label: 'States' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-warm-gray)] uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — craft showcase grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600"
                  alt="Banarasi Silk Weaving"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600"
                  alt="Blue Pottery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600"
                  alt="Brass Sculpture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=600"
                  alt="Traditional Painting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-xs font-semibold text-[var(--color-charcoal)]">Verified Artisan</span>
              </div>
              <p className="text-[10px] text-[var(--color-warm-gray)]">
                All artisans are verified and craft-authenticated
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ornate divider */}
      <hr className="divider-ornate" />

      {/* ===== FEATURED CRAFTS ===== */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold text-[var(--color-saffron)] uppercase tracking-[0.2em]">
              Curated Collection
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-4">
              Featured Crafts
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Handpicked treasures from master artisans across India. Each piece carries a story of heritage and skilled craftsmanship.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/marketplace" className="btn-secondary">
              View All Crafts <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CRAFT REGIONS ===== */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--color-sand-light)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold text-[var(--color-indigo)] uppercase tracking-[0.2em]">
              Discover Origins
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-4">
              Craft Regions of India
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Every region of India has its own craft DNA. Explore the artisan traditions from across the subcontinent.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftRegions.map((region, i) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/regions/${region.id}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
                >
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] mb-1">
                      {region.name}
                    </h3>
                    <p className="text-white/70 text-xs mb-2">
                      {region.state} • {region.artisanCount} artisans
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {region.crafts.slice(0, 3).map((craft) => (
                        <span key={craft} className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white/90 backdrop-blur-sm">
                          {craft}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTISAN SPOTLIGHT ===== */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold text-[var(--color-terracotta)] uppercase tracking-[0.2em]">
              Meet the Makers
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-4">
              Artisan Spotlight
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Behind every craft is a master artisan. Meet the skilled hands preserving India&apos;s heritage.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artisans.map((artisan, i) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/artisan/${artisan.id}`}
                  className="card-craft group block bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-sand)]"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={artisan.coverImage}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="relative px-4 pb-4">
                    <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden -mt-8 relative shadow-md">
                      <img
                        src={artisan.avatar}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mt-2 group-hover:text-[var(--color-saffron)] transition-colors">
                      {artisan.name}
                    </h3>
                    <p className="text-xs text-[var(--color-warm-gray)] mt-0.5">{artisan.craft}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={11} className="text-[var(--color-light-gray)]" />
                      <span className="text-[11px] text-[var(--color-light-gray)]">{artisan.location}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--color-sand)]">
                      <div className="flex items-center gap-1">
                        <Star size={12} fill="var(--color-gold)" stroke="var(--color-gold)" />
                        <span className="text-xs font-medium">{artisan.rating}</span>
                      </div>
                      <span className="text-[11px] text-[var(--color-light-gray)]">
                        {artisan.productCount} products
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM FEATURES ===== */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[var(--color-indigo-dark)] to-[var(--color-indigo)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold text-[var(--color-saffron-light)] uppercase tracking-[0.2em]">
              Why KarigarAI
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-4 text-white">
              A Platform Built for Artisans
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/60 max-w-2xl mx-auto">
              We combine the power of technology with the beauty of traditional craftsmanship to create a marketplace that truly serves artisan communities.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURAL STORYTELLING ===== */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800"
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-5 shadow-xl max-w-[240px]">
                <p className="text-sm italic text-[var(--color-charcoal)] font-[family-name:var(--font-heading)]">
                  &ldquo;KarigarAI gave my craft a global stage. Now my work reaches homes across the world.&rdquo;
                </p>
                <p className="text-xs text-[var(--color-warm-gray)] mt-2">— Rajan Ansari, Master Weaver</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-[var(--color-saffron)] uppercase tracking-[0.2em]">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-6">
                Preserving Heritage,<br />
                <span className="text-gradient-saffron">Empowering Futures</span>
              </h2>
              <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">
                India is home to the world&apos;s largest and most diverse craft tradition, with over 7 million artisan
                families. Yet many struggle to reach markets beyond their villages. KarigarAI bridges this gap
                using thoughtful technology — not to replace tradition, but to amplify it.
              </p>
              <p className="text-[var(--color-warm-gray)] leading-relaxed mb-8">
                Our AI tools help artisans present their work professionally, while our marketplace
                connects them directly with buyers who value authenticity and craftsmanship.
              </p>
              <Link href="/about" className="btn-primary">
                Learn Our Story <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--color-sand-light)] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
            Are You an <span className="text-gradient-saffron">Artisan</span>?
          </h2>
          <p className="text-[var(--color-warm-gray)] text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of craftspeople who are reaching global markets, growing their businesses,
            and preserving their craft heritage with KarigarAI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/join" className="btn-primary text-base px-8 py-4">
              Start Selling Today <ArrowRight size={18} />
            </Link>
            <Link href="/stories" className="btn-secondary text-base px-8 py-4">
              Success Stories
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
