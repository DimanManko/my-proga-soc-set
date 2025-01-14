import React from 'react';
import classes from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://acura-suv.ru/forum/data/attachments/17/17096-8bd742b97c357608a1344af00b6a6a31.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

