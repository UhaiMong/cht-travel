import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddHotel = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const product = {
      model: data.model,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      price: data.price,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [],
    };

    console.log(product);
  };

  return (
    <div className="flex h-full items-center justify-center ">
      <form
        className="flex max-w-3xl flex-wrap justify-between gap-3 rounded-md bg-white p-10 shadow-lg"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input type="text" id="model" {...register("model")} />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" {...register("image")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select name="brand" id="brand" {...register("brand")}>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="price">
            Image
          </label>
          <input type="text" name="price" id="price" {...register("price")} />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="available"
                value={true}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-xs flex-col"></div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            {...register("keyFeature1")}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            {...register("keyFeature2")}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            {...register("keyFeature3")}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            {...register("keyFeature4")}
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

export default AddHotel;
