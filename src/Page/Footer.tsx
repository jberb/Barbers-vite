import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Fb1 from "../svg/Fb1";
import Twitter from "../svg/Twitter";
import Linkin from './../svg/Linkin';


function Footer() {
  const textStyle = "font-poppins hover:text-yellow-500";
  return (
    <div className="bg-black py-10">
      <div className="">
        <h1 className="text-yellow-500 font-bold text-5xl uppercase text-center font-crimson">
          Barbers
        </h1>
        <nav className="text-white font-poppins  hidden sm:flex justify-center   ">
          <ul className="flex gap-5">
            <li>
              <AnchorLink href="#home" className={textStyle}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className={textStyle}>
                About Us
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#service" className={textStyle}>
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#testimonials" className={textStyle}>
                Testimonials
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team" className={textStyle}>
                Our Team
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" className={textStyle}>
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
