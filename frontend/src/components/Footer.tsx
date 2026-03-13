import Link from 'next/link';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  'Explore': [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Craft Regions', href: '/regions' },
    { label: 'Artisan Stories', href: '/artisans' },
    { label: 'New Arrivals', href: '/marketplace?sort=newest' },
  ],
  'For Artisans': [
    { label: 'Artisan Portal', href: '/dashboard' },
    { label: 'Sell on KarigarAI', href: '/join' },
    { label: 'Success Stories', href: '/stories' },
    { label: 'Resources', href: '/resources' },
  ],
  'Support': [
    { label: 'Help Center', href: '/help' },
    { label: 'Shipping Info', href: '/shipping' },
    { label: 'Returns Policy', href: '/returns' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-sand)]">
      {/* Ornate divider */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-saffron)] via-[var(--color-gold)] to-[var(--color-terracotta)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-terracotta)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                Karigar<span className="text-[var(--color-saffron)]">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--color-light-gray)] mb-6 max-w-sm">
              Connecting India&apos;s finest artisans with the world. Every purchase preserves a tradition and empowers a craftsperson.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[var(--color-warm-gray)] flex items-center justify-center hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-light-gray)] hover:text-[var(--color-saffron)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-warm-gray)]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--color-warm-gray)]">
              © 2026 KarigarAI. Celebrating India&apos;s craft heritage.
            </p>
            <div className="flex gap-6 text-xs text-[var(--color-warm-gray)]">
              <Link href="/privacy" className="hover:text-[var(--color-saffron)] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[var(--color-saffron)] transition-colors">Terms</Link>
              <Link href="/sitemap" className="hover:text-[var(--color-saffron)] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
