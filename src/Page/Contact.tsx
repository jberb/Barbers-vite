import React from "react";
import { useEffect, useRef } from "react";
import Email from "./Email";
import Sched from "./Sched";
import Topname from "../components/Topname";


declare const google: any;

function Contact() {



  const mapRef = useRef<HTMLDivElement>(null);

 
  return (
    <div id="contact" className="py-5  ">
      <div className="text-center"> <Topname title1="contact us" title2="make an appointment now"/></div>
      
      

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
