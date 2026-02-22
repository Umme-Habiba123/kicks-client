// Reviews.jsx
import React from 'react';

const reviews = [
  {
    id: 1,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
  },
  {
    id: 2,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
  },
  {
    id: 3,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={star <= Math.round(rating) ? '#FBBF24' : '#D1D5DB'}
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
    <span
      className="text-gray-700 font-semibold ml-1"
      style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
    >
      {rating.toFixed(1)}
    </span>
  </div>
);

export default function Reviews() {
  return (
    <section
      className="w-9/12 mx-auto"
      style={{ background: '#e8e6e1', padding: 'clamp(24px, 4vw, 56px) clamp(16px, 5vw, 64px)' }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2
          className="font-black text-[#1a1a1a] uppercase tracking-tight"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontFamily: "'Arial Black', Arial, sans-serif",
            letterSpacing: '-0.01em',
          }}
        >
          REVIEWS
        </h2>

        <button
          className="font-bold text-white uppercase tracking-widest
                     hover:opacity-90 active:scale-95 transition-all duration-200"
          style={{
            backgroundColor: '#5B6FE8',
            borderRadius: '8px',
            fontSize: 'clamp(0.65rem, 1.3vw, 0.8rem)',
            padding: 'clamp(8px, 1.2vw, 12px) clamp(16px, 2.5vw, 28px)',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.1em',
          }}
        >
          SEE ALL
        </button>
      </div>

      {/* ── Review Cards Grid ── */}
      <div
        className="grid gap-4 sm:gap-5"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col overflow-hidden"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            }}
          >
            {/* ── Top: title + avatar row ── */}
            <div className="flex items-start justify-between p-4 sm:p-5 pb-2">
              <div className="flex-1 pr-3">
                <h3
                  className="font-black text-[#1a1a1a] mb-1"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                    fontFamily: "'Arial Black', Arial, sans-serif",
                  }}
                >
                  {review.title}
                </h3>
                <p
                  className="text-gray-500 leading-snug mb-3"
                  style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.85rem)' }}
                >
                  {review.text}
                </p>
                <StarRating rating={review.rating} />
              </div>

              {/* Avatar */}
              <img
                src={review.avatar}
                alt="Reviewer"
                className="rounded-full object-cover flex-shrink-0"
                style={{
                  width:  'clamp(40px, 5vw, 56px)',
                  height: 'clamp(40px, 5vw, 56px)',
                  border: '2px solid #e5e7eb',
                }}
                onError={(e) => { e.target.style.background = '#ccc'; }}
              />
            </div>

            {/* ── Bottom: shoe photo fills card ── */}
            <div
              className="w-full overflow-hidden flex-1"
              style={{ minHeight: 'clamp(180px, 22vw, 260px)' }}
            >
              <img
                src={review.image}
                alt="Shoe review"
                className="w-full h-full object-cover transition-transform
                           duration-300 hover:scale-105"
                style={{ display: 'block' }}
                onError={(e) => { e.target.style.background = '#ddd'; }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}