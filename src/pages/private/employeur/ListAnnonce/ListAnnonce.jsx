import React from 'react'
import "./listAnnonce.scss"
import { Annonce } from "@p-components/index"
import { userService } from "@service/index";
import { useEffect,useState } from 'react';

export default function ListAnnonce() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {(user.annonces != null) && user.annonces.map((annonce, key) => <Annonce annonce={annonce} key={key} />)}
        </div>
    )
}