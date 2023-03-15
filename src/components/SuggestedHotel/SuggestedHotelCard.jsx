// 1. add to wish list - should have
// 2. currency converter - should have

import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SuggestedHotelCard = ({
  hotel_name,
  image,
  address,
  price,
  isTabletOrMobile,
  mapURL
}) => {
  var price = Intl.NumberFormat().format(price);
  // console.log(categories[0].facilities);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-8 mb-2 border hover:shadow-lg transition bg-white p-2 md:p-0 mx-auto">
      <div className="col-span-1 sm:col-span-3 md:col-span-2">
        <div className="relative">
          <img
            className="md:h-48 h-24 w-full object-cover"
            src={image}
            alt=""
          />
          {!isTabletOrMobile && (
            <span className="absolute right-0 top-0 p-1 m-2 rounded-full bg-white hover:text-red-400">
              <AiFillHeart size={23} />
            </span>
          )}
        </div>
      </div>
      <div className="col-span-1 sm:col-span-6 md:col-span-4 w-full space-y-3 p-4 border-r">
        <h3 className="text-black font-bold capitalize">{hotel_name}</h3>
            <p>Address: {address} | Map</p>
            <a className="hover:underline text-blue-500" href={mapURL} target="_blank">View Map</a>
      </div>

      <div className="col-span-1 sm:col-span-3 md:col-span-2 space-y-2 text-center p-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">BDT {price}</h2>
          <p>
            <small>per night</small>
          </p>
        </div>
            <button className="btn text-white hover:text-gray-800 rounded-md">View Rooms</button>
      </div>

      {/* {isTabletOrMobile && (
        <p className="col-span-8 flex items-center">
          <span>
            <IoLocationSharp size={23} />
          </span>
          Dhaka, Bangladesh
        </p>
      )} */}
    </section>
  );
};

export default SuggestedHotelCard;
