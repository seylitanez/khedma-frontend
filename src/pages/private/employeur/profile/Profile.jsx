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

export default function Profile() {
    const param = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        userService
            .getUser()
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, []);
    const deconnection = () => {
        accountService.logout();
    }
    return (
        <div>
            <div className="profile_employeur">
                <div className="sidebar">
                    <div className="sidebar__item">
                        <BsFillPersonFill size={20} className="prf" />
                        <Link to={param.nomUtilisateur}>Mon profile</Link>
                    </div>
                    <div className="sidebar__item">
                        <BsCalendarFill size={20} className="prf" />
                        <Link to={param.nomUtilisateur + "/listAnnonce"}>
                            Liste des annonces
                        </Link>
                    </div>
                    <div className="sidebar__item">
                        <BsCalendarPlusFill size={20} className="prf"/>
                        <Link to={param.nomUtilisateur + "/ajouterAnnonce"}>
                            Ajouter une annonce
                        </Link>
                    </div>
                    <div className="sidebar__item">
                        <BsFillPersonLinesFill size={20} className="prf"/>
                        <Link to={param.nomUtilisateur + "/listPostulent"}>
                            List des postulants
                        </Link>
                    </div>
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
