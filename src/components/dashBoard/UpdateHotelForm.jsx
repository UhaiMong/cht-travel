import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleHotelQuery,
  useUpdateHotelMutation,
} from "../../api/hotelSlice";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { AiFillEdit } from "react-icons/ai";

const UpdateHotelForm = ({ preloadedValues }) => {
  const { id } = useParams();
  const { data } = useGetSingleHotelQuery(id);
  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues,
  });

  const [hotelId, setHotelId] = useState(id);

  const domain = "https://cht-travel-server-repo.vercel.app";
  //   const domain = "http://localhost:5000";

  const [enabled, setEnabled] = useState(data?.isAvailable);

  const submit = (data) => {
    fetch(`${domain}/updateHotel/${hotelId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Hotel info updated", { id: "updateHotel" });
        // reset();
      });
  };

  return (
    <div className="">
      <div className="font-bold gap-2 text-lg p-2 rounded-t-md flex items-center bg-gradient-to-r from-[#111827] to-[#4B5563] text-white">
        <AiFillEdit size={20} color="white" />
        Update Hotel
      </div>

      <form
        className="flex max-w-3xl flex-wrap justify-between gap-3 rounded-md bg-white p-10 shadow-lg"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="title">
            Hotel Name{" "}
          </label>
          <input type="text" name="title" {...register("title")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="imageURL">
            Image
          </label>
          <input type="text" name="imageURL" {...register("imageURL")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            {...register("price", { valueAsNumber: true })}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="totalRoom">
            Total Room
          </label>
          <input
            type="number"
            name="totalRoom"
            {...register("totalRoom", { valueAsNumber: true })}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <h1 className="mb-3">Availability</h1>

          <label className="inline-flex relative items-center mr-5 cursor-pointer ">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
              {...register("isAvailable")}
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
            <span className="ml-2 text-sm font-medium text-gray-900">
              {enabled ? "Available" : "Not Available"}
            </span>
          </label>
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="address">
            Location
          </label>
          <input type="text" name="address" {...register("address")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="latitude">
            Latitude
          </label>
          <input type="text" name="latitude" {...register("latitude")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="longitude">
            Longitude
          </label>
          <input type="text" name="longitude" {...register("longitude")} />
        </div>

        <div className="flex w-full flex-col">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            {...register("description")}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <button
            className=" rounded-md bg-indigo-500 px-4 py-3 text-lg font-semibold text-white disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHotelForm;
