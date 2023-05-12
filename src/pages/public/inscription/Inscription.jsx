import React from 'react'
import "./inscription.scss"
import {Logo,illustration_ayth} from '@image'
// import {FormIns} from '@p-components/index';

export default function Inscription() {
    return (
        <div className='inscri'>
            <div className="auth__container">
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="auth__cont">
                    <div className="illustration">
                        <img src={illustration_ayth}/>
                    </div>
                    {/* <FormIns/> */}
                </div>
            </div>
        </div>
    )
}
