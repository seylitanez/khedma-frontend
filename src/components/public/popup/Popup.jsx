import React,{ useContext, useState } from 'react';
import './popup.scss';
import { PopupContext } from '@context/PopupContext';
import { Buttun, FormIns } from '@p-components/index';
import { accountService } from '@service/Account.service';

export default function Popup({type,setPopUp,isOn,annonce,children}) {
    const [etape,setEtape]=useState(1)
    let etatpes=[1,2,3,4,5]
    const {showPopup,setShowPopup,showPopupConsulter,setShowPopupConsulter}=useContext(PopupContext)
    if (type=='inscription' && showPopup) {
      return (
        <div className='popup'>
          <div className='popup__ins__top'>
            <h3>Suivez les étapes pour finaliser la création de votre CV</h3>
            <div className='etapes'>
              {etatpes.map((e,i)=>e<=etape ? <div className='etape__valide' key={i}>{e}</div>:<div className='etape' key={i}>{e}</div>)}
            </div>
          </div>
          <div className='popup__container'>
              <Buttun id='exit' onClick={()=>setShowPopup(false)}>X</Buttun>
              <FormIns etape={etape} setEtape={setEtape}/>
          </div>
        </div>
      )
    }
    //popup annonce
    if (showPopupConsulter && type=="details") {
        console.log(annonce);
        return (
            <div className="popup">
                <div className='popup__container'>
                    <div className='annonce'>
                      <button id='exit' onClick={()=>{setShowPopupConsulter(false)}}>X</button>
                      <h1 className='nom'>titre: {annonce.nom}</h1>
                      <h1 className='categorie'>categorie: {annonce.categorie}</h1>
                      <h1 className='sousCategorie'>s.categorie: {annonce.sousCategorie}</h1>
                      <h1 className='description'>description: {annonce.descriptionFr}</h1>
                      <div className='jours'>jours de travail{annonce.journees.map((jour,index)=><h1 key={index}>{jour}</h1>)}</div>
                      <h1 className='salaireDeBase'> avec un salaire de: {annonce.salaireDeBase}</h1>
                    </div>
                    {accountService.isLogged&&<Buttun>postuler</Buttun>}
              </div>
        </div>
        )
    }
}