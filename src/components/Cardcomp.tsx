
interface card {
    title1:string;
    imageurl:string;
    body:string;
  }
function Cardcomp({title1, imageurl, body}:card) {
  return (
    <div className="bg-white border-2 rounded text-center flex flex-col item-center hover:shadow-2xl ">
      <img className="h-96" src={imageurl}/>
      <h3 className="  text-black-500 font-poppins font-bold py-3 uppercase">{title1}</h3>
      <p className="  uppercase font-poppins  text-sm pb-5 ">{body}</p>
    </div>
  )
}

export default Cardcomp