'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cart = useStore((state) => state.cart);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Craft Regions', href: '/regions' },
    { name: 'Artisans', href: '/artisans' },
    { name: 'About', href: '/about' },
  ];

  const isDashboard = pathname.startsWith('/dashboard');

  if (isDashboard) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl font-bold font-[family-name:var(--font-heading)]">K</span>
          </div>
          <span className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--color-charcoal)] group-hover:text-[var(--color-saffron)] transition-colors">
            Karigar<span className="text-[var(--color-terracotta)]">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-[var(--color-saffron)] ${
                pathname === link.href ? 'text-[var(--color-saffron)]' : 'text-[var(--color-charcoal)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-[var(--color-sand)] rounded-full transition-colors text-[var(--color-charcoal)]">
            <Search size={22} />
          </button>
          
          <Link href="/wishlist" className="p-2 hover:bg-[var(--color-sand)] rounded-full transition-colors text-[var(--color-charcoal)] relative">
            <Heart size={22} />
          </Link>

          <Link href="/cart" className="p-2 hover:bg-[var(--color-sand)] rounded-full transition-colors text-[var(--color-charcoal)] relative">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-[var(--color-terracotta)] text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </Link>

          <Link 
            href="/dashboard" 
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[var(--color-indigo)] text-white rounded-full text-xs font-bold hover:bg-[var(--color-indigo-dark)] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
             Artisan Portal
          </Link>

          <button 
            className="md:hidden p-2 text-[var(--color-charcoal)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[var(--color-sand)] p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-[var(--color-charcoal)]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-3 bg-[var(--color-indigo)] text-white text-center rounded-xl font-bold"
          >
            Artisan Portal
          </Link>
        </motion.div>
      )}
      
      {/* Editorial top bar */}
      <div className="hidden sm:block absolute top-0 left-0 right-0 py-1 bg-gradient-to-r from-[var(--color-saffron)]/10 via-[var(--color-terracotta)]/10 to-[var(--color-indigo)]/10 text-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[var(--color-warm-gray)] opacity-60">
          Empowering India's artisans, one craft at a time
        </span>
      </div>
    </header>
  );
}
