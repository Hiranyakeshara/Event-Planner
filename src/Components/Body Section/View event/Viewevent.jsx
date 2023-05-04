import React from "react";
//import styles from "./teacherstudent-list.scss";
import Wrapper from "./VieweventStyles";
const Viewevent = () => {
  return (
    <Wrapper>
      <div class="filter">
        <h1>View Events</h1>
        <table>
          <tr>
            <th>Event code</th>
            <th>Title</th>
            <th>Description</th>
            <th> Date</th>
            <th>Time</th>
            <th>Incharge</th>
            <th>Activities</th>
          </tr>
          <tr>
            <td>101</td>
            <td>BasketBall</td>
            <td>25th of April 2023,Basketball Tournament</td>
            <td>25/04/2023</td>
            <td>2 P.M.</td>
            <td>Sylvester Frank</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>102</td>
            <td>SportMeet</td>
            <td>04th of march 2023,Sportmeet</td>
            <td>04/03/2023</td>
            <td>12.30 A.M</td>
            <td>Grace Noah</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>103</td>
            <td>NetBall </td>
            <td>12th of February 2023,NetBall Tournemant</td>
            <td>12/02/2023</td>
            <td>2.00 P.M</td>
            <td>Emma Ava</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>104</td>
            <td>Swimming</td>
            <td>18th of January 2023,Swimminmg</td>
            <td>18/01/2023</td>
            <td>2.30 P.M</td>
            <td>Charlotte Perera</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>105</td>
            <td>Table Tennis</td>
            <td>4 th of March 2023,Table Tennis</td>
            <td>04/03/2023</td>
            <td>03.15 P.M</td>
            <td>Lucas Mohan</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>106</td>
            <td>Musical Show</td>
            <td>6 th of March 2023,Musiccal Show</td>
            <td>06/03/2023</td>
            <td>07.00 P.M.</td>
            <td>Benjamin Vaz</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>107</td>
            <td>Cricket</td>
            <td>11th of february 2023,Cricket</td>
            <td>11/02/2023</td>
            <td>04.00 P.M</td>
            <td>Christ Brown</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>108</td>
            <td>FootBall</td>
            <td>9 th of April 2023,FootBall</td>
            <td>09/04/2023</td>
            <td>04.30 P.M.</td>
            <td>Joshua Peter</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>109</td>
            <td>Dancing Competition</td>
            <td>11 th of January 2023,Dancing Competition</td>
            <td>11/01/2023</td>
            <td>10.00 A.M.</td>
            <td>Mendis Yash</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>110</td>
            <td>Drama Competition</td>
            <td>05 th of June 2023,Drama Competition</td>
            <td>05/06/2023</td>
            <td>11.30 A.M.</td>
            <td>Jennifer Hackel</td>
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

export default Viewevent;
