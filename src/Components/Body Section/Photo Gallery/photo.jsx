import Wrapper from "./photoStyles";
import img from "../../../images/camera.gif";

const Photo = () => {
  return (
    <Wrapper>
       <h1>Photo Gallery</h1>
       <br />
       <hr />

      <div className="conts">
        <div className="photogallery-conts">
          <img src={img} alt="photoImg" className="photoImg" />
          <h4>Edit picture</h4>
        </div>
        <div>
          <div className="photo">
            <h2>Photo Gallery</h2>
            <br />
            <form action="#">
              <div className="photo-details">
                <div className="inputbox">
                  <span class="detail">Reated</span>
                  <input
                    type="text"
                    placeholder="Enter your FirstName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail">Title</span>
                  <input
                    type="text"
                    placeholder="Enter your LastName"
                    required
                  />
                </div>
                <div className="inputbox">
                  <span class="detail"> Caption</span>
                  <input type="text" placeholder="Enter your  Id" required />
                </div>
                <div className="inputbox">
                  <span class="detail">Alternate Text</span>
                  <input type="text" placeholder="Enter" required />
                </div>

                <div className="input-box">
                  <span className="details"></span>

                  <textarea required rows={10}></textarea>
                </div>
                <div className="choose-file">
                  <input type="file" />
                </div>
              </div>
              <div className="buttons">
                <input type="submit" className="save-btn" value="Save image" />
              </div>
              {/* <div className="i">
            <span className="detail"></span>

            <textarea required rows={14}></textarea>
          </div> */}
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Photo;
