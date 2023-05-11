import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import { accountService } from "@service";
import { useNavigate } from 'react-router-dom';
import { Buttun, Input } from '@p-components/index';
import { PopupContext } from '@context/PopupContext';
import GLogin from '@p-components/login/GLogin';
import { FormulaireContext } from '@context/FormulaireContext';


export default function FormInsEmployeur() {
    const {formulaire,setFormulaire,etapeInscription,setEtapeInscription}=useContext(FormulaireContext)
    const [user,setUser]=useState(formulaire)
    const [psw,setpsw]=useState("")
    const [passwordConfirmation,setPasswordConfirmation]=useState("")

    const navigate=useNavigate()
    

    const onchange=(e)=>{
        if(["wilaya","commune"].includes(e.target.name)){
            user.adresse[e.target.name]=e.target.value
            setUser({...user,adresse:{...user.adresse, [e.target.name]: e.target.value}})
        }
        setUser({...user,[e.target.name]:e.target.value})
    }
    const creationCompte=()=>{

        setEtapeInscription(etapeInscription+1)

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

    const onsubmit=(e)=>{
        e.preventDefault();
        creationCompte()
    }

    function onsubmitGoogle(e){
        e.preventDefault();
        accountService.addUserGoogle(user).then(res=>{
            accountService.saveToken(res.data.token)
            switch (user.role) {
                case 'EMPLOYE': navigate('/employe/profile/' + accountService.getUserName()); break;
                case 'EMPLOYEUR': navigate('/employeur/profile/' + accountService.getUserName()); break;
                case 'MODERATEUR': navigate('/moderateur'); break;
            }
        })
        .catch(err=>console.log(err))

        setEtapeInscription(etapeInscription+1)
    }



    function onSuccess(e){
        console.log(e);

        user.adresseMail=e.profileObj.email
        user.nom=e.profileObj.familyName
        user.prenom=e.profileObj.givenName
        
        setUser({...user})
        setEtapeInscription(2)
        console.log(user);

    }


    
    switch (etapeInscription) {
        
        case 1:
            return (
                <div>
                     <div>
                
                  <form className='form' onSubmit={onsubmit}>
                    <h2>{"Informations de l'entreprise"}</h2>
                    <div className={"ins__group__nom__prenom "}>
                        <Input type="text" placeholder="nom" id="nom" name="nom" value={user.nom}   onChange={onchange}/>
                        <Input type="text"  placeholder='prenom' id="prenom" name="prenom" value={user.prenom} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="email" id="email" placeholder='email@exemple.com' name="adresseMail" value={user.adresseMail} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="entreprise" id="entreprise" placeholder='entreprise' name="entreprise" value={user.entreprise} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="tel" id="tel" placeholder='numero de tel' name="numeroTel" value={user.numeroTel} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="commune" id="commune" placeholder='commune' name="commune" value={user.adresse.commune} onChange={onchange}/>
                        <Input type="wilaya" id="wilaya" placeholder='wilaya' name="wilaya" value={user.adresse.wilaya} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                    <Input type="password" id='mdp' name="motDePasse" placeholder="mot de passe" value={user.motDePasse} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="password" id='rmdp' name="motDePasse" placeholder="confirmer le mot de passe" value={passwordConfirmation} onChange={(e)=>{setPasswordConfirmation(e.target.value)}}/>
                    </div>
                    <GLogin titre={"s'inscrire avec google"} onSuccess={onSuccess}/>

                    <div className={"ins__group__genre"}>
                        <Input type="radio" id='male'name="genre" value="HOMME"onChange={onchange} >{"Homme"}</Input>
                        <Input type="radio" id='femme'name="genre" value='FEMME'onChange={onchange}>{"Femme"}</Input>
                    </div>
                        <div className='ins__group__suivant__precedent'>
                            <Buttun id="sing" type="submit">{"Enregistrer"}</Buttun>
                        </div>
                </form>
                    </div>
                </div>
              ) 
                
              
            break;
            case 2:
            return (
                <div>
                     <div>
                
                  <form className='form' onSubmit={onsubmitGoogle}>
                    <h2>{"Informations de l'entreprise"}</h2>
                    <div className={"ins__group "}>
                        <Input type="entreprise" id="entreprise" placeholder='entreprise' name="entreprise" value={user.entreprise} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="tel" id="tel" placeholder='numero de tel' name="numeroTel" value={user.numeroTel} onChange={onchange}/>
                    </div>
                    <div className={"ins__group "}>
                        <Input type="commune" id="commune" placeholder='commune' name="commune" value={user.adresse.commune} onChange={onchange}/>
                        <Input type="wilaya" id="wilaya" placeholder='wilaya' name="wilaya" value={user.adresse.wilaya} onChange={onchange}/>
                    </div>
                    <div className={"ins__group__genre"}>
                        <Input type="radio" id='male'name="genre" value="HOMME"onChange={onchange} >{"Homme"}</Input>
                        <Input type="radio" id='femme'name="genre" value='FEMME'onChange={onchange}>{"Femme"}</Input>
                    </div>
                        <div className='ins__group__suivant__precedent'>
                            <Buttun id="sing" type="submit">{"Enregistrer"}</Buttun>
                        </div>
                </form>
                    </div>
                </div>
              ) 
                
    }


    

}
