interface Title{
    title1:string;
    title2:string;
}

function Topname({title1, title2}:Title ) {
  return (
    <div>
        <h1 className="py-1  uppercase font-thin textStyle1  ">{title1}</h1>
        <h1 className=" textStyle uppercase py-1">{title2}</h1>
    </div>
    
   
  )
}

export default Topname