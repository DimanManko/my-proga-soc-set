import React from 'react';
import classes from "./Post.module.css"
import AntonReva from "../../../../Mylogo/AntonReva.png";


const Post = (props) => {

    // props.posts.filter((res, el) => {
    //     if (el.id === 3) {
    //         return
    //         <div className={classes.item}>
    //             <img src={AntonReva}/>
    //             {props.message}
    //             <div>
    //                  <span>like</span> {props.likesCount}
    //             </div>
    //         </div>
    //     } else {
    //         return res;
    //     }
    // }, {})

    // const post = props.posts.filter(el=> el.id === 3)
    // const listItems = props.posts.map((posts) => (
    //     <div className={classes.item}>
    //         <img src={AntonReva} />
    //         <p>
    //             {' ' + post + ' '}
    //         </p>
    //     </div>
    // ));


    return(

        <div className={classes.item}>
            {/*{post}*/}
            <img src={AntonReva}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;