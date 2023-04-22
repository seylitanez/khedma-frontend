import React from 'react'
import {Logo,illustration_ayth} from '@image'
import "./auth.scss";
import {Login} from '@p-components/index';

export default function Auth() {
    return (
        <div className='auth'>
            <div className="auth__container">
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="auth__cont">
                    <Login/>
                    <div className="illustration">
                        <img src={illustration_ayth}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
