import React from "react";
import { useEffect, useRef } from "react";
import Email from "./Email";
import Sched from "./Sched";
import M1 from "../img/map.jpg";

declare const google: any;

function Contact() {
  const T1 = "text-center font-crimson text-grey-100 uppercase py-3";
  const T2 = "text-center font-crimson text-yellow-500 uppercase text-2xl font-semibold";


  const mapRef = useRef<HTMLDivElement>(null);

 
  return (
    <div id="contact" className="py-5 ">
      <h3 className={T1}>CONTACT US</h3>
      <h1 className={T2}>MAKE AN APPOINTMENT NOW</h1>

      <div className="sm:flex sm:flex-row sm:px-12 py-8">
        <div className="py-10 px-8 sm:w-1/2 ">
          <p className="font-crimson  ">
            lorem ipsum dolor sit amet consectetuer adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            alisquip ex ea commando consequat.
          </p>
          <Sched />
        </div>

        <Email />
      </div>
      
      
    </div>
  );
}

export default Contact;
