import React from "react";
import Elipsss from "../svg/Elipsss"
import Elipss from "../svg/Elipss";


function Testimonials() {
  const textStyle = "text-sm text-white leading-5 py-3 sm:pr-96 w-5/6";
  const headStyle = "text-yellow-400 text-4xl font-crimson py-1";
  const headStyle1 = "text-gray-300 text-lg font-crimson gap-2 ";
  return (
    <div
      id="testimonials"
      className="bg-left-top p-10 bg-black sm:px-40 bg-no-repeat sm:bg-right bg-bg-2  sm:bg-cover"
      
    >
      <h3 className={headStyle1}>100+ HAPPY CLIENTS</h3>
      <h1 className={headStyle}>TESTIMONIALS</h1>
      <p className={textStyle}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat Duis aute irure dolor in reprehenderit in voluptate"
      </p>
      <p className={textStyle}>
        <strong>
          <i>John Doe, CEO Microsoft</i>
        </strong>
      </p>
      <p className={textStyle}>July 27, 2018</p>
      <div className="flex py-5">
          <Elipss width="18" heigth="18"/>
          <Elipsss width="18" heigth="18"/>
          <Elipsss width="18" heigth="18"/>
      </div>
    </div>
  );
}

export default Testimonials;
