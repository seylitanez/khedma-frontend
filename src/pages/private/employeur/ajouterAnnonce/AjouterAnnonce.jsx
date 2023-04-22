import React from 'react'
import { annonceService } from "@service/index";
import "./ajouterAnnonce.scss"
import { useState,useEffect } from 'react';
import { Buttun, Input } from '@p-components/index';
import { useMemo } from 'react';

export default function AjouterAnnonce() {
    const [success, setSuccess] = useState(false)
    const [annonce, setAnnonce] = useState({nom:'', categorie: '', sousCategorie: '', salaireDeBase: 0,adresse:{commune:"",wilaya:""},descriptionAr:"",descriptionFr:"",journees:[],date:""})
    const [journees, setJournees] = useState([])
    const onChange = (e) => {
        if (['commune', 'wilaya'].includes(e.target.name))setAnnonce({ ...annonce, adresse: { ...annonce.adresse, [e.target.name]: e.target.value }})
        else setAnnonce({ ...annonce, [e.target.name]: e.target.value })   
    }
    useEffect(() => {
        const date = new Date()
        setAnnonce({ ...annonce, date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() })
    }, [])
    useEffect(()=>{
        setAnnonce({ ...annonce, journees: journees })
    },[journees])
    const onChangeJour = (e) => {
        if (!e.target.checked) setJournees(journees.filter(element => element !== e.target.value))
        else setJournees(j=>{return [...j, e.target.value]})
        // setAnnonce({ ...annonce, journees: journees })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        annonceService.addAnnonce(annonce)
         .then(res => {setSuccess(true); console.log(res)})
         .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input type="text" id="nom" name="nom" value={annonce.nom} onChange={onChange} requirede='required'>Nom du job</Input>
                <br />
                <Input type="text" id="categorie" name="categorie" value={annonce.categorie} onChange={onChange} requirede='required'>Categorie</Input>
                <br />
                <Input type="text" id="souscategorie" name="sousCategorie" value={annonce.sousCategorie} onChange={onChange} requirede='required'>Sous Categorie</Input>
                <br />
                <Input type="text" id="salaire" name="salaireDeBase" value={annonce.salaireDeBase} onChange={onChange} requirede='required'> Salaire</Input>
                <br />
                <Input type="checkbox" id="samedi" name="samedi" onChange={onChangeJour} value='SAMEDI'>SAMEDI</Input>
                <Input type="checkbox" id="dimanche" name="dimanche" onChange={onChangeJour} value='DIMANCHE'>DIMANCHE</Input>
                <Input type="checkbox" id="lundi" name="lundi" onChange={onChangeJour} value='LUNDI'>LUNDI</Input>
                <Input type="checkbox" id="mardi" name="mardi" onChange={onChangeJour} value='MARDI'>MARDI</Input>
                <Input type="checkbox" id="mercredi" name="mercredi" onChange={onChangeJour} value='MERCREDI'>MERCREDI</Input>
                <Input type="checkbox" id="jeudi" name="jeudi" onChange={onChangeJour} value='JEUDI'>JEUDI</Input>
                <Input type="checkbox" id="vendredi" name="vendredi" onChange={onChangeJour} value='VENDREDI'>VENDREDI</Input>
                <br />
                <Input type="text" id="descriptionFr" name="descriptionFr" value={annonce.descriptionFr} onChange={onChange} requirede='required'>descriptionFr</Input>
                <br />
                <Input type="text" id="descriptionAr" name="descriptionAr" value={annonce.descriptionAr} onChange={onChange} requirede='required'>descriptionAr</Input>
                <br />
                <Input type="text" id="wilaya" name="wilaya" value={annonce.adresse.wilaya} onChange={onChange} requirede='required'>wilaya</Input>
                <Input type="text" id="commune" name="commune" value={annonce.adresse.commune} onChange={onChange} requirede='required'>commune</Input>
                <br />
                <Buttun>send</Buttun>
                <br />
            </form>
            {success && <h1>success</h1>}
        </div>
    )
}
