'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, MapPin, Truck, Check } from 'lucide-react';
import { useStore } from '@/lib/store';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const cart = useStore((s) => s.cart);
  const getCartTotal = useStore((s) => s.getCartTotal);
  const clearCart = useStore((s) => s.clearCart);
  const [step, setStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = getCartTotal();
  const shipping = total > 999 ? 0 : 99;
  const tax = Math.round(total * 0.18);
  const grandTotal = total + shipping + tax;

  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">Order Placed!</h1>
          <p className="text-[var(--color-warm-gray)] mb-2">Thank you for supporting Indian artisans.</p>
          <p className="text-sm text-[var(--color-warm-gray)] mb-6">Order #KAI-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          <Link href="/marketplace" className="btn-primary">Continue Shopping</Link>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">No Items to Checkout</h1>
          <Link href="/marketplace" className="btn-primary">Browse Marketplace</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-saffron)] mb-6">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-8">Checkout</h1>

        {/* Progress steps */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 ${i <= step ? 'text-[var(--color-saffron)]' : 'text-[var(--color-light-gray)]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i < step ? 'bg-[var(--color-saffron)] text-white' : i === step ? 'border-2 border-[var(--color-saffron)] text-[var(--color-saffron)]' : 'border-2 border-[var(--color-light-gray)] text-[var(--color-light-gray)]'}`}>
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-sm font-medium hidden sm:inline">{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 sm:w-24 h-0.5 mx-3 ${i < step ? 'bg-[var(--color-saffron)]' : 'bg-[var(--color-sand-dark)]'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {step === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
                <h2 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[var(--color-saffron)]" /> Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Address</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">City</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">PIN Code</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">State</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--color-warm-gray)] block mb-1">Phone</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-[var(--color-sand-dark)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]" />
                  </div>
                </div>
                <button onClick={() => setStep(1)} className="btn-primary mt-6 w-full justify-center">
                  Continue to Payment
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
                <h2 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4 flex items-center gap-2">
                  <CreditCard size={18} className="text-[var(--color-saffron)]" /> Payment Method
                </h2>
                <div className="space-y-3">
                  {['Credit/Debit Card', 'UPI', 'Net Banking', 'Cash on Delivery'].map((method) => (
                    <label key={method} className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-sand)] hover:border-[var(--color-saffron)] cursor-pointer transition-colors">
                      <input type="radio" name="payment" className="accent-[var(--color-saffron)]" />
                      <span className="text-sm font-medium">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(0)} className="btn-secondary flex-1 justify-center">Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary flex-1 justify-center">Review Order</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl p-6 border border-[var(--color-sand)]">
                <h2 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4">Order Review</h2>
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-ivory)]">
                      <img src={item.product.images[0]} alt="" className="w-14 h-14 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.title}</p>
                        <p className="text-xs text-[var(--color-warm-gray)]">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-bold">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-secondary flex-1 justify-center">Back</button>
                  <button onClick={() => { setOrderPlaced(true); clearCart(); }} className="btn-primary flex-1 justify-center">
                    Place Order — ₹{grandTotal.toLocaleString('en-IN')}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-[var(--color-sand)] sticky top-24">
              <h3 className="text-sm font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Shipping</span><span className={shipping === 0 ? 'text-green-600' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Tax (GST)</span><span>₹{tax.toLocaleString('en-IN')}</span></div>
                <hr className="border-[var(--color-sand)]" />
                <div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹{grandTotal.toLocaleString('en-IN')}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
