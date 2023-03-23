import { card } from "../interface/Types";



function Handle(
    index: number,
    setCard: React.Dispatch<React.SetStateAction<card[]>>
) {
  setCard((prev: card[]) => [
    ...prev.map((elem, i) => {
        return{
            ...elem,
            isActive: i === index ? !elem.isActive : false
        }
    }),
  ]);
}

export default Handle