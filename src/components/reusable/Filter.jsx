import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleSearch, setHotel } from "../../features/searchSlice";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [room, setRoom] = useState("1 room");
  const [people, setPeople] = useState("1 person");
  const dispatch = useDispatch();

  const formatStartDate = moment(startDate).format("MMMM Do YYYY");
  const formatEndDate = moment(endDate).format("MMMM Do YYYY");

  const searchQuery = {
    startDate: formatStartDate,
    endDate: formatEndDate,
    noOfRoom: room,
    noOfPeople: people,
    onClick: true,
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.hilltractstech.com/hotels");
      const data = res.data;
      if (data) {
        const filteredData = data.filter((item) => item?.isAvailable === true);
        dispatch(setHotel(filteredData));
      } else {
        // handle case when no data is returned
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const handleClick = () => {
    if (!startDate) {
      toast.error("Please select Check-in date");
    } else if (!endDate) {
      toast.error("Please select Check-out date");
    } else {
      dispatch(handleSearch(searchQuery));
      fetchData();
    }

    // call api
    // const fetchData = async () => {
    //   const res = await fetch(
    //     "https://api.hilltractstech.com/hotels"
    //   );
    //   const data = await res.json();
    //   const filteredData = data?.filter((item) => item?.isAvailable === true);
    //   dispatch(setHotel(filteredData));
    // };

    // fetchData();
  };

  return (
    <div className="lg:flex lg:px-44 bg-white py-10 px-4 space-y-4 space-x-1 md:space-y-0">
      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <div className="">Search Hotel Name</div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search hotel name"
          className="input-bordered input w-full bg-white lg:w-auto"
        />
      </div>
      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <label>Check-in:</label>
        <DatePicker
          className="input-bordered bg-white input border   w-full lg:w-auto border-l-4 border-green-200 focus:border-green-200 focus:ring-green-400 border-l-green-500  max-w-xs text-black flex"
          placeholderText={"Check-in"}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="EEE, dd/MM/yy"
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <label>Check-out:</label>
        <DatePicker
          className="input-bordered bg-white input border w-full lg:w-auto border-l-4 border-red-200 focus:border-red-200 focus:ring-red-400 border-l-red-500  max-w-xs text-black flex"
          placeholderText={"Checkout"}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="EEE, dd/MM/yy"
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        />
      </div>

      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <label>No. of Room</label>
        <select
          className="select-bordered w-full select text-black bg-white lg:w-auto"
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="1 room">1 room</option>
          <option value="2 room"> 2 room</option>
          <option value="3 room"> 3 room</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <label>No. of People</label>
        <select
          className="select-bordered w-full select text-black bg-white lg:w-auto"
          onChange={(e) => setPeople(e.target.value)}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="4 person">4 Person</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full lg:w-1/3">
        <span>Search</span>
        <button
          className="btn bg-black md:w-40 lg:w-auto gap-2"
          onClick={handleClick}
        >
          <AiOutlineSearch size={23} /> Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
