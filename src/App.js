import React from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ObjectCopy} from "./components/CopyObject/Copy";


export const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div class='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            {/*<ObjectCopy/>*/}
        </div>
    )
}



