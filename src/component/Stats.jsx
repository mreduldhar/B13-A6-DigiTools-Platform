import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12">
      <div className="max-w-4xl mx-auto">
        <div className="w-full flex justify-between items-center text-center text-white shadow-none">
          <div className="">
            <div className="text-white text-6xl font-extrabold">50K+</div>
            <div className="text-purple-200 text-xl mt-1">Active Users</div>
          </div>
          <div className="h-12 w-px bg-white"></div>
          <div className="">
            <div className="text-white text-6xl font-extrabold">200+</div>
            <div className="text-purple-200 text-xl mt-1">Premium Tools</div>
          </div>
          <div className="h-12 w-px bg-white"></div>
          <div className="">
            <div className="text-white text-6xl font-extrabold">4.9</div>
            <div className="text-purple-200 text-xl mt-1">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
