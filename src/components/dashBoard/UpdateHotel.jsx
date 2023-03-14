import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../reusable/Loading";
import UpdateHotelForm from "./UpdateHotelForm";

const UpdateHotel = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function makeGetRequest() {
      let res = await axios.get(`http://api.hilltractstech.com/hotel/${id}`);
      let data = res.data;
      setData(data);
    }

    makeGetRequest();
  }, []);
  return data ? <UpdateHotelForm preloadedValues={data} /> : <Loading />;
};

export default UpdateHotel;
