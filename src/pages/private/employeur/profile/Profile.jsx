import React from 'react'
import "./profile.scss"
import { useState, useEffect, useRef } from 'react'
import { userService } from "@service";

export default function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{user.nomUtilisateur}</p>
        </div>
    )
}