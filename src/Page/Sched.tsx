import React from "react";
import Email1 from "../svg/Email1";
import Location1 from "../svg/Location1";
import Phone1 from "../svg/Phone1";

function Sched() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div className="py-5 ">
        <p className="font-crimson text-gray-800 text-center font-bold pb-3">
          Contact Information:
        </p>
        <div className="flex text-sm py-1 font-crimson ">
          <Location1 width="12" heigth="12"/>
          <p className="px-2 ">123 Your Address here</p>
        </div>
        <div className="flex text-sm py-1 font-crimson">
          <Phone1 width="12" heigth="12"/>
          <p className="px-2 ">(046)123 - 456</p>
        </div>
        <div className="flex text-sm py-1 font-crimson">
          <Email1 width="12" height="12"/>
          <p className="px-2 ">youremail@gmail.com</p>
        </div>
      </div>
      <div className="py-5">
        <p className="font-crimson text-gray-800  font-bold ">
          Working Hours:
        </p>
        <div className="flex  justify-between  font-crimson gap-20 text-sm ">
          
          <ul className="py-3 ">
            <li className="py-1">Monday to Friday</li>
            <li className="py-1">Saturday</li>
            <li className="py-1">Sunday</li>
          </ul>
          
          <ul className="py-3 ">
          <li className="py-1">9 AM - 6 PM </li>
          <li className="py-1">9 AM - 5 PM </li>
          <li className="py-1">9 AM - 12PM</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Sched;
