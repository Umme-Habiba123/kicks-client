// Cart.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import YouMayAlsoLike from "../YouMayAlsoLike/YouMayAlsoLike";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "DROPSET TRAINER SHOES",
    subtitle: "Men's Road Running Shoes",
    color: "Enamel Blue/ University White",
    price: 130,
    image: "https://i.ibb.co.com/LDddM84d/cb2ba65dcb352f04be244ccb4dc65290.jpg",
    size: 10,
    quantity: 1,
  },
];

const DELIVERY = 6.99;

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const updateSize = (id, size) =>
    setItems((p) => p.map((it) => (it.id === id ? { ...it, size } : it)));
  const updateQty = (id, qty) =>
    setItems((p) =>
      p.map((it) => (it.id === id ? { ...it, quantity: +qty } : it)),
    );
  const removeItem = (id) => setItems((p) => p.filter((it) => it.id !== id));

  const subtotal = items.reduce((a, it) => a + it.price * it.quantity, 0);
  const total = subtotal + (items.length ? DELIVERY : 0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="pt-8 pb-4">
        <p
          className="font-black text-[#1a1a1a] text-sm sm:text-base"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          Saving to celebrate
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
          Enjoy up to 60% off thousands of styles during the End of Year
          sale - while supplies last. No code needed.
        </p>
        <p className="text-xs sm:text-sm mt-1 text-gray-600">
          <button className="underline font-semibold hover:opacity-70 transition">
            Join us
          </button>{" "}
          or{" "}
          <button className="underline font-semibold hover:opacity-70 transition">
            Sign-in
          </button>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 lg:my-10 mt-5 pb-10 items-start">
        <div className="w-full lg:flex-1">
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <h2
              className="font-black text-[#1a1a1a] mb-1"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              }}
            >
              Your Bag
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-5">
              Items in your bag not reserved- check out now to make them
              yours.
            </p>

            {/* Empty */}
            {items.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400 font-semibold mb-4">
                  Your bag is empty
                </p>
                <button
                  onClick={() => navigate(-1)}
                  className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {items.map((item, idx) => (
              <div key={item.id}>
                {idx > 0 && (
                  <div className="border-t border-gray-100 my-5" />
                )}

                <div className="flex gap-4 sm:gap-5">
                  {/* Image */}
                  <div
                    className="bg-[#f5f5f0] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{
                      width: "clamp(100px,20vw,140px)",
                      height: "clamp(100px,20vw,140px)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => { e.target.style.opacity = "0.3"; }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    {/* Name + Price */}
                    <div className="flex justify-between gap-2 mb-1">
                      <p
                        className="font-black text-[#1a1a1a] uppercase leading-tight"
                        style={{
                          fontFamily: "'Arial Black', Arial, sans-serif",
                          fontSize: "clamp(0.72rem,1.8vw,0.88rem)",
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-[#4A69E2] font-black flex-shrink-0"
                        style={{ fontSize: "clamp(0.9rem,2vw,1.05rem)" }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm">{item.subtitle}</p>
                    <p className="text-gray-400 text-xs mb-3">{item.color}</p>

                    <div className="flex flex-wrap gap-4 mb-3 items-center">
                      {/* Size */}
                      <label className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">
                          Size {item.size}
                        </span>
                        <div className="relative">
                          <select
                            value={item.size}
                            onChange={(e) => updateSize(item.id, +e.target.value)}
                            className="appearance-none bg-transparent border-none outline-none cursor-pointer pl-0 pr-5 py-0 text-xs sm:text-sm text-gray-700"
                          >
                            {[6, 7, 8, 9, 10, 11, 12].map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                            width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </label>

                      {/* Quantity */}
                      <label className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">
                          Quantity {item.quantity}
                        </span>
                        <div className="relative">
                          <select
                            value={item.quantity}
                            onChange={(e) => updateQty(item.id, e.target.value)}
                            className="appearance-none bg-transparent border-none outline-none cursor-pointer pl-0 pr-5 py-0 text-xs sm:text-sm text-gray-700"
                          >
                            {[1, 2, 3, 4, 5].map((q) => (
                              <option key={q} value={q}>{q}</option>
                            ))}
                          </select>
                          <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                            width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </label>
                    </div>

                    {/* Heart + Bin icons */}
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 lg:sticky lg:top-6">
          <div className="bg-[#e8e6e1] rounded-2xl p-5 sm:p-6">
            <h2
              className="font-black text-[#1a1a1a] mb-5"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(1.1rem,2.5vw,1.35rem)",
              }}
            >
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-700">
                <span>{items.length} ITEM{items.length !== 1 ? "S" : ""}</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Delivery</span>
                <span>${items.length ? DELIVERY.toFixed(2) : "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Sales Tax</span>
                <span>-</span>
              </div>
              <div
                className="flex justify-between font-black text-[#1a1a1a] text-lg border-t border-gray-400 pt-3"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-[#1a1a1a] text-white font-bold py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-widest mb-3"
            >
              CHECKOUT
            </button>

            <button
              onClick={() => setPromoOpen((p) => !p)}
              className="w-full text-center text-sm text-gray-700 underline underline-offset-2 hover:text-black transition"
            >
              {promoOpen ? "Hide promo code" : "Use a promo code"}
            </button>

            {promoOpen && (
              <div className="flex gap-2 mt-3">
                <input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 border border-gray-400 bg-transparent rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1a1a1a] transition"
                />
                <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition">
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="pb-10">
        <YouMayAlsoLike />
      </div>

    </div>
  );
}