import { useState } from "react";
import Button from "./Button";
interface card {
  id: number;
  title1?: string;
  name: string;
  imageurl: string;
  isActive: boolean;
}
interface cardp {
  states: Array<card>;
}

function Cardcomp({ states }: cardp) {
  const [cards, setCards] = useState(states);

  function handleCardClick(index: number) {
    setCards((prev: card[]) => [
      ...prev.map((elem, i) => {
        if (i === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        } else {
          return {
            ...elem,
            isActive: false,
          };
        }
        console.log(elem.isActive);
      }),
    ]);
  }

  return (
    <div
      className={`rounded sm:gap-11 gap-9  text-center flex flex-col sm:justify-center sm:flex-row items-center my-10 py-1 `}
    >
      {cards.map((carda: card, index: number) => {
        return (
          <div
            className={`rounded items-center text-center flex flex-col item-center  ${
              carda.isActive ? "bg-gray-300 shadow-lg" : " "
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={carda.imageurl}
              alt={carda.name}
              className={carda.title1 ? "h-96 w-72" : "h-40 w-50"}
            />
            <div className="flex flex-col items-center p-1 w-60">
              <p className={`font-poppins font-bold py-3 uppercase`}>
                {carda.name}
              </p>
              {carda.title1 ? (
                <p
                  className={`font-poppins font-bold  uppercase text-gray-500 ${
                    carda.isActive ? "text-yellow-500" : ""
                  }`}
                >
                  {carda.title1}
                </p>
              ) : (
                <>
                  <p
                    className={`uppercase text-gray-500 font-poppins font-thin  text-sm pb-5 ${
                      carda.isActive ? "text-yellow-400" : ""
                    }`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    aspernatur ab tempora possimus non tenetur aperiam. 
                  </p>
                  <button type="button" className={`bg-gray-400 uppercase text-white font-bold rounded-full border-3 border-white w-40 h-11 ${
                    carda.isActive ? "bg-yellow-500 border-yellow-500" : ""
                  }`}>
                    Read More
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardcomp;
