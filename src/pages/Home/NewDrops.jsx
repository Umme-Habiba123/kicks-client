import axios from "axios";
import React, { useEffect, useState } from "react";

const NewDrops = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/drops")
      .then((res) => setDrops(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-16 bg-[#E7E7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            DON’T MISS OUT <br /> NEW DROPS
          </h2>

          <button className="mt-6 md:mt-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition">
            SHOP NEW DROPS
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {drops.map((drop) => (
            <div
              key={drop.id}
              className="relative bg-gray-100 rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                New
              </div>

              {/* Image */}
              <div className="bg-gray-200 rounded-xl p-4 flex items-center justify-center">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="h-36 sm:h-40 md:h-44 lg:h-48 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-xl font-semibold p-2">ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              {/* Content */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-3">
                  {drop.name}
                </h3>

                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  VIEW PRODUCT -{" "}
                  <span className="text-orange-400 font-bold">
                    ${drop.price}
                  </span>
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
