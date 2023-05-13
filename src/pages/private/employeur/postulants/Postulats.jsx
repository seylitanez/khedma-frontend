import React from 'react'
import { Annonce } from "@p-components/index"
import { userService } from "@service/index";
import { useEffect, useState } from 'react';

export default function Postulats() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {(user.postulants != null) && user.postulants.map((annonce, key) => <Annonce annonce={annonce} key={key} />)}
        </div>
    )
}