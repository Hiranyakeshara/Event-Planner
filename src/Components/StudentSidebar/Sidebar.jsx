import React from 'react';
import './sidebar.scss';

// Imported Images ========>
import logo from '../../images/logo.png';

//Imported icons
import { CgProfile } from 'react-icons/cg';
import { BsCalendarEvent } from 'react-icons/bs';
import { MdHowToVote } from 'react-icons/md';
import { SlSocialDropbox } from 'react-icons/sl';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { TfiGallery } from 'react-icons/tfi';
import { TfiAlarmClock } from 'react-icons/tfi';
import { RiFilePaper2Line } from 'react-icons/ri';
import { BsQuestionCircle } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='logo' />
        <h2>Planners</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>Student</h3>
        <ul className='menuLists grid'>
          <Link to='/profile' className='listItem'>
            <p className='menuLink flex'>
              <CgProfile className='icon' />
              <span className='smallText'>Profile</span>
            </p>
          </Link>

          <Link to='/event' className='listItem'>
            <p className='menuLink flex'>
              <BsCalendarEvent className='icon' />
              <span className='smallText'>Events</span>
            </p>
          </Link>

          <Link to='/vote' className='listItem'>
            <p className='menuLink flex'>
              <MdHowToVote className='icon' />
              <span className='smallText'>Votes</span>
            </p>
          </Link>

          <Link to='/complaint' className='listItem'>
            <p className='menuLink flex'>
              <SlSocialDropbox className='icon' />
              <span className='smallText'>Complain box</span>
            </p>
          </Link>

          <Link to='/result' className='listItem'>
            <p className='menuLink flex'>
              <IoMdCheckboxOutline className='icon' />
              <span className='smallText'>Results</span>
            </p>
          </Link>

          <Link to='/gallery' className='listItem'>
            <p className='menuLink flex'>
              <TfiGallery className='icon' />
              <span className='smallText'>Photo Gallery</span>
            </p>
          </Link>

          <Link to='/reminders' className='listItem'>
            <p className='menuLink flex'>
              <TfiAlarmClock className='icon' />
              <span className='smallText'>reminders</span>
            </p>
          </Link>

          <Link to='/Notice' className='listItem'>
            <p className='menuLink flex'>
              <RiFilePaper2Line className='icon' />
              <span className='smallText'>Notices</span>
            </p>
          </Link>
        </ul>
      </div>
      <div className='sideBarCard'>
        <BsQuestionCircle className='icon' />
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle1'></div>

          <h3>Help Center</h3>
          <p>
            There is a trouble in Planners,please contact us for further
            details.
          </p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
