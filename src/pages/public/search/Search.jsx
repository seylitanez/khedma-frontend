import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {LangueContext} from "@context/langue"
import "./search.scss";
import { useContext } from 'react';

export default function Search() {
    const {lang} = useContext(LangueContext);
    const {emploi,region}=lang.home.search;
    return (
        <form className="search">
            <div className="search__emploi">
                <BiSearchAlt2 className='search__icone'/>
                <input type="search" className='search__emploi__inp' placeholder={emploi}/>
            </div>
            <div className="search__region">
                <GrLocation className='search__location__icone'/>
                <input type="search" className='search__region__inp' placeholder={region}/>
            </div>
        </form>
    )
}
