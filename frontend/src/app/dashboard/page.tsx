'use client';

import { motion } from 'framer-motion';
import { Package, ShoppingCart, TrendingUp, Eye, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  { label: 'Total Sales', value: '₹2,45,800', change: '+12.5%', up: true, icon: TrendingUp },
  { label: 'Orders', value: '156', change: '+8.2%', up: true, icon: ShoppingCart },
  { label: 'Products', value: '45', change: '+3', up: true, icon: Package },
  { label: 'Views', value: '12,480', change: '-2.1%', up: false, icon: Eye },
];

const recentOrders = [
  { id: 'KAI-001', product: 'Banarasi Silk Saree', buyer: 'Priya Sharma', amount: '₹12,500', status: 'Shipped' },
  { id: 'KAI-002', product: 'Chikankari Kurta', buyer: 'Amit Patel', amount: '₹3,200', status: 'Processing' },
  { id: 'KAI-003', product: 'Zardozi Clutch', buyer: 'Sarah Johnson', amount: '₹4,500', status: 'Delivered' },
  { id: 'KAI-004', product: 'Silk Dupatta', buyer: 'Maria Garcia', amount: '₹2,800', status: 'Pending' },
];

const statusColors: Record<string, string> = {
  Shipped: 'bg-blue-100 text-blue-700',
  Processing: 'bg-yellow-100 text-yellow-700',
  Delivered: 'bg-green-100 text-green-700',
  Pending: 'bg-gray-100 text-gray-700',
};

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Welcome back, Rajan!</h1>
        <p className="text-sm text-[var(--color-warm-gray)] mt-1">Here&apos;s what&apos;s happening with your store today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border border-[var(--color-sand)] shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-saffron)]/10 flex items-center justify-center">
                <stat.icon size={20} className="text-[var(--color-saffron)]" />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-[var(--color-charcoal)]">{stat.value}</p>
            <p className="text-xs text-[var(--color-warm-gray)] mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart placeholder + recent orders */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Sales chart */}
        <div className="lg:col-span-3 bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <h3 className="text-sm font-bold mb-4">Sales Overview</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--color-saffron)] to-[var(--color-saffron-light)] opacity-80 hover:opacity-100 transition-opacity cursor-pointer relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-charcoal)] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ₹{Math.round(h * 300).toLocaleString('en-IN')}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-[var(--color-light-gray)]">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-[var(--color-sand)]">
          <h3 className="text-sm font-bold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-ivory)] transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{order.product}</p>
                  <p className="text-[11px] text-[var(--color-warm-gray)]">{order.buyer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{order.amount}</p>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
