import React,{ useContext,useState } from 'react'
import {LangueContext} from "@context/langue";
import { MdAccountCircle } from "react-icons/md";
import "./login.scss"
import { useNavigate,Link} from 'react-router-dom';
import { accountService } from '@service/Account.service';
import { Buttun, Input } from '@p-components/index';
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
    //conection
    const [user, setUser] = useState({ adresseMail: "", motDePasse :""})
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const sub = (e) => {
        e.preventDefault()
        accountService.login(user)
            .then(res => {
                accountService.saveToken(res.data.token)
                switch (accountService.getRole()) {
                    case 'EMPLOYE': navigate('/employe/profile/'+accountService.getUserName());break;
                    case 'EMPLOYEUR': navigate('/employeur/profile/'+accountService.getUserName());break;
                    case 'MODERATEUR':navigate('/moderateur');break;
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <form className="form__login" onSubmit={sub}>
            {/* <h2>{h2}</h2> */}
            <MdAccountCircle size={100} className='icone_account'/>
            <div className={"login__group "+anim}>
                <Input type="text" id="email" name='adresseMail' value={user.adresseMail} onChange={onChange} onInput={e => setActive(e)} requirede='required'>{email}</Input>
            </div>
            <div className={"login__group "+anims}>
                <Input type="password" id='mdp' name='motDePasse' value={user.motDePasse} onChange={onChange} onInput={e => setActives(e)} requirede='required'>{password}</Input>
            </div>
            <Link className='nv__compte'>nouveau compte?</Link>
            <div className="login__mdp">
                <Buttun id="log" onClick={sub}>{connexion}</Buttun>
                {/* <Buttun id="sing">{inscription}</Buttun> */}
            </div> 
        </form>
    )
}
