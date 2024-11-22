import React from 'react';
import classes from "./Header.module.css";
import logo from "../../Mylogo/logo.png";

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo}/>
        </header>
    )
}

export default Header;
