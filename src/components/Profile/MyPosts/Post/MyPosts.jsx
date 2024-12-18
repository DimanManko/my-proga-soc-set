import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post";

function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                News post
            </div>
            <div className={classes.posts}>
                <Post message='Привет, как дела?' likesCount='0'/>
                <Post message='это мой первый пост' likesCount='78'/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
