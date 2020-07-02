import React, {useContext} from "react";
import Component1, {Component1Context} from "./Component1";

function Component4(){
    const context = useContext(Component1Context)
    return(
        <p>You clicked {context.clickCount} times</p>
    )
}

export default Component4;