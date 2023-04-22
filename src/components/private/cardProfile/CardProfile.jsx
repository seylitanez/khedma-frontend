import React ,{ useReducer } from 'react';
import "./cardProfile.scss";
import { MdEdit } from "react-icons/md";
import { BsTelephoneFill, BsSaveFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Buttun, Input } from '@p-components/index';

export default function CardProfile({user}) {
    const value={
        boul:true,
        button: {
            icone: <MdEdit className="pen" />,
            text: "Modifier",
        },
        name(nom,prenom){return <p>{nom + " " + prenom}</p>} 

    }
    const changes=(state,action)=>{
        if (state.boul) return {
            boul:false,
            button: {
                icone: <BsSaveFill className="pen" />,
                text: "Enregistrer",
            },
            name(nom, prenom) {return <><Input type="text" className="" value={nom}onChange=""/><Input type="text" className="" value={prenom}onChange=""/></> }
        }
        else return {
            boul:true,
            button: {
                icone: <MdEdit className="pen" />,
                text: "Modifier",
            },
            name(nom, prenom) { return <p>{nom + " " + prenom}</p> } 
        }
    }
    const [element,setElement]=useReducer(changes,value)
    return (
        <div className="profile">
            <div className="info">
                <h3>Informations générales</h3>
                <Buttun className="edit" onClick={setElement}>{element.button.icone}{element.button.text}</Buttun>
            </div>
            <div className="inf_perso">
                {element.name(user.nom,user.prenom)}
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