"use client"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function DarkModeToggle() {

    const { mode, toggle } = useContext(ThemeContext)
    return (
        <div onClick={toggle} 
        style={{ 
            position: 'relative', 
            width: '45px', 
            height: '45px',  
            borderRadius: '50%',
            cursor:'pointer', 
            display:'flex',
            justifyContent:'center',
            fontSize:'30px',}}>
            {`${mode === 'dark' ? '🌟' : '🌜'}`} 
            
        </div>)
};
