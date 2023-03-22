import React from 'react'
import {Annonce,SideBar} from '@p-components'
import './jobSearch.scss'
import { useState,useEffect,useRef } from 'react'
import { annonceService } from "@service";
import { Search } from '@p-components';

export default function JobSearch() {
  const [annonces, setAnnonces]=useState([])
  const [search, setSearch]=useState("")
  const flg = useRef(false);
  useEffect(()=>{
    if (!flg.current) {
      annonceService.getAnnonce()
      .then(res=>setAnnonces(res.data))
      .catch(err=>console.log(err))
    }
    return ()=>{
      flg.current=true;
    }
  },[])
  useEffect(()=>{
      annonceService.getAnnonceBySearch(search)
      .then(res=>setAnnonces(res.data))
      .catch(err=>console.log(err))
  },[search])
  return (
    <div className='jobSearch'>
      <div className="search">
        <Search setSearch={setSearch}/>
      </div>
      <SideBar/>
      <div className="list">
        {annonces.map((annonce,key)=><Annonce annonce={annonce} key={key}/>)}
      </div>
    </div>
  )
}
