'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, Sparkles, Shield, Globe, BookOpen, Award, HandHeart,
  MapPin, Star, ChevronRight, Play
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, artisans, craftRegions, platformFeatures } from '@/lib/data';
import { OrnateDivider, TextureOverlay, HaveliFrame } from '@/components/DecorativeElements';
import IndiaCraftMap from '@/components/IndiaCraftMap';

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative">
      <TextureOverlay />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b-8 border-[var(--color-charcoal)]">
        {/* Parallax Background Panels */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 bg-silk">
          <div className="absolute inset-0 bg-[var(--color-charcoal)]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[var(--color-charcoal)]/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[var(--color-saffron)]/30 bg-[var(--color-saffron)]/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[var(--color-saffron)] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--color-saffron)]">
                  India&apos;s Living Heritage
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1] text-white mb-8">
                Celebrate India&apos;s <br />
                <span className="text-[var(--color-saffron)]">Living Craft</span> Traditions
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl font-medium">
                Discover authentic handmade treasures from master craftspeople across India. 
                Every purchase preserves a legacy and empowers a community.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link href="/marketplace" className="btn-primary text-lg !px-10 !py-5 shadow-2xl">
                  Explore Crafts <ArrowRight size={20} />
                </Link>
                <Link href="/artisans" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[var(--color-indigo)] text-lg !px-10 !py-5 glass">
                  Meet the Artisans
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Story Card */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-20 z-20 hidden lg:block"
        >
          <div className="glass p-8 rounded-3xl w-80 shadow-2xl border-white/30">
            <div className="w-20 h-20 rounded-full border-4 border-[var(--color-saffron)] overflow-hidden mb-6 -mt-16 mx-auto shadow-xl">
              <img src="https://images.unsplash.com/photo-1510411274509-382a9db26c7e?w=200" alt="Master Artisan" className="w-full h-full object-cover" />
            </div>
            <p className="italic text-[var(--color-charcoal)] text-center leading-relaxed mb-4 font-[family-name:var(--font-heading)]">
              &ldquo;My grandfather taught me the language of the loom. KarigarAI helps me speak to the world.&rdquo;
            </p>
            <div className="text-center">
              <span className="block font-bold text-[var(--color-terracotta)]">Rajan Ansari</span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-warm-gray)]">Master Silk Weaver • Varanasi</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Shade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-ivory)] to-transparent z-10" />
      </section>

      {/* ===== FEATURED CRAFTS ===== */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[var(--color-terracotta)] uppercase tracking-[0.4em]">Curated Treasury</span>
              <h2 className="text-5xl font-bold mt-4 text-[var(--color-charcoal)]">The Masterpiece Gallery</h2>
              <div className="w-24 h-1.5 bg-[var(--color-terracotta)] rounded-full mt-6" />
            </div>
            <Link href="/marketplace" className="group flex items-center gap-2 text-[var(--color-indigo)] font-bold hover:gap-4 transition-all">
              Discover Full Collection <ArrowRight size={20} />
            </Link>
          </header>

          <HaveliFrame className="bg-silk mix-blend-multiply p-0 sm:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 relative z-10 bg-[var(--color-ivory)]/90 backdrop-blur-sm">
              {products.slice(0, 4).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </HaveliFrame>
        </div>
      </section>

      <OrnateDivider />

      {/* ===== CRAFT REGIONS ===== */}
      <section className="py-24 px-4 sm:px-6 bg-[var(--color-ivory)] relative border-y-4 border-[var(--color-gold)]">
        <div className="absolute inset-0 bg-haveli opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2">
             <span className="text-xs font-bold text-[var(--color-indigo)] uppercase tracking-[0.4em]">Discovery</span>
             <h2 className="text-6xl font-bold mt-4 mb-8 text-[var(--color-charcoal)] leading-tight">
               Every Region has its <br />
               <span className="text-gradient-saffron">Own Craft DNA</span>
             </h2>
             <p className="text-lg text-[var(--color-warm-gray)] leading-relaxed mb-10">
               India&apos;s artisans are spread across its diverse landscape, each region bringing centuries 
               of environmental adaptation and cultural heritage to their specific craft. 
               Explore the vibrant tapestry of Indian crafts through our interactive tapestry.
             </p>
             
             <div className="space-y-6">
               {['Traditional Weaving Clusters', 'Pottery & Ceramics Hubs', 'Vibrant Block Printing Regions'].map(item => (
                 <div key={item} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-saffron)] shadow-md group-hover:scale-110 transition-transform">
                      <Sparkles size={16} />
                    </div>
                    <span className="font-semibold text-[var(--color-charcoal)]">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <IndiaCraftMap />
          </div>
        </div>
      </section>

      {/* ===== ARTISAN SPOTLIGHT ===== */}
      <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-saffron)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-indigo)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-20">
            <span className="text-xs font-bold text-[var(--color-terracotta)] uppercase tracking-[0.4em]">The Living Hands</span>
            <h2 className="text-6xl font-bold mt-4 mb-6 text-[var(--color-charcoal)]">Artisan Story Corner</h2>
            <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto leading-relaxed">
              Behind every masterpiece is a lifetime of dedication. Meet the master craftspeople 
              preserving India&apos;s cultural soul through their workshop traditions.
            </p>
          </header>

          <HaveliFrame className="p-0 sm:p-0 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 relative z-10 bg-white/80 backdrop-blur-sm">
            {artisans.map((artisan, i) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/artisan/${artisan.id}`}
                  className="card-cultural group block bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={artisan.coverImage}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                       <span className="text-[9px] uppercase tracking-wider font-bold bg-[var(--color-saffron)] text-white px-2 py-1 rounded">
                         Featured Master
                       </span>
                    </div>
                  </div>
                  <div className="relative px-6 pb-6">
                    <div className="w-20 h-20 rounded-2xl border-4 border-white overflow-hidden -mt-10 relative shadow-xl z-10 transition-transform group-hover:-translate-y-1">
                      <img
                        src={artisan.avatar}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-charcoal)] mt-4 group-hover:text-[var(--color-saffron)] transition-colors font-[family-name:var(--font-heading)]">
                      {artisan.name}
                    </h3>
                    <p className="text-sm font-bold text-[var(--color-terracotta)] uppercase tracking-wider mt-1">{artisan.craft}</p>
                    
                    <div className="flex items-center gap-2 mt-4 text-[var(--color-warm-gray)]">
                      <MapPin size={14} className="text-[var(--color-light-gray)]" />
                      <span className="text-xs font-semibold">{artisan.location}</span>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-[var(--color-sand)]">
                      <div className="flex items-center gap-1.5">
                        <Star size={14} fill="var(--color-gold)" stroke="var(--color-gold)" />
                        <span className="text-sm font-bold text-[var(--color-charcoal)]">{artisan.rating}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-warm-gray)]">
                        {artisan.productCount} Collections
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          </HaveliFrame>
        </div>
      </section>

      {/* ===== PLATFORM FEATURES ===== */}
      <section className="py-32 px-4 sm:px-6 bg-[var(--color-charcoal)] relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[var(--color-terracotta)]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <header className="text-center mb-20">
            <span className="text-xs font-bold text-[var(--color-saffron)] uppercase tracking-[0.4em]">Why KarigarAI</span>
            <h2 className="text-6xl font-bold mt-4 mb-6 text-white leading-tight">A Studio for Master Artisans</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              We provide the digital loom for traditional craftspeople to weave their success 
              in the global age, combining high-tech tools with high-touch craftsmanship.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-[var(--color-saffron)]/20">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURAL STORYTELLING ===== */}
      <section className="py-40 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-[12px] border-[var(--color-sand)] -m-4 rounded-[2.5rem] opacity-50" />
              <div className="absolute inset-0 border border-[var(--color-gold)]/20 -m-8 rounded-[3rem]" />
              
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-square relative z-10 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1000"
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
              </div>
              
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 -right-10 glass rounded-3xl p-10 shadow-2xl max-w-[300px] z-20 border-white/50"
              >
                 <div className="text-[var(--color-terracotta)] mb-4">
                    <Sparkles size={32} />
                 </div>
                 <p className="text-xl italic text-[var(--color-charcoal)] font-[family-name:var(--font-heading)] leading-snug">
                  &ldquo;We don&apos;t just sell products; we share the soul of India through our craft.&rdquo;
                 </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-[var(--color-saffron)] uppercase tracking-[0.4em]">Our Mission</span>
              <h2 className="text-6xl font-bold mt-6 mb-8 text-[var(--color-charcoal)] leading-tight">
                Authenticity is <br />
                <span className="text-gradient-saffron">Our Craft</span>
              </h2>
              <p className="text-xl text-[var(--color-warm-gray)] leading-relaxed mb-8 font-medium">
                In a world of mass production, authenticity is the true luxury. We believe that every 
                hand-carved wood panel and every hand-woven silk fiber carries the vibration 
                of the artisan who created it.
              </p>
              <p className="text-lg text-[var(--color-warm-gray)] leading-relaxed mb-10 opacity-70">
                KarigarAI bridges the gap using thoughtful technology — not to replace tradition, 
                but to amplify it. Our platform ensures that the original maker is celebrated 
                globally while being fairly compensated locally.
              </p>
              <Link href="/about" className="btn-primary !px-12 !py-6 text-lg">
                Our Cultural Journey <ChevronRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-[var(--color-indigo)] relative overflow-hidden p-12 sm:p-24 shadow-2xl">
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--color-saffron)]/10 rounded-full blur-[100px]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-terracotta)]/10 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <h2 className="text-5xl sm:text-7xl font-bold text-white mb-8 font-[family-name:var(--font-heading)] leading-tight">
               Are You an <br />
               <span className="text-[var(--color-saffron)] underline decoration-[var(--color-saffron)]/30 underline-offset-8">Indian Master Artisan</span>?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Step onto the global stage. Use our AI-powered studio to tell your story, 
              manage your boutique, and connect with collectors who value your heritage.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/join" className="btn-primary !bg-white !text-[var(--color-indigo)] !px-12 !py-6 text-lg shadow-xl hover:!scale-105">
                Join the Guild <ArrowRight size={22} />
              </Link>
              <Link href="/stories" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 text-lg !px-12 !py-6 glass">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
