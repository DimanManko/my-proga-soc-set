import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/Post/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://acura-suv.ru/forum/data/attachments/17/17096-8bd742b97c357608a1344af00b6a6a31.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}


export default Profile;