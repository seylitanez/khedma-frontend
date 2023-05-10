import React from "react";
import "./profile.scss";
import { useState, useEffect, useRef } from "react";
import { userService } from "@service/index";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import { BsList, BsListUl } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

export default function Profile() {
    const param = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        userService
            .getUser()
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <div className="profile_employeur">
                <div className="sidebar">
                    <div className="sidebar__item">
                        <CgProfile size={20} className="prf" />
                        <Link to={param.nomUtilisateur}>Profile</Link>
                    </div>
                    <div className="sidebar__item">
                        <BsListUl size={20} className="prf" />
                        <Link to={param.nomUtilisateur + "/listAnnonce"}>
                            listAnnonce
                        </Link>
                    </div>
                    <div className="sidebar__item">
                        <GrAdd size={20} className="prf" />
                        <Link to={param.nomUtilisateur + "/ajouterAnnonce"}>
                            AjouterAnnonce
                        </Link>
                    </div>
                    <div className="sidebar__item">
                        <BsList size={20} className="prf" />
                        <Link to={param.nomUtilisateur + "/listPostulent"}>
                            List Postulent
                        </Link>
                    </div>
                </div>
                <main className="main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
