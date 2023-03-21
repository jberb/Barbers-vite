import React from "react";
import S1 from "../img/a1.png";
import S2 from "../img/b7.png";
import S3 from "../img/b9.png";
import Button from "../components/Button";
import Topname from "../components/Topname";


function Services() {
 
  const borderStyle =
    " m-10  flex  flex-col  items-center rounded-lg py-5  hover:shadow-2xl w-60";
  const textStyle = "text-black-500 font-poppins font-bold py-5 uppercase ";
  const textStyle1 = "font-poppins  text-sm pb-5 ";

  return (
    <div
      id="service"
      className="flex flex-col text-center bg-gray-100 justify-center items-center py-12 "
    >
      <Topname title1="Nothing But the best" title2="our services"/>
      <div className=" flex flex-col gap-10 sm:flex-row py-1">
        <div className={borderStyle}>
          <img className=" h-56" src={S1}></img>
          <h1 className={textStyle}>Classic Cut</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <Button/>
        </div>
        <div className={borderStyle}>
          <img className="h-56" src={S2}></img>
          <h1 className={textStyle}>Clipper Haircut</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <Button/>
        </div>
        <div className={borderStyle}>
          <img className="h-56" src={S3}></img>
          <h1 className={textStyle}>Razor Shaver</h1>
          <p className={textStyle1}>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default Services;
