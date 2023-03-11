import React from "react";
import useTitle from "../../hooks/useTitle";
import Landing from "./Landing";

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Landing />
    </div>
  );
};

export default Home;
