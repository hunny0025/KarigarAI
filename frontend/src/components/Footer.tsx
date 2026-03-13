'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { RangoliDivider } from './DecorativeElements';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ivory)] relative pt-20 pb-10 overflow-hidden">
      {/* Texture and Pattern backgrounds */}
      <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-saffron)] via-[var(--color-terracotta)] to-[var(--color-indigo)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center text-white shadow-md">
                <span className="text-lg font-bold font-[family-name:var(--font-heading)]">K</span>
              </div>
              <span className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)]">
                Karigar<span className="text-[var(--color-terracotta)]">AI</span>
              </span>
            </Link>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6 font-medium">
              Empowering India&apos;s master artisans by bridging the gap between traditional craft and the global marketplace.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-terracotta)] hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-charcoal)] uppercase tracking-wider">Marketplace</h3>
            <ul className="space-y-4">
              {['Textiles & Weaving', 'Pottery & Ceramics', 'Wood Carving', 'Metal Work', 'Jewelry'].map((link) => (
                <li key={link}>
                  <Link href={`/marketplace?category=${link}`} className="text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] transition-colors inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-charcoal)] uppercase tracking-wider">KarigarAI</h3>
            <ul className="space-y-4">
              {['Our Story', 'How it Works', 'Verified Artisans', 'Craft Regions', 'Impact Reports'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] transition-colors inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-charcoal)] uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-[var(--color-warm-gray)]">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[var(--color-terracotta)] mt-1 flex-shrink-0" />
                <span>Varanasi Craft Cluster, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-terracotta)] flex-shrink-0" />
                <span>support@karigarai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-terracotta)] flex-shrink-0" />
                <span>+91 (0) 542 222 4444</span>
              </li>
            </ul>
          </div>
        </div>

        <RangoliDivider className="opacity-20 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-[var(--color-sand)]">
          <p className="text-sm text-[var(--color-warm-gray)] font-medium">
            &copy; {currentYear} KarigarAI. Preserving traditions, empowering futures.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] uppercase tracking-widest font-bold font-[family-name:var(--font-heading)]">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] uppercase tracking-widest font-bold font-[family-name:var(--font-heading)]">Terms of Service</Link>
            <Link href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] uppercase tracking-widest font-bold font-[family-name:var(--font-heading)]">Impact Policy</Link>
          </div>
        </div>
      </div>

      {/* Aesthetic Motifs */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--color-terracotta)]">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>
    </footer>
  );
}
