import img from "../../../images/food.gif";
import Wrapper from "./foodarrangementStyles";

const Foodarrangement = () => {
  return (
    <Wrapper>
      <h1>Food Arrangement</h1>
      <div className="Foodarrangement-content">
        <div className="Foodarrangement-cont">
          <img
            src={img}
            alt="FoodarrangementImg"
            className="FoodarrangementImg"
          />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="Foodarrangement">
            <h2>Food Arrangement Form </h2>
            <br />
            <form action="#">
              <div className="Foodarrangement-details">
                <div className="Foodarrangementinputbox">
                  <span class="detail">Food Id</span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="Foodarrangementinputbox">
                  <span class="detail">Select Event Id</span>
                  <input type="text" placeholder="" required />
                </div>

                <div className="Foodarrangementinputbox">
                  <span class="detail"> Name of Event</span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="Foodarrangementinputbox">
                  <span class="detail">No of Participants </span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="Foodarrangementinputbox">
                  <span class="detail">Food Amount</span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="Foodarrangementinputbox">
                  <span class="detail">Total Amount</span>

                  <input type="text" placeholder="" required />
                </div>
                <div className="Foodarrangementinputbox">
                  <span class="details"> Date</span>
                  <input type="date" placeholder="" required />
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

export default Foodarrangement;
