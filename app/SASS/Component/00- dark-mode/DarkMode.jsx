import { useEffect, useState } from "react";
import "./DarkMode.scss"
import { FaMoon, FaSun } from "react-icons/fa";


const DarkMode =()=> {

    const [mode, setMode] = useState( localStorage.getItem("currentMode")??"dark")

    useEffect(() => {
        if (mode ==="light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light"); 
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark"); 
        }
    }, [mode])
    
    return (
        <button className="dark_mode" onClick={()=>{
            localStorage.setItem("currentMode", mode ==="dark"? "light" : "dark");
            setMode(localStorage.getItem("currentMode"));
            
        }}>
            {mode==="dark"? <FaSun className="sun"/> :  <FaMoon className="moon"/> 
                }
        </button>
    );
}

export default DarkMode;

