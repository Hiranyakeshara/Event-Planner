import Wrapper from "./teacherinsertattendanceStyles";

const Teacherinsertattendance = () => {
  return (
    <Wrapper>
      <div>
        <div className="cont">
          <h1>Monitor attendance </h1>
        </div>
        <form>
          <div className="contents">
            <div className="input-box">
              <span class="details">Student name</span>
              <input type="text" placeholder="" required />
            </div>
            <div className="input-box">
              <span class="details"> Date</span>
              <input type="date" placeholder="" required />
            </div>
            <div className="input-box">
              <span class="details"> Time-In(A.M)</span>
              <input type="text" placeholder="" required />
            </div>
            <div className="input-box">
              <span class="details">Time-Out(A.M)</span>

              <input type="text" placeholder="" required />
            </div>

            <div className="input-box">
              <span class="details">Time-In(P.M)</span>

              <input type="text" placeholder="" required />
            </div>

            <div className="input-box">
              <span class="details">Time-Out(P.M)</span>

              <input type="text" placeholder="" required />
            </div>

            <div className="input-box">
              <span class="details">Event</span>

              <input type="text" placeholder="" required />
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

export default Teacherinsertattendance;
