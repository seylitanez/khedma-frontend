// pour remplacer le component POPUP

import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import './fenetre.scss'

export default function Fenetre({children,ouvert,handleClick}) {

    console.log("ouvert ?"+ouvert);


    const neRienFaire = (e) => {
        e.stopPropagation();
    }

    return (
        <div className='fenetre' style={{display : ouvert ? 'flex' : 'none'}} onClick={handleClick}>
            <div className="fenetre__visible" onClick={neRienFaire}>
                <div className="fenetre_banniere">
                    <RxCross2 size='24px' className='fermer' onClick={handleClick}/>
                </div>
                <div className='fenetre__contenu'>
                    {children}
                </div>
            </div>
        </div>
    )
}