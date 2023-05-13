import React from 'react'
import { userService } from "@service/index";
import { useEffect, useState } from 'react';
import { Postulon } from '@pr-components/index';

export default function Postulats() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {(user.postulants != null) && user.postulants.map((annonce, key) => <Postulon Postulon={annonce} key={key} />)}
        </div>
    )
}