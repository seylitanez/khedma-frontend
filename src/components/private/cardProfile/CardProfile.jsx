import React ,{ useReducer } from 'react';
import "./cardProfile.scss";
import { MdEdit } from "react-icons/md";
import { BsTelephoneFill, BsSaveFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Buttun, Input } from '@p-components/index';

export default function CardProfile({user}) {
    const value={
        boul: true, nom: user.nom, prenom: user.prenom, tele: user.tel, email: user.adresseMail,
        button: {
            icone: <MdEdit className="pen" />,
            text: "Modifier",
        },
        name: <p>{user.nom &&this.nom + " " + this.prenom}</p> ,
        tel:<p className='tel'><BsTelephoneFill size={15} />{user.tel&&this.tele}</p> ,
        mail: <p><HiMail size={20} />{user.adresseMail&&this.email}</p> ,
    }
    const changes=(state,action)=>{
        if (state.boul) return {...state,
            boul: false, 
            button: {
                icone: <BsSaveFill className="pen" />,
                text: "Enregistrer",
            },
            name: <><Input type="text" className="" value={nom}onChange=""/><Input type="text" className="" value={prenom}onChange=""/></> ,
            tel:  <Input className='tel' value={ tel }><BsTelephoneFill size={15} /></Input> ,
            mail:  <Input value={mail}><HiMail size={20} /></Input> ,
        }
        else return {...state,
            boul:true,
            button: {
                icone: <MdEdit className="pen" />,
                text: "Modifier",
            },
            name: <p>{nom + " " + prenom}</p> ,
            tel: <p className='tel'><BsTelephoneFill size={15} />{tel}</p> ,
            mail: <p><HiMail size={20} />{mail}</p> ,
        }
        switch (action.type) {
            case value:
                
                break;
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
                {element.name}
                <p>{user.genre}</p>
                {/* <h1>{user.adresse.wilaya}</h1> */}
                {/* <h1>{[user.adresse.commune]}</h1> */}
            </div>
            <div className="inf_cont">
                <h3>Informations de contact</h3>
            </div>
            <div className="contact">
                {element.tel}
                {element.mail}
            </div>
        </div>
    )
}