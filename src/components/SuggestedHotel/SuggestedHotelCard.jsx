// 1. add to wish list - should have
// 2. currency converter - should have

import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const SuggestedHotelCard = ({
  hotel_name,
  image,
  address,
  price,
  isTabletOrMobile,
  categories,
}) => {
  var price = Intl.NumberFormat().format(price);
  // console.log(categories[0].facilities);
  return (
    <section className="grid grid-cols-8 mb-2 border hover:shadow-lg transition bg-white p-2 md:p-0">
      <div className="col-span-2">
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
      <div className="col-span-4 space-y-3 p-4 border-r">
        <h3 className="text-black font-bold capitalize">{hotel_name}</h3>

        {isTabletOrMobile ? (
          <span className="flex gap-1">
            <BsFillInfoCircleFill />
            <BsFillInfoCircleFill />
            <BsFillInfoCircleFill />
          </span>
        ) : (
          <>
            <p>{address} | Map</p>
            <ul className="space-y-1">
              {categories[0]?.facilities.map((facility, i) => (
                <li key={i} className="flex items-center gap-1">
                  {/* <BsFillInfoCircleFill /> */}
                  {facility}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="col-span-2 space-y-2 text-center p-4">
        <div>
          <h2 className="text-2xl font-bold text-black">BDT {price}</h2>
          <p>
            <small>per night</small>
          </p>
        </div>
        {!isTabletOrMobile && (
          <>
            <button className="btn btn-primary">View Rooms</button>
            <p>View Available Rooms</p>
          </>
        )}
      </div>

      {isTabletOrMobile && (
        <p className="col-span-8 flex items-center">
          <span>
            <IoLocationSharp size={23} />
          </span>
          Dhaka, Bangladesh
        </p>
      )}
    </section>
  );
};

export default SuggestedHotelCard;
