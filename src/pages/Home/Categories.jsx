// Categories.jsx
import React, { useState } from 'react';
import lifestyleShoe from '../../assets/left1.png';
import basketballShoe from '../../assets/right1.png';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// ── Add more categories here ──────────────────────────────────────────────────
const allCategories = [
  { id: 1, label: 'LIFESTYLE\nSHOES',    image: lifestyleShoe },
  { id: 2, label: 'BASKETBALL\nSHOES',  image: basketballShoe },
  {
    id: 3,
    label: 'RUNNING\nSHOES',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec2_9366/Ultraboost_Light_Shoes_White_HQ6351_01_standard.jpg',
  },
  {
    id: 4,
    label: 'TRAINING\nSHOES',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-665455a5-45de-40fb-b5cd-d8a592a4b835/metcon-9-training-shoes-KhpM3g.png',
  },
  {
    id: 5,
    label: 'CASUAL\nSHOES',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg',
  },
  {
    id: 6,
    label: 'FOOTBALL\nBOOTS',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2d239c19f814ffd9a78ad7d00ab3199_9366/Predator_Accuracy.1_Firm_Ground_Boots_White_GW4587_01_standard.jpg',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 cards at a time, peek of 3rd card visible on right
  const maxIndex = Math.max(0, allCategories.length - 2);

  const handlePrev = () => setCurrentIndex((p) => Math.max(p - 1, 0));
  const handleNext = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-6 md:py-10">

    
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1a1a1a]">

        {/* ── TOP BAR: CATEGORIES title + nav arrows ── */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
          <h2
            className="text-white font-black uppercase tracking-widest"
            style={{
              fontSize: 'clamp(1.3rem, 3.8vw, 2rem)',
              fontFamily: "'Arial Black', Arial, sans-serif",
              letterSpacing: '0.07em',
            }}
          >
            CATEGORIES
          </h2>

          {/* Nav arrows */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
              className="
                w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                border border-gray-500 text-white
                hover:bg-gray-700 disabled:opacity-25
                transition-all duration-200 active:scale-90
              "
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.8"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next"
              className="
                w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                border border-gray-500 text-white
                hover:bg-gray-700 disabled:opacity-25
                transition-all duration-200 active:scale-90
              "
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.8"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── CARDS AREA: cream bg, left rounded, right overflows ── */}
        <div
          className="overflow-hidden mx-10"
          style={{
            /* left side rounded, right side straight — card area */
            borderRadius: '0px 20px 0px 20px',
            background: '#f0ede8',
            marginLeft: '0',          /* flush with black on the left */
          }}
        >
          {/* Sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              /* Each card = 50% of the cards-area width.
                 We also show ~15px peek of the next card on the right. */
              transform: `translateX(calc(-${currentIndex} * 50%))`,
            }}
          >
            {allCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex-none"
                style={{ width: '50%', minWidth: '50%' }}
              >
                {/* Card — relative so label overlays bottom */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    margin: 'clamp(10px, 1.5vw, 20px)',
                    marginRight: 'clamp(6px, 1vw, 12px)',
                    borderRadius: '16px',
                    height: 'clamp(220px, 35vw, 420px)',
                    background: '#f0ede8',
                  }}
                >
                  {/* Shoe image fills the full card */}
                  <img
                    src={cat.image}
                    alt={cat.label.replace('\n', ' ')}
                    className="absolute inset-0 w-full h-full object-contain
                               transition-transform duration-300 hover:scale-105"
                    style={{ padding: 'clamp(12px, 2vw, 28px)' }}
                    onError={(e) => { e.target.style.opacity = '0.25'; }}
                  />

                  {/* Label + Arrow pinned to bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0
                               flex items-end justify-between"
                    style={{ padding: 'clamp(10px, 2vw, 20px)' }}
                  >
                    <p
                      className="font-black text-[#1a1a1a] leading-tight
                                 whitespace-pre-line uppercase"
                      style={{
                        fontSize: 'clamp(0.6rem, 1.6vw, 1rem)',
                        fontFamily: "'Arial Black', Arial, sans-serif",
                        letterSpacing: '0.03em',
                        lineHeight: 1.15,
                      }}
                    >
                      {cat.label}
                    </p>

                    <button
                      className="flex-shrink-0 flex items-center justify-center
                                 rounded-lg bg-[#1a1a1a] text-white
                                 hover:opacity-70 active:scale-90
                                 transition-all duration-200"
                      style={{
                        width:    'clamp(28px, 3.2vw, 38px)',
                        height:   'clamp(28px, 3.2vw, 38px)',
                        minWidth: '28px',
                      }}
                      aria-label={`Shop ${cat.label.replace('\n', ' ')}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      
      <div className="flex justify-center items-center gap-1.5 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:           i === currentIndex ? '20px' : '6px',
              height:          '6px',
              borderRadius:    '9999px',
              backgroundColor: i === currentIndex ? '#1a1a1a' : '#bbb',
              border:          'none',
              padding:          0,
              cursor:          'pointer',
              transition:      'all 0.3s ease',
            }}
          />
        ))}
      </div>

    </section>
  );
}