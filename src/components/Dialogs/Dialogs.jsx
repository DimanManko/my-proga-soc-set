import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Oleg</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Anton</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Angrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Nikita</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Привет</div>
                <div className={classes.message}>Как дела?</div>
                <div className={classes.message}>Что будешь сегодня делать?</div>

            </div>

        </div>
    )
}

export default Dialogs;