
import Button from "./Button";
interface card {
    title1:string;
    imageurl:string;
    body:string;
  }
  interface cardp{
    cards:card;
    isSelected:boolean;
    onClink?: () =>void
  }
function Cardcomp2({title1, imageurl, body}:card) {
  return (
    <div className=" border-2 rounded text-center flex flex-col item-center   my-10 items-center  py-1  hover:shadow-2xl w-60">
      <img className="h-56" src={imageurl}/>
      <h3 className="  text-black-500 font-poppins font-bold py-3 uppercase">{title1}</h3>
      <p className="  uppercase font-poppins  text-sm pb-5 ">{body}</p>
     
    <Button/>
    </div>
  )
}

export default Cardcomp2