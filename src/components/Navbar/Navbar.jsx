import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to= "/Profile"  >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = "/dialogs"  >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a href = "/news">News</a>
            </div>
            <div className={classes.item}>
                <a href = "/music">Music</a>
            </div>
            <div className={classes.item}>
                <a href = "/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;