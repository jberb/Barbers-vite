interface button{
    button1:string;
}

function Button2({button1}:button) {
  return (
    <button type="button" className="uppercase bg-transparent hover:bg-yellow-500 text-white font-bold border-2 border-white py-2 px-4 rounded-full w-40 h-25 font-poppins">{button1}</button>
  )
}

export default Button2