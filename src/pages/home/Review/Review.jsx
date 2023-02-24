import React from "react";
import "./Review.css";
import ScrollContainer from "react-indiana-drag-scroll";
import { AiFillStar } from "react-icons/ai";

const userImg = "https://i.ibb.co/vv70hPd/manual-Reg-User-Img.png";

const Review = () => {
  const data = [
    { id: "1", color: "#FFE49B" },
    { id: "2", color: "#FAF0EE" },
    { id: "5", color: "#CAF0E1" },
    { id: "3", color: "#FBF2ED" },
    { id: "4", color: "#FFCCCB" },
    { id: "6", color: "#FFE49B" },
    { id: "7", color: "#CAF0E1" },
    { id: "8", color: "#FAF0EE" },
  ];

  return (
    <div className="bg-[#004F32] py-10 review-section">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="lg:mx-40 px-4">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-white">Reviews</h2>
            <p>What users feel about CHT-Travel</p>
          </div>

          <ScrollContainer className="flex cursor-grab p-1">
            <div>
              <section className="mt-6 flex gap-4">
                {data.map((item) => (
                  <div className="review-card " key={item?.id}>
                    <div
                      className="space-y-4 rounded-lg hover:shadow-lg p-4 "
                      style={{ backgroundColor: `${item.color}` }}
                    >
                      <div>
                        <div className="font-bold gap-2 flex items-center">
                          <span> 4.7</span>
                          <span className="flex">
                            <AiFillStar size={20} color="#FF9900" />
                            <AiFillStar size={20} color="#FF9900" />
                            <AiFillStar size={20} color="#FF9900" />
                            <AiFillStar size={20} color="#FF9900" />
                          </span>
                        </div>
                        <p className="font-bold text-xs">Jan 2023</p>
                      </div>
                      <p>
                        First time scuba diving. Great learning experience in
                        the pool and had a great dive in the ocean. JJ was an
                        excellent instructor and dive guide. Thank you!
                      </p>
                      <div className="flex items-center gap-2 ">
                        <div>
                          <img
                            className="w-14 rounded-full"
                            src={userImg}
                            alt=""
                          />
                        </div>
                        <h4 className="font-bold">Sylvia Davidson</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default Review;
