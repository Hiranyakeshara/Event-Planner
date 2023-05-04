import img from "../../../images/pic8.jpg";
import Wrapper from "./ViewresultStyles";
const Viewresult = () => {
  return (
    <Wrapper>
      <h1>View Result</h1>
      <div className="cnt">
        <div className="profile-cnt">
          <img src={img} alt="profImg" className="profIg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="prf">
            <h2>Final Results</h2>
            <br />
            <form action="#">
              <div className="View-results" />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Viewresult;
