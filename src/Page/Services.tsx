import React from "react";
import S1 from "../img/a1.png";
import S2 from "../img/b7.png";
import S3 from "../img/b9.png";

function Services() {
  const buttonStyle =
    "bg-gray-400 hover:bg-yellow-500 text-white font-bold rounded-full border-3 border-white w-40 h-11 ";
  const borderStyle =
    " m-10  flex  flex-col  items-center rounded-lg py-5  hover:shadow-2xl w-60";
  const textStyle = "text-black-500 font-poppins font-bold py-5 uppercase ";
  const textStyle1 = "font-poppins  text-sm pb-5 ";

  return (
    <div
      id="service"
      className="flex flex-col text-center bg-gray-100 justify-center items-center py-12 "
    >
      <h1 className="py-2 text-gray-700 font-crimson">NOTHING BUT THE BEST</h1>
      <h1 className="py-2 text-yellow-500 font-bold text-4xl font-crimson">
        OUR SERVICES
      </h1>
      <div className=" flex flex-col gap-10 sm:flex-row py-5">
        <div className={borderStyle}>
          <img className=" h-56" src={S1}></img>
          <h1 className={textStyle}>Classic Cut</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <button type="button" className={buttonStyle}>
            Read More
          </button>
        </div>
        <div className={borderStyle}>
          <img className="h-56" src={S2}></img>
          <h1 className={textStyle}>Clipper Haircut</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <button type="button" className={buttonStyle}>
            Read More
          </button>
        </div>
        <div className={borderStyle}>
          <img className="h-56" src={S3}></img>
          <h1 className={textStyle}>Razor Shaver</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <button type="button" className={buttonStyle}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
