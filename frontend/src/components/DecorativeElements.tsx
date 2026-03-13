export const FloralCorner = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none opacity-20 ${className}`}>
    <svg viewBox="0 0 100 100" className="w-24 h-24 fill-current">
      <path d="M0 0 C 20 0, 40 10, 50 30 C 60 10, 80 0, 100 0 L 100 5 L 95 5 C 75 5, 60 15, 55 35 L 50 50 L 45 35 C 40 15, 25 5, 5 5 L 0 5 Z" />
      <path d="M0 10 Q 15 15, 10 30 T 30 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="15" r="2" />
    </svg>
  </div>
);

export const CanvasBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative p-1 border border-[var(--color-sand)] rounded-[2rem] ${className}`}>
    <div className="absolute top-0 left-0">
      <FloralCorner className="text-[var(--color-terracotta)] rotate-0" />
    </div>
    <div className="absolute top-0 right-0">
      <FloralCorner className="text-[var(--color-terracotta)] rotate-90" />
    </div>
    <div className="absolute bottom-0 left-0">
      <FloralCorner className="text-[var(--color-terracotta)] -rotate-90" />
    </div>
    <div className="absolute bottom-0 right-0">
      <FloralCorner className="text-[var(--color-terracotta)] rotate-180" />
    </div>
    <div className="relative z-10 bg-white/50 backdrop-blur-[2px] rounded-[1.8rem] overflow-hidden">
      {children}
    </div>
  </div>
);

export const TextureOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-20 bg-canvas" />
);

export const ArtisanOverlay = ({ imagePath, className = "", opacity = "opacity-10" }: { imagePath: string, className?: string, opacity?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <img 
      src={imagePath} 
      alt="Artisan at work" 
      className={`w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000 ${opacity}`}
    />
  </div>
);

export const ArtifactIcon = ({ className = "" }: { className?: string }) => (
  <div className={`w-6 h-6 text-[var(--color-terracotta)] ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zM12 2v20M4 6l8 4 8-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const RangoliDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 my-12 opacity-30 text-[var(--color-terracotta)] ${className}`}>
    <div className="h-px w-24 bg-current" />
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
    </svg>
    <div className="h-px w-24 bg-current" />
  </div>
);

export const HaveliFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative frame-heavy artifact-shadow bg-[var(--color-ivory)] ${className}`}>
    <div className="absolute top-0 left-0 p-2">
      <svg viewBox="0 0 50 50" className="w-12 h-12 fill-[var(--color-charcoal)] opacity-80 rotate-0">
        <path d="M0 0h50v5H5v45H0zM10 10h30v5H15v25h-5z" />
      </svg>
    </div>
    <div className="absolute top-0 right-0 p-2">
      <svg viewBox="0 0 50 50" className="w-12 h-12 fill-[var(--color-charcoal)] opacity-80 rotate-90">
        <path d="M0 0h50v5H5v45H0zM10 10h30v5H15v25h-5z" />
      </svg>
    </div>
    <div className="absolute bottom-0 left-0 p-2">
      <svg viewBox="0 0 50 50" className="w-12 h-12 fill-[var(--color-charcoal)] opacity-80 -rotate-90">
        <path d="M0 0h50v5H5v45H0zM10 10h30v5H15v25h-5z" />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 p-2">
      <svg viewBox="0 0 50 50" className="w-12 h-12 fill-[var(--color-charcoal)] opacity-80 rotate-180">
        <path d="M0 0h50v5H5v45H0zM10 10h30v5H15v25h-5z" />
      </svg>
    </div>
    <div className="relative z-10 p-8 sm:p-12">
      {children}
    </div>
  </div>
);

export const OrnateDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full flex items-center justify-center my-16 ${className}`}>
    <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[var(--color-charcoal)] to-transparent opacity-60" />
    <svg viewBox="0 0 100 20" className="w-48 h-10 fill-[var(--color-charcoal)] mx-4">
      <path d="M50 0L60 10L100 10L100 12L62 12L50 20L38 12L0 12L0 10L40 10Z" />
      <circle cx="50" cy="10" r="4" fill="var(--color-terracotta)" />
    </svg>
    <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-[var(--color-charcoal)] to-transparent opacity-60" />
  </div>
);

