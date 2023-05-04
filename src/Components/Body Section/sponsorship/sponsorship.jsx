import img from "../../../images/sponsor.gif";
import Wrapper from "./sponsorshipStyles";
const Sponsorship = () => {
  return (
    <Wrapper>
      <h1>Sponsorship</h1>
      <div className="sponsor-content">
        <div className="sponsor-cont">
          <img src={img} alt="sponsorImg" className="sponsorImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="sponsor">
            <h2>Sponsorship Form </h2>
            <br />
            <form action="#">
              <div className="sponsor-details">
                <div className="sponsorinputbox">
                  <span class="detail">Event Sponsor's Name</span>
                  <input
                    type="text"
                    placeholder="Enter your FirstName"
                    required
                  />
                </div>
                <div className="sponsorinputbox">
                  <span class="detail">Name of Contact person</span>
                  <input
                    type="text"
                    placeholder="Enter your LastName"
                    required
                  />
                </div>

                <div className="sponsorinputbox">
                  <span class="detail"> Mailingn Address</span>
                  <input type="text" placeholder="Street Address" required />
                </div>
                <div className="sponsorinputbox">
                  <span class="detail"> </span>
                  <input type="text" placeholder="Street Address 2" required />
                </div>
                <div className="sponsorinputbox">
                  <span class="detail"></span>
                  <input type="text" placeholder="City" required />
                </div>
                <div className="sponsorinputbox">
                  <span class="detail"></span>

                  <input type="text" placeholder="postal/zipcode" required />
                </div>
                <div className="sponsorinputbox">
                  <span class="detail">Email</span>

                  <textarea
                    placeholder="Enter your Email"
                    required
                    row={3}
                  ></textarea>
                </div>
                <div className="sponsorinputbox">
                  <span class="detail">Phone Number</span>
                  <input type="text" placeholder="Enter your Number" required />
                </div>

                <div className="sponsorinputbox">
                  <span class="detail">Payment method</span>
                  <input type="text" placeholder="Enter your Number" required />
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

export default Sponsorship;
