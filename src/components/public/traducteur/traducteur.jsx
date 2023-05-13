import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IoClose, IoEarth } from 'react-icons/io5';
import './traducteur.scss'
import { Buttun } from '..';

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

    const [ouvert, setOuvert] = useState(false);

    const handleClick = () => {
        setOuvert(actuel => !actuel);        
    };
    const close =()=> {
        let btn = document.querySelector(".VIpgJd-ZVi9od-ORHb-OEVmcd").contentWindow.document.querySelector(".VIpgJd-ZVi9od-TvD9Pc-hSRGPd");
        btn.click()
    }
    return (
        <div className='traducteur' style={{transform: ouvert ? 'translateX(0)' : 'translateX(calc(-100% + 68px))' }}>
            <div id="google_translate_element" className='apiTraduction'></div>
            <IoEarth size="44px" color='white' className='traducteur__bouton' onClick={handleClick}/>
    </div>
    )
}
