import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



const Dialogs = (props) => {
    let dialogs = [
        {id:1, name:"Dima" },
        {id:2, name:"Oleg" },
        {id:3, name:"Anton" },
        {id:4, name:"Nikita" },
        {id:5, name:"Sveta" }
    ]


    let messages = [
        {id:1, message:"Как дела?" },
        {id:2, message:"Чем занят сегодня?" },
        {id:3, message:"Что делаешь завтра?" },
        {id:4, message:"Привет" },
        {id:5, message:"Пока" }
    ]
    let dialogsElements = dialogs.map (d => <DialogItem name={d.name} id={d.id}/> )
    let massegesElements = messages.map (m => <Message message={m.message}/>)
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


