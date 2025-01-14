import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post";

export function MyPosts(props) {

    let posts = [
        {id:1, message:"Привет, как дела?", likesCount: 12 },
        {id:2, message:"это мой первый пост", likesCount: 115 },
        {id:3, message:"Что делаешь завтра?",likesCount: 5 },
        {id:4, message:"Привет, сходил сегодня в кино",likesCount: 10 },
        {id:5, message:"Завтра едим на рыбалку",likesCount: 30 }
    ]

    let postsElements = posts.map (p =>  <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                News post
            </div>
            <div className={classes.posts}>
                {postsElements}

            </div>
        </div>
    )
}


