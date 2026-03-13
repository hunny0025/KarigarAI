'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const regions = [
  { id: 'rajasthan', name: 'Rajasthan', craft: 'Blue Pottery & Marwari Art', x: 25, y: 35, color: '#F4C430' },
  { id: 'kashmir', name: 'Kashmir', craft: 'Pashmina Weaving', x: 28, y: 15, color: '#2E5894' },
  { id: 'gujarat', name: 'Gujarat', craft: 'Bandhani & Kutchi Embroidery', x: 15, y: 50, color: '#E2725B' },
  { id: 'bihar', name: 'Bihar', craft: 'Madhubani Painting', x: 65, y: 45, color: '#800000' },
  { id: 'up', name: 'Uttar Pradesh', craft: 'Chikankari & Banarasi Weaving', x: 50, y: 38, color: '#D4AF37' },
  { id: 'tamilnadu', name: 'Tamil Nadu', craft: 'Bronze Casting & Silk', x: 45, y: 85, color: '#008080' },
];

export default function IndiaCraftMap() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto aspect-square bg-[var(--color-sand)]/30 rounded-full border border-[var(--color-gold)]/10 overflow-hidden shadow-inner">
      {/* Background Mandala Pattern */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-[150%] h-[150%] animate-spin-slow">
           <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
           <path d="M100 20 L110 90 L180 100 L110 110 L100 180 L90 110 L20 100 L90 90 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Abstract India Map Shape (using placeholder path for visual effect) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] fill-[var(--color-sand)] stroke-[var(--color-gold)]/20 stroke-1">
          <path d="M30 10 Q50 5 70 15 Q80 30 75 50 Q85 70 60 90 Q40 95 25 80 Q15 60 20 40 Q10 20 30 10 Z" />
        </svg>
      </div>

      {/* Region Clusters */}
      {regions.map((region) => (
        <motion.div
          key={region.id}
          className="absolute group cursor-pointer"
          style={{ left: `${region.x}%`, top: `${region.y}%` }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="relative">
            <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: region.color }} />
            <div className="w-4 h-4 rounded-full absolute inset-0 animate-ping opacity-50" style={{ backgroundColor: region.color }} />
            
            <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="glass px-3 py-1.5 rounded-lg shadow-xl">
                <span className="block text-xs font-bold text-[var(--color-charcoal)]">{region.name}</span>
                <span className="block text-[10px] text-[var(--color-warm-gray)]">{region.craft}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 120s linear infinite;
        }
      `}</style>
    </div>
  );
}
