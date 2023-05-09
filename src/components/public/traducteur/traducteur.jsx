import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IoEarth } from 'react-icons/io5';
import './traducteur.scss'

export default function Traducteur() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = function googleTranslateElementInit() {
            new window.google.translate.TranslateElement({pageLanguage: 'fr'}, 'google_translate_element');
        }
    },[])

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(current => !current);
    };

    return (
        <div className='traducteur'
        style={{transform: isActive ? 'translateX(0)' : 'translateX(calc(-100% + 60px))' }}
        onClick={handleClick}>
            <div id="google_translate_element" className='apiTraduction'></div>
            <IoEarth size="60px" color='white'/>
        </div>
    )
}
