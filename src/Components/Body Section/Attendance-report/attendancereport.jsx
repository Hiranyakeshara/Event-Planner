import Wrapper from "./attendancereportStyles";
const Attendacereport = () => {
  return (
    <Wrapper>
      <h1>Report</h1>
      <div className="button">
        <input type="submit" value="Back"></input>
      </div>
      <div className="input-box">
        <span class="details">Begin Date</span>
        <input type="date" placeholder="Enter your Begin Date" required />
      </div>
      <div className="inputbox">
        <span class="details">End Date</span>
        <input type="date" placeholder="Enter your Begin Date" required />
      </div>
      <div className="inputbox">
        <input name="section" list="scripts" autoFocus size="15" />
        <datalist id="scripts">
          <option value="101" />
          <option value="102" />
          <option value="103" />
          <option value="104" />
          <option value="105" />
          <option value="106" />
          <option value="107" />
        </datalist>
      </div>
      <div className="report-btn">
        <input type="submit" value="Back"></input>
      </div>
    </Wrapper>
  );
};

export default Attendacereport;
