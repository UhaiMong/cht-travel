import React from "react";
import "./TopTouristSpot.css";
import ScrollContainer from "react-indiana-drag-scroll";
const spotImg = "https://i.ibb.co/bWqDGKg/image1.jpg";

const TopTouristSpot = () => {
  const data = [
    {
      id: "1",
      name: "Rangamati Hill District",
      image: "https://i.ibb.co/8gZN5tb/ruilui-para-sajek-valley.jpg",
    },
    {
      id: "2",
      name: "Chittagong Hill Tracts",
      image: "https://i.ibb.co/wSqMdwR/rsz-undp-zhantu-chakma2.jpg",
    },
    {
      id: "3",
      name: "The Cox's Bazar Beach",
      image: "https://i.ibb.co/hRs1jMG/longest-sea-beach-in.jpg",
    },
    {
      id: "4",
      name: "The Sundarbans Mangrove Forest",
      image: "https://i.ibb.co/5rGQtdf/Sundarban-Tiger.jpg",
    },
    {
      id: "5",
      name: "The Dhaka city",
      image: "https://i.ibb.co/Z64v7D7/Night-view-Dhaka-Bangladesh.jpg",
    },
  ];

  return (
    <div className="mb-20">
      <div className="customContainer">
        <div>
          <h2 className="text-2xl font-bold text-black">Top Tourist Spot</h2>
          <p>Book these experiences for a close-up look at Bangladesh</p>
        </div>

        <ScrollContainer className="flex cursor-grab">
          <div>
            <section className="mt-6 flex gap-4">
              {data.map((item, i) => (
                <div className="spot" key={i}>
                  <div className="relative">
                    <img src={item?.image} className="spot object-cover" />
                    <h2 className="absolute text-3xl text-white font-bold bottom-5 left-5">
                      {item?.name}
                    </h2>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default TopTouristSpot;
