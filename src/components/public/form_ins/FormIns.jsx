import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import {LangueContext} from "@context/langue";
import {Input,Buttun} from '@p-components';

export default function FormIns() {
    const {lang} = useContext(LangueContext);
    const {h2,nom,prenom,username,email,password,rpassword,gender,next}=lang.auth.signin;
    const {male,femme}=gender;
    return (
        <form>
            <h2>{h2}</h2>
            <div className={"ins__group "}>
                <Input type="text" id="nom">{nom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="prenom">{prenom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="username">{username}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="email" id="email">{email}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='mdp'>{password}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='rmdp'>{rpassword}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="checkbox" id='male'>{male}</Input>
                <Input type="checkbox" id='femme'>{femme}</Input>
            </div>
            <div className="ins__next">
                <Buttun id="sing">{next}</Buttun>
            </div>
        </form>
    )
}
