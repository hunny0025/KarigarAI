'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CartPage() {
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const getCartTotal = useStore((s) => s.getCartTotal);
  const clearCart = useStore((s) => s.clearCart);

  const total = getCartTotal();
  const shipping = total > 999 ? 0 : 99;
  const tax = Math.round(total * 0.18);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="w-24 h-24 rounded-full bg-[var(--color-sand-light)] flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-[var(--color-light-gray)]" />
          </div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">Your Cart is Empty</h1>
          <p className="text-[var(--color-warm-gray)] mb-6">Discover beautiful handcrafted products from artisans across India</p>
          <Link href="/marketplace" className="btn-primary">Explore Marketplace <ArrowRight size={16} /></Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)]">Shopping Cart</h1>
          <button onClick={clearCart} className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-terracotta)] transition-colors">
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, i) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 bg-white rounded-xl p-4 border border-[var(--color-sand)] shadow-sm"
              >
                <Link href={`/product/${item.product.id}`} className="shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${item.product.id}`}>
                    <h3 className="font-semibold text-sm sm:text-base text-[var(--color-charcoal)] hover:text-[var(--color-saffron)] transition-colors line-clamp-2">
                      {item.product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-[var(--color-warm-gray)] mt-1">by {item.product.artisanName}</p>
                  <p className="text-xs text-[var(--color-light-gray)] mt-0.5">{item.product.craft} • {item.product.region}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[var(--color-sand-dark)] rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-[var(--color-sand-light)] transition-colors rounded-l-lg"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-[var(--color-sand-light)] transition-colors rounded-r-lg"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[var(--color-charcoal)]">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[var(--color-light-gray)] hover:text-[var(--color-terracotta)] transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)] shadow-sm sticky top-24">
              <h2 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-warm-gray)]">Subtotal ({cart.length} items)</span>
                  <span className="font-medium">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-warm-gray)]">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-warm-gray)]">Tax (GST 18%)</span>
                  <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <hr className="border-[var(--color-sand)]" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{(total + shipping + tax).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {shipping === 0 && (
                <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-xs text-green-700 font-medium">🎉 You qualify for free shipping!</p>
                </div>
              )}

              <Link href="/checkout" className="btn-primary w-full justify-center mt-6 py-4">
                Proceed to Checkout <ArrowRight size={16} />
              </Link>

              <Link href="/marketplace" className="block text-center text-sm text-[var(--color-saffron)] mt-4 hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
