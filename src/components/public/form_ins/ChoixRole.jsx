import { FormulaireContext } from '@context/FormulaireContext';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Buttun } from '..';


export default function ChoixRole() {

    const EMPLOYE="EMPLOYE";
    const EMPLOYEUR="EMPLOYEUR";
    const {formulaire,setFormulaire}=useContext(FormulaireContext);

    function selection(ChoixRole){
        formulaire.role=ChoixRole;
        setFormulaire({...formulaire});
        console.log(formulaire);
    }

  return (
    <div>
        <div className='popup'>
            <div className='popup__container'>
                <h1>Choisissez le type de compte que vous souhaitez creer</h1>
                <Buttun className='role__compte' onClick={()=>{selection(EMPLOYE)}}>{EMPLOYE}</Buttun>
                <Buttun className='role__compte' onClick={()=>{selection(EMPLOYEUR)}}>{EMPLOYEUR}</Buttun>
            </div>
        </div>
    </div>
  )
}
