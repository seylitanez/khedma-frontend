import React from 'react'
import logo from "@image/Logo.svg";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to=''>Accueil</Link></li>
                        <li><Link to=''>Trouver un emploi</Link></li>
                        <li><Link to=''>Blog</Link></li>
                        <li><Link to=''>Mon Emploi</Link></li>
                        <li><Link to=''>Career</Link></li>
                        <li><Link to=''>About</Link></li>
                    </ul>
                </div>
                <div className="log">
                    <button id='sing'>Sing in</button>
                    <button id='log'>Log in</button>
                </div>
            </nav>
        </header>
    )
}
