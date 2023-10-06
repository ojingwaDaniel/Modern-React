import { useState } from "react";

export default function DarkMode (){
    const [darkmode,setDarkMode] = useState(false)
    return (
      <div className={`page ${darkmode ? 'dark-mode' : ''}`}>
        <button
          type="button"
          className="dark-mode-button"
          onClick={() => setDarkMode(true)}
        >
          Dark Mode
        </button>
        <button
          type="button"
          className="light-mode-button"
          onClick={() => setDarkMode(false)}
        >
          Light Mode
        </button>
      </div>
    );
} 