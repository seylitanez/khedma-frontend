import React from 'react'
import logo from "@image/Logo.svg";
import './header.scss';
import { Link } from 'react-router-dom';
import {Buttun} from '@p-components';
import {LangueContext} from "@context/langue";
import { useContext } from 'react';
export default function Header() {
    const {lang,setLangue,langue} = useContext(LangueContext);

    const {accueil,trouver_emploi,blog,emploi,cariere,a_propos}=lang.header.menu;
    
    const {connexion,inscription}=lang.header.auth;

    
    return (
        <header>
            <nav>
                <Link to='./' className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link to='./home'>{accueil}</Link></li>
                        <li><Link to='./trouver un emploi'>{trouver_emploi}</Link></li>
                        <li><Link to='./blog'>{blog}</Link></li>
                        <li><Link to='./mon emploi'>{emploi}</Link></li>
                        <li><Link to='./cariere'>{cariere}</Link></li>
                        <li><Link to='./a propos'>{a_propos}</Link></li>
                    </ul>
                </div>
                <div className="log">
                    <Buttun id='sing'>{connexion}</Buttun>
                    <Buttun id='log'>{inscription}</Buttun>
                </div>
                <div className="__langue">
                    <div className='__langue__menu'>
                        <ul>
                            {
                            /*ToDo
                             -mettre des emojis au lieu d'un text ex: dz-> drapeau dz 
                             -mettre du style il faut que elle soit collé a la droite au max 
                            */}
                            <div className="__langu__title">{langue}</div>
                            <li onClick={()=>setLangue('ar')}>AR</li>
                            <li onClick={()=>setLangue('fr')}>FR</li>
                            <li onClick={()=>setLangue('en')}>EN</li>
                        </ul>
                    </div>
                </div>   
            </nav>
        </header>
    )
}
