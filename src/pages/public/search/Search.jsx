import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {FiFilter} from 'react-icons/fi'
import {LangueContext} from "@context/langue"
import "./search.scss";
import { useContext } from 'react';
import Buttun from '../../../components/public/buttuns/Buttun';
import { useState } from 'react'

export default function Search() {
    const {lang} = useContext(LangueContext);
    const {emploi,region,chercher,filtrer,type_travail,salaire}=lang.home.search;


    const [filtreDisplay,setFiltreDisplay]=useState({height:'55px'})
    const [isFiltreDisplayOff,setIsFiltreDisplayOff]=useState(true)


    return (
        <form className="search" style={filtreDisplay}>
            <div className='searchall'>
                <div className="searchall__search-emploi">
                    <BiSearchAlt2 id='search-icone' size={25} className='search-icone'/>
                    <input type="search" className='search__emploi-inp' placeholder={emploi}/>
                </div>
                <div className="searchall__search-region">
                    <GrLocation id='location-icone' size={25} className='search-location-icone'/>
                    <input type="search" className='search__region-inp' placeholder={region}/>
                </div>
                <Buttun id="chercher">
                    {chercher}
                </Buttun>
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
