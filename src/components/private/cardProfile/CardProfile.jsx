import React from 'react'
import "./cardProfile.scss";
import { MdEdit } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Buttun } from '@p-components/index';

export default function CardProfile({user}) {
    return (
        <div className="profile">
            <div className="info">
                <h3>Informations générales</h3>
                <Buttun className="edit"><MdEdit className="pen" />Modifier</Buttun>
            </div>
            <div className="inf_perso">
                <p>{user.nom + " " + user.prenom}</p>
                <p>{user.genre}</p>
                {/* <h1>{user.adresse.wilaya}</h1> */}
                {/* <h1>{[user.adresse.commune]}</h1> */}
            </div>
            <div className="inf_cont">
                <h3>Informations de contact</h3>
            </div>
            <div className="contact">
                <p className='tel'><BsTelephoneFill size={15} />{user.tel}</p>
                <p><HiMail size={20} />{user.adresseMail}</p>
            </div>
        </div>
    )
}