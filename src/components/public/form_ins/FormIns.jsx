import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import { accountService } from "@service";
import {LangueContext} from "@context/langue";
import { useNavigate } from 'react-router-dom';
import { Buttun, Input } from '@p-components/index';


export default function FormIns() {
    const {lang} = useContext(LangueContext);
    const {h2,nom,prenom,username,email,password,rpassword,gender,next}=lang.auth.signin;
    const {male,femme}=gender;
    const [user,setUser]=useState({motDePasse:"",nom:"",prenom:"",adresseMail:"",genre:"",role:"EMPLOYE"})
    const [psw,setpsw]=useState("")
    const [pswd,setpswd]=useState("")

    // const [animation,setAnimation]=useAnimation('animation');

    const navigate=useNavigate()
    const onchange=(e)=>setUser({...user,[e.target.name]:e.target.value})
    const checkPassword=e=>{
        if (e.target.id==="rmdp" ) setpsw(e.target.value)
        if (e.target.id==="mdp" ) setpswd(e.target.value)
        if (psw===pswd) onchange(e)        
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        accountService.addUser(user)
        .then(res=>{
            accountService.saveToken(res.data.token)
            switch (user.role) {
                case 'EMPLOYE': navigate('/employe/profile/' + accountService.getUserName()); break;
                case 'EMPLOYEUR': navigate('/employeur/profile/' + accountService.getUserName()); break;
                case 'MODERATEUR': navigate('/moderateur'); break;
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <form className='form' onSubmit={onsubmit}>
            <h2>{h2}</h2>
            <div className={"ins__group__nom__prenom "}>
                <Input type="text" placeholder="nom" id="nom" name="nom" value={user.nom}   onChange={onchange}/>
                <Input type="text"  placeholder='prenom' id="prenom" name="prenom" value={user.prenom} onChange={onchange}/>
            </div>
            <div className={"ins__group "}>
                <Input type="email" id="email" placeholder='email@exemple.com' name="adresseMail" value={user.adresseMail} onChange={onchange}/>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='mdp' name="motDePasse" placeholder="mot de passe" value={pswd} onChange={checkPassword}/>
            </div>
            <div className={"ins__group "}>
                <Input type="password" id='rmdp' name="motDePasse" placeholder="confirmer le mot de passe" value={psw} onChange={checkPassword}/>
            </div>
            <div className={"ins__group__genre"}>
                <Input type="radio" id='male'name="genre" value="HOMME"onChange={onchange} >{male}</Input>
                <Input type="radio" id='femme'name="genre" value='FEMME'onChange={onchange}>{femme}</Input>
            </div>
            <div className="ins__next">
                <Buttun id="sing">{next}</Buttun>
            </div>
        </form>
    )
}
