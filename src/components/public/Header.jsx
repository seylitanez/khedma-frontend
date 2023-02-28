import React from 'react'
import logo from "@image/Logo.svg";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='./' className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link to='./'>Accueil</Link></li>
                        <li><Link to='./trouver un emploi'>Trouver un emploi</Link></li>
                        <li><Link to='./blog'>Blog</Link></li>
                        <li><Link to='./mon emploi'>Mon Emploi</Link></li>
                        <li><Link to='./cariere'>Cariere</Link></li>
                        <li><Link to='./a propos'>A propos</Link></li>
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
