import React from "react";
import T1 from "../img/a2.png";
import T2 from "../img/b3.png";
import T3 from "../img/b4.png";
import Cardcomp from "../components/Cardcomp";
import Topname from "../components/Topname";

function Team() {
  
  
  return (
    <div id="team" className="bg-white-300 flex flex-col text-center items-center  py-5 
     ">
      
      <Topname title1="professional" title2="our team"/>
      <Cardcomp
     states={[
      {id: 1, imageurl: T1, name:"Paul Narch", title1:"Barber", isActive:false},
      {id: 2, imageurl: T2, name:"Steven Joseph", title1:"Barber", isActive:false},
      {id: 3, imageurl: T3, name:"Alexander David", title1:"Shaver", isActive:false},
     ]}

     />
    </div>
  );
}

export default Team;
