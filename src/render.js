import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state}  addPost = {addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))


