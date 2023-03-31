import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {FiFilter} from 'react-icons/fi'
import {LangueContext} from "@context/langue"
import "./search.scss";
import { useContext,useState} from 'react';
import {Buttun,Input} from '@p-components';
import { useNavigate } from 'react-router-dom'
import { AnnonceContext } from "@context/Annonce.jsx";

export default function Search({ setSearch,parent }) {
    const {lang} = useContext(LangueContext);
    const {search} = useContext(AnnonceContext)
    const {emploi,region,chercher,filtrer,type_travail,salaire}=lang.home.search;
    const [filtreDisplay,setFiltreDisplay]=useState({height:'55px'})
    const [isFiltreDisplayOff,setIsFiltreDisplayOff]=useState(true)
    const [txtsearch,setTxtsearch]=useState(search)
    const nav=useNavigate()
    return (
        <form className="search" style={filtreDisplay}>
            <div className='searchall'>
                <div className="searchall__search-emploi">
                    <BiSearchAlt2 id='search-icone' size={25} className='search-icone'/>
                    <Input type="search" className='search__emploi-inp' value={txtsearch} onChange={e => setTxtsearch(e.target.value)} placeholder={emploi} requirede='required'/>
                </div>
                {/* <div className="searchall__search-region">
                    <GrLocation id='location__icone' size={25} className='search-location-icone'/>
                    <input type="search" className='search__region-inp' placeholder={region}/>
                </div> */}
                <Buttun id="chercher" onClick={(e)=>{
                    e.preventDefault()
                    setSearch(txtsearch)
                    if (parent === 'home') nav('/jobSearch/'+txtsearch) 
                }}>{chercher}</Buttun>
                <Buttun id="filtrer"  onClick={(e)=>{
                    e.preventDefault()
                    setIsFiltreDisplayOff(on=>!on)
                    isFiltreDisplayOff ? setFiltreDisplay({height:'100px'}):setFiltreDisplay({height:'55px'})
                }}>
                    <FiFilter/>
                    {filtrer}
                </Buttun>
            </div>
            <select name="type_de_travail" id="type_de_travail" disabled="disabled">
                <option value="Temps partiel">{type_travail}</option>
                <option value="Plein Temps">Plein Temps</option>
            </select>
            <input type="text" id='salaire' placeholder={salaire}/>
        </form>
    )
}
