import React from "react";
import Component1, {Component1Context} from "./Component1";

function Component2(){
    const context= React.useContext(Component1Context)

    return(
        <div>
            <button onClick = {context.incrementCount}>
                Click me!
            </button>
        </div>
    )
}

export default Component2;