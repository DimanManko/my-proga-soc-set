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
    let DialogsData = [
        {id:1, name:"Dima" },
        {id:2, name:"Oleg" },
        {id:3, name:"Anton" },
        {id:4, name:"Nikita" },
        {id:5, name:"Sveta" }]

    let DialogsMessage = [
        {id:1, message:"Как дела?" },
        {id:2, message:"Чем занят сегодня?" },
        {id:3, message:"Что делаешь завтра?" },
        {id:4, message:"Привет" },
        {id:5, message:"Пока" }]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={DialogsMessage[0].message}/>
                <Message message={DialogsMessage[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;

