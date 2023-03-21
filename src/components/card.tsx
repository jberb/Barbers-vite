import React from 'react'
interface card {
  title1:string;
  imageurl:string;
  body:string;
}

function card ({title1,imageurl,body}:card) {
  return (
    <div className="bg-white border-2 rounded text-center flex flex-col item-center hover:shadow-2xl ">
      <img className='h-56' src={imageurl}/>
      <h3 className="  text-black-500 font-poppins font-bold py-5 uppercase">{title1}</h3>
      <p className="font-thin font-poppins uppercase text-2xl">{body}</p>
    </div>
  )
}

export default card