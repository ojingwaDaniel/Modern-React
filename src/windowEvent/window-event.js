import { useEffect } from "react";


export default function WindowEvent (){
    const DbClick = ()=> alert('you doubled clicked ')
    useEffect(()=>{
        window.addEventListener('dblclick',DbClick)
        return(
            window.removeEventListener('dblclick',DbClick)
        )
    },[])
    
        

    

    return(
        <div>
           <h1>Window Event Active</h1>
            <footer>@ copyright Ojingwa Daniel</footer>
        </div>
    )
}