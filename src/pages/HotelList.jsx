import React, { useEffect, useState } from "react";
import Filter from "../components/reusable/Filter";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SuggestedHotelCard from "../components/SuggestedHotel/SuggestedHotelCard";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../features/searchSlice";
import Loading from "../components/reusable/Loading";

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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29551.030164764066!2d92.19773757503263!3d22.206712963809792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6a188414e62b%3A0xa4c3198f81ba90d0!2sBandarban!5e0!3m2!1sen!2sbd!4v1677765933775!5m2!1sen!2sbd"
                    width="100%"
                    height="auto"
                  ></iframe>
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
                        classification={item?.classification}
                        categories={item?.categories}
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
