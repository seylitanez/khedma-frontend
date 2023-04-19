import React from 'react'
import "./profile.scss";
import { useState, useEffect, useRef } from 'react'
import { Header } from '@p-components/index';
import { accountService } from '@service/Account.service';
import { CardCV, CardProfile } from '@pr-components/index';

export default function Profile() {
    const [user, setUser] = useState({})
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            accountService.getUser()
                .then(res => { setUser(res.data); console.log(res.data);})
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <div className='profile_employe'>
            <div className="nav">
                <Header/>
            </div>
            <div className="sidebar">

            </div>
            <div className="main">
                <h1>Profile</h1>
                <CardProfile user={user}/>
                <CardCV/>
            </div>
        </div>
    )
}
