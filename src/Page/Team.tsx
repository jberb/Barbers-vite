import React from "react";
import T1 from "../img/a2.png";
import T2 from "../img/b3.png";
import T3 from "../img/b4.png";

function Team() {
  const textStyle = "  text-black-500 font-poppins font-bold py-5 uppercase";
  const textStyle1 = "font-thin font-poppins uppercase text-2xl";
  const borderStyle =
    "bg-white border-2 rounded text-center flex flex-col item-center hover:shadow-2xl ";
  return (
    <div id="team" className="bg-white-300 flex flex-col items-center  py-7  ">
      <h2 className="font-thin text-xl font-crimson py-1 uppercase text-gray-500">Professional</h2>
      <h1 className="font-crimson text-4xl py-1 text-yellow-500 uppercase ">
        Our Team
      </h1>
      <div className="flex flex-col gap-10 sm:flex-row py-5 ">
        <div className={borderStyle}>
          <img className="h-96 " src={T1}></img>
          <h3 className={textStyle}>Paul Narch</h3>
          <p className={textStyle1}>Barber</p>
        </div>
        <div className={borderStyle}>
          <img className="h-96" src={T2}></img>
          <h3 className={textStyle}>Steven Joseph</h3>
          <p className={textStyle1}>Barber</p>
        </div>
        <div className={borderStyle}>
          <img className="h-96" src={T3}></img>
          <h3 className={textStyle}>Alexander Darvid</h3>
          <p className={textStyle1}>Shaver</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
