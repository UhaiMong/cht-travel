import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  return (
    <div
      id="service-card"
      className="card lg:w-full hover:opacity-90 w-72 bg-white hover:shadow-lg transition"
    >
      <figure>
        <img
          src={service?.image}
          className="h-52 object-cover w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body h-56 bg-white border rounded-b-xl">
        <h2 className="card-title service-element text-black">
          {service?.name}
        </h2>
        <p className="text-justify line-clamp-3">{service?.about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
