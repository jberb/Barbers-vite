import React from "react";
import B2 from "../img/b8.jpg";
import Topname from "../components/Topname";

function About() {
  return (
    <div
      id="about"
      className="pt-10  p-10 flex flex-col sm:items-center sm:flex-row sm:gap-10 sm:px-40 sm:p-14"
    >
      <div className="sm:w-1/2 p-11">
       
        <Topname title1="UNIQUE STORY" title2="50 Years of Experience"/>

        <p className="py-5 font-crimson">
          Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex eacommando consequat.{" "}
        </p>
        <p className="py-5 font-crimson">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidant non
          proident, sunt in cuipa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis undeomnis iste error sit volumptatem
          accusantium.
        </p>

        <button
          type="button"
          className="bg-yellow-400 hover:bg-transparent hover:text-black  text-white font-bold rounded-full border-3 border-white w-40 h-11 font-poppins "
        >
          Read More
        </button>
      </div>
      <img className="py-10 sm:p-10 sm:w-1/2 sm:h-96 justify-center" src={B2}></img>
    </div>
  );
}

export default About;
