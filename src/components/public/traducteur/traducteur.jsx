import React from 'react'
import { useEffect } from 'react';
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
    return (
        <div className='traducteur'>
            <div id="google_translate_element" className='apiTraduction'></div>
        </div>
    )
}
