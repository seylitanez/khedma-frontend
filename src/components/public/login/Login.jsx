import React from 'react'
import { useContext,useState } from 'react'
import {LangueContext} from "@context/langue";
import "./login.scss"
import {Input,Buttun} from '@p-components';

function useAnim(className) {
    const [anim,setAnim]=useState(className);
    const setActive=(e)=>{
        if (e.target.value!="") {
            setAnim('anim');
        }else if (e.target.value =="") {
            setAnim('');
        }
    }
    return [anim,setActive]
}
export default function Login() {
    const {lang} = useContext(LangueContext);
    const {h2,email,password}=lang.auth.login;
    const {connexion,inscription}=lang.header.auth;
    const [anim,setActive]=useAnim('');
    const [anims,setActives]=useAnim('');
    return (
        <form className="form__login">
            <h2>{h2}</h2>
            <div className={"login__group "+anim}>
                <Input type="text" id="email" onInput={e=>setActive(e)}>{email}</Input>
            </div>
            <div className={"login__group "+anims}>
                <Input type="password" id='mdp' onInput={e=>setActives(e)}>{password}</Input>
            </div>
            <div className="login__mdp">
                <Buttun id="log">{connexion}</Buttun>
                <Buttun id="sing">{inscription}</Buttun>
            </div>
        </form>
    )
}
