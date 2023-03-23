import React from 'react'
import { annonceService } from "@service";
import "./ajouterAnnonce.scss"
import { useState } from 'react';
import { Buttun, Input } from '@p-components';

export default function AjouterAnnonce() {
    const [success, setSuccess] = useState(false)
    const [annonce, setAnnonce] = useState({})
    const journees=[]
    const onChange = (e) => {
        setAnnonce({ ...annonce, [e.target.name]: e.target.value })
    }
    const onChangeJour = (e) => {
        if (e.target.checked) journees.push(e.target.value)
        else journees.splice(journees.indexOf(e.target.value),1)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setAnnonce({ ...annonce, [date]: new Date() })
        annonceService.addAnnonce(annonce)
            .then(res => {setSuccess(true); console.log(res)})
            .catch(err => console.log(err))
    }
// {
//     "nom":"Reparateur",
//     "categorie":"BATIMNET",
//     "sousCategorie":"Informatique",
//     "salaireDeBase":"13000",
//     "journees":["DIMANCHE","MARDI","JEUDI"],
//     "date":"2023-03-12"
// }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <Input type="text" name="nom" value={annonce.nom} onChange={onChange} >Nom du job</Input>
                <br />
                <Input type="text" name="categorie" value={annonce.categorie} onChange={onChange} >Categorie</Input>
                <br />
                <Input type="text" name="sousCategorie" value={annonce.sousCategorie}  onChange={onChange} >Sous Categorie</Input>
                <br />
                <Input type="text" name="salaireDeBase" value={annonce.salaireDeBase} onChange={onChange} > Salaire</Input>
                <br />
                <Input type="checkbox" name="samedi" onClick={onChangeJour}>SAMEDI</Input>
                <Input type="checkbox" name="dimanche" onClick={onChangeJour}>DIMANCHE</Input>
                <Input type="checkbox" name="lundi" onClick={onChangeJour}>LUNDI</Input>
                <Input type="checkbox" name="mardi" onClick={onChangeJour}>MARDI</Input>
                <Input type="checkbox" name="mercredi" onClick={onChangeJour}>MERCREDI</Input>
                <Input type="checkbox" name="jeudi" onClick={onChangeJour}>JEUDI</Input>
                <Input type="checkbox" name="vendredi" onClick={onChangeJour}>VENDREDI</Input>
                <br />
                <Input type="text" name="descriptionFr" value={annonce.descriptionFr} onChange={onChange} >descriptionFr</Input>
                <br />
                <Input type="text" name="descriptionAr" value={annonce.descriptionAr} onChange={onChange} >descriptionAr</Input>
                <br />
                <Input type="text" name="wilaya" value={annonce.descriptionFr} onChange={onChange} ></Input>
                <Input type="text" name="commune" value={annonce.descriptionAr} onChange={onChange} ></Input>
                <br />
                <Buttun>send</Buttun>
                <br />
            </form>
            {success && <h1>success</h1>}
        </div>
    )
}
