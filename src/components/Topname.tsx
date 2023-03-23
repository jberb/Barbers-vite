interface Title{
    title1:string;
    title2:string;
}

function Topname({title1, title2}:Title ) {
  return (
    <div>
        <h1 className="py-1 text-gray-700 font-crimson uppercase font-thin text-xl  ">{title1}</h1>
        <h1 className=" text-yellow-500 font-bold text-4xl font-crimson uppercase py-1">{title2}</h1>
    </div>
    
   
  )
}

export default Topname