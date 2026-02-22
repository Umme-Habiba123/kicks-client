// Footer.jsx
import React from 'react';
import kicksBottomImg from '../../assets/Group.png'; 

// ── Social SVG Icons ──────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="w-9/12 mx-auto ">
    <div className='bg-[#4A69E2] rounded-t-3xl'>
         <div>
         <div
        className="w-full relative overflow-hidden"
        style={{
          backgroundColor: '#4B5FE8',
          borderRadius: '20px 20px 20px 20px',
          padding: 'clamp(28px, 5vw, 52px) clamp(20px, 5vw, 56px)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start  sm:items-center justify-between gap-8">

          <div className="flex-1 max-w-lg">
            <h2
              className="text-white font-black uppercase leading-tight mb-2"
              style={{
                fontSize: 'clamp(1.4rem, 3.8vw, 2.2rem)',
                fontFamily: "'Arial Black', Arial, sans-serif",
                letterSpacing: '0.01em',
              }}
            >
              JOIN OUR KICKSPLUS<br />CLUB &amp; GET 15% OFF
            </h2>
            <p
              className="text-white mb-5"
              style={{
                fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                opacity: 0.9,
              }}
            >
              Sign up for free! Join the community.
            </p>

            {/* Email form */}
            <div className="flex items-center gap-0" style={{ maxWidth: '420px' }}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 text-white placeholder-white/60 outline-none"
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  borderRight: 'none',
                  borderRadius: '6px 0 0 6px',
                  padding: 'clamp(9px, 1.5vw, 13px) clamp(12px, 2vw, 18px)',
                  fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)',
                }}
              />
              <button
                className="font-bold text-white uppercase tracking-widest
                           hover:opacity-90 active:scale-95 transition-all duration-200
                           whitespace-nowrap"
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0 6px 6px 0',
                  border: 'none',
                  padding: 'clamp(9px, 1.5vw, 13px) clamp(14px, 2vw, 22px)',
                  fontSize: 'clamp(0.7rem, 1.3vw, 0.8rem)',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
          <div
            className="flex-shrink-0 select-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              position: 'relative',
            }}
          >
           <img src="/src/assets/2.png" alt="" />
            
          </div>

        </div>
      </div>

      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '30px 30px 0px 0px',
          overflow: 'hidden',
        }}
      >
        {/* Links grid */}
        <div
          className="grid gap-8"
          style={{
            padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 56px) clamp(20px, 3vw, 36px)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          }}
        >
          {/* About us */}
          <div>
            <h3
              className="font-bold mb-3"
              style={{
                color: '#F59E0B',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              About us
            </h3>
            <p
              className="text-gray-400 leading-relaxed"
              style={{ fontSize: 'clamp(0.78rem, 1.4vw, 0.9rem)' }}
            >
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3
              className="font-bold mb-3"
              style={{
                color: '#F59E0B',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              Categories
            </h3>
            <ul className="space-y-2">
              {['Runners', 'Sneakers', 'Basketball', 'Outdoor', 'Golf', 'Hiking'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    style={{ fontSize: 'clamp(0.78rem, 1.4vw, 0.9rem)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-bold mb-3"
              style={{
                color: '#F59E0B',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {['About', 'Contact', 'Blogs'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    style={{ fontSize: 'clamp(0.78rem, 1.4vw, 0.9rem)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3
              className="font-bold mb-3"
              style={{
                color: '#F59E0B',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              Follow us
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { Icon: FacebookIcon,  href: '#' },
                { Icon: InstagramIcon, href: '#' },
                { Icon: TwitterIcon,   href: '#' },
                { Icon: TikTokIcon,    href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-white hover:text-amber-400 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

      
        <div className="w-7xl mx-auto overflow-hidden" style={{ lineHeight: 0 }}>
          <img
            src={kicksBottomImg}
            alt="KICKS"
            className="w-full object-cover object-top"
            style={{
              display: 'block',
              maxHeight: 'clamp(100px, 18vw, 220px)',
              
            }}
            onError={(e) => {
             
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div
            className="w-full text-center font-black text-white uppercase select-none"
            style={{
              display: 'none',
              fontSize: 'clamp(5rem, 22vw, 18rem)',
              fontFamily: "'Arial Black', Arial, sans-serif",
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
              paddingBottom: '0.05em',
            }}
          >
            KICKS
          </div>
        </div>

      </div>
     </div>
     

    </div>
    <div>
 <div
        className="text-center text-gray-500"
        style={{
          padding: 'clamp(1px, 1vw, 8px)',
          fontSize: 'clamp(0.72rem, 1.3vw, 0.85rem)',
        }}
      >
        © All rights reserved
      </div>
    </div>
    </footer>
  );
}