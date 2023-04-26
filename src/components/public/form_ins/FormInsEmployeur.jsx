import { useNavigate } from '@/../node_modules/react-router-dom/dist/index';
import { LangueContext } from '@context/langue';
import { Buttun, Input } from '@p-components/index';
import { accountService } from '@service/Account.service';
import React, { useContext, useState } from 'react'

export default function FormInsEmployeur({setEtape,etape,type}) {
  const [user,setUser]=useState({motDePasse:"",nom:"",prenom:"",adresseMail:"",genre:"",role:"EMPLOYEUR",numeroTel:"",region:"",entreprise:""})

  const {lang} = useContext(LangueContext);
  const {h2,nom,prenom,username,email,password,rpassword,gender,next}=lang.auth.signin;
  const {male,femme}=gender;
  const [psw,setpsw]=useState("")
  const [pswd,setpswd]=useState("")

  // const [animation,setAnimation]=useAnimation('animation');

  
  const navigate=useNavigate()
  let formData =new FormData();

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
                    <Buttun id="sing" onClick={()=>{set(e=>e=e+1); console.log(etape);}}>{next}</Buttun>
                    <Buttun id="precedent" onClick={()=>{etape>1&&setEtape(e=>e=e-1);console.log(etape);}}>precedent</Buttun>
                </div>
            </div>
        </div>
      )      
      break;

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
  
    default:
      break;
  }

  
}
