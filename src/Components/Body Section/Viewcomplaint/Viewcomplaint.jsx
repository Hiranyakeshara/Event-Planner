import Wrapper from "./ViewcomplaintStyles";
import img from "../../../images/letter.gif";

const Viewcomplaint = () => {
  return (
    <Wrapper>
      <div class="filter">
        <h1>View Complaints</h1>
        <table>
          <tr>
            <th>Date of filling the form</th>
            <th>Complaint's Name</th>
            <th>Email</th>
            <th>The Complaint is regarding</th>
           
            <th>Activities</th>
          </tr>
          <tr>
            <td>10/01/2023</td>
            <td>Dian William</td>
            <td>Radeesha21@gmail.com</td>
            <td> I attended the inter-school basketball tournament.
                last week, and I'm disappointed with the organization of the event.
                The schedule was not clearly.the facilities, such as the changing
                rooms and restroom, were not adequately maintained.</td>
            
                <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <td>10/06/2023</td>
            <td>Tom Grace</td>
            <td>TomGrace@gmail.com</td>
            <td>140 Monaraka Rd,Kottawa</td>
           
            <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <td>10/11/2023</td>
            <td>Kevin Habdul</td>
            <td>KevinHabdul1@gmail.com</td>
            <td>725 Sadalla Rd,Wellawatte</td>
            
            <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <td>02/09/2023</td>
            <td>Markz Perera</td>
            <td>MarkzPerera15@gmail.com</td>
            <td>345 Marapana Wellawatte</td>
            
            <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <td>05/08/2023</td>
            <td>Shasha Rodrigo</td>
            <td>ShashaRodrigo25@gmail.com</td>
            <td>180 salmalyaya Dompe</td>
           
            <th>
              <button className="tablebtn">View</button>
              <button>Delete</button>
            </th>
          </tr>
          
          <tr>
            <td>10/10/2023</td>
            <td>Kohlia Soyza</td>
            <td>Kohila Soyza@gmail.com</td>
            <td>17 Emmanuel Wattala</td>
            
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

export default Viewcomplaint;
