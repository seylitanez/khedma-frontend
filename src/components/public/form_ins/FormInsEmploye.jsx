import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import { accountService } from "@service";
import {LangueContext} from "@context/langue";
import { useNavigate } from 'react-router-dom';
import {MdOutlineFileUpload} from 'react-icons/md'
import { Buttun, Input } from '@p-components/index';
import GLogin from '@p-components/login/GLogin';
import { PopupContext } from '@context/PopupContext';
import { FormulaireContext } from '@context/FormulaireContext';
import { Validator } from '@service/Validator.service';



export default function FormInsEmploye({type,etapeEmpploye,etapeEmpployeur,setEtapeEmpployeur}) {
    const {formulaire,setFormulaire,etapeInscription,setEtapeInscription}=useContext(FormulaireContext)
    const [user,setUser]=useState(formulaire)
    const [psw,setpsw]=useState("")
    const [pswd,setpswd]=useState("")
    const {setShowPopupInscrption}=useContext(PopupContext)
    

    const navigate=useNavigate()
    let formData =new FormData();

    function filtreFichier(fich,nomFich){
        const fichier    = fich
        const nomFichier = nomFich

        console.log(fichier)
        console.log(nomFichier)

        
        if (nomFichier.includes('.')) {
            const extension = nomFichier.split(".").at(-1);
            console.log(extension);

            if(extension == "pdf" || extension == "png" || extension == "jpeg" || extension == "jpg")
            {
                formData.set("file", fichier, "cv." + extension)
                accountService.addCv(formData);
                console.log(e);
            }
            else
            {
                console.log("Format du fichier non supporté");
            }   
            }
        else
        {
            console.log("Fichier sans extension");
        }

        
    }
    const onchangeFile=(e)=>{
        //recuperation du fichier et de son nom
        const fichier=e.target.files[0]
        const nomFichier=fichier.name

        filtreFichier(fichier,nomFichier)//filtrage du fichier
    }

    const onchange=(e)=>{
        if(["wilaya","commune"].includes(e.target.name)){
            user.adresse[e.target.name]=e.target.value
            setUser({...user,adresse:{...user.adresse, [e.target.name]: e.target.value}})
        }
        setUser({...user,[e.target.name]:e.target.value})
    }
    const checkPassword=e=>{
        if (e.target.id==="rmdp" ) setpsw(e.target.value)
        if (e.target.id==="mdp" ) setpswd(e.target.value)
        if (psw===pswd) onchange(e)        
    }


    const creationCompte=()=>{

        
        accountService.addUser(user)
        .then(res=>{
            // accountService.saveToken(res.data.token)
            // switch (user.role) {
            //     case 'EMPLOYE': navigate('/employe/profile/' + accountService.getUserName()); break;
            //     case 'EMPLOYEUR': navigate('/employeur/profile/' + accountService.getUserName()); break;
            //     case 'MODERATEUR': navigate('/moderateur'); break;
            // }
        })
        .catch(err=>console.log(err))

        setEtapeInscription(etapeInscription+1)
    }

    const onsubmit=(e)=>{
        e.preventDefault();
        creationCompte()
    }

    function onSuccess(e){
        console.log(e);

        user.adresseMail=e.profileObj.email
        user.nom=e.profileObj.familyName
        user.prenom=e.profileObj.givenName
        
        setUser({...user})
        console.log(user);
        setEtapeInscription(10)

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

    


    
    
    switch (etapeInscription) {

        //information personels
        case 1:

        return(
            <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>{"Information Personels"}</h2>
                <div className={"ins__group__nom__prenom "}>
                    <Input type="text" placeholder="nom" id="nom" name="nom" value={user.nom}   onChange={onchange}/>
                    <Input type="text"  placeholder='prenom' id="prenom" name="prenom" value={user.prenom} onChange={onchange}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="email" id="email" placeholder='email@exemple.com' name="adresseMail" value={user.adresseMail} onChange={onchange}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="tel" id="tel" placeholder='numero de tel' name="tel" value={user.tel} onChange={onchange}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="commune" id="commune" placeholder='commune' name="commune" value={user.adresse.commune} onChange={onchange}/>
                    <Input type="wilaya" id="wilaya" placeholder='wilaya' name="wilaya" value={user.adresse.wilaya} onChange={onchange}/>
                </div>
                <div className={"ins__group__genre"}>
                    <Input type="radio" id='male'name="genre" value="HOMME"onChange={onchange} >{"Homme"}</Input>
                    <Input type="radio" id='femme'name="genre" value='FEMME'onChange={onchange}>{"Femme"}</Input>
                </div>
                    <GLogin titre={"s'inscrire avec google"} onSuccess={onSuccess}/>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{
                            if(Validator.etape1IsValid(user)){
                                setEtapeInscription(2)
                            }
                            }}>{"suivant"}</Buttun>
                    </div>
                </div>
        )
        break;
        //parametres du compte
        case 2:

        return(
            <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>parametres du compte</h2>
                <div className={"ins__group "}>
                    <Input type="password" id='mdp' name="motDePasse" placeholder="mot de passe" value={pswd} onChange={checkPassword}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="password" id='rmdp' name="motDePasse" placeholder="confirmer le mot de passe" value={psw} onChange={checkPassword}/>
                </div>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{creationCompte()}}>{"suivant"}</Buttun>
                        <Buttun id="precedent" onClick={()=>{setEtapeInscription(1)}}>precedent</Buttun>
                    </div>                
                </div>
        )
        case 3:
        return(
        <div>
            <div className='ins__group__suivant__precedent'>
            <h1>votre compte a ete creé avec success</h1>
            <Buttun id="sing" onClick={()=>{setEtapeInscription(4)}}>suivant</Buttun>
            </div>
        </div>
        )
        //cv
        case 4:
            return (
                <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>deposez votre cv en piece jointe</h2>
                <div className={"ins__group__cv"}>
                    <Input type="file" placeholder="cv" onChange={onchangeFile} icone={MdOutlineFileUpload}/>
                </div>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{setEtapeInscription(e=>e=e+1);}}>{"suivant"}</Buttun>
                    </div>
            </div>
        )
        break;

        
        case 5:

        return(
            <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>nous avons envoye un mail de confirmation</h2>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{setEtapeInscription(etapeEmpploye+1)}}>confirmer</Buttun>
                    </div>

                </div>
        )



        //authentification google elle ne fait pas partie des etapes precedentes

        case 10:
            return( <div>
    
                <form className='form' onSubmit={onsubmitGoogle}>
                    <h2>{"Information Personels"}</h2>
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
                            <Buttun type="submit" id="sing" onClick={()=>{}}>{"confirmer"}</Buttun>
                        </div>
                    </form>
                    </div>)

    }



}
