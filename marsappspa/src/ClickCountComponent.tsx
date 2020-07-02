import React, {useState} from "react";

function ClickCountComponent(){
    const [clickCount, setClickCount] = useState(0);

    function incrementCount(){
        setClickCount(clickCount + 1);
    }

    return(
        <div>
            <p>You clicked {clickCount} times</p>
            <button onClick={incrementCount}>Click me!</button>
        </div>
    )
}

export default ClickCountComponent;