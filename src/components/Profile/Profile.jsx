import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/Post/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}


