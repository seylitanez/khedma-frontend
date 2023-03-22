import React from 'react'
import "./profile.scss"
import { useState, useEffect, useRef } from 'react'
import { accountService } from "@service";

export default function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        accountService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{user.nomUtilisateur}</p>
        </div>
    )
}