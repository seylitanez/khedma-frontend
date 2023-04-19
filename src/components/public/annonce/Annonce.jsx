import React from 'react'
import './annonce.scss'
import { useState } from 'react'
import { Buttun } from '@p-components/index'

export default function Annonce({annonce}) {
  const { nom,descriptionFr, categorie,sousCategorie,salaireDeBase,journees, date}=annonce
  let [cote,setCote]=useState({transform: "rotateY(0deg)", transition:'1s'})
  let jourPublication=new Date(Date.now()).getDate()-new Date(date).getDate()

  function annonceFlip(e) {
    if(e.target.innerText!="CONSULTER")
    setCote({ transform: cote.transform!='rotateY(180deg)'? "rotateY(180deg)":'', transition:'1s'})
    }

  return (
      <div className="annonce" onClick={(e)=>{annonceFlip(e)}} style={cote}>
        <div className='annonce__front' id='annonce'>
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
        
        <div className='annonce__back'>
          <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, saepe repudiandae at ab molestias enim asperiores harum magnam suscipit labore, temporibus laudantium quam a eveniet, eligendi voluptas officiis culpa voluptates.</h5>  
        </div>
    </div>
  )
}
