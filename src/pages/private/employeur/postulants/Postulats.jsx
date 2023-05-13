import React from 'react'
import { userService } from "@service/index";
import { useEffect, useState } from 'react';
import { Postulon } from '@pr-components/index';
import { Annonce } from '@p-components/index';

export default function Postulats() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {(user.annonces!=null)&& user.annonces.map((annonce, key) =>(
                <>
                <p key={key}>anonce</p>
                 {(annonce.postulants != null) && annonce.postulants.map((annonce, key) => <Postulon Postulon={annonce} key={key} />)}<br />
                </>
            ))}
        </div>
    )
}