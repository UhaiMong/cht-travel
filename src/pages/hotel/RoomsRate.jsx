import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../features/cartSlice";
import RoomDetails from "./RoomDetails";
import "./roomGallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center px-3 py-5 border-b-2 md:space-y-6 space-y-12 gap-4">
      {/* Room image Gallery  */}
      <div className="rounded-md">
        <ImageGallery
          items={roomImages}
          showThumbnails={false}
          showNav={false}
          renderItem={(roomImages) => (
            <img
              src={roomImages}
              className="room-image w-full object-fill rounded-md"
            />
          )}
        />
      </div>
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
          <div>
            <p className="flex gap-2 items-center">
              <BsFillInfoCircleFill />
              Prepaid - Book Now
            </p>
            <ul className="">
              {facilities.map((facility, i) => (
                <li className="fex" key={i}>
                  <FaHandPointRight className="inline mr-3" />
                  {facility}
                </li>
              ))}
            </ul>
          </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div
          className="tooltip tooltip-open tooltip-warning tooltip-top"
          data-tip={`Only ${roomCount ? roomCount : 1} room left!`}
        >
          <h2 className="text-xl text-black font-bold">BDT {hotelprice}</h2>
        </div>

        <button className="btn rounded-md text-white bg-gray-800 shadow-md hover:text-blue-500 hover:underline" onClick={handleBookNow}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default RoomsRate;
