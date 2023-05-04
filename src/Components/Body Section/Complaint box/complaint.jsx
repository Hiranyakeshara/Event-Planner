import Wrapper from "./complaintStyles";
import img from "../../../images/letter.gif";

const Complaint = () => {
  return (
    <Wrapper>
      <h1>Complaint</h1>
      <br />
      <div className="cont">
        <h1>We are here to assist you! </h1>
        <h3>please complete the form below for your complaints</h3>
      </div>
      <hr />

      <div className="content">
        <div className="complain-container">
          <img src={img} alt="complaintImg" className="complaintImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="complaint">
            <h2>Complaints</h2>
            <br />
            <form action="#">
              <div className="complaint-details">
                <div className="input-boxs">
                  <span class="detail">Date of filling the form:</span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="input-boxs">
                  <span class="detail">Complaint's Name</span>
                  <input type="text" placeholder="" required />
                </div>
                <div className="input-boxs">
                  <span class="detail">Email</span>

                  <textarea placeholder="" required row={3}></textarea>
                </div>

                <div className="input-boxs">
                  <span class="detail">The Complaint is regarding</span>

                  <textarea placeholder="" required row={10}></textarea>
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

export default Complaint;
