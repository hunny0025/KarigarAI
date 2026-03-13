'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Package, ShoppingCart, BarChart3,
  Image as ImageIcon, Sparkles, Settings, Menu, X, LogOut
} from 'lucide-react';
import { useState } from 'react';

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
    <div className="min-h-screen bg-[var(--color-ivory)] flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-[var(--color-sand)] flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo */}
        <div className="p-5 border-b border-[var(--color-sand)]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-lg font-bold font-[family-name:var(--font-heading)]">
              Karigar<span className="text-[var(--color-saffron)]">AI</span>
            </span>
          </Link>
          <p className="text-[10px] text-[var(--color-warm-gray)] mt-1 uppercase tracking-wider">Artisan Dashboard</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                  ? 'bg-[var(--color-saffron)]/10 text-[var(--color-saffron)]'
                  : 'text-[var(--color-warm-gray)] hover:bg-[var(--color-sand-light)] hover:text-[var(--color-charcoal)]'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-[var(--color-sand)]">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
              alt="Artisan"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Rajan Ansari</p>
              <p className="text-[10px] text-[var(--color-warm-gray)]">Master Weaver</p>
            </div>
            <button className="text-[var(--color-light-gray)] hover:text-[var(--color-terracotta)]">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-14 bg-white border-b border-[var(--color-sand)] flex items-center px-4 gap-4 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
            <Menu size={20} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2 text-xs text-[var(--color-warm-gray)]">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Store Online
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
