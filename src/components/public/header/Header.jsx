import React from 'react'
import {dz,france,royaume_uni} from "@image"
import './header.scss';
import { Link ,useNavigate } from 'react-router-dom';
import {Buttun , Logo} from '@p-components';
import {LangueContext} from "@context/langue";
import { useContext ,useState } from 'react';
import FormIns from '../form_ins/FormIns';
import Login from '../login/Login';


function useShowPopup(bool) {

    const [popUp,setPopUp] =useState();

    const popupShow=(bool)=>{
        console.log(bool);
        if (bool) {
             setPopUp(
             <div className='popup' onClick={()=>setPopUp(false)}>
                 <div className='popup__ins__top'>
                     <h3>Suivez les étapes pour finaliser la création de votre CV</h3>
                     <div className='etapes'>
                     <div className='etape'>1</div>
                     <div className='etape'>2</div>
                     <div className='etape'>3</div>
                     <div className='etape'>4</div>
                     <div className='etape'>5</div>
                 </div>
             </div>
             <div className='popup__container' onClick={()=>setPopUp(true)}>
                 {/* <Login/> */}
                 <FormIns/>
             </div>
            
         </div>)
    
        }
        else
         setPopUp(null)

    }
    

    return [popUp,popupShow]
}

export default function Header() {
    const {lang,langue,setLangue} = useContext(LangueContext);
    const nav=useNavigate()
    const {accueil,trouver_emploi,blog,a_propos}=lang.header.menu;
    const {connexion,inscription}=lang.header.auth;

    const [popUp,popupShow]=useShowPopup(false)


    return (
        <header>
            <nav>
                <Link to='./' className="logo">
                    <Logo />
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link to='./home'>{accueil}</Link></li>
                        <li><Link to='./jobSearch'>{trouver_emploi}</Link></li>
                        <li><Link to='./blog'>{blog}</Link></li>
                        <li><Link to='./a_propos'>{a_propos}</Link></li>
                    </ul>
                </div>
                <div className="log">
                    <div className="__langue">
                        <div className='__langue__menu'>
                            <ul>{/*ToDo
                                -mettre du style aux drapeau
                                */}
                                <div className="__langu__title">{langue==='fr'? <img  src={france}/>:langue==='ar'?<img src={dz}/>:<img src={royaume_uni}/>}</div>
                                <li onClick={()=>setLangue('ar')}><img src={dz}/>dz</li>
                                <li onClick={()=>setLangue('fr')}><img src={france}/>fr</li>
                                <li onClick={()=>setLangue('en')}><img src={royaume_uni}/>en</li>
                            </ul>
                        </div>
                    </div>
                    <Buttun id="sing" onClick={e=>nav("/auth")}>{connexion}</Buttun>
                    <Buttun id='log' onClick={()=>popupShow(true)}>{inscription}</Buttun>
                </div>  
                {popUp}
                <div className="burguer">
                    <div className='top'></div><br />
                    <div className='middle'></div><br />
                    <div className='bottom'></div>
                </div>  
            </nav>
        </header>
    )
}
