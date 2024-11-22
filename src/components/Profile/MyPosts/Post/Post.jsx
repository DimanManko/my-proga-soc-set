import React from 'react';
import classes from "./Post.module.css"



const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=c5abea67d90ba463edf259ecc991210c-5235144-images-thumbs&n=13"/>
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;