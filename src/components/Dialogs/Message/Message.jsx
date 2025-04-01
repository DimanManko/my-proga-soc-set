import React from 'react';
import classes from "./../Dialogs.module.css";





export const Message = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value
        alert ( text )
    }
    let newPostElement = React.createRef()

    return <div className={classes.dialog}>{props.message}

        <div>
            <textarea ref={newPostElement}> </textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>

    </div>

}

