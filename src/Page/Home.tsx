
import AnchorLink from "react-anchor-link-smooth-scroll";
import Burger from "../svg/Burger";
import Email1 from "../svg/Email1";
import Phone1 from "../svg/Phone1";
import Button2 from "../components/Button2";

function Home() {
  
  const textStyle = "font-poppins hover:text-yellow-500 text-sm uppercase";
  return (
    <div
      id="home"
      className="bg-top bg-bg-1 bg-no-repeat sm:bg-cover "
     
    >
      <div className="pt-5 pb-40">
        <div className="flex justify-between gap-4 px-6 font-poppins sm:px-36">
          <div className="inline-flex ">
            <Email1 width="13" height="15"/>
            <a className="text-white text-xs" href="mailto:youremail@gmail.com">
              youremail@gmail.com
            </a>
          </div>
          <div className="flex">
            <Phone1 width="13" heigth="13"/>
            <a className="text-white text-xs sm:pr-20" href="tel:+046123467">
              {" "}
              (046) 123 - 4567
            </a>
          </div>
        </div>

        <div className="bg-white bg-opacity-5 py-1 px-2 sm:px-3 ">
          <nav className=" flex justify-between py-4 px-4 sm:px-32">
            <p className="text-yellow-400 text-5xl uppercase font-crimson">
              Barbers
            </p>
            <Burger width="28" height="28"/>
            <ul className="text-white  justify-between hidden  font-crimson sm:flex gap-5 px-20">
              <li>
                <AnchorLink href="#home" className="textStyle2">
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

        <div className="pt-40 pb-20 px-9 sm:px-32 ">
          <h1 className="text-white text-4xl  font-poppins  pt-5 pb-5 sm:pt-12">
            Quality Barber Shop
          </h1>
          <div className="text-white pb-3 font-crimson text-sm sm:px-1 ">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              minus atque iure ipsa eligendinemo excepturi <br></br> aperiam
              possimus cupiditate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 py-5">
            <div className="pb-5">
              <Button2 button1="Learn More"/>
            </div>
            <div>
              <Button2 button1="Contact Us"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
