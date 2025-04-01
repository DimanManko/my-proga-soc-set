import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post";

export function MyPosts(props) {


    let postsElements = props.posts.map (p =>  <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost ( text )
        newPostElement.current.value = ""
    }
    let newPostElement = React.createRef()

    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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


