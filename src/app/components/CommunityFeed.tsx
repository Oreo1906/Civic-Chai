import { useState, useRef, useEffect } from 'react';
import { ChaiPopup } from './ChaiPopup';
import { MapPin, Search, ChevronDown, Clock } from 'lucide-react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';
import { Navigation } from './Navigation';

const IS_DARK_BG = false;
// ─────────────────────────────────────────────────────────────────────────────

const theme = {
  text:        IS_DARK_BG ? '#ffffff'               : '#0A0A0F',
  textMuted:   IS_DARK_BG ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
  textFaint:   IS_DARK_BG ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.30)',
  cardBg:      IS_DARK_BG ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
  cardBorder:  IS_DARK_BG ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)',
  cardInset:   IS_DARK_BG ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
  cardHoverBg: IS_DARK_BG ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)',
  divider:     IS_DARK_BG ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
  inputBg:     IS_DARK_BG ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
  inputBorder: IS_DARK_BG ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
  placeholder: IS_DARK_BG ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.30)',
  searchIcon:  IS_DARK_BG ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.30)',
  ddBg:        IS_DARK_BG ? 'rgba(10,10,15,0.92)'    : 'rgba(255,255,255,0.96)',
  ddBorder:    IS_DARK_BG ? 'rgba(255,255,255,0.10)'  : 'rgba(0,0,0,0.10)',
  ddText:      IS_DARK_BG ? 'rgba(255,255,255,0.75)'  : 'rgba(0,0,0,0.75)',
};

const posts = [
  {
    id: 1,
    title: 'Broken Sewage Pipeline Flooding Residential Area',
    description: 'Raw sewage has been overflowing onto Subhash Nagar streets for 3 weeks, causing health hazards for 500+ residents and damaging property.',
    location: 'Subhash Nagar, Delhi',
    category: 'Sanitation',
    status: 'completed',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    chaiRating: 'kadak',
    daysDelayed: 0,
    date: 'Feb 18, 2026',
  },
  {
    id: 2,
    title: 'Street Lights Non-Functional for 4 Months on NH-48',
    description: 'Over 2km stretch of NH-48 has been completely dark every night. Multiple accidents have been reported and women feel unsafe commuting.',
    location: 'Sector 21, Gurugram',
    category: 'Infrastructure',
    status: 'in-progress',
    beforeImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop',
    afterImage: null,
    chaiRating: null,
    daysDelayed: 12,
    date: 'Feb 22, 2026',
  },
  {
    id: 3,
    title: 'Garbage Dumping Near Primary School Entrance',
    description: 'An illegal garbage dump has formed right outside Govt. Primary School, Sector 4. Children are exposed to toxic fumes and disease-carrying vectors daily.',
    location: 'Sector 4, Pune',
    category: 'Health',
    status: 'completed',
    beforeImage: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=250&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
    chaiRating: 'feeki',
    daysDelayed: 0,
    date: 'Jan 30, 2026',
  },
  {
    id: 4,
    title: 'Pothole-Ridden Road Causing Daily Accidents',
    description: 'MG Road between signals 3 and 7 has developed severe potholes after monsoon. Three two-wheelers have already crashed this month alone.',
    location: 'MG Road, Bangalore',
    category: 'Roads',
    status: 'delayed',
    beforeImage: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&h=250&fit=crop',
    afterImage: null,
    chaiRating: null,
    daysDelayed: 34,
    date: 'Jan 12, 2026',
  },
  {
    id: 5,
    title: 'Water Supply Cut for 10 Days in Andheri East',
    description: 'Colony residents have received zero piped water supply for 10 consecutive days with no official communication from BMC about restoration timeline.',
    location: 'Andheri East, Mumbai',
    category: 'Water',
    status: 'completed',
    beforeImage: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=400&h=250&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop',
    chaiRating: 'kadvi',
    daysDelayed: 0,
    date: 'Feb 05, 2026',
  },
  {
    id: 6,
    title: 'Encroachment on Public Park by Commercial Vendor',
    description: 'A commercial vendor has illegally occupied 40% of the public park in Vasant Vihar, blocking access for elderly residents and children.',
    location: 'Vasant Vihar, Delhi',
    category: 'Public Space',
    status: 'in-progress',
    beforeImage: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=250&fit=crop',
    afterImage: null,
    chaiRating: null,
    daysDelayed: 7,
    date: 'Feb 25, 2026',
  },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  completed: { label: 'Completed', bg: 'rgba(34,197,94,0.12)', text: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  'in-progress': { label: 'In Progress', bg: 'rgba(234,179,8,0.12)', text: '#facc15', border: 'rgba(250,204,21,0.25)' },
  delayed: { label: 'Delayed', bg: 'rgba(239,68,68,0.12)', text: '#f87171', border: 'rgba(248,113,113,0.25)' },
};

const chaiConfig: Record<string, { label: string; emoji: string; bg: string; text: string; border: string }> = {
  kadak: { label: 'Kadak Chai', emoji: '☕', bg: 'rgba(34,197,94,0.12)', text: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  feeki: { label: 'Feeki Chai', emoji: '🍵', bg: 'rgba(234,179,8,0.12)', text: '#facc15', border: 'rgba(250,204,21,0.25)' },
  kadvi: { label: 'Kadvi Chai', emoji: '😬', bg: 'rgba(239,68,68,0.12)', text: '#f87171', border: 'rgba(248,113,113,0.25)' },
};

function MediaPanel({ src, label }: { src: string | null; label: string }) {
  return (
    <div className="relative w-1/2 h-full overflow-hidden">
      {src ? (
        <>
          <img
            src={src}
            alt={label}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%)' }}
          />
        </>
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2"
          style={{
            background: '#EEF1F4',
            border: '1.5px dashed #CBD5E1',
          }}
        >
          <Clock className="w-7 h-7" style={{ color: "rgba(0, 0, 0, 0.25)" }} strokeWidth={1.5} />
          <span
            className="text-center px-4"
            style={{
              color: "rgba(0, 0, 0, 0.3)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Awaiting Government<br />Update
          </span>
        </div>
      )}
      {/* Label badge */}
      <div
        className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      >
        <span
          className="text-white"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

interface DropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
}

function CustomDropdown({ value, onChange, options, placeholder }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = value !== 'All';
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2 pl-3 pr-3 py-2.5 rounded-xl transition-all duration-200"
        style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', fontWeight: 500,
          background: theme.inputBg,
          border: `1px solid ${isActive ? 'rgba(249,115,22,0.5)' : theme.inputBorder}`,
          color: isActive ? '#EA6A0A' : theme.placeholder,
          minWidth: '130px', cursor: 'pointer', whiteSpace: 'nowrap',
        }}>
        {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EA6A0A', display: 'inline-block', flexShrink: 0 }} />}
        <span className="flex-1 text-left">{isActive ? value : placeholder}</span>
        <ChevronDown className="w-3 h-3 flex-shrink-0 transition-transform duration-200" strokeWidth={2.5}
          style={{ color: isActive ? '#EA6A0A' : theme.searchIcon, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 py-2 rounded-xl overflow-hidden z-50"
          style={{ background: theme.ddBg, backdropFilter: 'blur(12px)', border: `1px solid ${theme.ddBorder}`, minWidth: '160px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          {options.map((opt) => {
            const selected = value === opt;
            return (
              <button key={opt} onClick={() => { onChange(opt); setOpen(false); }}
                className="w-full text-left px-4 py-2.5 flex items-center gap-2.5 transition-colors duration-150"
                style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem',
                  fontWeight: selected ? 600 : 400,
                  color: selected ? '#EA6A0A' : theme.ddText,
                  background: selected ? 'rgba(249,115,22,0.08)' : 'transparent',
                  cursor: 'pointer', border: 'none',
                }}
                onMouseEnter={e => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = IS_DARK_BG ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'; }}
                onMouseLeave={e => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: selected ? '#EA6A0A' : 'transparent', display: 'inline-block', flexShrink: 0 }} />
                {opt === 'All' ? `All ${placeholder}s` : opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── MOCK COMMENTS (frontend-only) ────────────────────────────────────────────
type Comment = {
  id: number; author: string; avatar: string;
  text: string; time: string; replies: Comment[];
};
const mockComments: Record<number, Comment[]> = {
  1: [
    { id: 1, author: 'Priya Sharma', avatar: 'PS', text: 'Finally fixed after 3 weeks of suffering. The smell was unbearable for everyone on our street.', time: '2 days ago', replies: [
      { id: 11, author: 'Rahul Mehra', avatar: 'RM', text: 'Agreed! Glad the municipal team finally showed up. Better late than never.', time: '1 day ago', replies: [] },
    ]},
    { id: 2, author: 'Anil Kumar', avatar: 'AK', text: 'The repair looks good but I hope they do a permanent fix and not just a patch job again.', time: '1 day ago', replies: [] },
  ],
  2: [
    { id: 3, author: 'Sneha Patel', avatar: 'SP', text: 'This is a serious safety issue. My daughter was nearly hit by a vehicle because of the darkness.', time: '5 days ago', replies: [
      { id: 31, author: 'Vikram Singh', avatar: 'VS', text: 'We need to keep pressuring the authorities. Please everyone upvote this issue.', time: '4 days ago', replies: [] },
    ]},
  ],
  3: [
    { id: 4, author: 'Meena Joshi', avatar: 'MJ', text: 'Children should not be exposed to such conditions. This is a public health emergency.', time: '3 days ago', replies: [] },
  ],
  4: [
    { id: 5, author: 'Deepak Rao', avatar: 'DR', text: 'Third complaint filed, still no action. This pothole damaged my scooter last week.', time: '1 week ago', replies: [
      { id: 51, author: 'Kavitha Nair', avatar: 'KN', text: 'Same here. Three bikes have already had accidents at signal 5. Please escalate.', time: '6 days ago', replies: [] },
    ]},
    { id: 6, author: 'Suresh Babu', avatar: 'SB', text: 'The delay is completely unacceptable at 34 days. We need accountability from BBMP.', time: '5 days ago', replies: [] },
  ],
  5: [
    { id: 7, author: 'Fatima Khan', avatar: 'FK', text: 'BMC finally restored the supply. 10 days without water was a nightmare for families here.', time: '2 weeks ago', replies: [] },
  ],
  6: [
    { id: 8, author: 'Ritu Gupta', avatar: 'RG', text: 'The vendor has even put up semi-permanent structures now. This needs immediate action.', time: '3 days ago', replies: [
      { id: 81, author: 'Amit Bose', avatar: 'AB', text: 'Filed a complaint with the DDA. Let us see if they respond this time.', time: '2 days ago', replies: [] },
    ]},
  ],
};

const postMeta: Record<number, { department: string; reported: string; lastUpdate: string }> = {
  1: { department: 'Delhi Jal Board', reported: 'Jan 28, 2026', lastUpdate: 'Feb 18, 2026' },
  2: { department: 'NHAI / PWD Haryana', reported: 'Oct 22, 2025', lastUpdate: 'Feb 22, 2026' },
  3: { department: 'Pune Municipal Corp.', reported: 'Jan 10, 2026', lastUpdate: 'Jan 30, 2026' },
  4: { department: 'BBMP Bangalore', reported: 'Dec 09, 2025', lastUpdate: 'Jan 12, 2026' },
  5: { department: 'Brihanmumbai MC', reported: 'Jan 26, 2026', lastUpdate: 'Feb 05, 2026' },
  6: { department: 'DDA / NDMC Delhi', reported: 'Feb 18, 2026', lastUpdate: 'Feb 25, 2026' },
};

// ── POST DETAIL MODAL ─────────────────────────────────────────────────────────
function PostDetailModal({ post, onClose }: { post: typeof posts[0]; onClose: () => void }) {
  const status   = statusConfig[post.status];
  const meta     = postMeta[post.id] ?? { department: 'City Authority', reported: post.date, lastUpdate: post.date };
  const [comments, setComments] = useState<Comment[]>(mockComments[post.id] ?? []);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo]   = useState<number | null>(null);
  const [replyText, setReplyText]     = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Escape to close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, [onClose]);

  const submitComment = () => {
    if (!commentText.trim()) return;
    setComments(prev => [...prev, {
      id: Date.now(), author: 'You', avatar: 'YO',
      text: commentText.trim(), time: 'Just now', replies: [],
    }]);
    setCommentText('');
  };

  const submitReply = (parentId: number) => {
    if (!replyText.trim()) return;
    setComments(prev => prev.map(c => c.id === parentId
      ? { ...c, replies: [...c.replies, { id: Date.now(), author: 'You', avatar: 'YO', text: replyText.trim(), time: 'Just now', replies: [] }] }
      : c
    ));
    setReplyText('');
    setReplyingTo(null);
  };

  const Avatar = ({ initials, size = 34 }: { initials: string; size?: number }) => (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #EA580C, #C2410C)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Poppins',sans-serif", fontSize: size * 0.32 + 'rem',
      fontWeight: 700, color: '#fff', letterSpacing: '0.02em',
    }}>{initials}</div>
  );

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px 16px',
          overflowY: 'auto',
        }}
      >
        {/* Modal */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%', maxWidth: 1000,
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
            animation: 'modalIn 280ms cubic-bezier(0.34,1.2,0.64,1) both',
            overflow: 'hidden',
            maxHeight: '90vh',
            display: 'flex', flexDirection: 'column',
            margin: 'auto',
          }}
        >
          {/* ── TOP BAR ── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 24px', borderBottom: '1px solid #F1F3F5', flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                padding: '3px 10px', borderRadius: 6,
                background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.25)',
                fontFamily: "'Poppins',sans-serif", fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase', color: '#EA6A0A',
              }}>{post.category}</span>
              <span style={{
                padding: '3px 10px', borderRadius: 6,
                background: status.bg, color: status.text, border: `1px solid ${status.border}`,
                fontFamily: "'Poppins',sans-serif", fontSize: '0.65rem', fontWeight: 700,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: status.text, display: 'inline-block', marginRight: 5, verticalAlign: 'middle' }} />
                {status.label}
              </span>
            </div>
            <button onClick={onClose} style={{
              width: 32, height: 32, borderRadius: '50%', border: '1px solid #E9ECEF',
              background: '#F8F9FA', color: '#6C757D', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 150ms ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#E9ECEF'; (e.currentTarget as HTMLButtonElement).style.color = '#343A40'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F8F9FA'; (e.currentTarget as HTMLButtonElement).style.color = '#6C757D'; }}
            >✕</button>
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div style={{ overflowY: 'auto', flex: 1 }}>

            {/* ── SPLIT: Left images | Right details ── */}
            <div style={{ display: 'flex', minHeight: 340 }}>

              {/* LEFT — Before / After */}
              <div style={{ width: '45%', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, display: 'flex' }}>
                  {/* Before */}
                  <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <img src={post.beforeImage} alt="Before"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{
                      position: 'absolute', top: 10, left: 10,
                      padding: '3px 10px', borderRadius: 6,
                      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                      fontFamily: "'Poppins',sans-serif", fontSize: '0.65rem', fontWeight: 700,
                      color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>Before</div>
                  </div>

                  {/* Divider */}
                  <div style={{ width: 1, background: 'rgba(0,0,0,0.08)', flexShrink: 0 }} />

                  {/* After */}
                  <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#F1F3F5' }}>
                    {post.afterImage ? (
                      <img src={post.afterImage} alt="After"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%', minHeight: 200,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
                      }}>
                        <Clock style={{ width: 28, height: 28, color: '#ADB5BD' }} strokeWidth={1.5} />
                        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.72rem', fontWeight: 500, color: '#ADB5BD', textAlign: 'center', lineHeight: 1.5, padding: '0 16px' }}>
                          Awaiting Government<br />Update
                        </span>
                      </div>
                    )}
                    <div style={{
                      position: 'absolute', top: 10, left: 10,
                      padding: '3px 10px', borderRadius: 6,
                      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                      fontFamily: "'Poppins',sans-serif", fontSize: '0.65rem', fontWeight: 700,
                      color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>After</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: 1, background: '#F1F3F5', flexShrink: 0 }} />

              {/* RIGHT — Issue details */}
              <div style={{ flex: 1, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

                {/* Title */}
                <h2 style={{
                  margin: 0, fontFamily: "'Poppins',sans-serif",
                  fontSize: '1.18rem', fontWeight: 800, lineHeight: 1.35, color: '#0A0A0F',
                }}>{post.title}</h2>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6C757D' }}>
                  <MapPin style={{ width: 14, height: 14, color: '#EA6A0A', flexShrink: 0 }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', fontWeight: 500 }}>
                    {post.location}
                  </span>
                </div>

                {/* Delayed badge if applicable */}
                {post.status !== 'completed' && post.daysDelayed > 0 && (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start',
                    padding: '5px 12px', borderRadius: 8,
                    background: 'rgba(239,68,68,0.08)', color: '#DC2626',
                    border: '1px solid rgba(239,68,68,0.2)',
                    fontFamily: "'Poppins',sans-serif", fontSize: '0.75rem', fontWeight: 700,
                  }}>⏱ Delayed by {post.daysDelayed} days</span>
                )}

                {/* Description */}
                <p style={{
                  margin: 0, fontFamily: "'Poppins',sans-serif",
                  fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.75, color: '#495057',
                }}>{post.description}</p>

                {/* Divider */}
                <div style={{ height: 1, background: '#F1F3F5' }} />

                {/* Meta info */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                  {[
                    { label: 'Department', value: meta.department },
                    { label: 'Date Reported', value: meta.reported },
                    { label: 'Last Updated', value: meta.lastUpdate },
                    { label: 'Category', value: post.category },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.63rem', fontWeight: 600, color: '#ADB5BD', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#212529' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── COMMUNITY DISCUSSION ── */}
            <div style={{ padding: '28px 28px 0', borderTop: '1px solid #F1F3F5' }}>
              <h3 style={{
                margin: '0 0 20px', fontFamily: "'Poppins',sans-serif",
                fontSize: '0.95rem', fontWeight: 700, color: '#0A0A0F',
              }}>
                Community Discussion
                <span style={{ marginLeft: 8, fontFamily: "'Poppins',sans-serif", fontSize: '0.72rem', fontWeight: 500, color: '#ADB5BD' }}>
                  {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                </span>
              </h3>

              {/* Comments list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 24 }}>
                {comments.length === 0 && (
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', color: '#ADB5BD', margin: 0 }}>
                    No comments yet. Be the first to share your thoughts.
                  </p>
                )}
                {comments.map(comment => (
                  <div key={comment.id}>
                    {/* Parent comment */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <Avatar initials={comment.avatar} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', fontWeight: 700, color: '#212529' }}>{comment.author}</span>
                          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.70rem', color: '#ADB5BD' }}>{comment.time}</span>
                        </div>
                        <p style={{ margin: '0 0 8px', fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', color: '#495057', lineHeight: 1.65 }}>
                          {comment.text}
                        </p>
                        <button
                          onClick={() => { setReplyingTo(replyingTo === comment.id ? null : comment.id); setReplyText(''); }}
                          style={{
                            fontFamily: "'Poppins',sans-serif", fontSize: '0.70rem', fontWeight: 600,
                            color: '#EA6A0A', background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                          }}
                        >↩ Reply</button>

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div style={{ marginTop: 14, paddingLeft: 16, borderLeft: '2px solid #F1F3F5', display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {comment.replies.map(reply => (
                              <div key={reply.id} style={{ display: 'flex', gap: 10 }}>
                                <Avatar initials={reply.avatar} size={28} />
                                <div style={{ flex: 1 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: '#212529' }}>{reply.author}</span>
                                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.67rem', color: '#ADB5BD' }}>{reply.time}</span>
                                  </div>
                                  <p style={{ margin: 0, fontFamily: "'Poppins',sans-serif", fontSize: '0.78rem', color: '#495057', lineHeight: 1.6 }}>{reply.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Inline reply input */}
                        {replyingTo === comment.id && (
                          <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                            <textarea
                              autoFocus
                              value={replyText}
                              onChange={e => setReplyText(e.target.value)}
                              placeholder="Write a reply..."
                              rows={2}
                              style={{
                                flex: 1, padding: '9px 12px', borderRadius: 10,
                                border: '1px solid #DEE2E6', outline: 'none',
                                fontFamily: "'Poppins',sans-serif", fontSize: '0.80rem', color: '#212529',
                                resize: 'none', lineHeight: 1.55,
                                transition: 'border-color 150ms',
                              }}
                              onFocus={e => (e.target.style.borderColor = '#EA6A0A')}
                              onBlur={e => (e.target.style.borderColor = '#DEE2E6')}
                              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitReply(comment.id); } }}
                            />
                            <button
                              onClick={() => submitReply(comment.id)}
                              style={{
                                padding: '9px 16px', borderRadius: 10, border: 'none',
                                background: 'linear-gradient(135deg, #EA580C, #C2410C)',
                                color: '#fff', fontFamily: "'Poppins',sans-serif",
                                fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
                                whiteSpace: 'nowrap',
                              }}
                            >Send</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── COMMENT INPUT ── */}
            <div style={{
              padding: '20px 28px 28px',
              borderTop: '1px solid #F1F3F5',
              background: '#FAFAFA',
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
                <Avatar initials="YO" />
                <div style={{ flex: 1, display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                  <textarea
                    ref={inputRef}
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    placeholder="Share your thoughts about this issue..."
                    rows={2}
                    style={{
                      flex: 1, padding: '11px 14px', borderRadius: 12,
                      border: '1.5px solid #DEE2E6', outline: 'none',
                      fontFamily: "'Poppins',sans-serif", fontSize: '0.85rem', color: '#212529',
                      resize: 'none', lineHeight: 1.55, background: '#fff',
                      transition: 'border-color 150ms',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#EA6A0A')}
                    onBlur={e => (e.target.style.borderColor = '#DEE2E6')}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitComment(); } }}
                  />
                  <button
                    onClick={submitComment}
                    style={{
                      padding: '11px 22px', borderRadius: 12, border: 'none',
                      background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
                      color: '#fff', fontFamily: "'Poppins',sans-serif",
                      fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(194,65,12,0.30)',
                      transition: 'opacity 150ms, transform 150ms',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                  >Post</button>
                </div>
              </div>
              <p style={{ margin: '8px 0 0 46px', fontFamily: "'Poppins',sans-serif", fontSize: '0.65rem', color: '#ADB5BD' }}>
                Press Enter to post · Shift+Enter for new line
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── POST CARD ─────────────────────────────────────────────────────────────────
function PostCard({ post }: { post: typeof posts[0] }) {
  const status = statusConfig[post.status];
  const [expanded, setExpanded] = useState(false);
  const [chaiOpen, setChaiOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const LIMIT = 120;

  // ── Rating state (frontend-only — swap body of handleSubmit with API call) ──
  const seed = mockRatings[post.id] ?? { totalFill: 0, count: 0 };
  const [ratingData, setRatingData] = useState(seed);
  const [userVote, setUserVote]     = useState<number | null>(null);

  const avgFill  = ratingData.count > 0 ? ratingData.totalFill / ratingData.count : 0;
  const canRate  = post.status === 'completed';

  // TODO: replace body with → POST /api/ratings/${post.id}  { fill }
  const handleRatingSubmit = (fill: number) => {
    setRatingData(prev => ({
      totalFill: prev.totalFill - (userVote ?? 0) + fill,
      count:     userVote !== null ? prev.count : prev.count + 1,
    }));
    setUserVote(fill);
    setChaiOpen(false);
  };

  return (
    <>
      {chaiOpen && (
        <ChaiPopup
          chai={{ ...(chaiConfig[post.chaiRating ?? 'feeki'] ?? chaiConfig['feeki']), key: post.chaiRating ?? 'feeki' }}
          initialFill={userVote ?? Math.round(avgFill)}
          onClose={() => setChaiOpen(false)}
          onSubmit={handleRatingSubmit}
        />
      )}
      {postOpen && (
        <PostDetailModal post={post} onClose={() => setPostOpen(false)} />
      )}

      <div
        style={{
          borderRadius: 14, display: 'flex', flexDirection: 'column', overflow: 'hidden',
          background: theme.cardBg, border: `1px solid ${theme.cardBorder}`,
          backdropFilter: 'blur(20px)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
          transition: 'all 300ms ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background   = theme.cardHoverBg;
          el.style.borderColor  = 'rgba(249,115,22,0.3)';
          el.style.boxShadow    = '0 10px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(249,115,22,0.12)';
          el.style.transform    = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background   = theme.cardBg;
          el.style.borderColor  = theme.cardBorder;
          el.style.boxShadow    = '0 2px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)';
          el.style.transform    = 'translateY(0)';
        }}
      >
        {/* ── CLICKABLE ZONE (opens modal) ── */}
        <div onClick={() => setPostOpen(true)} style={{ cursor: 'pointer', flex: 1 }}>

          {/* Before / After images */}
          <div style={{ display: 'flex', height: 230 }}>
            <MediaPanel src={post.beforeImage} label="Before" />
            <div style={{ width: 1, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
          <MediaPanel src={post.afterImage} label="After" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '18px 20px 20px' }}>

          {/* Category + Status */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 8,
              background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.28)',
              fontFamily: "'Poppins',sans-serif", fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase', color: '#EA6A0A',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#EA6A0A' }} />
              {post.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 8,
                background: status.bg, color: status.text, border: `1px solid ${status.border}`,
                fontFamily: "'Poppins',sans-serif", fontSize: '0.68rem', fontWeight: 700,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: status.text }} />
                {status.label}
              </span>
              {post.status !== 'completed' && post.daysDelayed > 0 && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '4px 10px', borderRadius: 8,
                  background: 'rgba(239,68,68,0.12)', color: '#f87171',
                  border: '1px solid rgba(248,113,113,0.25)',
                  fontFamily: "'Poppins',sans-serif", fontSize: '0.68rem', fontWeight: 700,
                }}>
                  ⏱ {post.daysDelayed}d delayed
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 style={{ margin: 0, fontFamily: "'Poppins',sans-serif", fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.4, color: theme.text }}>
            {post.title}
          </h3>

          {/* ── SPLIT: Description (left) | Mini chai glass (right) ── */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', minHeight: 110 }}>

            {/* LEFT — description text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, color: theme.textMuted, fontFamily: "'Poppins',sans-serif", fontSize: '0.80rem', fontWeight: 400, lineHeight: 1.65 }}>
                {expanded || post.description.length <= LIMIT
                  ? post.description
                  : post.description.slice(0, LIMIT).trimEnd() + '…'}
              </p>
              {post.description.length > LIMIT && (
                <button
                  onClick={e => { e.stopPropagation(); setExpanded(!expanded); }}
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.74rem', fontWeight: 600, color: '#EA6A0A', background: 'none', border: 'none', padding: '4px 0 0', cursor: 'pointer' }}>
                  {expanded ? 'Show less ↑' : 'Read more ↓'}
                </button>
              )}
            </div>

            {/* Vertical divider */}
            <div style={{ width: 1, background: theme.divider, flexShrink: 0 }} />

            {/* ── NON-CLICKABLE: Chai glass — stopPropagation prevents modal open ── */}
            <div
              onClick={e => e.stopPropagation()}
              style={{ width: 76, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <MiniChaiGlass
                fillPct={avgFill}
                canRate={canRate}
                onClick={() => setChaiOpen(true)}
              />
            </div>
          </div>
        </div>
        {/* ── END CLICKABLE ZONE ── */}

        {/* Footer — also clickable for modal */}
        <div
          onClick={() => setPostOpen(true)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 18px', borderTop: `1px solid ${theme.divider}`, cursor: 'pointer', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: theme.textFaint }}>
            <MapPin style={{ width: 13, height: 13 }} strokeWidth={2} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.74rem' }}>{post.location}</span>
          </div>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.70rem', color: theme.textFaint }}>{post.date}</span>
        </div>
      </div>
      </div>
    </>
  );
}
// ── MINI CHAI GLASS ───────────────────────────────────────────────────────────
function MiniChaiGlass({
  fillPct, canRate, onClick,
}: {
  fillPct: number; canRate: boolean; onClick: () => void;
}) {
  const liquid = getChaiLiquidColor(fillPct);
  const txtCol = getRatingTextColor(fillPct);
  const label  = getRatingLabel(fillPct);

  // SVG: inner top y=6, inner bottom y=54 → 48 px usable (shorter glass)
  const fillH = (fillPct / 100) * 48;
  const fillY = 54 - fillH;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: '100%' }}>

      {/* Label */}
      <span style={{
        fontFamily: "'Poppins',sans-serif", fontSize: '0.55rem', fontWeight: 600,
        color: 'rgba(0, 0, 0, 0.28)', textTransform: 'uppercase',
        letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1.3,
      }}>
        Community<br />Rating
      </span>

      {/* Glass */}
      <button
        onClick={canRate ? onClick : undefined}
        style={{
          background: 'none', border: 'none', padding: 0,
          cursor: canRate ? 'pointer' : 'default',
          transition: 'transform 180ms ease',
        }}
        onMouseEnter={e => { if (canRate) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        <svg width="36" height="60" viewBox="0 0 36 60"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.45))', display: 'block' }}>
          <defs>
            <linearGradient id="mgS" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.30)" />
              <stop offset="50%"  stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.20)" />
            </linearGradient>
            <linearGradient id="mgL" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={liquid} stopOpacity="0.78" />
              <stop offset="100%" stopColor={liquid} stopOpacity="1"    />
            </linearGradient>
            <clipPath id="mgC">
              <path d="M 5 6 L 31 6 L 27 54 Q 18 58 9 54 Z" />
            </clipPath>
          </defs>

          {/* Chai fill */}
          <g clipPath="url(#mgC)">
            <rect x="0" y={fillY} width="36" height={fillH + 6}
              fill="url(#mgL)"
              style={{ transition: 'y 0.45s ease, height 0.45s ease' }} />
            {fillPct > 5 && (
              <ellipse cx="18" cy={fillY + 1.5} rx="9" ry="1.4"
                fill="rgba(255,255,255,0.18)" />
            )}
          </g>

          {/* Walls */}
          <path d="M 5 6 L 31 6 L 27 54 Q 18 58 9 54 Z"
            fill="url(#mgS)"
            stroke="rgba(200,200,200,0.50)" strokeWidth="1" />

          {/* Shine */}
          <ellipse cx="10" cy="24" rx="2" ry="9" fill="rgba(255,255,255,0.20)" />
        </svg>
      </button>

      {/* Rating word only */}
      <span style={{
        fontFamily: "'Poppins',sans-serif", fontSize: '0.60rem', fontWeight: 600,
        color: txtCol, textTransform: 'uppercase',
        letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1.3,
      }}>
        {label}
      </span>
    </div>
  );
}

// ── MOCK RATINGS (frontend-only) ─────────────────────────────────────────────
// Stores { totalFill, count } per post. avgFill = totalFill / count.
// TODO: Replace with API call — GET /api/ratings/:postId → { totalFill, count }
//       and POST /api/ratings/:postId { fill } on submit.
const mockRatings: Record<number, { totalFill: number; count: number }> = {
  1: { totalFill: 378, count: 5  }, // avg ≈ 75%  → Tasty Chai
  2: { totalFill: 124, count: 4  }, // avg ≈ 31%  → Feeki Chai
  3: { totalFill: 215, count: 6  }, // avg ≈ 36%  → Feeki Chai
  4: { totalFill:  52, count: 4  }, // avg ≈ 13%  → Kadvi Chai
  5: { totalFill: 460, count: 5  }, // avg ≈ 92%  → Kadak Chai
  6: { totalFill: 162, count: 4  }, // avg ≈ 40%  → Feeki Chai
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function getRatingLabel(p: number) {
  if (p <= 20) return 'Kadvi';
  if (p <= 40) return 'Feeki';
  if (p <= 60) return 'Thik-Thak';
  if (p <= 80) return 'Tasty';
  return 'Kadak';
}

function getChaiLiquidColor(p: number): string {
  if (p <= 20) return '#8B4513';
  if (p <= 40) return '#A0522D';
  if (p <= 60) return '#C2410C';
  if (p <= 80) return '#D97706';
  return '#EA580C';
}

function getRatingTextColor(p: number): string {
  if (p <= 20) return '#000000ff';   // red-ish  (Kadvi)
  if (p <= 40) return '#000000ff';   // yellow   (Feeki)
  if (p <= 60) return '#000000ff';   // orange   (Thik-Thak)
  if (p <= 80) return '#000000ff';   // green    (Tasty)
  return '#000000ff';                // emerald  (Kadak)
}

export function CommunityFeed({
  onLoginClick,
  onNavClick,
  bgImage,
}: {
  onLoginClick?: () => void;
  onNavClick?: (section: string) => void;
  bgImage?: string;
}) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus  = statusFilter === 'All'    || p.status   === statusFilter.toLowerCase().replace(' ', '-');
    const matchCat     = categoryFilter === 'All'  || p.category === categoryFilter;
    return matchSearch && matchStatus && matchCat;
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#0A0A0F', overflowX: 'hidden' }}>

      {/* ── FIXED BG IMAGE — stays put while content scrolls ── */}
      {bgImage && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
      )}

      {/* Dark scrim over image so content stays readable */}
      {bgImage && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1, background: IS_DARK_BG ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.45)' }} />
      )}

      {/* Orange radial glow — fixed */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249,115,22,0.13) 0%, transparent 70%)',
      }} />

      {/* Logo watermark — fixed */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }} aria-hidden>
        <img src={logo} alt="" style={{ width: 'clamp(480px, 75vw, 960px)', opacity: 0.06, filter: 'brightness(0) invert(1)', pointerEvents: 'none' }} />
      </div>

      {/* Top orange line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, zIndex: 10, background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.65), transparent)' }} />

      {/* ── NAVIGATION ── */}
      <div style={{ position: 'relative', zIndex: 50 }}>
        <Navigation onLoginClick={onLoginClick} onNavClick={onNavClick} activeSection="community-feed" />
      </div>

      {/* ── PAGE CONTENT ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32, marginBottom: 56 }}>

          {/* Heading */}
          <div style={{ maxWidth: 520 }}>
            <h1 style={{ margin: '0 0 12px', fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: theme.text }}>
              Community Issues &<br />Transparency
            </h1>
            <p style={{ margin: 0, fontFamily: "'Poppins',sans-serif", fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.7, color: theme.textMuted }}>
              Public civic issues logged by citizens with verified government response evidence. Holding institutions accountable, together.
            </p>
          </div>

          {/* Search + filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Search bar */}
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: theme.searchIcon }} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search issues…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: 280, paddingLeft: 38, paddingRight: 14, paddingTop: 10, paddingBottom: 10,
                  borderRadius: 12, fontFamily: "'Poppins',sans-serif", fontSize: '0.875rem',
                  background: theme.inputBg, border: `1px solid ${theme.inputBorder}`,
                  color: theme.text, outline: 'none', transition: 'border-color 200ms ease',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(249,115,22,0.6)')}
                onBlur={e  => (e.target.style.borderColor = theme.inputBorder)}
              />
            </div>

            {/* Dropdown filters */}
            <div style={{ display: 'flex', gap: 8 }}>
              <CustomDropdown value={statusFilter}   onChange={setStatusFilter}   options={['All','Completed','In Progress','Delayed']} placeholder="Status" />
              <CustomDropdown value={categoryFilter} onChange={setCategoryFilter} options={['All','Sanitation','Infrastructure','Health','Roads','Water','Public Space']} placeholder="Category" />
            </div>
          </div>
        </div>

        {/* Results count */}
        <p style={{ margin: '0 0 28px', fontFamily: "'Poppins',sans-serif", fontSize: '0.82rem', fontWeight: 500, color: theme.textFaint }}>
          Showing{' '}
          <span style={{ color: theme.text, fontWeight: 600 }}>{filtered.length}</span>
          {' '}{filtered.length === 1 ? 'issue' : 'issues'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: 28 }}>
            {filtered.map(post => <PostCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 96, textAlign: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Search style={{ width: 26, height: 26, color: theme.textFaint }} strokeWidth={1.5} />
            </div>
            <p style={{ margin: 0, fontFamily: "'Poppins',sans-serif", fontSize: '0.95rem', fontWeight: 500, color: theme.textMuted }}>
              No issues found matching your filters.
            </p>
          </div>
        )}
      </div>

      {/* Bottom orange line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, zIndex: 10, background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.65), transparent)' }} />
    </div>
  );
}
