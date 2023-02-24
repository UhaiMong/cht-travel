import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";

const PaymentForm = ({ price, title }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { email, displayName } = useSelector((state) => state.auth);
  const { searchQuery } = useSelector((state) => state.search);

  let today = moment(new Date()).format("MMMM Do YYYY");
  const startDate = searchQuery?.startDate ? searchQuery.startDate : today;
  const endDate = searchQuery?.endDate ? searchQuery.endDate : today;

  const onSubmit = (data) => {
    data.price = price;
    data.title = title;
    data.startDate = startDate;
    data.endDate = endDate;

    fetch("https://cht-travel-server-repo.vercel.app/init", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result);
      });
  };

  return (
    <div>
      <div className="py-4">
        <form
          className="bg-gray-100 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-black mb-5">Fill the Form</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              defaultValue={displayName}
            />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="cursor-not-allowed"
              type="email"
              id="email"
              {...register("email")}
              defaultValue={email}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="address">
              Address
            </label>
            <input type="text" id="address" {...register("address")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="city">
              City
            </label>
            <input type="text" id="city" {...register("city")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="phone">
              Phone
            </label>
            <input type="tel" id="phone" {...register("phone")} />
          </div>

          <hr className="w-full mt-2 bg-black" />

          <div className="flex justify-between items-center w-full mt-3">
            {/* <div className="flex  w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label for="terms">I agree to terms and conditions</label>
            </div> */}
            <button
              className="btn bg-black hover:bg-[#333333] text-white border-0"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
