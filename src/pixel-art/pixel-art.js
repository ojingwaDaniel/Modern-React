import { useContext, useState } from "react";
import { createContext } from "react";

const ColorContest = createContext({
    color : 'lightGrey',
    setColor : ()=> {}
})
const ColorPicker = ()=>{
    const {setColor} = useContext(ColorContest)
    const colors = [
      "red",
      "blue",
      "yellow",
      "green",
      "black",
      "white",
      "purple",
    ];
    return(
        <div>
            <h1>Pick a color</h1>
            {colors.map(color=> (
                <button type="button" key={color} style={{backgroundColor : color}} onClick={()=> setColor(color)}></button>
            ))}
        </div>

    )

}
const Pixel = ()=>{
    const {color} = useContext(ColorContest)
    const [pixelColor, setPixelColor] = useState('lightgrey')
    return (
      <button
        type="button"
        onClick={() => setPixelColor(color)}
        style={{
          height: "20px",
          width: "20px",
          backgroundColor: pixelColor,
          margin: "1px",
        }}
      ></button>
    );
}
const Pixels = ()=>{
   const  pixels = []
    for (let index = 0; index <1000 ; index++) pixels.push(<Pixel key={index}/>)
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          width: "210px",
          margin: "0 auto",
        }}
      >
        {pixels}
      </div>
    );
}
export default function PixelArt(){
    const [color,setColor] = useState('lightGrey')
    return(
        <ColorContest.Provider value={{color,setColor}}>
        <ColorPicker/>
        <Pixels/>

        </ColorContest.Provider>
    )
}