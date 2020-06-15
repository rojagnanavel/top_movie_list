import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Topnav.module.css';
const TopNav =()=>{
    return(

    <nav className={classes.navHeader}>
    <NavLink
      exact
      activeClassName={classes.navbarLinkActive}
      className={classes.navLink}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName={classes.navbarLinkActive}
      className={classes.navLink}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
        // <div className={classes.navHeader}> 
        //     <ul> 
        //         <li> 
        //             <Link to="/home">Home</Link> 
        //         </li> 
        //         <li> 
        //             <Link to="/movies">Movies</Link> 
        //         </li> 
        //     </ul> 
        // </div> 
    );
}
export default TopNav;