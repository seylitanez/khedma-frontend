import React,{ useContext, useState } from 'react';
import './popup.scss';
import { PopupContext } from '@context/PopupContext';
import { Buttun, FormIns, Login } from '@p-components/index';
import { accountService } from '@service/Account.service';
import GLogin from '@p-components/login/GLogin';

export default function Popup({type,setPopUp,isOn,annonce,children}) {
    const [etapeEmpploye,setEtapeEmpploye]=useState(0)
    const [etapeEmpployeur,setEtapeEmpployeur]=useState(0)
    let etatpesEmpploye=[1,2,3,4]
    let etatpesEmpployeur=[1,2,3]
    const {showPopupInscrption,setShowPopupInscrption,showPopupConsulter,setShowPopupConsulter,popupLogin,setPopupLogin,popupChoix,setPopupChoix}=useContext(PopupContext)


    if (type=='inscription' && showPopupInscrption) {
      if (etapeEmpploye==0&&etapeEmpployeur==0) {
        return  <div className='popup'>
           <div className='popup__container'>
             <Buttun onClick={()=>{setEtapeEmpploye(1);setEtapeEmpployeur(0); setPopupChoix(false);}}>EMPLOYE</Buttun>
             <Buttun onClick={()=>{setEtapeEmpployeur(1);setEtapeEmpploye(0);setPopupChoix(false);}}>EMPLOYEUR</Buttun>
           </div>
         </div>
        
    }
      return (
        <div className='popup'>
          {etapeEmpploye>0&&<div className='popup__ins__top'>
            <h3>Suivez les étapes pour finaliser la création de votre CV</h3>
            <div className='etapes'>
              {etatpesEmpploye.map((e,i)=>(e<=etapeEmpploye) ? <div className='etape__valide' key={i}>{e}</div>:<div className='etape' key={i}>{e}</div>)}
            </div>
          </div>}
          <div className='popup__container'>
              <Buttun id='exit' onClick={()=>{setShowPopupInscrption(false); setEtapeEmpploye(0);setEtapeEmpployeur(0)}}>X</Buttun>
              <FormIns etapeEmpploye={etapeEmpploye} etapeEmpployeur={etapeEmpployeur} setEtapeEmpploye={setEtapeEmpploye} setEtapeEmpployeur={setEtapeEmpployeur}/>

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



    

    if (type=='login' && popupLogin) {
      return (
        <div className='popup'>
          <div className='popup__container'>
              <Buttun id='exit' onClick={()=>{setPopupLogin(false); setEtapeEmpploye(0);setEtapeEmpployeur(0)}}>X</Buttun>
              <Login/>
          </div>
        </div>
      )
    }
}