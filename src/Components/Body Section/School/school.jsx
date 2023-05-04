import img from "../../../images/school.gif";
import Wrapper from "./schoolStyles";
const School = () => {
  return (
    <Wrapper>
      <h1>School</h1>
      <br/>
      <hr/>
      <div className="cont">
        <div className="profile-cont">
          <img src={img} alt="profImg" className="profImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="prof">
            <h2>School Information</h2>
            <br />
            <form action="#">
              <div className="Teacher-details">
                <div className="inputbox">
                  <span class="detail">Name</span>
                  <input
                    type="text"
                    placeholder="Enter "
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail">Id</span>
                  <input
                    type="text"
                    placeholder="Enter "
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail"> Location</span>
                  <input type="text" placeholder="Enter " required />
                </div>
                <div className="inputbox">
                  <span class="detail">Adminds</span>
                  <input type="text" placeholder="Enter" required />
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

export default School;
