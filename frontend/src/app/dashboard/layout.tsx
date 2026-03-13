'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Package, ShoppingCart, BarChart3,
  Image as ImageIcon, Sparkles, Settings, Menu, X, LogOut, Bell
} from 'lucide-react';
import { useState } from 'react';
import { TextureOverlay, ArtisanOverlay, ArtifactIcon } from '@/components/DecorativeElements';

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Products', href: '/dashboard/products', icon: Package },
  { label: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
  { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { label: 'Media', href: '/dashboard/media', icon: ImageIcon },
  { label: 'AI Tools', href: '/dashboard/ai-tools', icon: Sparkles },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] flex selection:bg-[var(--color-terracotta)] selection:text-white">
      <TextureOverlay />
      
      {/* Sidebar - Styled like an editorial column */}
      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-80 bg-inherit border-r border-[var(--color-sand)] flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-hidden`}>
        <ArtisanOverlay 
          imagePath="/wood-artisan.png" 
          opacity="opacity-5"
          className="grayscale saturate-0"
        />
        {/* Logo - Editorial Style */}
        <div className="p-10 border-b border-[var(--color-sand)]">
          <Link href="/" className="group block">
            <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] leading-none">
              Karigar<br/>
              <span className="text-[var(--color-terracotta)] group-hover:tracking-wider transition-all duration-700">Studio</span>
            </h1>
            <p className="text-[9px] text-[var(--color-warm-gray)] mt-4 uppercase tracking-[0.3em] font-bold opacity-50 underline decoration-[var(--color-terracotta)]/30 underline-offset-4">Established 1947</p>
          </Link>
        </div>

        {/* Nav - High Contrast */}
        <nav className="flex-1 py-10 px-6 space-y-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-5 px-6 py-4 rounded-xl transition-all duration-500 group relative ${isActive
                  ? 'text-[var(--color-charcoal)]'
                  : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/40 shadow-sm border border-[var(--color-sand)] rounded-xl z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={18} className={`relative z-10 transition-transform duration-500 group-hover:scale-110 ${isActive ? 'text-[var(--color-terracotta)] shadow-glow' : 'text-[var(--color-light-gray)] group-hover:text-[var(--color-terracotta)]'}`} />
                <span className="relative z-10 font-bold text-sm tracking-widest uppercase font-[family-name:var(--font-heading)]">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User - Vintage Ledger Style */}
        <div className="p-10 border-t border-[var(--color-sand)] bg-[var(--color-sand)]/20">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-sand)] saturate-[0.8] contrast-[1.1]">
               <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                alt="Artisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-[var(--color-charcoal)] font-[family-name:var(--font-heading)]">R. Ansari</p>
              <p className="text-[10px] text-[var(--color-warm-gray)] font-bold uppercase tracking-widest opacity-60">Master Weaver</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-[var(--color-charcoal)]/40 lg:hidden backdrop-blur-md" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden overflow-y-auto">
        {/* Top bar - Glass Editorial */}
        <div className="h-24 px-12 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-6">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-3 hover:bg-[var(--color-sand)] rounded-xl">
              <Menu size={20} />
            </button>
            <h2 className="text-2xl font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)] italic opacity-80">
                Loom & Canvas Report
            </h2>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-[var(--color-terracotta)]/5 text-[var(--color-terracotta)] text-[10px] font-bold rounded-full border border-[var(--color-terracotta)]/20 uppercase tracking-[0.2em]">
              <ArtifactIcon className="w-3 h-3 animate-spin-slow" />
              Studio Online
            </div>
            <button className="relative p-3 text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] transition-colors">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[var(--color-terracotta)] rounded-full border-2 border-[var(--color-ivory)]" />
            </button>
          </div>
        </div>

        {/* Page Content - Parchment padding */}
        <div className="flex-1 px-12 pb-12">
          {children}
        </div>
      </div>
    </div>
  );
}
