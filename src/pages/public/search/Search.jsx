import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import "./search.scss";

export default function Search() {
    return (
        <form className="search">
            <div className="search__emploi">
                <BiSearchAlt2 className='search__icone'/>
                <input type="search" className='search__emploi__inp' placeholder='Rechercher , Mot clé , Emploi'/>
            </div>
            <div className="search__region">
                <GrLocation className='search__location__icone'/>
                <input type="search" className='search__region__inp' placeholder='Région'/>
            </div>
        </form>
    )
}
