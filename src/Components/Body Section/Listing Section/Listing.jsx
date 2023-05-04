import React from "react";
//import "./listing.scss";
//imported icons=========>
import { BsArrowRight } from "react-icons/bs";

//imported images=========>
import img from "../../../images/sport1.png";
import imgage from "../../../images/dance.jpg";
import imgages from "../../../images/music.jpg";
import Wrapper from "./listingStyles";

const Listing = () => {
  return (
    <Wrapper>
      <div className="listingSection">
        <div className="heading flex">
          <h1>Events</h1>
          <button className="btn flex">
            See All
            <BsArrowRight className="icon" />
          </button>
        </div>
        <div className="seeContainer flex">
          <div className="singleItem">
            <img src={img} alt="Images Name" />
            <h3>Highjump</h3>
          </div>

          <div className="singleItem">
            <img src={imgage} alt="Images Name" />
            <h3>Dancing perfomance</h3>
          </div>

          <div className="singleItem">
            <img src={imgages} alt="Images Name" />
            <h3>Music peformance</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Listing;
