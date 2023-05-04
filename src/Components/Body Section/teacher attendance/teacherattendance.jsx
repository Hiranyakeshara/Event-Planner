import React from "react";
//import styles from "./teacherattendance.scss";
import Wrapper from "./teacherattendanceStyles";

const teacherattendance = () => {
  return (
    <Wrapper>
      <div class="tbl">
        <h1>Attendance</h1>
        <table border="1" width="300" height="300" align="center">
          <tr>
            <th colspan="7">Attendance</th>
          </tr>

          <tr>
            <th colspan="2"></th>

            <th colspan="2">A.M</th>

            <th colspan="2">P.M</th>

            <th></th>
          </tr>

          <tr>
            <th>Student</th>

            <th>Date</th>

            <th>Time-in</th>

            <th>Time-Out</th>

            <th>Time-in</th>

            <th>Time-Out</th>

            <th>Event</th>
          </tr>

          <tr>
            <th> Dian William</th>

            <th>25.03.2023</th>

            <th>9.00 </th>

            <th>11.00 </th>

            <th></th>

            <th></th>

            <th>BasketBall</th>
          </tr>

          <tr>
            <th>Shasha Rodrigo</th>

            <th>10.03.2023</th>

            <th></th>

            <th></th>

            <th>2 P.M</th>

            <th>5 P.M</th>

            <th>Swimming</th>
          </tr>

          <tr>
            <th>Liam Vaz</th>

            <th>16.03.2023</th>

            <th></th>

            <th></th>

            <th>4 P.M.</th>

            <th>6 P.M.</th>

            <th>Cricket</th>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
};

export default teacherattendance;
