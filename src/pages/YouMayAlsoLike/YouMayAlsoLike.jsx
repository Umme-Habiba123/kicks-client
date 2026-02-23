// YouMayAlsoLike.jsx
import React, { useState } from "react";

const RELATED_STATIC = [
  {
    id: "s1",
    name: "New ADIDAS Men's Originals Superstar White Black Leather Shoes C77124 Size 20 US",
    price: 125,
    image: "https://i.ibb.co.com/FbLTZ4PR/360-F-583890527-IOqf-FZCl3yjpu-QT96-GLGB0-Yl-FOMbj-KE5.jpg",
  },
  {
    id: "s2",
    name: "IH8195 Sport Running",
    price: 125,
    image: "https://i.ibb.co.com/7tTdHqyL/1985239720-fbf838e6d9ec211a527626d487fb93d04189871ec93a7a1994f8736d846eccee-d.webp",
  },
  {
    id: "s3",
    name: "Adidas 3D-Printed Running Shoes",
    price: 125,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
  },
  {
    id: "s4",
    name: "Adidas Supernova Glide 8 Mens",
    price: 125,
    image: "https://i.ibb.co.com/tPP8vxkf/images.jpg",
  },
  {
    id: "s5",
    name: "Adidas Mainstream Collection",
    price: 125,
    image: "https://i.ibb.co.com/LDddM84d/cb2ba65dcb352f04be244ccb4dc65290.jpg",
  },
  {
    id: "s6",
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-665455a5-45de-40fb-b5cd-d8a592a4b835/metcon-9-training-shoes-KhpM3g.png",
  },
];

const YouMayAlsoLike = () => {
  const [slide, setSlide] = useState(0);

  // Mobile: 1 visible, sm: 2, md: 3, lg: 4
  // We use CSS for responsive visible count via minWidth
  const VISIBLE = 4;
  const maxSlide = Math.max(0, RELATED_STATIC.length - VISIBLE);

  return (
    <div className="mt-10 sm:mt-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2
          className="font-black text-[#1a1a1a]"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          }}
        >
          You may also like                   
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSlide((p) => Math.max(p - 1, 0))}
            disabled={slide === 0}
            className="w-9 h-9 rounded-full bg-gray-700 text-white flex items-center
                       justify-center hover:bg-gray-900 disabled:opacity-30
                       transition-all active:scale-90"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => setSlide((p) => Math.min(p + 1, maxSlide))}
            disabled={slide >= maxSlide}
            className="w-9 h-9 rounded-full bg-[#4A69E2] text-white flex items-center
                       justify-center hover:bg-indigo-700 disabled:opacity-30
                       transition-all active:scale-90"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/40 p-3 sm:p-4">
        <div
          className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${slide} * (25% + 4px)))`,
          }}
        >
          {RELATED_STATIC.map((item) => (
            <div
              key={item.id}
              className="flex-none flex flex-col"
              style={{
                width: "calc(25% - 9px)",
                minWidth: "140px",
              }}
            >
              {/* Image */}
              <div className="relative bg-white rounded-xl overflow-hidden mb-2 sm:mb-3">
                <span className="absolute top-2 left-2 z-10 bg-[#4A69E2] text-white
                                 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                  New
                </span>
                <div className="aspect-square flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform
                               duration-300 hover:scale-105"
                    onError={(e) => { e.target.style.opacity = "0.3"; }}
                  />
                </div>
              </div>

              {/* Name */}
              <p
                className="font-black text-[#1a1a1a] uppercase leading-tight
                           line-clamp-2 mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  fontSize: "clamp(0.6rem, 1.3vw, 0.8rem)",
                }}
              >
                {item.name}
              </p>

              {/* Button */}
              <button
                className="w-full bg-black text-white font-bold rounded-xl
                           hover:bg-gray-900 transition-all active:scale-95 mt-auto"
                style={{
                  fontSize: "clamp(0.55rem, 1.1vw, 0.75rem)",
                  padding: "8px 4px",
                }}
              >
                VIEW PRODUCT -{" "}
                <span className="text-orange-400">${item.price}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: i === slide ? "20px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                backgroundColor: i === slide ? "#4A69E2" : "#bbb",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;