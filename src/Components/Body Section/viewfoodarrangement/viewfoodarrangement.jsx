import React from "react";

import Wrapper from "./viewfoodarrangementStyles";
const Viewfoodarrangement = () => {
  return (
    <Wrapper>
      <div class="filter">
        <h1>View Food Arrangement</h1>
        <table>
          <tr>
            <th>Food Id</th>
            <th>Select Event Code</th>
            <th>Name of Event</th>
            <th> No of Participants</th>
            <th>Food Amount</th>

            <th>Dates</th>
            <th>Activities</th>
          </tr>
          <tr>
            <td>01</td>
            <td>1001</td>
            <td>BasketBall</td>
            <td>30</td>
            <td>50</td>
            <td>25th of April 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>02</td>
            <td>1002</td>
            <td>Sportmeet</td>
            <td>1580</td>
            <td>2200</td>
            <td>04th of march 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>03</td>
            <td>1003 </td>
            <td>NetBall Tournemant</td>
            <td>250</td>
            <td>300</td>
            <td>12th of February 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>04</td>
            <td>1004</td>
            <td>Swimminmg</td>
            <td>120</td>
            <td>150</td>
            <td>18th of January 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>05</td>
            <td>1005</td>
            <td>Table Tennis</td>
            <td>30</td>
            <td>45</td>
            <td>4 th of March 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>06</td>
            <td>1006</td>
            <td>Musiccal Show</td>
            <td>1580</td>
            <td>2200</td>
            <td>6 th of March 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>07</td>
            <td>1007</td>
            <td>Cricket</td>
            <td>100</td>
            <td>150</td>
            <td>11th of february 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>08</td>
            <td>1008</td>
            <td>FootBall</td>
            <td>45</td>
            <td>60</td>
            <td>9 th of April 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>09</td>
            <td>1009</td>
            <td>Dancing Competition</td>
            <td>150</td>
            <td>200</td>
            <td>11 th of January 2023</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>10</td>
            <td>1010</td>
            <td>Drama Competition</td>
            <td>120</td>
            <td>150</td>
            <td>05 th of June 2023</td>
            <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
};

export default Viewfoodarrangement;
