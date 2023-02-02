import React from "react";
import { AiFillDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart } from "../features/cartSlice";
import Footer from "../layout/Footer";
import OurService from "./home/OurService/OurService";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleBookNow = () => {
      dispatch(addToCart(hotelData));
      navigate(`/booking/${hotelData._id}`, { state: categories });
    };

  const CartCard = ({ hotel }) => {
    return (
      <div className="md:mt-20 mt-10 space-y-4 customContainer">
        <h1 className="text-black text-3xl font-bold">Cart</h1>

        <Link to={-1} className="inline-block">
          <div className="flex items-center transition hover:text-stone-500 gap-2 ">
            <AiOutlineArrowLeft />
            <p className="underline">Go Back</p>
          </div>
        </Link>

        <section className="md:grid grid-cols-3 gap-4 pb-32">
          <section className="col-span-2 border-b pb-4 md:pb-0 bg-white p-4">
            <div className="flex gap-2">
              <div className="space-y-1">
                <div>
                  <img
                    src={hotel?.imageURL}
                    className="w-96 h-32 md:w-32 md:h-32 rounded-md"
                    alt=""
                  />
                </div>
                <button
                  className="flex items-center gap-1 underline transition hover:text-stone-500"
                  onClick={() => dispatch(removeFromCart(hotel))}
                >
                  <AiFillDelete />
                  Remove
                </button>

                  <button onClick={handleBookNow} className="btn bg-[#7ED757] outline-none border-none text-white font-semibold text-md mb-4">
                    Checkout Now
                  </button>
              </div>
              <div>
                <h3 className="text-black font-bold">{hotel?.title}</h3>
                <p>{hotel?.address}</p>
                <p>Friday, January 20, 2023 | 10:00 AM</p>
                <h4 className="text-black font-bold">
                  Total BDT {hotel?.price}
                </h4>
              </div>
            </div>
          </section>
          <section className="col-span-1 md:border rounded-3xl p-4 space-y-4 bg-white">
            <h3>Review Order Details</h3>

            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm">Booking Fee</span>
                <span className="text-sm">BDT 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">BDT {hotel.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-bold">Total (1)</span>
                <span className="text-base font-bold">BDT {hotel.price}</span>
              </div>
            </div>

            <p className="xs">No additional taxes & fees</p>
          </section>
        </section>
      </div>
    );
  };

  return (
    <div>
      {!cart.length && (
        <>
          <div className="customContainer my-20 space-y-6">
            <h1 className="text-black text-3xl font-bold">Cart</h1>

            <h2 className="text-2xl text-black font-bold">
              Your Cart is Empty
            </h2>
            <h3 className="text-2xl text-black font-bold">
              Add Things to Do to your cart. Now you can shop for tours,
              attractions, and <br /> experiences.{" "}
              <Link to="/" className="underline text-[#545454]">
                Explore Now
              </Link>
            </h3>
          </div>
          <div>
            <OurService />
          </div>
        </>
      )}

      {cart.map((hotel, i) => (
        <CartCard hotel={hotel} key={i} />
      ))}

      <Footer />
    </div>
  );
};

export default Cart;
