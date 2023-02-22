import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLanguage } from "../../features/languageFilterSlice";
import { getLanguages } from "../../features/languageSlice";
import LocalLanguage from "./LocalLanguage";

const LocalLanguages = () => {
  const handleSubscription = () => {
    console.log("submitted");
  };
  const ethnics = [
    {
      type: "marma",
      button: "Marma",
    },
    {
      type: "tanchangya",
      button: "Tanchangya",
    },
    {
      type: "mro",
      button: "Mro",
    },
    {
      type: "bawm",
      button: "Bawm",
    },
    {
      type: "khumi",
      button: "Khumi",
    },
    {
      type: "chakma",
      button: "Chakma",
    },
    {
      type: "tripura",
      button: "Tripura",
    },
    {
      type: "lushai",
      button: "Lushai",
    },
    {
      type: "khiang",
      button: "Khiang",
    },
    {
      type: "pankhu",
      button: "Pankhu",
    },
    {
      type: "chak",
      button: "Chak",
    },
  ];
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
  if (languages.length) {
    content =
      // languages.filter((language) => {
      //   if (filteredLanguage.length) {
      //     return filteredLanguage.languages.includes(language.translated)
      //   }
      //   return language;
      // })
      languages?.map((language) => (
        <LocalLanguage key={language._id} language={language} />
      ));
  }

  const activeClass = "bg-gray-400 text-white border-none";

  return (
    <>
      {/* subscription modal */}
      <form action="">
      <input type="checkbox" id="subscription-modal" className="modal-toggle" />
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
            <p className="py-4 text-white">
              সাবস্ক্রাইব করতে আপনার ফোন নাম্বার টা দিন। সাবস্ক্রাইব সফলভাবে
              সম্পন্ন হলে আপনার উল্লেখিত নাম্বার থেকে BDT ২.৪৪ টাকা(ভ্যাটসহ)
              কর্তন করা হবে। এরপর আপনি ২৪ ঘন্টা আমাদের সার্ভিস টি উপভোগ করতে
              পারবেন। পরবর্তী কার্যক্রম না নেওয়া পর্যন্ত নবায়ন হবে। সার্ভিসটি না
              চাইলে আপনার ফোনের মেসেজ অপশনের গিয়ে টাইপ করুন STOP L লিখে পাঠিয়ে
              দিন 21212 নাম্বারে। ধন্যবাদ।
            </p>
            <input
              type="tel"
              required
              placeholder="01800000xxx"
              className="w-full outline-pink-600 active:outline-pink-600"
            />

            <div onSubmit={handleSubscription} className="modal-action">
              <label
                htmlFor="subscription-modal"
                className="btn outline-none border-none bg-gradient-to-r from-gray-500 to-pink-400 text-white font-bold"
              >
                Agree!
              </label>
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
            <Link
              onClick={() => dispatch(selectLanguage(ethnic.type))}
              key={i}
              className={`btn btn-outline rounded-md w-full my-3`}
            >
              {ethnic.button}
            </Link>
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
