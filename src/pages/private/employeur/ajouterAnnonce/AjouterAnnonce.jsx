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
        <div className='ajouter__annonce'>
            <h1>Ajouter une annonce</h1>
            <br />
            <form onSubmit={onSubmit}>
                <div className="ajout__grp">
                    <Input type="text" id="nom" name="nom" value={annonce.nom} onChange={onChange} requirede='required'>Nom du job : </Input>
                </div>
                <div className="ajout__grp">
                <Input type="text" id="categorie" name="categorie" value={annonce.categorie} onChange={onChange} requirede='required'>Catégorie : </Input>
                </div>
                <div className="ajout__grp">
                <Input type="text" id="souscategorie" name="sousCategorie" value={annonce.sousCategorie} onChange={onChange} requirede='required'>Sous-catégorie : </Input>
                </div>
                <div className="ajout__grp">    
                <Input type="text" id="salaire" name="salaireDeBase" value={annonce.salaireDeBase} onChange={onChange} requirede='required'> Salaire : </Input>
                </div>
                <p>Journées :</p>
                <ul>
                    <li>
                        <Input type="checkbox" id="dimanche" name="dimanche" onChange={onChangeJour} value='DIMANCHE'>Dimanche      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="lundi" name="lundi" onChange={onChangeJour} value='LUNDI'>Lundi      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="mardi" name="mardi" onChange={onChangeJour} value='MARDI'>Mardi      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="mercredi" name="mercredi" onChange={onChangeJour} value='MERCREDI'>Mercredi      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="jeudi" name="jeudi" onChange={onChangeJour} value='JEUDI'>Jeudi      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="vendredi" name="vendredi" onChange={onChangeJour} value='VENDREDI'>Vendredi      </Input>
                    </li>
                    <li>
                        <Input type="checkbox" id="samedi" name="samedi" onChange={onChangeJour} value='SAMEDI'>Samedi      </Input>
                    </li>
                </ul>                
                <div className="ajout__grp">    
                <Input type="text" id="descriptionFr" name="descriptionFr" value={annonce.descriptionFr} onChange={onChange} requirede='required'>Description : </Input>
                </div>
                <div className="ajout__grp">    
                <Input type="text" id="wilaya" name="wilaya" value={annonce.adresse.wilaya} onChange={onChange} requirede='required'>Wilaya : </Input>
                </div>
                <div className="ajout__grp">    
                <Input type="text" id="commune" name="commune" value={annonce.adresse.commune} onChange={onChange} requirede='required'>Commune : </Input>
                </div>
                <br />
                <br />
                <Buttun className='creer'>Créer</Buttun>
                <br />
            </form>
            {success && <h1>Succès</h1>}
        </div>
    )
}
