import React from 'react'
import './Navbar.css';
import logo from   'C:/Users/acer/admin_dashboard/src/picture/logo.svg';
import search from 'C:/Users/acer/admin_dashboard/src/picture/search.svg';
import app from 'C:/Users/acer/admin_dashboard/src/picture/app.svg';
import expand from 'C:/Users/acer/admin_dashboard/src/picture/expand.svg';
import notification from 'C:/Users/acer/admin_dashboard/src/picture/notifications.svg';
import setting from 'C:/Users/acer/admin_dashboard/src/picture/setting.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
        <span>DASHBOARD</span>
        </div>
        <div className="icons">
        <img src={search} alt="" />
        <img src={app} alt="" />
        <img src={expand} alt="" />
        <div className="notification">
          <img src={notification} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img  src='https://www.svgrepo.com/show/187711/black-cat.svg' alt="icon" />
          <span>Farheen</span>
            </div>
            <img src={setting} alt="icon" />
          </div>
                
    </div>
  )
}

export default Navbar
