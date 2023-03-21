import React from "react";
import T1 from "../img/a2.png";
import T2 from "../img/b3.png";
import T3 from "../img/b4.png";
import Cardcomp from "../components/Cardcomp";
import Topname from "../components/Topname";

function Team() {
  
  return (
    <div id="team" className="bg-white-300 flex flex-col text-center items-center  py-7 
     ">
      
      <Topname title1="professional" title2="our team"/>
      <div className="flex flex-col gap-10 sm:flex-row py-5 ">
        <Cardcomp
        imageurl={T1}
        title1="Paul Narch"
        body="Barber"
        />
        <Cardcomp
        imageurl={T2}
        title1="Steven Joseph"
        body="Barber"/>
        <Cardcomp
        imageurl={T3}
        title1="Alexander Darvid"
        body="Shaver"/>
        
       
      </div>
    </div>
  );
}

export default Team;
