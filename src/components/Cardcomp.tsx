import { useState } from "react";
import { card } from "../interface/Types";

interface cardp {
  cards:card;
  index: number;
  handleCardClick:Function;
}

function Cardcomp({ cards, index, handleCardClick }: cardp) {
  

  //return (
    //<div className={`rounded sm:gap-11 gap-9  text-center flex flex-col sm:justify-center sm:flex-row items-center my-10 py-1 `}>
      //{cards.map((carda: card, index: number) => {
        return (
         
          <div
            className={`border-2 rounded items-center text-center flex flex-col item-center  ${
              cards.isActive ? "bg-gray-300 shadow-lg" : " "
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={cards.imageurl}
              alt={cards.name}
              className={cards.title1 ? "h-96 w-60" : "h-40 w-60"}
            />
            <div className="flex flex-col items-center p-1 w-60">
              <p className={`font-poppins font-bold py-3 uppercase`}>
                {cards.name}
              </p>
              {cards.title1 ? (
                <p
                  className={`font-poppins font-bold  uppercase text-gray-500 ${
                    cards.isActive ? "text-yellow-500" : ""
                  }`}
                >
                  {cards.title1}
                </p>
              ) : (
                <>
                  <p
                    className={`uppercase text-gray-500 font-poppins font-thin  text-sm pb-5 ${
                      cards.isActive ? "text-yellow-400" : ""
                    }`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    aspernatur ab tempora possimus non tenetur aperiam. 
                  </p>
                  <button type="button" className={`bg-gray-400 uppercase text-white font-bold rounded-full border-3 border-white w-40 h-11 ${
                    cards.isActive ? "bg-yellow-500 border-yellow-500" : ""
                  }`}>
                    Read More
                  </button>
                </>
              )}
            </div>
          </div>
         
        //);
      //})}
    //</div>
  );
};

export default Cardcomp;
