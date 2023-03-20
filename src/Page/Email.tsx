import React from "react";

function Email() {
  return (
    <div className="flex flex-col gap-2 px-8 py-10 sm:w-1/2">
      <p className="font-crimson">
        Lorem ipsum dolor sit amet, consectetur elit, set do eiusmod tempor
        incidunt ut labore et dolore magna aliqua.
      </p>
      <form className="flex flex-col gap-1 py-5">
        <div className="flex gap-3">
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Name"
            className="border-2 border-gray-500 rounded w-1/2"
          />
          <input
            type="text"
            id="num"
            name="num"
            placeholder="Phone Number"
            className="border-2 border-gray-500 rounded w-1/2"
          />
        </div>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          className="border-2 border-gray-500 rounded"
        />
        <input
          type="text"
          id="mess"
          name="mess"
          placeholder="Message"
          className="border-2 border-gray-500 rounded h-32"
        />
      </form>
      <div className=" flex self-end py-3 ">
        <button
          type="button"
          className="uppercase bg-yellow-500 text-white font-thin border-2 border-white  rounded-full w-60 h-10 font-poppins"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Email;
