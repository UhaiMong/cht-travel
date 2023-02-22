import React from "react";
import "./OurService.css";

import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const OurService = () => {
  let currentYear = new Date().getFullYear();

  const data = [
    {
      name: "Hotels",
      path: "/hotels",
      about:
        "Find the perfect place to stay on your next trip with our Hotel service.",
      image: "https://i.ibb.co/G06ZFYx/image1.jpg",
    },
    {
      name: "Tourist Sight",
      path:"/tourist-spot",
      about: "Explore the best tourist sights with our Tourist Sight service.",
      image: "https://i.ibb.co/6WWNbLb/Tourist-Sight.jpg",
    },
    {
      name: "Transportation",
      path:"/transportation",
      about:
        "Effortlessly plan your transportation with our Transportation service",
      image: "https://i.ibb.co/YfdFMqd/transport.jpg",
    },
    {
      name: "Tourist Guide",
      path:"/tourist-guid",
      about: "Get the most out of your trip with our Tourist Guide service.",
      image: "https://i.ibb.co/stJxLpX/Tourist-Guide.jpg",
    },
    {
      name: "Local Products",
      path:"/local-products",
      image: "https://i.ibb.co/89d9rry/Local-Product.jpg",
      about: "Bring home a piece of your trip with our Local Product service.",
    },
    {
      name: "Local Food",
      path:"/local-food",
      image: "https://i.ibb.co/tHC0yvw/IMG20220801194452.jpg",
      about: "Savor the local flavors with our Local Food service.",
    },
    {
      name: "Local Language",
      path:"/local-language",
      image: "https://i.ibb.co/zZy0Sj9/Local-Language.jpg",
      about: "Speak like a local with our Local Language service.",
    },
    {
      name: "Bike Rent",
      path:"/bike-rent",
      image: "https://i.ibb.co/dfdzn0T/BikeRent.jpg",
      about: "Explore the city on two wheels with our Bike Rent service.",
    },
  ];

  return (
    <div className="mb-20 md:mt-10 mt-8 space-y-3 lg:mx-40 px-4">
      <div>
        <h2 className="text-2xl font-bold text-black">Our Services</h2>
        <p className="">
          We've got everything you need to go big in {currentYear}.
        </p>
      </div>

      <section>
        <ScrollContainer>
          <div className="flex pb-8">
            <div className="xl:grid-cols-4 lg:grid-cols-2 gap-4 lg:grid flex ">
              {
                data.map((service, i) => (
                <Link to={service?.path} key={i}>
                  <ServiceCard service={service} />
                </Link>
                ))
              }
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default OurService;
