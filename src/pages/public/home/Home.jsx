import React from 'react'
import imgh from '@image/img_home.svg'
import "./home.scss";
import {LangueContext} from "@context/langue"
import {Search} from '@p-components';
import { annonceService } from "@service";
import { useContext,useState,useEffect} from 'react';
import { AnnonceContext } from "@context/Annonce.jsx";

export default function Home() {
  const {lang} = useContext(LangueContext);
  const { search, setSearch, annonce } = useContext(AnnonceContext)
  const {h1,h2}=lang.home;
  
  return (
    <div className='home'>
      <div className="img">
        <img src={imgh} alt="" />
      </div>
      <div className="left">
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        <Search setSearch={setSearch} parent='home'/>
      </div>
    </div>
  )
}
