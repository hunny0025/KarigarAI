'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, ShoppingBag, Users, ArrowUpRight } from 'lucide-react';

const monthlyData = [
  { month: 'Oct', sales: 18200, views: 4500, orders: 23 },
  { month: 'Nov', sales: 24500, views: 5800, orders: 31 },
  { month: 'Dec', sales: 42000, views: 9200, orders: 48 },
  { month: 'Jan', sales: 31000, views: 7100, orders: 38 },
  { month: 'Feb', sales: 28500, views: 6400, orders: 34 },
  { month: 'Mar', sales: 35800, views: 8300, orders: 42 },
];

const topProducts = [
  { name: 'Banarasi Silk Saree — Royal Blue', sales: 127, revenue: '₹15,87,500', conversion: '8.2%' },
  { name: 'Chikankari Embroidered Kurta', sales: 72, revenue: '₹2,30,400', conversion: '5.6%' },
  { name: 'Silk Dupatta — Gold Border', sales: 45, revenue: '₹1,26,000', conversion: '4.1%' },
];

export default function AnalyticsPage() {
  const maxSales = Math.max(...monthlyData.map((d) => d.sales));

  return (
    <div>
      <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">Analytics</h1>
      <p className="text-sm text-[var(--color-warm-gray)] mb-6">Track your store performance and insights</p>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Revenue (This Month)', value: '₹35,800', change: '+25.6%', icon: TrendingUp },
          { label: 'Total Views', value: '8,300', change: '+29.7%', icon: Eye },
          { label: 'Orders', value: '42', change: '+23.5%', icon: ShoppingBag },
          { label: 'Unique Visitors', value: '3,240', change: '+18.2%', icon: Users },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border border-[var(--color-sand)]"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={18} className="text-[var(--color-saffron)]" />
              <span className="text-xs font-semibold text-green-600 flex items-center gap-0.5">
                <ArrowUpRight size={12} /> {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-[var(--color-warm-gray)] mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <h3 className="text-sm font-bold mb-6">Monthly Revenue</h3>
          <div className="space-y-3">
            {monthlyData.map((d, i) => (
              <div key={d.month} className="flex items-center gap-3">
                <span className="text-xs text-[var(--color-warm-gray)] w-8">{d.month}</span>
                <div className="flex-1 h-8 bg-[var(--color-ivory)] rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.sales / maxSales) * 100}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-saffron-light)] rounded-lg flex items-center justify-end pr-2"
                  >
                    <span className="text-[10px] font-bold text-white">₹{(d.sales / 1000).toFixed(1)}k</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <h3 className="text-sm font-bold mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-start gap-3">
                <span className="text-lg font-bold text-[var(--color-saffron)]/30 font-[family-name:var(--font-heading)]">
                  0{i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <div className="flex gap-3 mt-1 text-[11px] text-[var(--color-warm-gray)]">
                    <span>{product.sales} sales</span>
                    <span>{product.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion funnel */}
      <div className="mt-6 bg-white rounded-xl p-6 border border-[var(--color-sand)]">
        <h3 className="text-sm font-bold mb-6">Conversion Funnel</h3>
        <div className="flex items-end justify-around gap-4 h-48">
          {[
            { label: 'Views', value: 8300, pct: '100%' },
            { label: 'Product Views', value: 4150, pct: '50%' },
            { label: 'Add to Cart', value: 830, pct: '10%' },
            { label: 'Checkout', value: 498, pct: '6%' },
            { label: 'Purchase', value: 42, pct: '0.5%' },
          ].map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-2 flex-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(step.value / 8300) * 100}%` }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="w-full max-w-[60px] rounded-t-lg bg-gradient-to-t from-[var(--color-indigo)] to-[var(--color-indigo-light)] min-h-[8px]"
              />
              <span className="text-xs font-bold">{step.value.toLocaleString()}</span>
              <span className="text-[10px] text-[var(--color-warm-gray)] text-center">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
