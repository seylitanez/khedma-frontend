import React, { useEffect, useState } from 'react'
import {dz,france,royaume_uni} from "@image"
import './header.scss';
import { Link ,useNavigate, useParams } from 'react-router-dom';
import {LangueContext} from "@context/langue";
import { useContext } from 'react';
import { Buttun, Logo, Popup } from '@p-components/index';
import { PopupContext } from '@context/PopupContext';
import { accountService } from '@service/Account.service';
import { FiLogOut } from 'react-icons/fi';

export default function Header() {
    const {lang,langue,setLangue} = useContext(LangueContext);
    const nav=useNavigate()
    const {accueil,trouver_emploi,blog,a_propos}=lang.header.menu;
    const {connexion,inscription}=lang.header.auth;
    const {setShowPopupInscrption,popupConsulterDetails,popupLogin,setPopupLogin,popupChoix,setPopupChoix}=useContext(PopupContext)
    const [className,setClassName] = useState(["item","item","item","item"])
    const param= useParams()
    // useEffect(()=>{
    //     const script = document.createElement("script");
    //     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     window.googleTranslateElementInit = function googleTranslateElementInit() {
    //         new window.google.translate.TranslateElement({pageLanguage: 'fr'}, 'google_translate_element');
    //     }
    // },[])
    useEffect(()=>{
        switch (param["*"]) {
            case '':
                setClassName(["item__selected","item","item","item"])
                break;
            case 'home':
                setClassName(["item__selected","item","item","item"])
                break;
            case 'jobSearch':
                setClassName(["item","item__selected","item","item"])
                break;
            case 'blog':
                setClassName(["item","item","item__selected","item"])
                break;
            case 'a_propos':
                setClassName(["item","item","item","item__selected"])
                break;
        }
    },[param['*']])
    const deconnection = () => {
        accountService.logout();
    }
    return (
        <header>
            <nav>
                <Link to='./' className="logo">
                    <Logo/>
                </Link>
                <div className="menu">
                    <ul>
                        <li><div className={className[0]}><Link  to='/home' >{accueil}</Link></div></li>
                        <li><div className={className[1]}><Link  to='/jobSearch' >{trouver_emploi}</Link></div></li>
                        <li><div className={className[2]}><Link  to='/blog' >{blog}</Link></div></li>
                        <li><div className={className[3]}><Link  to='/a_propos' >{a_propos}</Link></div></li>
                    </ul>
                </div>
                {/* <div id="google_translate_element"></div> */}
                <div className="log">
                    {/* <div className="__langue">
                        <div className='__langue__menu'>
                            <ul>
                                <div className="__langu__title">{langue==='fr'? <img  src={france}/>:langue==='ar'?<img src={dz}/>:<img src={royaume_uni}/>}</div>
                                <li onClick={()=>setLangue('ar')}><img src={dz}/>dz</li>
                                <li onClick={()=>setLangue('fr')}><img src={france}/>fr</li>
                                <li onClick={()=>setLangue('en')}><img src={royaume_uni}/>en</li>
                            </ul>
                        </div>
                    </div> */}
                    {accountService.isLogged()?
                    <div className="desco">
                        <FiLogOut size={20} className='prf' />
                        <Link to="/home" onClick={deconnection}>Se Dèconnecter</Link>
                    </div>
                    :<div><Buttun id="log" onClick={e=>setPopupLogin(true)}>{connexion}</Buttun>
                    <Buttun id='sing' onClick={()=>setShowPopupInscrption(true)}>{inscription}</Buttun></div>}           
                </div>  
                <Popup type={"inscription"} />
                <Popup type={"details"} annonce={popupConsulterDetails}/>
                <Popup type={"role"}/> 
                <Popup type={"login"}/> 
                
                <div className="burguer">
                    <div className='top'></div><br />
                    <div className='middle'></div><br />
                    <div className='bottom'></div>
                </div>  
            </nav>
        </header>
    )
}
