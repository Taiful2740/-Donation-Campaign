// import { useState } from "react";

const Banner = () => {
  <div className="">
    <div
      className="hero h-[70vh] bg-red-400"
      style={{
        backgroundImage: "url(https://i.ibb.co/vkkQLCv/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <div className="relative w-7/12 mt-10  mx-auto">
            <input
              className="block p-2.5 w-full z-20 text-sm  bg-gray-50 rounded-lg   border-[#FF444A]"
              placeholder="Search here...."
              type="text"
            />
            <button
              type="submit"
              className="absolute cursor-pointer top-0 right-0 p-2.5 px-5 text-sm font-medium h-full text-white  bg-[#FF444A] rounded-r-lg border-[#FF444A]   "
            >
              <h1>Search</h1>
              <span className="sr-only"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Banner;
