import React,{ useContext,useEffect,useRef,useState } from 'react'
import {LangueContext} from "@context/langue";
import { MdAccountCircle } from "react-icons/md";
import "./login.scss"
import { useNavigate,Link} from 'react-router-dom';
import { accountService } from '@service/Account.service';
import { Buttun, Fenetre, Input } from '@p-components/index';
import GLogin from './GLogin';
import { PopupContext } from '@context/PopupContext';
import { gapi } from 'gapi-script';
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
export default function Login({setLoginOvert,setInscripOuvert}) {
    const {lang} = useContext(LangueContext);
    const {h2,email,password}=lang.auth.login;
    const {connexion,inscription}=lang.header.auth;
    const [anim,setActive]=useAnim('');
    const [anims,setActives]=useAnim('');

    const [fenetreErreur, setFenetreErreur] = useState({ouvert:false,message:""})

    function switchFenetre(params) {
        setLoginOvert(false);
        setInscripOuvert(true)
    }

    function handleClick(e) {
        setFenetreErreur(fen => fen = {ouvert:false,message:""});
    }
    //conection
    const [user, setUser] = useState({ adresseMail: "", motDePasse :""})
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const log=useRef(false);
    useEffect(()=>{
        if (!log.current) {
            function start(){
            gapi.client.init({
                clientId:"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com",
                scope:""
            })
            }
            gapi.load('client:auth2',start);
        }
        return () => {
            log.current = true;
        }
    })
    const navigate = useNavigate()
    const sub = (e) => {
        e.preventDefault()
        accountService.login(user)
            .then(res => {
                try {
                    accountService.saveToken(res.data.token)
                    switch (accountService.getRole()) {
                        case 'EMPLOYE': navigate('/employe/profile/'+accountService.getUserName());break;
                        case 'EMPLOYEUR':console.log('connct'); navigate('/employeur/profile/'+accountService.getUserName());break;
                        case 'MODERATEUR': navigate('/moderateur/dashboard');break;
                    }
                } catch (error) {
                    setFenetreErreur(fen => fen = {ouvert:true,message:error});
                }
            })
    }

    function onSuccess(e){
        // const SECONDES=120
        
        const googleUser=e.profileObj;
        const token=accountService.genrateToken(googleUser)//le token est constitue de l'objetgoogle(email,username,id,img,...)
        accountService.loginGoogle({token:token})
            .then(res=>{
                accountService.saveToken(res.data.token)
                switch (accountService.getRole()) {
                    case 'EMPLOYE': navigate('/employe/profile/'+accountService.getUserName());break;
                    case 'EMPLOYEUR':console.log('connct'); navigate('/employeur/profile/'+accountService.getUserName());break;
                    case 'MODERATEUR':navigate('/moderateur');break;
                }
            }).catch(err=>{
                console.log(err);
            }
            )
        
    }
    function onFailure(e){
        console.log("Veuillez créer un compte d'abord.");
    }

    return (
        <form className="form__login" onSubmit={sub}>
            <Fenetre ouvert={fenetreErreur.ouvert} handleClick={handleClick} ><h1>information incorrectes</h1></Fenetre>
            {/* <h2>{h2}</h2> */}
            <MdAccountCircle size={100} className='icone_account'/>
            <div className={"login__group "+anim}>
                <Input type="text" id="email" name='adresseMail' value={user.adresseMail} onChange={onChange} onInput={e => setActive(e)} requirede='required'>{email}</Input>
            </div>
            <div className={"login__group "+anims}>
                <Input type="password" id='mdp' name='motDePasse' value={user.motDePasse} onChange={onChange} onInput={e => setActives(e)} requirede='required'>{password}</Input>
            </div>
            <GLogin titre={"se connecter avec google"} onSuccess={onSuccess} onFailure={onFailure}/>
            <Link className='nv__compte' onClick={()=>{ switchFenetre()}}>nouveau compte?</Link>
            <div className="login__mdp">
                <Buttun type={"submit"} id="log">{connexion}</Buttun>
                {/* <Buttun id="sing">{inscription}</Buttun> */}
            </div> 
        </form>
    )
}
