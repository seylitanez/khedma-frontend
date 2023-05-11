import React from 'react'
import {FiSliders, FiSearch} from 'react-icons/fi'
import {LangueContext} from "@context/langue"
import { useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { AnnonceContext } from "@context/Annonce";
import { Input } from '@p-components/index'
import "./rechercher.scss";

export default function rechercher() {
    const {lang} = useContext(LangueContext);
    const {search} = useContext(AnnonceContext)
    const {emploi,region,chercher,filtrer,type_travail,salaire}=lang.home.search;
    const [filtreDisplay,setFiltreDisplay]=useState({height:'55px'})
    const [isFiltreDisplayOff,setIsFiltreDisplayOff]=useState(true)
    const [txtsearch,setTxtsearch]=useState(search)
    const nav = useNavigate()

    return (
        <form className = "rechercher" style={filtreDisplay}>
            <Input type = "search" className='rechercher__input' value={txtsearch} onChange={e => setTxtsearch(e.target.value)} placeholder={emploi} requirede='required'/>

            <div className="rechercher__boutons">
                <FiSliders className='rechercher__filtrer'/>
                
                <div id='rechercher__separateur'></div>
                
                <Input:button type ='submit'
                onClick={(e)=>{
                    e.preventDefault()
                    setSearch(txtsearch)
                    nav('/jobSearch/'+txtsearch) 
                }}>
                    <FiSearch className='rechercher__recherche'/>
                </Input:button>
            </div>
        </form>
    )
}
