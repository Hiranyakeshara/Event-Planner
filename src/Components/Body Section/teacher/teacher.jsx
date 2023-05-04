import img from "../../../images/teacher.jpg";
import Wrapper from "./teacherStyles";
const Teacher = () => {
  return (
    <Wrapper>
      <h1>Profile</h1>
      <div className="cont">
        <div className="profile-cont">
          <img src={img} alt="profImg" className="profImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="prof">
            <h2>Teacher Information</h2>
            <br />
            <form action="#">
              <div className="Teacher-details">
                <div className="inputbox">
                  <span class="detail">FirstName</span>
                  <input
                    type="text"
                    placeholder="Enter your FirstName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail">LastName</span>
                  <input
                    type="text"
                    placeholder="Enter your LastName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail"> Id</span>
                  <input type="text" placeholder="Enter your  Id" required />
                </div>
                <div className="inputbox">
                  <span class="detail">Incharge for</span>
                  <input type="text" placeholder="Enter" required />
                </div>

                <div className="inputbox">
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
                <div className="inputbox">
                  <span class="detail">Email</span>

                  <textarea
                    placeholder="Enter your Email"
                    required
                    row={3}
                  ></textarea>
                </div>
                <div className="inputbox">
                  <span class="detail">Phone Number</span>
                  <input type="text" placeholder="Enter your Number" required />
                </div>
              
              <div className="inputbox">
                  <span class="detail">NIC</span>
                  <input type="text" placeholder="Enter your NIC" required />
                </div>
                </div>
              <div className="gender-detail">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <span className="gender-titles">Gender</span>
                <div className="categorys">
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
              <div className="bttns">
                <input type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Teacher;
