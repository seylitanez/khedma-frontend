import React from 'react'
import {Buttun} from '@p-components'
import './annonce.scss'

export default function Annonce({annonce,nm}) {
   const { nom, categorie,sousCategorie,salaireDeBase,journees, date}=annonce
  // console.log("le nom:"+ nom);
  let jourPublication= new Date(date).getDate()-1

  console.log(nm);
  return (
    <div className='annonce' id='annonce'>
      <div className="annonce-top">
        <h1 className='titre' >{nom}</h1>
        
        {jourPublication>1?<h3>il ya {jourPublication} jrs</h3>:<h3>il ya {jourPublication} jr</h3>}
        </div>
      <div className="ville"><h5>ville,region</h5></div>
      <span className='divider'></span>
      <br />
      <div className="description"><h4>recherche d’un cuisinier experimenté avec au moins 1 ans d’eperience </h4></div>
      <br />
      <Buttun className='btn__postuler'>
        POSTULER
      </Buttun>
      <br />
    </div>
  )
}
