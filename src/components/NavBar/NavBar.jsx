import React from 'react';
import cs from'./NavBar.module.css';
import {NavLink, Link} from "react-router-dom";


const Navbar = () => {
    return (
    <nav className={`${cs.nav}`}>

          <div className={cs.item}>
              <Link to={`/profile/`}>Profile</Link>
          </div>

          <div className={cs.item}>
              <NavLink to="/dialogs">Messages</NavLink>
          </div>

          <div className={cs.item}>
              <NavLink to="/users">Users</NavLink>
          </div>

          <div className={cs.item}>
              <a href="/news">News</a>
          </div>

          <div className={cs.item}>
              <a href="/music">Music</a>
          </div>

          <div className={cs.item}>
              <a href="/settings">Settings</a>
          </div>

    </nav>
    )
};

export default Navbar;