'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, ChevronDown, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const orders = [
  { id: 'KAI-2026-001', product: 'Banarasi Silk Saree — Royal Blue', buyer: 'Priya Sharma', buyerCity: 'Mumbai', amount: 12500, date: '2026-03-12', status: 'Processing', items: 1 },
  { id: 'KAI-2026-002', product: 'Chikankari Embroidered Kurta', buyer: 'Amit Patel', buyerCity: 'Delhi', amount: 3200, date: '2026-03-11', status: 'Shipped', items: 2 },
  { id: 'KAI-2026-003', product: 'Banarasi Silk Saree — Gold', buyer: 'Sarah Johnson', buyerCity: 'London', amount: 15000, date: '2026-03-10', status: 'Delivered', items: 1 },
  { id: 'KAI-2026-004', product: 'Silk Dupatta Set', buyer: 'Maria Garcia', buyerCity: 'Barcelona', amount: 4800, date: '2026-03-09', status: 'Pending', items: 3 },
  { id: 'KAI-2026-005', product: 'Zardozi Clutch Bag', buyer: 'Anita Kumar', buyerCity: 'Bangalore', amount: 2200, date: '2026-03-08', status: 'Delivered', items: 1 },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  Pending: { color: 'bg-gray-100 text-gray-700', icon: <Clock size={14} /> },
  Processing: { color: 'bg-yellow-100 text-yellow-700', icon: <Package size={14} /> },
  Shipped: { color: 'bg-blue-100 text-blue-700', icon: <Truck size={14} /> },
  Delivered: { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={14} /> },
};

export default function OrdersPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = orders.filter((o) => {
    if (filter !== 'All' && o.status !== filter) return false;
    if (search && !o.product.toLowerCase().includes(search.toLowerCase()) && !o.buyer.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">Orders</h1>
      <p className="text-sm text-[var(--color-warm-gray)] mb-6">Manage and track your customer orders</p>

      {/* Status tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['All', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`text-xs px-4 py-2 rounded-full font-medium transition-colors ${filter === s
              ? 'bg-[var(--color-saffron)] text-white'
              : 'bg-white border border-[var(--color-sand-dark)] text-[var(--color-warm-gray)] hover:border-[var(--color-saffron)]'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 border border-[var(--color-sand)] mb-6">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)]" />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
          />
        </div>
      </div>

      {/* Orders list */}
      <div className="space-y-3">
        {filtered.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border border-[var(--color-sand)] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[var(--color-warm-gray)]">{order.id}</span>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${statusConfig[order.status].color}`}>
                    {statusConfig[order.status].icon}
                    {order.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-charcoal)]">{order.product}</p>
                <p className="text-xs text-[var(--color-warm-gray)] mt-1">
                  {order.buyer} • {order.buyerCity} • {order.items} item{order.items > 1 ? 's' : ''}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[var(--color-charcoal)]">₹{order.amount.toLocaleString('en-IN')}</p>
                <p className="text-xs text-[var(--color-light-gray)]">{order.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-sand-dark)] text-[var(--color-warm-gray)] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors">
                  <Eye size={14} />
                </button>
                {order.status === 'Processing' && (
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-saffron)] text-white hover:bg-[var(--color-saffron-dark)] transition-colors">
                    Ship
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[var(--color-sand)]">
            <Package size={40} className="text-[var(--color-light-gray)] mx-auto mb-3" />
            <p className="text-sm text-[var(--color-warm-gray)]">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}
