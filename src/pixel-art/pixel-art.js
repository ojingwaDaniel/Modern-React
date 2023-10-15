import { useContext } from "react";
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