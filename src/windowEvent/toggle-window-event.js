import { useState } from "react";
import WindowEvent from "./window-event";

export default function ToggleButton (){
    const [off,on] = useState(false)
    return(
        <div>
            <button onClick={()=> on(off=> !off)}>Toggle Event</button>
            {off && <WindowEvent/>}
        </div>
    )
}