// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const COLORS = [
  { name: "Shadow Navy", hex: "#2d3f5e" },
  { name: "Army Green", hex: "#4a5240" },
];

const RELATED_STATIC = [
  {
    id: "s1",
    name: "Adidas Shoe",
    price: 125,
    image: "https://i.ibb.co.com/FbLTZ4PR/360-F-583890527-IOqf-FZCl3yjpu-QT96-GLGB0-Yl-FOMbj-KE5.jpg",
  },
  {
    id: "s2",
    name: "This is IH8195 by All4Sports on Vimeo, the home for high quality videos and the people who love them.",
    price: 125,
    image: "https://i.ibb.co.com/7tTdHqyL/1985239720-fbf838e6d9ec211a527626d487fb93d04189871ec93a7a1994f8736d846eccee-d.webp",
  },
  {
    id: "s3",
    name: "Adidas is finally bringing 3D-printed shoes into the mainstream",
    price: 125,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
  },
  {
    id: "s4",
    name: "adidas Supernova Glide 8 - Mens Shoes - Eqt Blue S16/Ftwr White/Collegiate Navy ",
    price: 125,
    image: "https://i.ibb.co.com/tPP8vxkf/images.jpg",
  },
  {
    id: "s5",
    name: "Adidas is finally bringing 3D-printed shoes into the mainstream",
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

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [drop, setDrop] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [relatedSlide, setRelatedSlide] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const VISIBLE_DESKTOP = 4;
  const maxSlide = Math.max(0, RELATED_STATIC.length - VISIBLE_DESKTOP);

  useEffect(() => {
    setPageLoading(true);
    axios
      .get("http://localhost:5000/drops")
      .then((res) => {
        const data = res.data;
        const found = data.find((d) => String(d.id) === String(id));
        setDrop(found || data[0] || null);
        setPageLoading(false);
      })
      .catch(() => setPageLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  if (pageLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E7E7E3]">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-indigo-200 border-t-[#4A69E2] animate-spin" />
          
          </div>
          <p className="font-black text-[#1a1a1a] uppercase tracking-widest"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
            Loading Product...
          </p>
          <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#4A69E2] rounded-full animate-pulse w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!drop) {
    return (
      <div className="min-h-screen bg-[#E7E7E3] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-600 mb-4">Product not found</p>
          <button onClick={() => navigate(-1)}
            className="bg-[#4A69E2] text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
            Go Back
          </button>
        </div>
      </div>
    );
  }

 
  const images = [drop.image, drop.image, drop.image, drop.image];

  return (
    <div className="min-h-screen bg-[#E7E7E3]">

      {/* ── Back nav ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

          {/* ── 2×2 Image grid ── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`bg-white rounded-2xl overflow-hidden flex items-center
                    justify-center cursor-pointer transition-all duration-200
                    hover:shadow-lg aspect-square p-4
                    ${activeImg === i
                      ? "ring-2 ring-indigo-500 ring-offset-2"
                      : "ring-1 ring-gray-200"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${drop.name} view ${i + 1}`}
                    className="w-full h-full object-contain transition-transform
                               duration-300 hover:scale-105"
                    onError={(e) => { e.target.style.opacity = "0.3"; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="flex-1 min-w-0">

            {/* Badge */}
            <span className="inline-block bg-[#4A69E2] text-white text-xs font-bold
                             px-3 py-1 rounded-full mb-4">
              New Release
            </span>

            {/* Name */}
            <h1
              className="font-black text-[#1a1a1a] uppercase leading-tight mb-3"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              }}
            >
              {drop.name || "ADIDAS 4DFWD X PARLEY RUNNING SHOES"}
            </h1>

            {/* Price */}
            <p className="text-[#4A69E2] font-black mb-5"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}>
              ${drop.price || "125.00"}
            </p>

            {/* Color */}
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                COLOR
              </p>
              <div className="flex gap-3">
                {COLORS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={c.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === i
                        ? "border-indigo-600 scale-110 shadow-md"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">SIZE</p>
                <button className="text-xs font-semibold text-[#4A69E2] underline underline-offset-2 hover:text-indigo-800 transition">
                  SIZE CHART
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold border-2 transition-all duration-200 ${
                      selectedSize === s
                        ? "bg-[#1a1a1a] text-white border-[#1a1a1a] scale-105"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:scale-105"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart + wishlist */}
            <div className="flex gap-3 mb-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold py-3 rounded-xl active:scale-95 transition-all
                            text-sm uppercase tracking-wider ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "bg-[#1a1a1a] text-white hover:opacity-90"
                }`}
              >
                {addedToCart ? "✓ ADDED TO CART" : "ADD TO CART"}
              </button>
              <button
                onClick={() => setWishlist((w) => !w)}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center
                            transition-all duration-200 flex-shrink-0 ${
                  wishlist
                    ? "bg-red-50 border-red-400"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill={wishlist ? "#ef4444" : "none"}
                  stroke={wishlist ? "#ef4444" : "#555"}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Buy it now */}
            <button className="w-full bg-[#4A69E2] text-white font-bold py-3 rounded-xl
                               hover:bg-indigo-700 active:scale-95 transition-all
                               text-sm uppercase tracking-wider mb-6">
              BUY IT NOW
            </button>

            {/* About product */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                ABOUT THE PRODUCT
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                Shadow Navy / Army Green
              </p>
              <p className="text-sm text-gray-500 mb-3">
                This product is excluded from all promotional discounts and offers.
              </p>
              <ul className="space-y-2">
                {[
                  "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
                  "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
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
                onClick={() => setRelatedSlide((p) => Math.max(p - 1, 0))}
                disabled={relatedSlide === 0}
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
                onClick={() => setRelatedSlide((p) => Math.min(p + 1, maxSlide))}
                disabled={relatedSlide >= maxSlide}
                className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center
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

          {/* Carousel container */}
          <div className="border-1 border-gray-300 rounded-2xl p-4 overflow-hidden bg-white/40">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                // desktop: 4 visible (25% each), mobile: 2 visible (50% each)
                transform: `translateX(calc(-${relatedSlide} * (25% + 4px)))`,
              }}
            >
              {RELATED_STATIC.map((item) => (
                <div
                  key={item.id}
                  className="flex-none flex flex-col"
                  style={{
                    // 4 visible on md+, 2 on mobile
                    width: "calc(25% - 12px)",
                    minWidth: "160px",
                  }}
                >
                  {/* Image card */}
                  <div className="relative bg-white rounded-xl overflow-hidden mb-3">
                    <span className="absolute top-2 left-2 z-10 bg-[#4A69E2] text-white
                                     text-[10px] font-bold px-2 py-0.5 rounded-full">
                      New
                    </span>
                    <div className="aspect-square flex items-center justify-center p-4">
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
                               line-clamp-2 mb-3 text-xs sm:text-sm"
                    style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
                  >
                    {item.name}
                  </p>

                  {/* Button */}
                  <button className="w-full bg-black text-white text-xs font-bold
                                     py-2.5 rounded-xl hover:bg-gray-900
                                     transition-all active:scale-95 mt-auto">
                    VIEW PRODUCT -{" "}
                    <span className="text-orange-400">${item.price}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setRelatedSlide(i)}
                  style={{
                    width: i === relatedSlide ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: i === relatedSlide ? "#4B5FE8" : "#bbb",
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

      </div>
    </div>
  );
};

export default ProductDetails;