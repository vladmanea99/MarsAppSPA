import React from "react";
import './BasicComponent.css';
import './index.css';
import BasicInterface from './BasicInterface';

function BasicComponent(props: BasicInterface){
    return (<div>
        <h1 className = 'basicTitle'>{props.title}</h1>
        <p className = 'basicP'>{props.p1}</p>
        <p className = 'basicP'>{props.p2}</p>
        <img src = {props.img} className = 'App-logo' alt = 'Nasa Logo'/>
    </div>)
}

export default BasicComponent;