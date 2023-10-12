import { useState } from "react"
import { useEffect } from "react"

export default function FetchDogPics(){
    const getDogPics =  async()=>{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const dog  = await response.json()
        return dog.message

    }
    const [preDogPics,currentDogPics] = useState('')
    useEffect(()=>{
        getDogPics().then(pic=> currentDogPics(pic))

    },[])
    return(
        <div className="dog-pics">
            <img src={preDogPics} alt="" srcset="" />
            <button type="button" onClick={async e=> currentDogPics(await getDogPics())}> Click ME</button>
        </div>
    )
}