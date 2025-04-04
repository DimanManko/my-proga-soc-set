import React from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./redux/state";




export const App = (props) => {

    return (
        <div>

                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs'
                                   element={<Dialogs state={props.state.dialogsPage}/>}/>
                            <Route path='/profile'
                                   element={<Profile profilePage={props.state.profilePage}
                                                     addPost={props.addPost}
                                                     updateNewPostText={props.updateNewPostText}
                                   />}/>
                        </Routes>
                    </div>
                </div>

        </div>
    )
}



