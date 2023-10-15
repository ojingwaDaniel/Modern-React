export default function Color ({name,hex,SetBackgroundColor}) {
    return(
            <button
            className="color-square"
            style={{backgroundColor : hex}}
             onClick={SetBackgroundColor(hex)}>
                <h1>{name}</h1>
            </button>
    )
}