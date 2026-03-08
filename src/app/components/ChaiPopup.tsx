import { useState, useRef, useEffect } from 'react';

// ── Props ─────────────────────────────────────────────────────────────────────

interface ChaiPopupProps {
  chai: { label: string; emoji: string; bg: string; text: string; border: string; key: string };
  initialFill: number;
  onClose: () => void;
  onSubmit: (fill: number) => void;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getRatingLabel(p: number): string {
  if (p <= 20) return 'Kadvi Chai';
  if (p <= 40) return 'Feeki Chai';
  if (p <= 60) return 'Thik-Thak Chai';
  if (p <= 80) return 'Tasty Chai';
  return 'Kadak Chai';
}

function getChaiColor(p: number): string {
  if (p <= 20) return '#6B2D0E';
  if (p <= 40) return '#92400E';
  if (p <= 60) return '#B45309';
  if (p <= 80) return '#C2410C';
  return '#7C2D12';
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ChaiPopup({ chai, initialFill, onClose, onSubmit }: ChaiPopupProps) {
  const [fill, setFill]         = useState(initialFill);
  const [isDragging, setIsDragging] = useState(false);
  const glassRef      = useRef<HTMLDivElement>(null);
  const dragStartY    = useRef(0);
  const dragStartFill = useRef(fill);

  // Scroll wheel on glass
  useEffect(() => {
    const el = glassRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setFill(p => Math.max(0, Math.min(100, p + (e.deltaY > 0 ? -1 : 1))));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Pointer drag
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartY.current    = e.clientY;
    dragStartFill.current = fill;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = Math.round((dragStartY.current - e.clientY) / 2);
    setFill(Math.max(0, Math.min(100, dragStartFill.current + delta)));
  };
  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Derived
  const chaiColor   = getChaiColor(fill);
  const ratingLabel = getRatingLabel(fill);
  const isFull      = fill >= 98;

  // SVG: inner top y≈10, inner bottom y≈118  →  usable height = 108
  const fillHeight = (fill / 100) * 108;
  const fillY      = 118 - fillHeight;

  return (
    <>
      <style>{`
        @keyframes chaiPopIn {
          from { opacity: 0; transform: scale(0.84) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes steamRise {
          0%   { opacity: 0;   transform: translateY(0px)   scaleX(1);   }
          40%  { opacity: 0.5; }
          100% { opacity: 0;   transform: translateY(-32px) scaleX(1.4); }
        }
        .chai-steam { animation: steamRise 2s ease-out infinite; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(8px)',
          padding: 24,
        }}
      >
        {/* Modal card */}
        <div style={{
          position: 'relative', width: '100%', maxWidth: 300,
          background: 'linear-gradient(160deg, #FFF8F0 0%, #ffffffff 50%, #ffffffff 100%)',
          border: '1px solid rgba(251,191,36,0.4)',
          borderRadius: 20,
          padding: '22px 20px 20px',
          boxShadow: '0 0 0 1px rgba(251,191,36,0.2), 0 28px 64px rgba(0,0,0,0.6)',
          animation: 'chaiPopIn 240ms cubic-bezier(0.34,1.56,0.64,1) both',
        }}>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 12, right: 12,
              width: 26, height: 26, borderRadius: '50%',
              background: 'rgba(120,53,15,0.12)', border: '1px solid rgba(120,53,15,0.20)',
              color: 'rgba(120,53,15,0.6)', fontSize: '0.8rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(120,53,15,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(120,53,15,0.12)')}
          >✕</button>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <h3 style={{
              margin: 0, fontFamily: "'Poppins',sans-serif",
              fontSize: '1rem', fontWeight: 700, color: '#7C2D12',
            }}>
              Chai Rating
            </h3>
            <p style={{
              margin: '3px 0 0', fontFamily: "'Poppins',sans-serif",
              fontSize: '0.72rem', color: '#92400E',
            }}>
              Scroll or drag the glass to adjust
            </p>
          </div>

          {/* Live % + rating label */}
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div style={{
              fontFamily: "'Poppins',sans-serif", fontSize: '1.5rem',
              fontWeight: 800, color: '#7C2D12', lineHeight: 1,
            }}>
              {fill}%
            </div>
            <div style={{
              fontFamily: "'Poppins',sans-serif", fontSize: '0.85rem',
              fontWeight: 600, color: '#B45309', marginTop: 2,
            }}>
              {ratingLabel}
            </div>
          </div>

          {/* Interactive chai glass */}
          <div
            ref={glassRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{
              display: 'flex', justifyContent: 'center',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none', marginBottom: 10,
            }}
          >
            <div style={{ position: 'relative', width: 110, height: 130 }}>

              {/* Steam wisps at 100% */}
              {isFull && (
                <div style={{
                  position: 'absolute', top: -22, left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex', gap: 8, pointerEvents: 'none',
                }}>
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="chai-steam"
                      style={{
                        width: 4, height: 18, borderRadius: 4,
                        background: `linear-gradient(to top, ${chaiColor}99, transparent)`,
                        animationDelay: `${i * 0.45}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* SVG glass */}
              <svg
                width="110" height="130" viewBox="0 0 110 130"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
              >
                <defs>
                  <linearGradient id="cpGlassShine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="rgba(255,255,255,0.35)" />
                    <stop offset="50%"  stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.28)" />
                  </linearGradient>
                  <linearGradient id="cpChaiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor={chaiColor} stopOpacity="0.85" />
                    <stop offset="100%" stopColor={chaiColor} stopOpacity="1"    />
                  </linearGradient>
                  <clipPath id="cpGlassClip">
                    <path d="M 18 10 L 92 10 L 82 118 Q 55 125 28 118 Z" />
                  </clipPath>
                </defs>

                {/* Chai fill rising from bottom */}
                <g clipPath="url(#cpGlassClip)">
                  <rect
                    x="0" y={fillY} width="110" height={fillHeight + 10}
                    fill="url(#cpChaiGrad)"
                    style={{ transition: 'y 0.12s ease, height 0.12s ease' }}
                  />
                </g>

                {/* Glass walls */}
                <path
                  d="M 18 10 L 92 10 L 82 118 Q 55 125 28 118 Z"
                  fill="url(#cpGlassShine)"
                  stroke="rgba(180,180,180,0.65)"
                  strokeWidth="1.5"
                />

                {/* Left-side shine */}
                <ellipse cx="32" cy="52" rx="7" ry="22" fill="rgba(255,255,255,0.28)" />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(120,53,15,0.15)', marginBottom: 12 }} />

          {/* Submit */}
          <button
            onClick={() => {
              onSubmit(fill);
              onClose();
            }}
            style={{
              width: '100%', padding: '10px 0', border: 'none', borderRadius: 10,
              background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
              fontFamily: "'Poppins',sans-serif", fontSize: '0.85rem', fontWeight: 600,
              color: '#fff', cursor: 'pointer', letterSpacing: '0.02em',
              boxShadow: '0 4px 16px rgba(194,65,12,0.35)',
              transition: 'opacity 150ms ease, transform 150ms ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.opacity   = '0.9';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.opacity   = '1';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            Submit Rating
          </button>

          <p style={{
            margin: '10px 0 0', textAlign: 'center',
            fontFamily: "'Poppins',sans-serif", fontSize: '0.63rem',
            color: 'rgba(120,53,15,0.38)',
          }}>
            
          </p>

        </div>
      </div>
    </>
  );
}
