import React, {useEffect, useState} from "react";

function ClickCountComponent(){

    const [clickCount, setClickCount] = useState(localStorage.getItem("clicks") || 0);

    useEffect(() => {
        localStorage.setItem("clicks", clickCount.toString());
    }, [clickCount])


    function incrementCount(){
        setClickCount(+clickCount + 1);
    }

    return(
        <div>
            <p>You clicked {clickCount} times</p>
            <button onClick={incrementCount}>Click me!</button>
        </div>
    )
}

export default ClickCountComponent;