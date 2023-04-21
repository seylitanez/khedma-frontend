import React from 'react'
import imgh from '@image/img_home.svg'
import "./home.scss";
import { useContext,useState,useEffect} from 'react';
import { ImageHome, Search } from '@p-components/index';
import { LangueContext } from '@context/langue';
import { AnnonceContext } from '@context/Annonce';

export default function Home() {
  const {lang} = useContext(LangueContext);
  const { setSearch } = useContext(AnnonceContext)
  const {h1,h2}=lang.home;

  let txt=""
  let i=-1
  const [titre,setTitre]=useState("")

   useEffect(()=>{

     const timer=setInterval(()=>{
       i++
       if (i<=h1.length) {
        console.log("longeur du titre "+titre.length);
         setTitre(t=>t+=h1.charAt(i))
       }else{
         console.log("stop");
         clearInterval(timer)

       }

       return ()=>{
         clearInterval(timer)
       }
     },80)

   },[])


  return (
    <div className='home'>
      <div className="img">
      <ImageHome />
      </div>
      <div className="left">
        <h1>{titre}</h1>
        <h2>{h2}</h2>
        <Search setSearch={setSearch} parent='home'/>
      </div>
    </div>
  )
}
