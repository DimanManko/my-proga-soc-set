import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post";
import {addPostAction, updateNewPostTextAction} from "../../../../redux/profile-reducer";



export function MyPosts(props) {

    let postsElements = props.posts.map (p =>  <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch (addPostAction())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextAction(text)
        props.dispatch (action)
    }


    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={  addPost }>Add post</button>
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


