import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <App state={state}  dispatch = {store.dispatch.bind(store)} store = {store}/>
        </BrowserRouter>
    );
}
export const root = ReactDOM.createRoot(document.getElementById('root'))

rerenderEntireTree (store.getState())

store.subscribe(rerenderEntireTree)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();