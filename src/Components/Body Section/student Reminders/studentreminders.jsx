import Wrapper from "./studentRemindersStyles";
import { BsBell } from "react-icons/bs";

import img from "../../../images/pic1.jpg";
import imag from "../../../images/pic2.jpg";
import image from "../../../images/pic3.jpg";
import images from "../../../images/pic4.jpg";
import imgs from "../../../images/pic5.jpg";

const studentreminders = () => {
  return (
    <Wrapper>
      <nav>
        <BsBell className="icon" />
        <span>20</span>
        <div class="notifi-box">
          <h2>
            Notification <span>20</span>
          </h2>
          <div className="notifi-item">
            <img src={img} alt="pic1" />
            <div className="text" />
            <h4>Table tennis</h4>
            <p>Tabel tennis practices at 4p.m 24/03/2023</p>
          </div>
        </div>

        <div className="notifi-item">
          <img src={imag} alt="pic2" />
          <div className="text">
            <h4>Badminton</h4>
            <p>Badminton practices at 4p.m 21/03/2023</p>
          </div>
        </div>

        <div className="notifi-item">
          <img src={image} alt="pic3" />
          <div className="text">
            <h4>Net ball</h4>
            <p>Net Ball practices at 1p.m 20/03/2023</p>
          </div>
        </div>

        <div className="notifi-item">
          <img src={images} alt="pic4" />
          <div className="text">
            <h4>Basket Ball</h4>
            <p> Basket Ball practices at 3p.m 15/03/2023</p>
          </div>
        </div>

        <div className="notifi-item">
          <img src={imgs} alt="pic5" />
          <div className="text">
            <h4>Swimming</h4>
            <p>Swimming practices At 2.30p.m 06/03/2023</p>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default studentreminders;
