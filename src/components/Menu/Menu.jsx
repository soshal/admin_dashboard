import React from 'react'
import { Link } from 'react-router-dom';


import './Menu.css';

import {menu} from 'C:/Users/acer/admin_dashboard/src/Data.js';



const Menu = () => {
  return (
    <div className='menu'>
      
       { menu.map((item) => (
          <div className="item" key={item.id}>
        <span className="title">
          {item.title}
        </span>
        
         {item.listItems.map((listItem) => (
        <Link to={listItem.url} className='wade' key={listItem.id} >
          <img src={listItem.icon} alt="" />
          <span className="listitem">{listItem.title}</span>
        </Link>
         ))}
        
      </div>
      



        ))
    }
      
      
    </div>
  )
}

export default Menu
