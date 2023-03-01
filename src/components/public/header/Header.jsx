import React from 'react'
import logo from "@image/Logo.svg";
import './header.scss';
import { Link } from 'react-router-dom';
import {Buttun} from '@p-components';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='./' className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link to='./home'>Accueil</Link></li>
                        <li><Link to='./trouver un emploi'>Trouver un emploi</Link></li>
                        <li><Link to='./blog'>Blog</Link></li>
                        <li><Link to='./mon emploi'>Mon Emploi</Link></li>
                        <li><Link to='./cariere'>Cariere</Link></li>
                        <li><Link to='./a propos'>A propos</Link></li>
                    </ul>
                </div>
                <div className="log">
                    <Buttun id='sing'>Sing in</Buttun>
                    <Buttun id='log'>Log in</Buttun>
                </div>
            </nav>
        </header>
    )
}
