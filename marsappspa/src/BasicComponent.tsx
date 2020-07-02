import React from "react";

function BasicComponent(props: any){
    return (<div>
        <h1>{props.data.title}</h1>
        <p>{props.data.p1}</p>
        <p>{props.data.p2}</p>
        <img src = {props.data.img}/>
    </div>)
}

export default BasicComponent;