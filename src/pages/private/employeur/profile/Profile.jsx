import React from 'react'
import "./profile.scss"
import { useState, useEffect, useRef } from 'react'
import { accountService } from "@service";
import {Annonce} from "@p-components"
import { userService } from "@service";

export default function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        // accountService.getUser()
        //     .then(res => {setUser(res.data)
        //         console.log(res.data.annonces)
        //         })
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
            {/* {user.annonces.map((annonce,key)=><Annonce annonce={annonce}/>)} */}
        </div>
    )
}