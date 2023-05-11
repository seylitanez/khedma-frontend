import React from 'react'
import './annonce.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { Buttun } from '@p-components/index'
import { PopupContext } from '@context/PopupContext'

export default function Annonce({ annonce }) {
    const { nom, descriptionFr, adresse, categorie, sousCategorie, salaireDeBase, journees, date } = annonce
    let [cote, setCote] = useState({ transform: "rotateY(0deg)", transition: '1s' })
    let jourPublication = new Date(Date.now()).getDate() - new Date(date).getDate()

    const { setPopupConsulterDetails, setShowPopupConsulter } = useContext(PopupContext)

    function annonceFlip(e) {
        if (e.target.innerText != "CONSULTER")
            setCote({ transform: cote.transform != 'rotateY(180deg)' ? "rotateY(180deg)" : '', transition: '1s' })
    }

    return (
        <div className="annonce" onClick={(e) => { annonceFlip(e) }} style={cote}>
            <div className='annonce__front' id='annonce'>
                <div className="annonce-top">
                    <h1 className='titre' >{nom}</h1>
                    {jourPublication == 0 ? <h3>Aujourd'hui</h3> : null}
                    {jourPublication > 1 ? <h3>Il ya {jourPublication} jours</h3> : <h3>il y a {jourPublication} jour</h3>}
                </div>
                <div className="ville">
                    <h5>{adresse && adresse.wilaya},{adresse && adresse.commune}</h5>
                </div>
                <span className='divider'></span>
                <br />

                <div className="description">
                    <h4>{descriptionFr && descriptionFr.substring(0, 20) + "..."} </h4>
                </div>

                <br />
                {/* je prefere consulter au lieu de postuler */}
                <Buttun className='btn__postuler' onClick={() => { setShowPopupConsulter(true); setPopupConsulterDetails(annonce) }}>
                    CONSULTER
                </Buttun>
                <br />
            </div>

            <div className='annonce__back'>
                <h5>{descriptionFr}</h5>
            </div>
        </div>
    )
}
