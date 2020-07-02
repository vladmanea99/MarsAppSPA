import React from "react";
import {useState} from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

export const Component1Context = React.createContext({clickCount: 0, incrementCount: () => {}});

function Component1(){

    const [clickCount, setClickCount] = useState(0);

    function incrementCount(){
        setClickCount(+clickCount + 1);
    }
    return(
        <Component1Context.Provider value = {{clickCount, incrementCount}}>
            <div>
                <Component2 />
                <Component3 />
            </div>
        </Component1Context.Provider>
    )
}

export default Component1;
