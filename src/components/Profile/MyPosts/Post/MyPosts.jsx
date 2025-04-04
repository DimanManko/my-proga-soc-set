import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post";
import {updateNewPostText} from "../../../../redux/state";

export function MyPosts(props) {


    let postsElements = props.posts.map (p =>  <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost ( text )
    }

    let newPostElement = React.createRef()

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
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


