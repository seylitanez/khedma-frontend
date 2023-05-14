import React from 'react'
import { HiMail } from "react-icons/hi";
import './CardPostulant.scss';
import { BsTelephoneFill, BsFillPinMapFill } from "react-icons/bs";

export default function CardPostulant({postulant}) {
    const {nom, prenom, adresseMail, tel, adresse} = postulant;

  return (
    <div className="card__postulant">
    {postulant&&<h3>{nom} {prenom}</h3>}
    <div className="card__contact">
      <HiMail size={20}/>{postulant&&<a href={"mailto:" + adresseMail}>Envoyer un mail</a>}
    </div>
    <div className="card__contact">
      <BsTelephoneFill size={20}/>{postulant&&<p>{tel}</p>}
    </div>
    <div className="card__contact">
      <BsFillPinMapFill size={20}/>{postulant.adresse&&<p>{adresse.wilaya}, {adresse.commune}</p>}
    </div>
  </div>
  )
}
