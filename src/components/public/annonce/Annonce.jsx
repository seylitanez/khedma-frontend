import React from 'react'
import {Buttun} from '@p-components'
import './annonce.scss'

export default function Annonce({annonce}) {
  const { nom,descriptionFr, categorie,sousCategorie,salaireDeBase,journees, date}=annonce
  let jourPublication=new Date(Date.now()).getDate()-new Date(date).getDate()
  return (
    <div className='annonce' id='annonce'>
      <div className="annonce-top">
        <h1 className='titre' >{nom}</h1>
        {jourPublication>1?<h3>il ya {jourPublication} jrs</h3>:<h3>il ya {jourPublication} jr</h3>}
      </div>
      <div className="ville"><h5>ville,region</h5></div>
      <span className='divider'></span>
      <br />
      <div className="description"><h4>{descriptionFr} </h4></div>
      <br />
      {/* je prefere consulter au lieu de postuler */}
      <Buttun className='btn__postuler'>CONSULTER</Buttun>
      <br />
    </div>
  )
}
