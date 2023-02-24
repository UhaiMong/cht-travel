import React from "react";
import { useSelector } from "react-redux";

const profileCoverImg = "https://i.ibb.co/ZSDHv17/profile-Cover-Img.jpg";
const manualRegUserImg = "https://i.ibb.co/vv70hPd/manual-Reg-User-Img.png";

const Profile = () => {
  const { email, photoURL, displayName, role } = useSelector(
    (state) => state?.auth
  );

  return (
    <div class="py-20 flex flex-wrap items-center justify-center">
      <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3  m-4 md:m-0  bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div class="h-32 overflow-hidden">
          <img class="w-full" src={profileCoverImg} alt="" />
        </div>
        <div class="flex justify-center px-5  -mt-12">
          <img
            class="h-32 w-32 bg-white p-2 rounded-full"
            src={`${photoURL === null ? manualRegUserImg : photoURL}`}
            alt=""
          />
        </div>
        <div class=" ">
          <div class="text-center px-14">
            <h2 class="text-gray-800 text-3xl font-bold">
              {displayName ? displayName : "Welcome User"}
            </h2>
            <p class="text-gray-400 mt-2 hover:text-blue-500">
              {email && email}
            </p>

            <p class="mt-2 text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <hr class="mt-6" />
          <div class="flex  bg-gray-50 ">
            <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                <span class="font-semibold">2.5 k </span> Followers
              </p>
            </div>
            <div class="border"></div>
            <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                {" "}
                <span class="font-semibold">2.0 k </span> Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
