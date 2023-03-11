import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../features/cartSlice";
import RoomDetails from "./RoomDetails";

const RoomsRate = ({ categories, hotelData }) => {
  const navigate = useNavigate();
  const { type, price, descpt, roomCount, facilities, roomImages } = categories;
  console.log(roomImages);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  var hotelprice = Intl.NumberFormat().format(price);

  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(addToCart(hotelData));
    navigate(`/booking/${hotelData._id}`, { state: categories });
  };

  //   const images = [
  //     {
  //       original: `${hotelImages}`,
  //     },
  //     {
  //       original: `${hotelImages}`,
  //     },
  //     {
  //       original: `${hotelImages}`,
  //     },
  // ];
  
  return (
    <div className="flex justify-between items-center px-4 py-10 border-b flex-wrap md:space-y-6 space-y-12">
      <div>room image here</div>
      <div>
        <div className="flex gap-2">
          <p className="font-bold text-black">{type}</p>
          {/* The button to open modal */}
          <label htmlFor="roomDetails">
            <span className="underline cursor-pointer">Room Details</span>
          </label>

          <input type="checkbox" id="roomDetails" className="modal-toggle" />
          <label htmlFor="roomDetails" className="modal cursor-pointer">
            <div className="modal-box relative w-11/12 max-w-5xl" htmlFor="">
              <label
                htmlFor="roomDetails"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <RoomDetails descpt={descpt} />
            </div>
          </label>
        </div>
        {!isTabletOrMobile && (
          <>
            <p className="flex gap-2 items-center">
              <BsFillInfoCircleFill />
              Prepaid - Book Now, Pay Now
            </p>
            <ul className="">
              {facilities.map((facility, i) => (
                <li className="fex" key={i}>
                  <FaHandPointRight className="inline mr-3" />
                  {facility}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <div
          className="tooltip tooltip-open tooltip-warning tooltip-top"
          data-tip={`Only ${roomCount ? roomCount : 1} room left!`}
        >
          <h2 className="text-2xl text-black font-bold">BDT {hotelprice}</h2>
        </div>

        <button className="btn btn-primary" onClick={handleBookNow}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default RoomsRate;
