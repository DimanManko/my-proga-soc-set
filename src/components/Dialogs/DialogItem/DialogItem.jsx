import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";





export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}