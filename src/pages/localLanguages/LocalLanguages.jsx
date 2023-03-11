import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLanguage } from "../../features/languageFilterSlice";
import { getLanguages } from "../../features/languageSlice";
import { ethnics } from "./allEthnicGroup";
import { conditionText } from "./conditionText";
import LocalLanguage from "./LocalLanguage";

const LocalLanguages = () => {
  const [phone, setPhone] = useState();
  const [languageType, setLanguageType] = useState("marma");
  const subScriptionID = "abcd123";

  const handleSubscription = (event) => {
    event.preventDefault();
    const form = event.target;
    const phoneNumber = form.tel.value;
    setPhone(phoneNumber)
    console.log(phone);
    form.reset();
    toast.success("Your request is accepted.");
  };

  const languageHandler = () => {
    console.log(languageType);
  };

  const dispatch = useDispatch();
  const { languages, isLoading } = useSelector((state) => state.languages);
  const filteredLanguage = useSelector((state) => state.filteredLanguage);
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  let content;
  if (isLoading) {
    content = <h1>Loading....</h1>;
  }
  if (languages.length && languageType === "marma") {
    if (phone) {
      content = languages?.map((language) => (
        <LocalLanguage key={language._id} language={language} />
      ));
    } else {
      content = (
        <h1 className="text-indigo-500 underline underline-offset-8 decoration-solid decoration-pink-600 text-2xl font-bold text-center">
          Please subscribe for special services!!!!!!
        </h1>
      );
    }
  } else {
    content = (
      <h1 className="text-indigo-500 underline underline-offset-8 decoration-solid decoration-pink-600 text-2xl font-bold text-center">
        Coming sooooooon!!!!!!
      </h1>
    );
  }

  const activeClass = "bg-gray-400 text-white border-none";

  return (
    <>
      {/* subscription modal */}
      <form action="" onSubmit={handleSubscription}>
        <input
          type="checkbox"
          id="subscription-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500">
            <label
              htmlFor="subscription-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-white">
              সাবস্ক্রাইবের জন্য কিছু শর্তাবলি।
            </h3>
            <p className="py-4 text-white">{conditionText}</p>
            <input
              type="tel"
              required
              placeholder="01800000xxx"
              name="tel"
              className="w-full outline-pink-600 active:outline-pink-600"
            />

            <div className="modal-action">
              <label
                htmlFor="subscription-modal"
                className="btn outline-none border-none bg-gradient-to-r from-red-400 to-red-700 text-white font-bold"
              >
                Cancel!
              </label>
              <button className="btn outline-none border-none bg-gradient-to-r from-green-400 to-blue-500 text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* Subscription modal ended */}
      <div className="customContainer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-5 rounded-md p-4 flex gap-x-3 justify-between items-center">
        <div>
          <p className="font-semibold text-white">
            <span>
              আমাদের লোকাল ভাষা অনুবাদ শুনতে সাবস্ক্রাইব করুন (শর্ত প্রযোজ্য)
            </span>
          </p>
        </div>
        <div>
          <label
            htmlFor="subscription-modal"
            className="btn outline-none border-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
          >
            Subscribe Now
          </label>
        </div>
      </div>
      <div className="customContainer flex gap-5 my-6">
        <div className="border-2 w-[20%] rounded-md shadow-xl">
          {ethnics.map((ethnic, i) => (
            <button
              onClick={() => languageHandler(setLanguageType(ethnic.type))}
              key={i}
              className={`btn btn-outline rounded-md w-full my-3`}
            >
              {ethnic.button}
            </button>
          ))}
        </div>

        <div className="border-2 w-[80%] rounded-md shadow-lg p-3 disabled:opacity-75">
          {content}
        </div>
      </div>
      ;
    </>
  );
};

export default LocalLanguages;
