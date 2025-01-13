import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post";

function MyPosts(props) {

    let DialogsMessage = [
        {id:1, message:"Привет, как дела?", likesCount: 12 },
        {id:2, message:"это мой первый пост", likesCount: 115 },
        {id:3, message:"Что делаешь завтра?",likesCount: 5 },
        {id:4, message:"Привет, сходил сегодня в кино",likesCount: 10 },
        {id:5, message:"Завтра едим на рыбалку",likesCount: 30 }
    ]
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
                <Post message={DialogsMessage[0].message} likesCount={DialogsMessage[0].likesCount}/>
                <Post message={DialogsMessage[1].message} likesCount={DialogsMessage[1].likesCount}/>
                <Post message={DialogsMessage[2].message} likesCount={DialogsMessage[2].likesCount}/>
                <Post message={DialogsMessage[3].message} likesCount={DialogsMessage[3].likesCount}/>
                <Post message={DialogsMessage[4].message} likesCount={DialogsMessage[4].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;
