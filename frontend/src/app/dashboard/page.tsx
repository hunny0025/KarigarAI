'use client';

import { motion } from 'framer-motion';
import { Package, ShoppingCart, TrendingUp, Eye, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { CanvasBorder, FloralCorner, ArtisanOverlay } from '@/components/DecorativeElements';

const stats = [
  { label: 'Total Sales', value: '₹2,45,800', change: '+12.5%', up: true, icon: TrendingUp },
  { label: 'Orders', value: '156', change: '+8.2%', up: true, icon: ShoppingCart },
  { label: 'Products', value: '45', change: '+3', up: true, icon: Package },
  { label: 'Views', value: '12,480', change: '-2.1%', up: false, icon: Eye },
];

const recentOrders = [
  { id: 'ART-001', product: 'Blue Pottery Vase', buyer: 'Sunita Mehra', amount: '₹4,200', status: 'Shipped' },
  { id: 'ART-002', product: 'Brass Peacock Lamp', buyer: 'James Wilson', amount: '₹8,500', status: 'Processing' },
  { id: 'ART-003', product: 'Teak Wood Wall Panel', buyer: 'Ayesha Khan', amount: '₹15,000', status: 'Delivered' },
  { id: 'ART-004', product: 'Terracotta Garden Urn', buyer: 'Robert Black', amount: '₹2,500', status: 'Pending' },
];

const statusColors: Record<string, string> = {
  Shipped: 'bg-blue-100 text-blue-700',
  Processing: 'bg-yellow-100 text-yellow-700',
  Delivered: 'bg-green-100 text-green-700',
  Pending: 'bg-gray-100 text-gray-700',
};

export default function DashboardPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Editorial Header */}
      <header className="flex items-end justify-between border-b-2 border-[var(--color-charcoal)] pb-10">
        <div>
          <span className="text-[10px] font-bold text-[var(--color-terracotta)] uppercase tracking-[0.4em] block mb-4">Artisan Studio Intelligence</span>
          <h1 className="text-7xl font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)] leading-tight">
            Weekly Studio <br/>
            <span className="italic opacity-60">Ledger</span>
          </h1>
        </div>
        <div className="text-right">
           <p className="text-sm font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)] mb-2 uppercase tracking-widest">March 2026</p>
           <div className="flex gap-4">
              <button className="btn-pill">Export Archive</button>
           </div>
        </div>
      </header>

      {/* Stats Grid - "Cards on Canvas" Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-white/30 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[var(--color-terracotta)] opacity-40 group-hover:opacity-100 transition-opacity">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <span className={`text-[10px] font-bold flex items-center gap-1 ${stat.up ? 'text-green-700' : 'text-red-700'}`}>
                  {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </span>
              </div>
              <p className="text-5xl font-bold text-[var(--color-charcoal)] font-[family-name:var(--font-heading)] mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-[10px] text-[var(--color-warm-gray)] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-3 gap-16 pt-10">
        <div className="lg:col-span-2">
           <CanvasBorder className="min-h-[500px] bg-white/20 overflow-hidden group">
              <ArtisanOverlay 
                imagePath="/pottery-bg.png" 
                opacity="opacity-0 group-hover:opacity-5"
                className="transition-opacity duration-1000"
              />
              <div className="p-12 h-full flex flex-col relative z-10">
                 <div className="flex items-center justify-between mb-12">
                    <div>
                       <h3 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)]">Market Trajectory</h3>
                       <p className="text-[10px] font-bold text-[var(--color-warm-gray)] uppercase tracking-widest mt-2">Revenue & Volume Distribution</p>
                    </div>
                    <div className="w-16 h-16 border border-[var(--color-sand)] rounded-full flex items-center justify-center italic text-xs font-bold text-[var(--color-light-gray)]">
                       K.AI
                    </div>
                 </div>
                 
                 {/* Sketch-style Chart */}
                 <div className="flex-1 flex items-end gap-4 relative mt-10">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-charcoal)] opacity-20" />
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                      <div key={i} className="flex-1 relative group">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1.2, ease: "anticipate" }}
                          className="w-full bg-[var(--color-charcoal)]/5 border-x border-t border-[var(--color-charcoal)]/10 group-hover:bg-[var(--color-terracotta)]/40 transition-colors duration-500 rounded-t-sm"
                        />
                      </div>
                    ))}
                    <div className="absolute right-0 top-0 text-[var(--color-terracotta)] opacity-20 rotate-12">
                       <FloralCorner className="w-48 h-48" />
                    </div>
                 </div>
              </div>
           </CanvasBorder>
        </div>

        <div className="space-y-16">
           <section>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-8 border-b border-[var(--color-sand)] pb-4">Recent Correspondence</h3>
              <div className="space-y-8">
                 {recentOrders.map((order) => (
                   <div key={order.id} className="group cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                         <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] group-hover:text-[var(--color-terracotta)] transition-colors">{order.product}</h4>
                         <span className="text-xs font-bold font-[family-name:var(--font-heading)] italic">{order.amount}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-[var(--color-warm-gray)]">
                         <span>{order.buyer}</span>
                         <span className="w-1 h-1 rounded-full bg-[var(--color-sand)]" />
                         <span className="text-[var(--color-terracotta)]">{order.status}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </section>

           <div className="p-8 border border-[var(--color-sand)] relative overflow-hidden group hover:border-[var(--color-terracotta)] transition-colors min-h-[220px]">
              <ArtisanOverlay 
                imagePath="/brass-detail.png" 
                opacity="opacity-10 group-hover:opacity-20"
                className="saturate-0 mix-blend-multiply"
              />
              <div className="relative z-10">
                <div className="absolute top-0 right-0">
                   <ArrowUpRight size={20} className="text-[var(--color-terracotta)] opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">Studio Archives</h4>
                <p className="text-xs text-[var(--color-warm-gray)] leading-relaxed italic mb-6">"Every vessel tells a story of the hands that shaped it."</p>
                <button className="btn-pill w-full">Access Workshop Data</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
