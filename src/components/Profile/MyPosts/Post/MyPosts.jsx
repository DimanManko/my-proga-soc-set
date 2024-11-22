import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post";

function MyPosts() {
    return (
        <div >
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
            News post
            </div>
            <div className={classes.posts}>
                <Post message = 'Привет, как дела?' likesCount='0'/>
                <Post message = 'это мой первый пост' likesCount='78'/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
