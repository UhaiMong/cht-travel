import React, { useEffect, useState } from "react";
import Filter from "../components/reusable/Filter";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SuggestedHotelCard from "../components/SuggestedHotel/SuggestedHotelCard";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../features/searchSlice";
import Loading from "../components/reusable/Loading";

const staticMapImg = "https://i.ibb.co/w4WJm7b/static-Map-Img.png";

const HotelList = () => {
  const [search, setSearch] = useState("");
  const [data, setHotels] = useState([]);
  const [range, setRange] = useState(1000);
  const [value, setValue] = useState(false);
  const [star, setStar] = useState("");

  const dispatch = useDispatch();

  const { hotels, isLoading } = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getHotel());
      setHotels(payload);
    };
    fetchData();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const stars = ["5 star", "4 star", "3 star", "2 star", "1 star"];

  return (
    <div className=" bg-[#F2F2F2]">
      <div className="pb-4">
        <Filter setSearch={setSearch} />
      </div>
      <div className="customContainer space-y-8 pb-20">
        <div className="lg:grid grid-cols-12 gap-6 ">
          {!isTabletOrMobile && (
            <section className="col-span-3 space-y-4 bg-white border p-4 ">
              <div>
                <h3 className="text-black font-bold mb-2">Map View</h3>
                <div>
                  <img
                    src={staticMapImg}
                    className="w-full"
                    alt="staticMapImg"
                  />
                </div>
              </div>
              <hr />
              <div>
                <h3 className="text-black font-bold mb-2">Hotel Name</h3>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  className="w-full"
                />
              </div>
              <div className="text-slate-500 hover:cursor-not-allowed">
                <h3 className="font-bold mb-2">Set Your Budget</h3>
                <p>BDT 500 to BDT {range} per night</p>
                <input
                  className="w-full"
                  id="typeinp"
                  type="range"
                  min="500"
                  max="5000"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                  step="1"
                />
              </div>
              <div>
                <h3 className="font-bold mb-2">Star Rating</h3>
                <div className="space-y-2">
                  {stars.map((star) => (
                    <p className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onClick={(event) => {
                          setValue(event.target.checked);
                          setStar(star);
                          // handleCheckboxChange(event.target.checked, star);
                        }}
                      />{" "}
                      {star}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}
          <section className="col-span-9 space-y-4 ">
            {!isTabletOrMobile && (
              <div className="flex items-center gap-2 bg-[#FBE8CC] p-4">
                <span>
                  <BsFillInfoCircleFill color={"#a05d00"} size={23} />
                </span>
                <h6 className="text-[#a05d00]">
                  These dates are popular. Book soon to secure a place to stay.
                </h6>
              </div>
            )}

            {/* <div className="flex justify-between bg-white">
              <div>Short by Recommended</div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 bg-slate-200 px-4 py-2">
                  <AiOutlineUnorderedList />
                  List
                </div>
                <div className="flex cursor-pointer items-center gap-1 px-4 py-2 hover:bg-slate-200">
                  <IoLocationSharp />
                  Map
                </div>
              </div>
            </div> */}

            <div>
              <h2>
                <span className="font-bold text-black">
                  {hotels?.length} of {data?.length}
                </span>{" "}
                hotels are available in Bandarban
              </h2>
            </div>

            {isLoading ? (
              <Loading />
            ) : (
              <div>
                {hotels
                  .filter((item) => {
                    return value
                      ? item?.classification?.includes(star)
                      : search.toLocaleLowerCase() === ""
                      ? item
                      : item?.title
                          .toLocaleLowerCase()
                          .includes(search.toLocaleLowerCase());
                  })
                  .map((item) => (
                    <Link to={`hotel/${item?._id}`} key={item?._id}>
                      <SuggestedHotelCard
                        hotel_name={item?.title}
                        image={item?.imageURL}
                        address={item?.address}
                        price={item?.price}
                        isTabletOrMobile={isTabletOrMobile}
                      />
                    </Link>
                  ))}

                {data.filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item?.title
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase());
                }).length === 0 && <p>No result found.</p>}

                {data.filter((item) => {
                  return item?.classification?.includes(star);
                }).length === 0 && <p>No result found.</p>}
              </div>
            )}

            {/* Don't remove this code */}
            {/* <div>
            <h3>Pagination</h3>
            <div className="flex items-center justify-between">
              <button className="btn">
                <AiOutlineLeft color="white" /> Prev Page
              </button>
              <button className="btn">
                Next Page <AiOutlineRight color="white" />
              </button>
            </div>
          </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
