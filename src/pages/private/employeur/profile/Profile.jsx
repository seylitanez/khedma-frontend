import React from "react";
import "./profile.scss";
import { useState, useEffect, useRef } from "react";
import { userService } from "@service/index";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { accountService } from '@service/Account.service';
import { BsFillPersonLinesFill, BsFillPersonFill, BsCalendarFill, BsCalendarPlusFill, BsFillCalendarPlusFill } from "react-icons/bs";
import { GoogleLogout } from "react-google-login";

export default function Profile() {
    const param = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        userService
            .getUser()
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, []);


    const dec = () => {
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



    const deconnection = () => {
        accountService.logout();
    }
    return (
        <div>
            <div className="profile_employeur">
                <div className="sidebar">
                    <Link to={param.nomUtilisateur} className="sidebar__item">
                        <BsFillPersonFill size={20} className="prf" />
                        <p>Mon profile</p>
                    </Link>

                    <Link to={param.nomUtilisateur + "/listAnnonce"} className="sidebar__item">
                        <BsCalendarFill size={20} className="prf" />
                        <p>Liste des annonces</p>
                    </Link>

                    {/* <Link to={param.nomUtilisateur + "/ajouterAnnonce"} className="sidebar__item">
                        <BsCalendarPlusFill size={20} className="prf"/>
                        <p>Ajouter une annonce</p>
                    </Link> */}

                    <Link to={param.nomUtilisateur + "/listPostulent"}className="sidebar__item">
                        <BsFillPersonLinesFill size={20} className="prf"/>
                        <p>List des postulants</p>
                    </Link>
                    {/* <div className="sidebar__item">
                        <FiLogOut size={20} className='prf' /> 
                        <Link to={"/home"} onClick={deconnection}>
                            Se déconnecter
                        </Link>
                    </div> */}

                </div> 
                <main className="main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
