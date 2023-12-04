import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center bg-[#0a192f] min-h-screen w-full"
    >
      {/* Container */}
      <div className="flex flex-col justify-center h-full max-w-[1000px] mx-auto p-8">
        {/* <p className="text-pink-600">Hi, my name is</p> */}
        <h1 className="text-7xl sm:text-4xl font-bold text-[#ccd6f6]">
          Mohamad Rabbani
        </h1>
        <h2 className="text-7xl sm:text-4xl font-bold text-[#8892b0]">
          Electrical & Computer Engineer
          {/* I'm a Full Stack Developer */}
        </h2>
        <p className="py-4  max-w-[700px] font-bold text-[#8892b0]">
          I'm an aspiring Full Stack Developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently I'm
          focused on building responsive full-stack web applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
