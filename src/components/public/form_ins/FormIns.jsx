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
    const [user,setUser]=useState({nomUtilisateur:"",motDePasse:"",nom:"",prenom:"",adresseMail:"",genre:""})
    const [psw,setpsw]=useState("")
    const [pswd,setpswd]=useState("")
    const onchange=(e)=>setUser({...user,[e.target.name]:e.target.value})
    const checkPassword=e=>{
        if (e.target.id==="rmdp" ) setpsw(e.target.value)
        if (e.target.id==="mdp" ) setpswd(e.target.value)
        if (psw===user.motDePasse) onchange(e)        
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        accountService.addUser(user)
        .then(res=>{
            accountService.saveToken(res.data.token)
            accountService.setRole(res.data.role)
            switch (res.data.role) {
                case 'EMPLOYE': navigate('/employe'); break;
                case 'EMPLOYEUR': navigate('/employeur/profile/' + user.nomUtilisateur); break;
                case 'MODERATEUR': navigate('/moderateur'); break;
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onsubmit}>
            <h2>{h2}</h2>
            <div className={"ins__group "}>
                <Input type="text" id="nom" name="nom" value={user.nom} onChange={onchange}>{nom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="prenom" name="prenom" value={user.prenom} onChange={onchange}>{prenom}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="text" id="username" name="nomUtilisateur" value={user.nomUtilisateur} onChange={onchange}>{username}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="email" id="email" name="adresseMail" value={user.adresseMail} onChange={onchange}>{email}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='mdp' name="motDePasse" value={pswd} onChange={checkPassword}>{password}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='rmdp' name="motDePasse" value={psw} onChange={checkPassword}>{rpassword}</Input>
            </div>
            <div className={"ins__group "}>
                <Input type="radio" id='male'name="genre" value="male"onChange={onchange} >{male}</Input>
                <Input type="radio" id='femme'name="genre" value='femme'onChange={onchange}>{femme}</Input>
            </div>
            <div className="ins__next">
                <Buttun id="sing">{next}</Buttun>
            </div>
        </form>
    )
}
