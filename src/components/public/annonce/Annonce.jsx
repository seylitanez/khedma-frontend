import React from 'react'
import {Buttun} from '@p-components'
import './annonce.scss'

export default function Annonce({annonce}) {
  const { nom, categorie,sousCategorie,salaireDeBase,journees, date}=annonce
  return (
    <div className='annonce' id='annonce'>
      <div className="annonce-top">
        <h1 className='titre' >titre</h1>
        <h3>il ya 4jr</h3>
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
