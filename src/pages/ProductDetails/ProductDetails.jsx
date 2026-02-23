// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import YouMayAlsoLike from "../YouMayAlsoLike/YouMayAlsoLike";

const SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const COLORS = [
  { name: "Shadow Navy", hex: "#2d3f5e" },
  { name: "Army Green", hex: "#4a5240" },
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
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setActiveImg(0);
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
          <div className="w-20 h-20 rounded-full border-4 border-indigo-200 border-t-[#4A69E2] animate-spin" />
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

  const images = [
    drop.image,              
    drop.image2 || drop.image, 
    drop.image3 || drop.image, 
    drop.image4 || drop.image, 
  ];
  return (
    <div className="min-h-screen bg-[#E7E7E3]">

      {/* Back */}
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

          <div className="w-full lg:w-[48%] flex-shrink-0 flex flex-col gap-3">

            <div className="bg-white rounded-2xl flex items-center justify-center
                            p-5 sm:p-8 ring-2 ring-[#4A69E2] ring-offset-2"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                key={activeImg}
                src={images[activeImg]}
                alt={`${drop.name} - view ${activeImg + 1}`}
                className="w-full h-full object-contain"
                style={{ animation: "fadeIn 0.3s ease" }}
                onError={(e) => { e.target.style.opacity = "0.3"; }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[0, 1, 2, 3]
                .filter((i) => i !== activeImg)
                .map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="bg-white rounded-xl overflow-hidden flex items-center
                               justify-center p-2 sm:p-3 border-2 transition-all duration-200
                               hover:border-[#4A69E2] hover:shadow-md border-gray-200"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={images[i]}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                      onError={(e) => { e.target.style.opacity = "0.3"; }}
                    />
                  </button>
                ))}
            </div>
          </div>

          <div className="flex-1 min-w-0">

            <span className="inline-block bg-[#4A69E2] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              New Release
            </span>

            <h1
              className="font-black text-[#1a1a1a] uppercase leading-tight mb-3"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
            >
              {drop.name || "ADIDAS 4DFWD X PARLEY RUNNING SHOES"}
            </h1>

            <p className="text-[#4A69E2] font-black mb-5"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}>
              ${drop.price || "125.00"}
            </p>

            {/* Color */}
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">COLOR</p>
              <div className="flex gap-3">
                {COLORS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={c.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === i
                        ? "border-[#4A69E2] scale-110 shadow-md"
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

            <div className="flex gap-3 mb-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold py-3 rounded-xl active:scale-95 transition-all text-sm uppercase tracking-wider ${
                  addedToCart ? "bg-green-600 text-white" : "bg-[#1a1a1a] text-white hover:opacity-90"
                }`}
              >
                {addedToCart ? "✓ ADDED TO CART" : "ADD TO CART"}
              </button>
              <button
                onClick={() => setWishlist((w) => !w)}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                  wishlist ? "bg-red-50 border-red-400" : "border-gray-300 bg-white hover:border-gray-400"
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

            <button className="w-full bg-[#4A69E2] text-white font-bold py-3 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all text-sm uppercase tracking-wider mb-6">
              BUY IT NOW
            </button>

            {/* About */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">ABOUT THE PRODUCT</p>
              <p className="text-sm font-semibold text-gray-700 mb-1">Shadow Navy / Army Green</p>
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

        <YouMayAlsoLike />

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;