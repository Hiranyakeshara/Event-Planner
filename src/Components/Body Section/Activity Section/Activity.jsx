import React from "react";
// import "./activity.scss";

//Imported icons=========>
import { BsArrowRightShort } from "react-icons/bs";

//imported Images========>
import user from "../../../images/student boys.png";
import users from "../../../images/student girl.png";
import img from "../../../images/student boyss.png";
import image from "../../../images/student girls.png";
import Wrapper from "./activityStyles";
const Activity = () => {
  return (
    <Wrapper>
      <div className="activitySection">
        <div className="heading flex">
          <h1>Recent Activity</h1>
          <button className="btn-flex">
            See All
            <BsArrowRightShort className="icon" />
          </button>
        </div>
        <div className="seeContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt="Customer Images" />
            <div className="customerDetails">
              <span className="Name">Olive perera</span>
            </div>
            <div className="duration">2 min ago</div>
          </div>

          <div className="singleCustomer flex">
            <img src={users} alt="Customer Images" />
            <div className="customerDetails">
              <span className="Name"> Christhi vaz</span>
            </div>
            <div className="duration">6 min ago</div>
          </div>

          <div className="singleCustomer flex">
            <img src={img} alt="Customer Images" />
            <div className="customerDetails">
              <span className="Name">John desilva</span>
            </div>
            <div className="duration">2 min ago</div>
          </div>

          <div className="singleCustomer flex">
            <img src={image} alt="Customer Images" />
            <div className="customerDetails">
              <span className="Name">Zara Rachel</span>
            </div>
            <div className="duration">2 min ago</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Activity;
