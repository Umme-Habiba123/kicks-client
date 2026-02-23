// NewDrops.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewDrops = () => {
  const [drops, setDrops] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/drops")
      .then((res) => setDrops(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleNavigate = (id = null) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (id) {
        navigate(`/product/${id}`);
      } else {
        navigate("/product/all");
      }
    }, 1800);
  };

  
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E7E7E3]">
        <div className="flex flex-col items-center gap-6">
          {/* Spinner */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">
              👟
            </div>
          </div>

          <div className="text-center">
            <p
              className="font-black text-[#1a1a1a] uppercase tracking-widest"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
              }}
            >
              Loading...
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Getting the freshest drops for you
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ animation: "loadbar 1.8s ease-in-out forwards" }}
            />
          </div>
        </div>

        <style>{`
          @keyframes loadbar {
            from { width: 0% }
            to   { width: 100% }
          }
        `}</style>
      </div>
    );
  }

  // ── NewDrops section ────────────────────────────────────────────────────────
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#E7E7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            DON'T MISS OUT <br /> NEW DROPS
          </h2>
          <button
            onClick={() => handleNavigate()}
            className="self-start sm:self-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm sm:text-base transition whitespace-nowrap"
          >
            SHOP NEW DROPS
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {drops.map((drop) => (
            <div
              key={drop.id}
              onClick={() => handleNavigate(drop.id)}
              className="relative bg-gray-100 rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition duration-300 flex flex-col cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
                New
              </div>

              {/* Image */}
              <div className="bg-gray-200 rounded-xl p-3 sm:p-4 flex items-center justify-center w-full aspect-square">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm font-semibold p-1.5 sm:p-2 mt-1 leading-snug line-clamp-2">
                {drop.name || "ADIDAS 4DFWD X PARLEY RUNNING SHOES"}
              </p>

              {/* CTA */}
              <div className="mt-2 sm:mt-4 flex flex-col flex-1 justify-end">
                <button className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-900 transition">
                  VIEW PRODUCT -{" "}
                  <span className="text-orange-400 font-bold">${drop.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewDrops;