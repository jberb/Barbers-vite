
import T1 from "../img/a2.png";
import T2 from "../img/b3.png";
import T3 from "../img/b4.png";
import Cardcomp from "../components/Cardcomp";
import Topname from "../components/Topname";
import { card } from "../interface/Types";
import Handle from "../components/Handle";
import { useState } from 'react';

function Team() {
  
  const [cards, setCard] = useState<card[]>([
    {
      id: 1, imageurl: T1, name:"Paul Narch", title1:"Barber", isActive: false
    },
    {
      id: 2, imageurl: T2, name:"Cliper Cut", title1:"Barber", isActive: false
    },
    {
      id: 3, imageurl: T3, name:"Razor Shaver", title1:"Barber", isActive: false
    },
   ]);
  
  return (
    <div id="team" className="bg-white-300 flex flex-col text-center items-center  py-5 ">
      
      <Topname title1="professional" title2="our team"/>
      <div className="sm:flex sm:flex-row flex flex-col gap-11 py-5 ">
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

export default Team;
