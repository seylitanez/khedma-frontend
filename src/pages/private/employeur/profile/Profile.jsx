import React from 'react'
import "./profile.scss"
import { useState, useEffect, useRef } from 'react'
import { userService } from "@service/index";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Profile() {
    const param=useParams()
    const [user, setUser] = useState({})
     useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>{user.nomUtilisateur}</h1>
            <h2>{user.adresseMail}</h2>
            <h3>{user.genre}</h3>
            <h1>{user.tel}</h1>
            <Link to='ajouterAnnonce'>AjouterAnnonce</Link><br/>
            <Link to='listAnnonce'>listAnnonce</Link>
        </div>
    )
}