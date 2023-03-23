import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Fb1 from "../svg/Fb1";
import Twitter from "../svg/Twitter";
import Linkin from './../svg/Linkin';


function Footer() {
 
  return (
    <div className="bg-black py-10">
      <div className="">
        <h1 className="text-yellow-500 font-bold text-5xl uppercase text-center font-crimson">
          Barbers
        </h1>
        <nav className="text-white font-poppins  hidden sm:flex justify-center   ">
          <ul className="flex gap-5">
            <li>
              <AnchorLink href="#home" className="textStyle2">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="textStyle2">
                About Us
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#service" className="textStyle2">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#testimonials" className="textStyle2">
                Testimonials
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team" className="textStyle2">
                Our Team
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" className="textStyle2">
                Contact Us
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center p-3 gap-5">
        <Fb1 width="13" height="13"/>
        <Twitter width="13" height="13"/>
        <Linkin width="13" height="13"/>
      </div>
      <h3 className="text-white text-center font-crimson font-semibold py-5">
        {" "}
        BARBERS © 2018. All rights Reserved.
      </h3>
    </div>
  );
}

export default Footer;
