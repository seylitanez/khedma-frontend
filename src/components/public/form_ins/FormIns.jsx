import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import { accountService } from "@service";
import {LangueContext} from "@context/langue";
import {Input,Buttun} from '@p-components';

export default function FormIns() {
    const {lang} = useContext(LangueContext);
    const {h2,nom,prenom,username,email,password,rpassword,gender,next}=lang.auth.signin;
    const {male,femme}=gender;
    const [user,setUser]=useState({nomUtilisateur:"",motDePasse:"",nom:"",prenom:"",email:"",sexe:""})
    const onsubmit=(e)=>{
        e.preventDefault();
        accountService.addUser(user)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onsubmit}>
            <h2>{h2}</h2>
            <div className={"ins__group "}>
                <Input type="text" id="nom" value={{}}>{nom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="prenom" value={{}}>{prenom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="username" value={{}}>{username}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="email" id="email" value={{}}>{email}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='mdp' value={{}}>{password}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='rmdp' value={{}}>{rpassword}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="checkbox" id='male' value={{}}>{male}</Input>
                <Input type="checkbox" id='femme' value={{}}>{femme}</Input>
            </div>
            <div className="ins__next">
                <Buttun id="sing">{next}</Buttun>
            </div>
        </form>
    )
}
