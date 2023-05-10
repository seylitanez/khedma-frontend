import React ,{ useReducer,useEffect,useRef,useState } from 'react';
import "./cardProfile.scss";
import { MdEdit } from "react-icons/md";
import { BsTelephoneFill, BsSaveFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Buttun, Input } from '@p-components/index';
import { accountService } from '@service/Account.service';
import Confirmation from './Confirm/Confirmation';

export default function CardProfile() {
    let value={
        boul: true,
        button: {
            icone: <MdEdit className="pen" />,
            text: "Modifier",
        }, namedit: false, teledit: false, mailedit: false,confirm:"",
    }
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            accountService.getUser()
                .then(res =>{console.log(res); setElement({type:"set",value:res.data})})
                .catch(err => console.log(err))
            }
            return () => {
                flg.current = true;
            }
    }, [])
    const changes=(state,action)=>{
        switch (action.type) {
            case "nom":return{...state,nom:action.e.target.value}
            case "prenom": return { ...state, prenom: action.e.target.value }
            case "tel": return { ...state, tel: action.e.target.value }
            case "set": return { ...state, ...action.value }
            case "annuler":return {...state, confirm:""}
            case "confirm":{
                accountService.updateUser({ nom: state.nom, prenom: state.prenom, tel: state.tel, mail: state.adresseMail })
                    .then(res => console.log(/*res*/""))
                    .catch(err => console.log(err))
                return {...state, confirm:""}
            }
            default:
                if (state.boul) return {
                    ...state, boul: false,
                    button: {
                        icone: <BsSaveFill className="pen" />,
                        text: "Enregistrer",
                    }, namedit: true, teledit: true, mailedit: true,
                }
                else return {
                    ...state, boul: true,
                    button: {
                        icone: <MdEdit className="pen" />,
                        text: "Modifier",
                    }, namedit: false, teledit: false, mailedit: false,confirm:"visible"
                }
        }
    }
    const [element,setElement]=useReducer(changes,value)
    return (
        <div className="profile">
            <Confirmation set={setElement} classn={element.confirm}/>
            <div className="info">
                <h3>Informations générales</h3>
                <Buttun className="edit" onClick={setElement}>{element.button.icone}{element.button.text}</Buttun>
            </div>
            <div className="inf_perso">
                {element.namedit ? <><Input type="text" className="" value={element.nom}  onChange={e=>setElement({type:"nom",e:e})} /><Input type="text" className="" value={element.prenom}  onChange={e=>setElement({type:"prenom",e:e})} /></> : <p>{element.nom + " " + element.prenom}</p>}
                <p>{element.genre}</p>
                {/* <h1>{user.adresse.wilaya}</h1> */}
                {/* <h1>{[user.adresse.commune]}</h1> */}
            </div>
            <div className="inf_cont">
                <h3>Informations de contact</h3>
            </div>
            <div className="contact">
                {element.teledit ? <Input type="text" className='tel' value={element.tel}  onChange={e=>setElement({type:"tel",e:e})}><BsTelephoneFill size={15} /></Input> : <p className='tel'><BsTelephoneFill size={15} />{element.tel}</p>}
                <p><HiMail size={20} />{element.adresseMail}</p>
            </div>
            
        </div>
    )
}