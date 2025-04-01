import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/> )
    let massegesElements = props.state.messages.map (m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {massegesElements}

            </div>
        </div>
    )
}

export default Dialogs


