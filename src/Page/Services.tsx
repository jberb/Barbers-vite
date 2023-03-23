import { useCallback, useState } from "react";
import S1 from "../img/a1.png";
import S2 from "../img/b7.png";
import S3 from "../img/b9.png";
import Topname from "../components/Topname";
import Cardcomp from "../components/Cardcomp";


function Services() {

 const [cards, setCards] = useState();

  
 

  return (
    <div
      id="service"
      className="flex flex-col text-center  items-center  py-12 "
    >
      <Topname title1="Nothing But the best" title2="our services"/>
      <Cardcomp
    states={[
      { id: 1, imageurl: S1, name:"Regular Cut", isActive: false},
      { id: 2, imageurl: S2, name:"Cliper Cut", isActive: false},
      { id: 3, imageurl: S3, name:"Razor Shaver", isActive: false},
    ]}/>
    </div>
  );
}

export default Services;
