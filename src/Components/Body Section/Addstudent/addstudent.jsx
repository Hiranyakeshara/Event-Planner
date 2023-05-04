import Wrapper from './addstudentStyles';
import React from 'react';

const  Addstudent = () => {
  return (
    <Wrapper>
      <div>
        <h1>Add student</h1>
     </div>
     <div class="event">
            <form action="#">
              <div className="event-details">
                <div className="input-box">
                  <span class="details">ID NO</span>
                  <input
                    type="text"
                    placeholder="Enter Student ID no"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Name</span>
                  <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="input-box">
                  <span class="details">Sex</span>
                  <input
                    type="text"
                    placeholder="Enter your Sex"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Address </span>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Email </span>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="input-box">
                  <span class="details">Contact </span>
                  <input
                    type="text"
                    placeholder="Enter your Contact Number"
                    required
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
    </Wrapper>
  );

};

export default Addstudent;
