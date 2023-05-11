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
// import { MdDensityMedium } from "react-icons/md";
import { GoogleLogout } from 'react-google-login';

export default function Header() {
    const {lang,langue,setLangue} = useContext(LangueContext);
    const nav=useNavigate()
    const {accueil,trouver_emploi,blog,a_propos}=lang.header.menu;
    const {connexion,inscription}=lang.header.auth;
    const {setShowPopupInscrption,popupConsulterDetails,popupLogin,setPopupLogin,popupChoix,setPopupChoix}=useContext(PopupContext)
    const [className,setClassName] = useState(["item","item","item","item"])
    const param= useParams()

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
            <Link to='./' className="logo">
                <Logo/>
            </Link>
            <nav>
                <ul className='menu'>
                    <li><div className={className[0]}><Link  to='/home' >{accueil}</Link></div></li>
                    <li><div className={className[1]}><Link  to='/jobSearch' >{trouver_emploi}</Link></div></li>
                    {/* <li><div className={className[2]}><Link  to='/blog' >{blog}</Link></div></li> */}
                    <li><div className={className[3]}><Link  to='/a_propos' >{a_propos}</Link></div></li>
                </ul>
            </nav>
            <div className='log'>
                {
                    accountService.isLogged()?
                    <div className="desco">
                    <FiLogOut size={20} className='prf' />
                    <Link to="/home" onClick={deconnection}>Se Dèconnecter</Link>
                        {/* <GoogleLogout clientId={"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com"} buttonText={"se deconnecter"} onLogoutSuccess={()=>{console.log("vous vous etes deconnecte avec success");}} /> */}
                </div>
                :
                <div>
                    <Buttun id='sing' onClick={()=>setShowPopupInscrption(true)}>{inscription}</Buttun>
                    <Buttun id="log" onClick={e=>setPopupLogin(true)}>{connexion}</Buttun>
                </div>
                }           
            </div>

            {/* <MdDensityMedium size = '40px' className = 'hamburger'/> */}
            <Popup type={"inscription"} />
            <Popup type={"details"} annonce={popupConsulterDetails}/>
            <Popup type={"role"}/> 
            <Popup type={"login"}/> 
        </header>
    )
}
