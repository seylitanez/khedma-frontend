import React, { useEffect, useState } from 'react'
import {dz,france,royaume_uni} from "@image"
import './header.scss';
import { Link ,useNavigate, useParams } from 'react-router-dom';
import {LangueContext} from "@context/langue";
import { useContext } from 'react';
import { Buttun, Login, Logo, Popup } from '@p-components/index';
import { PopupContext } from '@context/PopupContext';
import { accountService } from '@service/Account.service';
import { FiLogOut } from 'react-icons/fi';
import { GoogleLogout } from 'react-google-login';
import Fenetre from '@p-components/fenetre/Fenetre';
import { RxCross2, RxWidth } from 'react-icons/rx';
import ChoixRole from '@p-components/form_ins/ChoixRole';
import { FormulaireContext } from '@context/FormulaireContext';
import FormInsEmployeur from '@p-components/form_ins/FormInsEmployeur';
import FormInsEmploye from '@p-components/form_ins/FormInsEmploye';
import { RxHamburgerMenu } from "react-icons/rx";
import { gapi } from 'gapi-script';

export default function Header() {
    const {lang,langue,setLangue} = useContext(LangueContext);
    const nav=useNavigate()
    const {accueil,trouver_emploi,blog,a_propos}=lang.header.menu;
    const {connexion,inscription}=lang.header.auth;
    const {setShowPopupInscrption,popupConsulterDetails,popupLogin,setPopupLogin,popupChoix,setPopupChoix}=useContext(PopupContext)
    const [className,setClassName] = useState(["item","item","item","item"])
    const [loginOvert, setLoginOvert] = useState(false);
    const [inscripOuvert, setInscripOuvert] = useState(false);

    const [contenuFentre, setContenuFentre] = useState(<ChoixRole />);

    const {formulaire,setFormulaire}=useContext(FormulaireContext);

    useEffect(()=>{
        switch (formulaire.role) {
            case 'EMPLOYEUR':
                setContenuFentre(<FormInsEmployeur />)
                break;
            case 'EMPLOYE':
                setContenuFentre(<FormInsEmploye />)
                break;
        }
    },[formulaire.role])
    


    const param= useParams()

    const handleClickLogin = () => {
        setLoginOvert(actuel => !actuel);
    }
    const handleClickInscrip = () => {
        setInscripOuvert(actuel => !actuel);
    }
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
        const go = document.querySelector(".out-google")//.contentWindow.document.querySelector(span)
        go.click()
        if (window.gapi) {
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
                auth2.signOut().then(
                    auth2.disconnect().then(this.props.onLogoutSuccess)
                )
            }
        }
    }

    const [ouvert, setOuvert] = useState(false);

    const handleClick = () => {
        setOuvert(actuel => !actuel);        
    };

    let routeProfile;
    
    if (accountService.isLogged())
    {
        switch (accountService.getRole())
        {
            case 'EMPLOYE':
                routeProfile = '/employe/profile/' + accountService.getUserName();
                break;
            case 'EMPLOYEUR':
                routeProfile = '/employeur/profile/' + accountService.getUserName();
                break;
        }
    }

    return (
        <header>
            <Link to='./' className="logo">
                <Logo/>
            </Link>
            {
                accountService.isLogged() ?
                <>
                </>
                :
                <nav>
                    <ul className='menu'>
                        <li><div className={className[0]}><Link  to='/home' >{accueil}</Link></div></li>
                        <li><div className={className[1]}><Link  to='/jobSearch' >{trouver_emploi}</Link></div></li>
                        <li><div className={className[3]}><Link  to='/a_propos' >{a_propos}</Link></div></li>
                    </ul>
                </nav>
            }

            <RxHamburgerMenu size = '38px' id='hamburger' className = 'hamburger'
            onClick={handleClick}
            style={{color : ouvert ? 'white' : ''}}
            />

            <div className="mobile__menu"
            style={{transition : 'display 0s', transform : ouvert ? 'translateY(0)' : 'translateY(-100%)', display : ouvert ? 'flex' : 'none'}}>
                <ul className='menu'>
                    <li>
                        <Link  to='/home' >{accueil}</Link>
                    </li>
                    <li>
                        <Link  to='/jobSearch' >{trouver_emploi}</Link>
                    </li>
                    <li>
                        <Link  to='/a_propos' >{a_propos}</Link>
                    </li>
                    {
                        accountService.isLogged() ?
                            <>
                                <div className="desco">
                                    {/* <FiLogOut size={20} className='prf' /> */}
                                    <Link to="/home" onClick={()=>deconnection()}>Se déconnecter</Link>
                                </div>
                                <GoogleLogout className='out-google' clientId={"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com"} buttonText={"se deconnecter"} onLogoutSuccess={() => { console.log("vous vous etes deconnecte avec success"); }} />
                            </>
                            :
                            <>
                                <Buttun id='sing' className='mobile__auth' onClick={handleClickInscrip}>{inscription}</Buttun>
                                <Buttun id="log" className='mobile__auth' onClick={handleClickLogin}>{connexion}</Buttun>
                            </>
                    }  
                </ul>
            </div>

            <div className='log'>
                {
                    accountService.isLogged()?
                    <>
                        <div>
                            <Link  to='/jobSearch' >
                                <div className="desco voir__annonces">
                                    Voir les annonces
                                </div>
                            </Link>
                            <Link to={routeProfile}>
                                <div className="desco mon__profile">
                                    Mon profile
                                </div>
                            </Link>
                            <Link to="/home" onClick={()=>deconnection()}>
                                <div className="desco">
                                        Se déconnecter
                                </div>
                            </Link>
                            <GoogleLogout className='out-google' clientId={"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com"} buttonText={"se deconnecter"} onClick={{}} onLogoutSuccess={() => { console.log("vous vous etes deconnecte avec success"); }} />
                        </div>
                    </>
                    :
                    <div>
                        <Buttun id='sing' onClick={handleClickInscrip}>{inscription}</Buttun>
                        <Buttun id="log" onClick={handleClickLogin}>{connexion}</Buttun>
                    </div>
                    }           
            </div>

            <Fenetre ouvert={inscripOuvert}  handleClick={handleClickInscrip}>
                {contenuFentre}
            </Fenetre>
            <Fenetre ouvert={loginOvert}  handleClick={handleClickLogin}>
                <Login setInscripOuvert={setInscripOuvert} setLoginOvert={setLoginOvert}/>
            </Fenetre>
            
            <Popup type={"inscription"}  />
            <Popup type={"details"} annonce={popupConsulterDetails} />
            <Popup type={"role"}/> 
            <Popup type={"login"}/> 
        </header>
    )
}
