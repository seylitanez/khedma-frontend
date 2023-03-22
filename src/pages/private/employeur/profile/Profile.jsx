import React from 'react'
import "./profile.scss"
import { useState, useEffect, useRef } from 'react'
<<<<<<< HEAD
import { accountService } from "@service";
import {Annonce} from "@p-components"
=======
import { userService } from "@service";
>>>>>>> 401d24186c9cee81b781267b75b1dd323f582468

export default function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
<<<<<<< HEAD
        accountService.getUser()
            .then(res => {setUser(res.data)
                console.log(res.data.annonces)
                })
=======
        userService.getUser()
            .then(res => setUser(res.data))
>>>>>>> 401d24186c9cee81b781267b75b1dd323f582468
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>{user.nomUtilisateur}</h1>
            <h2>{user.adresseMail}</h2>
            <h3>{user.genre}</h3>
            <h1>{user.tel}</h1>
            {/* {user.annonces.map((annonce,key)=><Annonce annonce={annonce}/>)} */}

            
        </div>
    )
}