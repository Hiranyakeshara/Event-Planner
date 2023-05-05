import React from 'react';
import './index.css';
import StudentSidebar from './Components/StudentSidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from './Components/TeacherSidebar/TeacherSidebar';
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';

const userType = 'teacher';

const SharedLayout = () => {
  return (
    <div className='container'>
      {userType === 'student' && <StudentSidebar />}
      {userType === 'teacher' && <TeacherSidebar />}
      {userType === 'admin' && <AdminSidebar />}
      <div className='bodyContent'>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
