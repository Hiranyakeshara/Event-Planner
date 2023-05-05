import React from 'react';
import './index.css';
import Sidebar from './Components/StudentSidebar/Sidebar';
import Body from './Components/Body Section/Body';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Components/Body Section/Profile/Profile';
import SharedLayout from './SharedLayout';
import Event from './Components/Body Section/Event Section/event';
import Result from './Components/Body Section/Result/result';
import Vote from './Components/Body Section/Votes/vote';
import Complaint from './Components/Body Section/Complaint box/complaint';
import Photo from './Components/Body Section/Photo Gallery/photo';
import TeacherProfile from './Components/Body Section/teacher/teacher';
import TecherstudentList from './Components/Body Section/teacher student-list/teacherstudent-list';
import Attendance from './Components/Body Section/teacher attendance/teacherattendance';
import Reminder from './Components/Body Section/teacher reminder/reminder';
import Reminders from './Components/Body Section/student Reminders/studentreminders';
// import Activity from "./Components/Body Section/Activity Section/activity";
import Top from './Components/Body Section/Top Section/Top';
import Listing from './Components/Body Section/Listing Section/Listing';
import Viewresult from './Components/Body Section/Viewresult/Viewresult';
import Insertattendance from './Components/Body Section/teacherinsertattendance/teacherinsertattendance';
import Home from './Components/Body Section/Home/Home';
import Viewevent from './Components/Body Section/View event/Viewevent';
import Viewcomplaint from './Components/Body Section/Viewcomplaint/Viewcomplaint';
import Sponsorship from './Components/Body Section/sponsorship/sponsorship';
import Viewsponsorship from './Components/Body Section/Viewsponsorship/Viewsponsorship';
import Foodarrangement from './Components/Body Section/Foodarrangement/foodarrangement';
import Viewfoodarrangement from './Components/Body Section/viewfoodarrangement/viewfoodarrangement';
import Attendancereport from './Components/Body Section/Attendance-report/attendancereport';
import Schoolinfo from './Components/Body Section/School/school';
import Addstudent from './Components/Body Section/Addstudent/addstudent';
const userType = 'admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='top' element={<Top />} />
          <Route path='listing' element={<Listing />} />
          <Route path='profile' element={<Profile />} />
          <Route path='event' element={<Event />} />
          <Route path='result' element={<Result />} />
          <Route path='vote' element={<Vote />} />
          <Route path='complaint' element={<Complaint />} />
          <Route path='gallery' element={<Photo />} />
          <Route path='teacher/profile' element={<TeacherProfile />} />
          <Route path='teacher/addstudent' element={<Addstudent />} />
          <Route path='teacher/student-list' element={<TecherstudentList />} />
          <Route path='teacher/attendance' element={<Attendance />} />
          <Route path='teacher/reminder' element={<Reminder />} />
          <Route path='student/reminders' element={<Reminders />} />
          <Route path='student/viewresult' element={<Viewresult />} />
          <Route
            path='teacher/insertattendance'
            element={<Insertattendance />}
          />
          <Route path='student/viewevent' element={<Viewevent />} />
          <Route path='admin/viewcomplaint' element={<Viewcomplaint />} />
          <Route path='admin/sponsorship' element={<Sponsorship />} />
          <Route path='student/viewsponsorship' element={<Viewsponsorship />} />
          <Route path='admin/foodarrangement' element={<Foodarrangement />} />
          <Route
            path='teacher/viewfoodarrangement'
            element={<Viewfoodarrangement />}
          />
          <Route path='admin/attendancereport' element={<Attendancereport />} />
          <Route path='school/schoolinfo' element={<Schoolinfo />} />
          {/* <Route path='/view-asset' element={<ViewAsset />} />
          <Route path='/manage-category' element={<ManageCategory />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/view-account' element={<ViewAccount />} /> */}
        </Route>
        {/* <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
