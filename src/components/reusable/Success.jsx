import React from "react";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const paymentSuccess = "https://i.ibb.co/f0s6mQT/payment.gif";

const Success = () => {
  return (
    <div className="md:flex gap-4 space-y-8 p-8 items-center customContainer">
      <div className="space-y-8 md:w-1/2">
        <h2 className="md:text-4xl text-2xl font-bold flex gap-1 text-black">
          <span>
            {" "}
            <AiFillCheckCircle color="#098e2b" />
          </span>
          Your hotel booking confirm Successfully!
        </h2>
        <div>
          <Link to="/">
            <button className="btn btn-primary flex items-center gap-2 w-56">
              Explore Now
              <AiOutlineDoubleRight size={23} />
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={paymentSuccess} alt="success" />
      </div>
    </div>
  );
};

export default Success;
