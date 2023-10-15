export default function Color ({name,hex,setBackgroundColor}) {
    return(
            <button
            className="color-square"
            style={{backgroundColor : hex}}
             onClick={()=> setBackgroundColor(hex)}>
                <h1>{name}</h1>
            </button>
    )
}