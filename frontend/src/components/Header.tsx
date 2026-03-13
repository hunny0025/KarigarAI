'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Menu, X, User, ChevronDown } from 'lucide-react';
import { useStore } from '@/lib/store';

const navLinks = [
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Craft Regions', href: '/regions' },
  { label: 'Artisans', href: '/artisans' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = useStore((s) => s.getCartCount());

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="hidden sm:flex items-center justify-between py-1.5 text-xs border-b border-[var(--color-sand-dark)]">
          <span className="text-[var(--color-warm-gray)]">
            🇮🇳 Empowering India&apos;s artisans, one craft at a time
          </span>
          <div className="flex items-center gap-4 text-[var(--color-warm-gray)]">
            <Link href="/dashboard" className="hover:text-[var(--color-saffron)] transition-colors">Artisan Portal</Link>
            <span>|</span>
            <Link href="#" className="hover:text-[var(--color-saffron)] transition-colors">Help</Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[var(--font-heading)]">K</span>
            </div>
            <div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)]">
                Karigar<span className="text-[var(--color-saffron)]">AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-saffron)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-[var(--color-charcoal)]" />
            </button>

            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} className="text-[var(--color-charcoal)]" />
            </Link>

            <Link
              href="/cart"
              className="p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} className="text-[var(--color-charcoal)]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[var(--color-saffron)] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="hidden sm:flex p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors"
              aria-label="Account"
            >
              <User size={20} className="text-[var(--color-charcoal)]" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-[var(--color-sand-dark)] overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-4 py-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)]" />
                <input
                  type="text"
                  placeholder="Search for crafts, artisans, regions..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-[var(--color-sand-light)] border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)] focus:border-transparent"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-[var(--color-sand-dark)] overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-[var(--color-charcoal)] hover:text-[var(--color-saffron)] transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-[var(--color-saffron)] py-2"
              >
                Artisan Portal →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
