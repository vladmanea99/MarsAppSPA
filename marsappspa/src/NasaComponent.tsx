import React from "react";
import BasicComponent from "./BasicComponent";
function NaxaComponent(){
    return(
        <div>
            <BasicComponent data = {{title: 'Nasa Info',
                                    p1: 'This is a Nasa Info paragraph',
                                    p2: 'This is also a Nasa Info paragraph',
                                    img: 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'}} />
        </div>
    )
}

export default NaxaComponent;