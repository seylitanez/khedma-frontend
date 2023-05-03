import React from 'react'
import "./profile.scss";
import { MdFavorite } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect, useRef} from 'react'
import { Header } from '@p-components/index';
import { accountService } from '@service/Account.service';
import { Outlet ,Link,useParams } from 'react-router-dom';
import { BsCardChecklist } from 'react-icons/bs';

export default function Profile() {
    const param=useParams();
    const [user, setUser] = useState({})
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            accountService.getUser()
                .then(res => setUser(res.data))
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <div className='profile_employe'>
            <div className="nav">
                <Header/>
            </div>
            <div className="sidebar">
                <div className="sidebar__item">
                    <CgProfile size={20} className='prf'/>    
                    <Link to={param.nomUtilisateur} >Profile</Link>
                </div>
                <div className="sidebar__item">
                    <MdFavorite size={20} className='fav'/>    
                    <Link to={param.nomUtilisateur+'/favorie'}>Favoris</Link>
                </div>
                <div className="sidebar__item">
                    <BsCardChecklist size={20} className='prf'/>    
                    <Link to={param.nomUtilisateur+'/postuler'}>Postuler</Link>
                </div>
            </div>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}
