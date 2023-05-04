import React from "react";
import Wrapper from "./ViewsponsorshipStyles";
const Viewsponsorship = () => {
  return (
    <Wrapper>
      <div class="filter">
        <h1>View Sponsorships</h1>
        <table>
          <tr>
            <th>Event Sponsor's Name</th>
            <th>Name of Contact person</th>
            <th>Mailingn Address</th>
            <th> Email</th>
            <th>Phone Number</th>
            <th>Payment method</th>
            <th>Activities</th>
          </tr>
          <tr>
            <td>Milo</td>
            <td>Henry Ava</td>
            <td>180/Malwatta rd,Kadhana</td>
            <td>Henryava101@gmail.com</td>
            <td>0715698453</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Elephant House</td>
            <td>James William</td>
            <td>NO 17/Samagipura,Wattala</td>
            <td>Jameswilliam14@gmail.com</td>
            <td>0758946352</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Kottu mee</td>
            <td>Ari Finn </td>
            <td>283/7,George Mawatha,Mahabage</td>
            <td>Arifinn21@gmail.com</td>
            <td>0769845231</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Magic</td>
            <td>Mila Aurora</td>
            <td>784/8,School Lane/Arawwala</td>
            <td>Milaaurora6@gmail.com</td>
            <td>0745632218</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Pizza Hut</td>
            <td>Nova Peter</td>
            <td>No 83,St Jame's Rd,Wellawatte</td>
            <td>Novapeter21@gmail.com</td>
            <td>0758423698</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Taco Bell</td>
            <td>Leo Arthur</td>
            <td>758/7,Sri Kannangara patumaga/Mattakkuliya</td>
            <td>Leoarthur@gmail.com</td>
            <td>0712894561</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Cocacola</td>
            <td>Molly Gomez</td>
            <td>375/8,Peo Lane,Kadana</td>
            <td>Mollygomez80@gmail.com</td>
            <td>0724315986</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Food Coma</td>
            <td>Jesse Hudson</td>
            <td>918/2B,Suwadhata Mawatha,Ragama</td>
            <td>Jessehudson21@gmail.com</td>
            <td>0765894231</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Burger Hut</td>
            <td>Liam Fernando</td>
            <td>No 33,Mallika Lane,Homagama</td>
            <td>Liamfernando2gmail.com</td>
            <td>0725419898</td>
            <td>Paypal</td>
            <th>View Delete</th>
          </tr>
          <tr>
            <td>Bubbles</td>
            <td>Joshep Kian</td>
            <td>427/8A,Singhapura,Kadawatha</td>
            <td>Joshepkian@gmail.com</td>
            <td>0765843121</td>
            <td>Paypal</td>
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

export default Viewsponsorship;
