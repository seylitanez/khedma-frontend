import React from 'react'
import "./formins.scss";
import { useContext,useState } from 'react';
import { accountService } from "@service";
import {LangueContext} from "@context/langue";
import {Input,Buttun} from '@p-components';
import { useNavigate } from 'react-router-dom';
import {MdOutlineFileUpload} from 'react-icons/md'



export default function FormIns({setEtape,etape}) {
    const {lang} = useContext(LangueContext);
    const {h2,nom,prenom,username,email,password,rpassword,gender,next}=lang.auth.signin;
    const {male,femme}=gender;
    const [user,setUser]=useState({motDePasse:"",nom:"",prenom:"",adresseMail:"",genre:"",role:"EMPLOYE",numeroTel:"",region:""})
    const [psw,setpsw]=useState("")
    const [pswd,setpswd]=useState("")

    // const [animation,setAnimation]=useAnimation('animation');

    
    const navigate=useNavigate()
    let formData =new FormData();
    const onchangeFile=(e)=>{
        const extension=e.target.files[0].name.split(".")[1];
        if(extension.includes("pdf")||extension.includes("png")||extension.includes("jpg")){
        formData.set("file",e.target.files[0],user.adresseMail+e.target.files[0].name.split(".")[1])
        accountService.addCv(formData);
        console.log(e);
        }else{
            console.log("format non accepté");
        }
    }

    const onchange=(e)=>{setUser({...user,[e.target.name]:e.target.value})}
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


    switch (etape) {

        //information personels
        case 1:

        return(
            <div>
    
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
                    <Input type="tel" id="tel" placeholder='numero de tel' name="numeroTel" value={user.numeroTel} onChange={onchange}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="region" id="region" placeholder='Region' name="region" value={user.region} onChange={onchange}/>
                </div>
                <div className={"ins__group__genre"}>
                    <Input type="radio" id='male'name="genre" value="HOMME"onChange={onchange} >{male}</Input>
                    <Input type="radio" id='femme'name="genre" value='FEMME'onChange={onchange}>{femme}</Input>
                </div>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{setEtape(e=>e=e+1); console.log(etape);}}>{next}</Buttun>
                        <Buttun id="precedent" onClick={()=>{etape>1&&setEtape(e=>e=e-1)}}>precedent</Buttun>
                    </div>
                </div>
        )
        //parametres du compte
        case 2:

        return(
            <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>parametres du compte</h2>
                <div className={"ins__group "}>
                    <Input type="email" id="email" placeholder='email@exemple.com' name="adresseMail" value={user.adresseMail} onChange={onchange}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="password" id='mdp' name="motDePasse" placeholder="mot de passe" value={pswd} onChange={checkPassword}/>
                </div>
                <div className={"ins__group "}>
                    <Input type="password" id='rmdp' name="motDePasse" placeholder="confirmer le mot de passe" value={psw} onChange={checkPassword}/>
                </div>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{setEtape(e=>e=e+1); console.log(etape);}}>{next}</Buttun>
                        <Buttun id="precedent" onClick={()=>{setEtape(e=>e=e-1)}}>precedent</Buttun>
                    </div>                
                </div>
        )
        //cv
        case 3:
            return (
                <div>
    
            <form className='form' onSubmit={onsubmit}>
                <h2>deposez votre cv en piece jointe</h2>
                <div className={"ins__group__cv"}>
                    <Input type="file" placeholder="cv" onChange={onchangeFile} icone={MdOutlineFileUpload}/>
                </div>
            </form>
                    <div className='ins__group__suivant__precedent'>
                        <Buttun id="sing" onClick={()=>{setEtape(e=>e=e+1); console.log(etape);}}>{next}</Buttun>
                        <Buttun id="precedent" onClick={()=>{setEtape(e=>e=e-1)}}>precedent</Buttun>
                    </div>
            </div>
        )
        break;

        
        case 4:

        return(
            <div>
    
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
            </form>
                    <Buttun id="sing" onClick={()=>{setEtape(e=>e=e+1); console.log(etape);}}>{next}</Buttun>
                    <Buttun id="precedent" onClick={()=>{setEtape(e=>e=e-1)}}>precedent</Buttun>
                </div>
        )

    }

}
