import React from 'react'
import {Annonce,SideBar} from '@p-components'
import './jobSearch.scss'
import { useEffect,useRef,useContext} from 'react'
import { annonceService } from "@service";
import { Search } from '@p-components';
import { AnnonceContext } from "@context/Annonce.jsx";
import { useParams } from 'react-router-dom';

export default function JobSearch() {
  const { search, setSearch, annonce }=useContext(AnnonceContext)
  const flg = useRef(false);
  const param=useParams() 
  useEffect(()=>{
    if (!flg.current) {
      annonceService.getAnnonce()
      .then(res =>annonce.setAnnonces(res.data))
      .catch(err=>console.log(err))
    }
    return ()=>{
      flg.current=true;
    }
  },[])
  useEffect(()=>{
    setSearch(param.job)
    annonceService.getAnnonceBySearch(param.job/*search*/)
      .then(res =>annonce.setAnnonces(res.data))
      .catch(err=>console.log(err))
  },[search])
  return (
    <div className='jobSearch'>
      <div className="search">
        <Search setSearch={setSearch} parent='job' />
      </div>
      <SideBar/>
      <div className="list">
        {annonce.annonces.map((annonce,key)=><Annonce annonce={annonce} key={key}/>)}
      </div>
    </div>
  )
}
