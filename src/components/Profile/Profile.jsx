import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/Post/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

export const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}


