import { useEffect, useState } from "react";

export default function ScoreKeeper (){
    const [score,setScore] = useState(parseInt( localStorage.getItem('score'))  || 0)
    useEffect(()=>{
        localStorage.setItemItem('score', score)

    },[score])
    return(
        <div>
            <h1>{score}</h1>
            <button type="button" onClick={setScore(prevScore=>prevScore + 1)}>-</button>
            <button type="button"  onClick={setScore(prevScore=>prevScore + 1)}>+</button>
        </div>
    )
}