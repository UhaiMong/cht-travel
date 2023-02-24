import React from "react";
import "./HeroSection.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Typed from "react-typed";
const heroImg = "https://i.ibb.co/Kqh4fds/heroimg.png";
const HeroSection = () => {
  return (
    <div className="md:py-20 mt-20 md:pb-10 hero-section">
      <div className="md:flex customContainer">
        <div
          className="md:w-1/2 md:space-y-10 py-6 space-y-12"
          data-aos="fade-right"
        >
          <div>
            <p className="mb-3">✈️ best experience</p>
            <h1 className="text-5xl md:text-8xl md:text-start text-center font-bold text-black">
              Your best trip with
              <span className="text-[#FED259] curvy-underline">
                {" "}
                amazing
              </span>{" "}
              travel agency
            </h1>
          </div>
          <p className="font-semibold h-14 md:text-start text-center">
            <Typed
              strings={[
                "Find explore and book the trip of your dreams with ease on our platform. Endless options, easy booking, and customizable packages.",
              ]}
              typeSpeed={50}
              loop
            />
          </p>

          <Link to="/hotels" className="inline-block ">
            <button className="btn px-8 flex btn-primary transition items-center gap-2">
              Book trip
              <AiOutlineArrowRight size={23} />
            </button>
          </Link>
        </div>
        <div
          className="md:w-1/2 flex items-center justify-center "
          data-aos="fade-left"
        >
          <div className="hero-img">
            <img src={heroImg} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
