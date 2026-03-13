'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Shield, Sparkles, MapPin, ArrowRight } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-indigo-dark)] to-[var(--color-indigo)]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6"
          >
            Bridging Tradition &<br />
            <span className="text-[var(--color-saffron-light)]">Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            KarigarAI is on a mission to preserve India&apos;s rich craft heritage
            by connecting master artisans with a global audience through thoughtful technology.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-[var(--color-saffron)] uppercase tracking-[0.2em]">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mt-3 mb-6">
              Every Craft Tells a Story
            </h2>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
              India is home to over 7 million artisan families, representing hundreds of unique craft traditions that
              span thousands of years. Yet, many of these artisans struggle to reach markets beyond local fairs.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
              KarigarAI was born from a simple belief: that technology should serve tradition, not replace it.
              We use AI sparingly and specifically — to help artisans present their work, not to generate it.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed">
              Our platform is <strong>AI-assisted, not AI-dependent</strong>. Every product on KarigarAI is
              handcrafted by a real artisan, and every story is authentic.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800"
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-[var(--color-sand-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-[var(--color-indigo)] uppercase tracking-[0.2em]">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mt-3">
              From Workshop to World
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Artisan Joins', desc: 'Verified craftspeople register and set up their digital storefront.' },
              { step: '02', title: 'Upload & Enhance', desc: 'AI assists with descriptions and image enhancement — artisan keeps full control.' },
              { step: '03', title: 'Global Discovery', desc: 'Smart search and recommendations connect crafts with interested buyers worldwide.' },
              { step: '04', title: 'Direct Purchase', desc: 'Buyers purchase directly from artisans, ensuring fair compensation.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl p-6 border border-[var(--color-sand)] relative"
              >
                <span className="text-4xl font-bold text-[var(--color-saffron)]/20 font-[family-name:var(--font-heading)] absolute top-4 right-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-warm-gray)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-[var(--color-terracotta)] uppercase tracking-[0.2em]">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mt-3">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={24} />, title: 'Craft Preservation', desc: 'Ensuring ancient art forms continue to thrive for future generations.' },
              { icon: <Users size={24} />, title: 'Fair Trade', desc: 'Direct connections between artisans and buyers, ensuring ethical pricing.' },
              { icon: <Globe size={24} />, title: 'Global Reach', desc: 'Taking local craftsmanship to international markets and audiences.' },
              { icon: <Shield size={24} />, title: 'Authenticity', desc: 'Every artisan and product is verified for genuine craftsmanship.' },
              { icon: <Sparkles size={24} />, title: 'Thoughtful AI', desc: 'AI that helps, not replaces — always in service of the artisan.' },
              { icon: <MapPin size={24} />, title: 'Community First', desc: 'Building sustainable livelihoods within artisan communities.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-6 rounded-xl bg-white border border-[var(--color-sand)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-saffron)]/10 flex items-center justify-center text-[var(--color-saffron)] mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--color-warm-gray)]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-terracotta)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an artisan looking to grow your business or a buyer seeking authentic crafts,
            KarigarAI is your platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/marketplace" className="bg-white text-[var(--color-saffron)] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow inline-flex items-center gap-2">
              Explore Crafts <ArrowRight size={16} />
            </Link>
            <Link href="/join" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              Become an Artisan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
