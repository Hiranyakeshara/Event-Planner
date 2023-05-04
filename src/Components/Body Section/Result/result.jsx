import Wrapper from "./resultStyles";
import img from "../../../images/results.gif";
const Result = () => {
  return (
    <Wrapper>
       <h1>Results</h1>
       <br/>
       <hr/>
      <div className="resultconts">
        <div className="result-cont">
          <img src={img} alt="resultImg" className="resultImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="result">
            <h2>Results</h2>
            <br />
            <form action="#">
              <div className="result-details">
                <div className="inputbox">
                  <span class="detail">Event Shedule Id</span>
                  <input
                    type="text"
                    placeholder="Enter your FirstName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail">Event Shedule Details</span>
                  <input
                    type="text"
                    placeholder="Enter your LastName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail"> Name Of Event</span>
                  <input type="text" placeholder="Enter your  Id" required />
                </div>
                <div className="inputbox">
                  <span class="detail">Name of Event Title</span>
                  <input type="text" placeholder="Enter" required />
                </div>

                <div className="inputbox">
                  <span class="detail"> Student Name</span>
                  <input type="text"
                    placeholder="Enter your place"
                    required/>
                   
                  {/* <input
                    type="text"
                    placeholder="Enter your Address"
                    required
                  /> */}
                </div>
                <div className="inputbox">
                  <span class="detail">Event sheduled Place</span>

                  <input type="text"
                    placeholder="Enter "
                    required/>
                </div>
                <div className="inputbox">
                  <span class="detail">First place</span>

                  <input type="text"
                    placeholder="Enter "
                    required/>
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

export default Result;
