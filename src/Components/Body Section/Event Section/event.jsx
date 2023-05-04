import React from "react";
import image from "../../../images/event.png";
import Wrapper from "./eventStyles";
const event = () => {
  return (
    <Wrapper>
      <h1>Event</h1>
      <br />
      <div className="contents">
        <div className="event-container">
          <img src={image} alt="EventImage" className="EventImage" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div class="event">
            <h2>Event Information</h2>
            <br />
            <form action="#">
              <div className="event-details">
                <div className="input-box">
                  <span class="details">Event code</span>
                  <input
                    type="text"
                    placeholder="Enter your Event code"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Title</span>
                  <input type="text" placeholder="Enter your Title" required />
                </div>
                <div className="input-box">
                  <span class="details">Description</span>
                  <input
                    type="text"
                    placeholder="Enter a description"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Begin Date</span>
                  <input
                    type="date"
                    placeholder="Enter your Begin Date"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">End Time</span>
                  <input
                    type="text"
                    placeholder="Enter your End Time"
                    required
                  />
                </div>

                <div className="input-box">
                  <span class="details">Incharge</span>
                  <input type="text" placeholder="Enter Incharge" required />
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
export default event;
