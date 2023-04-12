import React from 'react'
import imgh from '@image/img_home.svg'
import "./home.scss";
import {LangueContext} from "@context/langue"
import {Search,ImageHome} from '@p-components';
import { useContext,useState,useEffect} from 'react';
import { AnnonceContext } from "@context/Annonce.jsx";

export default function Home() {
  const {lang} = useContext(LangueContext);
  const { setSearch } = useContext(AnnonceContext)
  const {h1,h2}=lang.home;

  let txt=""
  let i=-1
  const [titre,setTitre]=useState("")

  // useEffect(()=>{

  //   const timer=setInterval(()=>{
  //     i++
  //     console.log(i);
  //     console.log(h1.charAt(i));
  //     if (txt!=h1) {
  //       setTitre(t=>t+=h1.charAt(i))
  //     }else
  //     clearInterval(timer)
  //     console.log("test");

  //     return ()=>{
  //       clearInterval(timer)
  //     }
  //   },100)
    

  // },[])
  return (
    <div className='home'>
      <div className="img">
      <ImageHome />
      </div>
      <div className="left">
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        <Search setSearch={setSearch} parent='home'/>
      </div>
    </div>
  )
}
