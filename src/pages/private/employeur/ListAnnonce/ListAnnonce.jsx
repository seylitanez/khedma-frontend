import React from 'react'
import { Annonce } from "@p-components/index"
import { userService } from "@service/index";
import { useEffect,useState } from 'react';
import { Buttun, Fenetre } from '@p-components/index'
import './listAnnonce.scss'
import { AjouterAnnonce, CardPostulant } from '..';

export default function ListAnnonce() {
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    const [ajouter, setAjouter] = useState(false);

    const handleClickAjouter = () => {
        setAjouter(actuel => !actuel);
    }
    console.log(user);

    return (
        <div className='liste__annonces'>
            <div className="tete">
            <h1>Mes annonces</h1>
            <Buttun className='ajouter' onClick={handleClickAjouter}>
                Créer une annonce
            </Buttun>
            </div>
            <Fenetre ouvert={ajouter} handleClick={handleClickAjouter}>
                <AjouterAnnonce></AjouterAnnonce>
            </Fenetre>
            {(user.annonces != null) && user.annonces.map((annonce, key) => <Annonce annonce={annonce} key={key} />)}
            <CardPostulant postulant={user}/>
        </div>
    )
}