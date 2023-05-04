import React from "react";
import img from "../../../images/std.jpeg";
import Wrapper from "./profileStyles";
const Profile = () => {
  return (
    <Wrapper>
      <h1>Profile</h1>
      <div className="content">
        <div className="profile-container">
          <img src={img} alt="profileImg" className="profileImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="profile">
            <h2>Student Information</h2>
            <br />
            <form action="#">
              <div className="user-details">
                <div className="input-boxs">
                  <span class="detail">FirstName</span>
                  <input
                    type="text"
                    placeholder="Enter your FirstName"
                    required
                  />
                </div>
                <div className="input-boxs">
                  <span class="detail">LastName</span>
                  <input
                    type="text"
                    placeholder="Enter your LastName"
                    required
                  />
                </div>
                <div className="input-boxs">
                  <span class="detail">Student Id</span>
                  <input
                    type="text"
                    placeholder="Enter your Student Id"
                    required
                  />
                </div>
                <div className="input-boxs">
                  <span class="detail">Grade</span>
                  <input type="text" placeholder="Enter your Grade" required />
                </div>

                <div className="input-boxs">
                  <span class="detail"> Address</span>
                  <textarea
                    placeholder="Enter your Address"
                    required
                    rows={3}
                  ></textarea>
                  {/* <input
                    type="text"
                    placeholder="Enter your Address"
                    required
                  /> */}
                </div>
                <div className="input-boxs">
                  <span class="detail">Email</span>

                  <textarea
                    placeholder="Enter your Email"
                    required
                    row={3}
                  ></textarea>
                </div>
                <div className="input-boxs">
                  <span class="detail">Phone Number</span>
                  <input type="text" placeholder="Enter your Number" required />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>

                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
