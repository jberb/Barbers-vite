import React from "react";


function Discount() {
  return (
    <div
      className="px-10 py-12  bg-black text-center bg-bg-3 bg-no-repeat sm:bg-cover"
     
    >
      <h1 className="text-yellow-500  text-5xl font-crimson py-4">
        GET FLAT 25% DISCOUNT!
      </h1>
      <p className="text-white text-sm font-poppins py-1">
        Get Flat 25% Discount on every sunday of December. Use the promo code
        below.
      </p>
      <h2 className="text-white font-crimson font-bold text-4xl py-5">
        #BARBEARDS
      </h2>

      <button
        type="button"
        className="uppercase bg-yellow-500 hover:bg-slate-400 text-white font-thin border-2 border-white  rounded-full w-60 h-10 font-poppins"
      >
        Make an appointment now
      </button>
    </div>
  );
}

export default Discount;
