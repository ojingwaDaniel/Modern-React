import { useEffect } from "react";


export default function WindowEvent (){
    
    useEffect(()=>{
        const DbClick = () => alert("you doubled clicked ");
        window.addEventListener('dblclick',DbClick)
        return()=> window.removeEventListener('dblclick',DbClick)
        
    },[])
    return(
        <div>
           <h1>Window Event Active</h1>
            <footer>@ copyright Ojingwa Daniel</footer>
        </div>
    )
}