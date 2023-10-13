import { useEffect, useState } from "react";


export default function WindowEvent (){
    const [windowEvent, setWindowEvent] = useState(false);
    const DbClick = ()=> alert('you doubled clicked ')
    useEffect(()=>{
        window.addEventListener('dblclick',DbClick())
        return(
            window.removeEventListener('dblclick',DbClick())
        )
    },[])
    
        

    

    return(
        <div>
            <button type="button" onClick={()=>setWindowEvent(prevState=> !prevState)}>Toggle Window Event </button>
            <footer>@ copyright Ojingwa Daniel</footer>
        </div>
    )
}