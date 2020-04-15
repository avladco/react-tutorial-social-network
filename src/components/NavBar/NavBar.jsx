import React from 'react';
import cs from'./NavBar.module.css';
import {NavLink, Link} from "react-router-dom";


const Navbar = () => {

    return (
    <nav className={`${cs.nav}`}>
        <ul>

          <li className={cs.item}>
              <Link to="/profile">Profile</Link>
          </li>

          <li className={cs.item}>
              <NavLink to="/dialogs">Messages</NavLink>
          </li>

          <li className={cs.item}>
              <NavLink to="/users">Users</NavLink>
          </li>

          <li className={cs.item}>
              <a href="">News</a>
          </li>

          <li className={cs.item}>
              <a href="">Music</a>
          </li>

          <li className={cs.item}>
              <a href="">Settings</a>
          </li>

        </ul>
    </nav>
    )
};

export default Navbar;