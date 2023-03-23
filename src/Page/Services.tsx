import { useCallback, useState } from "react";
import S1 from "../img/a1.png";
import S2 from "../img/b7.png";
import S3 from "../img/b9.png";
import Topname from "../components/Topname";
import Cardcomp from "../components/Cardcomp";
import { card } from "../interface/Types";
import Handle from "../components/Handle";


function Services() {

 const [cards, setCard] = useState<card[]>([
  {
    id: 1, imageurl: S1, name:"Regular Cut", isActive: false
  },
  {
    id: 2, imageurl: S2, name:"Cliper Cut", isActive: false
  },
  {
    id: 3, imageurl: S3, name:"Razor Shaver", isActive: false
  },
 ]);

  
 

  return (
    <div id="service" className="flex flex-col text-center  items-center  py-12 ">
      <Topname title1="Nothing But the best" title2="our services"/>
<div className="sm:flex sm:flex-row flex flex-col gap-9 py-11">
{cards.map((carda:card, index:number) =>{
        return(
          <Cardcomp
          key={index}
          cards={carda}
          index={index}
          handleCardClick={() => Handle(index, setCard)}
          />
        );
      })}
</div>
      
    </div>
  );
}

export default Services;
