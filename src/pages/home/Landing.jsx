import React from "react";
import Footer from "../../layout/Footer";
import Contact from "../Contact";
import About from "./About";
import CustomSlider from "./HeroSlider/CustomSlider";
import HeroSlider from "./HeroSlider/HeroSlider";
import OurService from "./OurService/OurService";
import Review from "./Review/Review";
import TopTouristSpot from "./TopTouristSpot/TopTouristSpot";

const Landing = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <CustomSlider/>
      {/* <HeroSlider/> */}

      <div data-aos="fade-up" data-aos-duration="1000">
        <OurService />
      </div>

      {/* <div>
        <Demo />
      </div> */}

      <div data-aos="fade-up" data-aos-duration="1000">
        <TopTouristSpot />
      </div>

      <Review />
      <div data-aos="zoom-in" data-aos-duration="2000">
        <About />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="2000">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
