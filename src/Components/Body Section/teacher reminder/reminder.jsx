//import styles from "./reminder.scss";
import Wrapper from "./reminderStyles";

const Reminder = () => {
  return (
    <Wrapper>
      <div className="ctr">
        <div className="message-card">
          <div className="logo-pic"></div>
          <div className="title">
            <h1>Send Reminders</h1>
          </div>
          <form action="">
            <input type="text" id="name" placeholder="Student Name" required />
            <input type="email" id="email" placeholder="Email id" required />
            <input type="text" id="phone" placeholder="Phone No" required />
            <textarea
              id="message"
              cols="30"
              rows="4"
              placeholder="Reminder"
            ></textarea>
            <button id="Submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Reminder;
