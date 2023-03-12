import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import {
  AiFillStar,
  AiFillTag,
  AiOutlineArrowLeft,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import HotelReviewCard from "./HotelReviewCard";
import NearbyHotelCard from "./NearbyHotelCard";
import RoomsRate from "./RoomsRate";
import HotelImageGallery from "./HotelImageGallery";
import { RiChat1Fill } from "react-icons/ri";
import { FaPaw } from "react-icons/fa";
import { BiBus } from "react-icons/bi";
import { VscListSelection } from "react-icons/vsc";
import { BsGlobe } from "react-icons/bs";
import AmenitiesCard from "./AmenitiesCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetSingleHotelQuery } from "../../api/hotelSlice";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { amenities } from "./amenities";

const Hotel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { id } = useParams();
  const { data } = useGetSingleHotelQuery(id);
  console.log(data);
  const { searchQuery } = useSelector((state) => state.search);

  let today = moment(new Date()).format("MMMM DD YYYY");
  const startDate = searchQuery?.startDate;
  const endDate = searchQuery?.endDate;

  const title = [
    { name: "Rooms & Rate", link: "#roomsRates" },
    { name: "Hotel Description", link: "#hotelDescription" },
    { name: "Amenities", link: "#amenities" },
    { name: "Guest Review", link: "#hotelReview" },
  ];

  const Loading = () => {
    return (
      <div>
        <div className="animate-pulse space-y-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-52"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-32"></div>
        </div>
      </div>
    );
  };
  // SERVICE NAV
  const ServicesNav = () => {
    return (
      <>
        {title.map((item, i) => (
          <a
            key={i}
            href={item?.link}
            className="bg-indigo-300 p-2 hover:bg-indigo-400"
          >
            <span className="lg:text-base text-sm text-black font-bold">
              {item?.name}
            </span>
          </a>
        ))}
      </>
    );
  };
  // SERVICE NAV END

  return (
    <div className="space-y-8 md:py-20 py-10 customContainer">
      {!data?.title ? (
        <Loading />
      ) : (
        <section className="flex justify-between flex-wrap space-y-4 md:space-y-0">
          <div className="lg:space-y-0 space-y-2">
            <div className="flex gap-2 items-center">
              <Link to="/hotels" className="inline-block ">
                <div className="text-2xl font-bold flex text-black hover:text-fontPrimaryColor transition items-center gap-2">
                  <AiOutlineArrowLeft />
                  <h2 className="">{data?.title}</h2>
                </div>
              </Link>

              <div className="">
                <span className="flex">
                  <AiFillStar size={23} color="#FF9900" />
                  <AiFillStar size={23} color="#FF9900" />
                  <AiFillStar size={23} color="#FF9900" />
                  <AiFillStar size={23} color="#FF9900" />
                </span>
              </div>
            </div>

            <div className="lg:flex lg:space-y-0 space-y-2 items-center">
              <p>{data?.address}</p>
              <div className="flex items-center">
                <span>
                  <IoLocationSharp />
                </span>

                <a href="#googleMap" className="link">
                  View Map
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href="#roomsRates">
              <button className="btn bg-black rounded-lg gap-2 hover:bg-[#333333] text-white border-0">
                <VscListSelection size={23} /> Choose a room
              </button>
            </a>
          </div>
        </section>
      )}
      <section>
        <div className="grid grid-cols-4 text-center">
          <ServicesNav />
        </div>
        <section className="h-fit grid-cols-6 bg-white lg:grid">
          <div className="col-span-4">
            <HotelImageGallery hotelImages={data?.imageURL} />
          </div>
          <div className="col-span-2 p-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="rounded-full border-4 border-solid border-sky-500 bg-indigo-200 p-6 text-2xl font-bold">
                7.1
              </span>
              <div>
                <p className="text-sm ">OVERALL GUEST SCORE</p>
                <p className="text-2xl">Good</p>
                <p className="text-sm">
                  <a href="#hotelReview" className="link">
                    Based on 2001 Verified Guest Ratings
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>
                <RiChat1Fill />
              </span>
              <p className="text-sm">
                Good hotel, close to the airport with a free shuttle bus. Room
                was clean and tidy, bed comfy and overall a good stay. Would be
                my first choice if I am back in LA. More Ratings
              </p>
            </div>
            <hr />
            <div>
              <div className="flex items-center gap-1 text-success">
                <span>
                  <AiFillTag />
                </span>
                <h5 className="font-bold">Promos Available</h5>
              </div>
              <p>
                See{" "}
                <span className="underline">
                  <a href="#roomsRates" className="link">
                    Rooms & Rates
                  </a>
                </span>{" "}
                for more details.
              </p>
            </div>
            <hr />
            <div className="space-y-3">
              <div className="flex gap-2">
                <h5 className="font-bold text-black">Featured Amenities</h5>
                <a href="#amenities" className="link">
                  {" "}
                  View More
                </a>
              </div>
              <div className="grid grid-cols-2 lg:gap-0 gap-2">
                <div className="flex gap-1 items-center">
                  <span>
                    <BiBus />
                  </span>
                  <p>Free Airport Shuttle</p>
                </div>
                <div className="flex gap-1 items-center">
                  <span>
                    <BiBus />
                  </span>
                  <p>Free Airport Shuttle</p>
                </div>
                <div className="flex gap-1 items-center">
                  <span>
                    <BiBus />
                  </span>
                  <p>Free Airport Shuttle</p>
                </div>
                <div className="flex gap-1 items-center">
                  <span>
                    <BiBus />
                  </span>
                  <p>Free Airport Shuttle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        className="grid-cols-3 gap-4 space-y-2 lg:grid bg-white p-4 rounded"
        id="hotelDescription"
      >
        <div className="col-span-2">
          <h3 className="font-bold text-black text-lg">Hotel Description</h3>
          <p>{data?.description}</p>
        </div>
        {!isTabletOrMobile && (
          <div className="bg-slate-200 p-4">
            <h6 className="font-bold text-black">Why book with us?</h6>
            <ul>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Low Rates
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Verified Guest Reviews
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Largest Selection
              </li>
            </ul>
          </div>
        )}
      </section>

      <section
        id="googleMap"
        className="bg-white p-4 rounded h-80 mb-5 cursor-zoom-in"
      >
        <h3 className="font-bold text-black text-lg">Map</h3>
        <div>
          {/* <img
            src="https://i.ibb.co/fqfDqHZ/static-Map.png"
            className="w-full h-80"
            alt=""
          /> */}
          <iframe
            className="w-full h-80 border-none"
            src={data?.mapURL}
            width="100%"
            height="320"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="roomsRates" className="bg-white p-4 rounded">
        <div className="md:flex space-y-2 md:space-y-0 gap-4 items-center">
          <h3 className="font-bold text-black text-lg">Rooms & Rates</h3>
          <div className="space-x-2">
            <span>{searchQuery ? searchQuery?.noOfRoom : "1 night"}</span>
            <span>:</span>
            <span>{searchQuery ? searchQuery?.noOfPeople : "1 person"}</span>
            <span>:</span>
            <span>{searchQuery ? startDate : today}</span>
            <span className="font-bold">to</span>
            <span>{searchQuery ? endDate : today}</span>
          </div>
        </div>
        <div className="border mt-2">
          <h4 className="bg-slate-200 p-4">AVAILABLE ROOMS</h4>

          {data?.categories ? (
            data?.categories.map((item, i) => (
              <RoomsRate categories={item} hotelData={data} key={i} />
            ))
          ) : (
            <>
              <h3 className="p-4">Sorry, No rooms available now!</h3>
            </>
          )}
        </div>
      </section>

      <section className="bg-slate-200 p-8">
        <div className="space-y-2">
          <h3 className="text-xl flex gap-2 font-semibold">
            <FaPaw /> Pet Policy
          </h3>
          <p>Pets are allowed. Charges may apply.</p>
        </div>
      </section>

      <section className="space-y-2 bg-white p-4 rounded" id="amenities">
        <h3 className="font-bold text-black text-lg">Amenities</h3>

        <section className="bg-slate-200 p-4">
          <div className="grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 grid">
            {amenities.slice(0, 10).map((item, i) => (
              <AmenitiesCard item={item} key={i} />
            ))}
          </div>
        </section>

        <div className="pt-4 space-y-2">
          <h5 className="font-bold">Internet Access</h5>
          <div className="flex items-center gap-2">
            <span>
              <BsGlobe />
            </span>
            <p className="text-sm">Internet Access Available</p>
          </div>
        </div>

        {/* <div className="pt-4 space-y-2">
          <h5 className="font-bold">All Amenities</h5>
          <div className="grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 grid">
            {amenities.map((item) => (
              <div className="flex items-center" key={item?.id}>
                <span className="text-success">
                  <BsCheck size={23} />
                </span>
                <span className="text-sm">{item?.amenities_name}</span>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section className="space-y-4 pt-6 p-4 rounded bg-white" id="hotelReview">
        <h3 className="font-bold text-black text-lg">Guest Ratings</h3>
        <div className="flex items-center gap-4">
          <span className="rounded-full border-4 border-solid border-sky-500 bg-indigo-200 p-6 text-2xl font-bold">
            7.1
          </span>
          <div>
            <p>OVERALL GUEST SCORE</p>
            <p className="text-2xl">Good</p>
            <p>Based on 2001 Verified Guest Ratings</p>
          </div>
        </div>
        <hr />
        <div>
          <HotelReviewCard />
        </div>
      </section>
      <section className="space-y-4 p-4 bg-white rounded">
        <h3 className="font-bold text-black text-lg">Nearby Hotels</h3>
        <div className="flex grid-cols-3 flex-wrap gap-4 lg:grid">
          <NearbyHotelCard />
          <NearbyHotelCard />
          <NearbyHotelCard />
        </div>
      </section>
      <section className="p-4 rounded bg-white">
        <h3 className="font-bold text-black text-lg">Important Information</h3>
        <p>
          Guests are required to show a photo ID and credit card upon check-in.
          Please note that all Special Requests are subject to availability and
          additional charges may apply. Shuttle pick-up and drop off is located
          on the Lowe Level - Arrivals level of the airport only.
        </p>
      </section>
    </div>
  );
};

export default Hotel;
