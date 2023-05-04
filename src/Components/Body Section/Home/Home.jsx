import React from "react";
import Top from "../Top Section/Top";
import Listing from "../Listing Section/Listing";
import Activity from "../Activity Section/Activity";

const Home = () => {
  return (
    <div>
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Home;
