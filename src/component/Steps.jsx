import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    step: "01",
    icon: userIcon,
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    step: "02",
    icon: packageIcon,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    step: "03",
    icon: rocketIcon,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-[#F9FAFC]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl text-[#101727] font-extrabold mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] mb-14">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-white border border-[#F1F1F1] rounded-2xl"
            >
              {/* Step Number Circle */}
              <div className="absolute top-2 right-5 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {item.step}
                </span>
              </div>

              <div className="flex flex-col items-center px-6 py-20">
                {/* Icon */}
                <div className="bg-purple-200 p-4 rounded-full">
                  <img src={item.icon} alt="" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold my-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
