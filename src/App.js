import React from 'react';
import './App.css'
import Accordion from "./components/Accordion.tsx";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            <Rating value={6}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;


