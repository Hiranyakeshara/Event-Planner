import React, { useState } from "react";
//import "./top.scss";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "react-calendar/dist/Calendar.css";
import Wrapper from "./topStyles";

//Imported icons ========>
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";

//Imported images=======>
import img from "../../../images/students.png";
import calendar from "../../../images/calendar.gif";

const events = [
  { title: "All Day Event", start: "2023-03-03" },
  { title: "Test Event", start: "2023-03-04" },
];

const Top = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Wrapper>
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title">
            <h1>Welcome to Planners</h1>
            <p>Hello , Welcome back!</p>
          </div>
          <div className="searchbar flex">
            <input type="text" placeholder="Search" />
            <BiSearchAlt2 className="icon" />
          </div>
          <div className="adminDiv flex">
            <TbMessageCircle className="icon" />
            <IoIosNotifications className="icon" />
            <div className="adminImages">
              <img src={img} alt="Admin Images" />
            </div>
          </div>
        </div>

        <div className="cardSection flex">
          <div className="rightCard">
            <div className="leftCard">
              <div className="card-content">
                <h1>
                  Create and manage events easily with our{" "}
                  <p>Planners website</p>
                </h1>
                <p>We don't remember days,we remember moments</p>
                <div className="button flex">
                  <button className="btn">Explore Events</button>
                </div>
              </div>
              <div className="calendarImages">
                <img src={calendar} alt="calendar" />
              </div>
            </div>
            <div className="Oncalendar">
              <FullCalendar
                defaultView="dayGridMonth"
                // themeSystem="Simplex"
                // header={{
                //   left: "prev,next",
                //   center: "title",
                //   right: "dayGridMonth,timeGridWeek,timeGridDay",
                // }}
                plugins={[dayGridPlugin]}
                events={events}
                displayEventEnd="true"
                dateClick={(arg) => {
                  console.log("dateClick", arg);
                }}
                eventClick={(arg) => {
                  console.log("eventClick", arg);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Top;
