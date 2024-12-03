import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Oleg" id="1"/>
                <DialogItem name="Anton" id="1"/>
                <DialogItem name="Nikita" id="1"/>
                <DialogItem name="Sveta" id="1"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Как дела?"/>
                <Message message="Что будешь сегодня делать?"/>
            </div>
        </div>
    )
}

export default Dialogs;