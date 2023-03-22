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
                .then(res => setUser(res.data))
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <div>
            <p>{user.nomUtilisateur}</p>
        </div>
    )
}
