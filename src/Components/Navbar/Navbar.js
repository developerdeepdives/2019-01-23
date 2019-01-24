import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default props => {
  return (
    <header className={classes.Navbar}>
      <div>Logo</div>
      <div>
        <nav>
          <ul className={classes.navLinks}>
            <NavLink 
              className={classes.navLink}
              activeClassName={classes.active}
              exact
              to="/"
            >
              <li>Recent Posts</li>
            </NavLink>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to="/create-post/"
            >
              <li>New Post</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <div>User</div>
    </header>
  );
}