import React from "react";
import banner from "../assets/banner.png";
import circle from "../assets/circle.png";
import play from "../assets/Play.svg";

const Banner = () => {
  return (
    <div className="max-w-300 mx-auto min-h-[80vh] bg-base-100 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Banner Text */}
        <div className="md:w-1/2">
          <div className="badge bg-[#E1E7FF] text-[#4F39F6] border-none py-4 px-5 font-medium rounded-full">
            <img src={circle} alt="" /> New: AI-Powered Tools Available
          </div>
          <h1 className="text-6xl text-[#101727] font-extrabold leading-20">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-4 text-[#627382] text-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#1a0996] hover:to-[#5a069b] text-white border-none btn-lg rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-600 bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white btn-lg rounded-full">
              <img src={play} alt="play icon" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
