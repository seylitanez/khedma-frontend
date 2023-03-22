import React from 'react'
import "./profile.scss";
import { useState, useEffect, useRef } from 'react'
import { accountService } from "@service";

export default function Profile() {
    const [user, setUser] = useState({})
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            accountService.getUser()
                .then(res => {setUser(res.data)
                console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <div>
            <h1>{user.nomUtilisateur}</h1>
            <h2>{user.adresseMail}</h2>
            <h3>{user.genre}</h3>
            <h1>{user.tel}</h1>
            {/* <h1>{user.adresse.wilaya}</h1> */}
            {/* <h1>{[user.adresse.commune]}</h1> */}
        </div>
    )
}
