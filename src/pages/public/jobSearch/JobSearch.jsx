import React from 'react'
import {Annonce,SideBar} from '@p-components'
import './jobSearch.scss'
import { useEffect,useRef,useContext} from 'react'
import { annonceService } from "@service";
import { Search } from '@p-components';
import { AnnonceContext } from "@context/Annonce.jsx";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Popup from '../../../components/public/popup/popup';
import { PopupContext } from '../../../context/PopupContext';

export default function JobSearch() {
  const { search, setSearch, annonce }=useContext(AnnonceContext)
  const [page,setPage]=useState([[]])
  const {showPopup,setShowPop}=useContext(PopupContext)
  let pages=[[]]
  const [nbrPage,setNbrPage]=useState(0)
  const param=useParams() 
  useEffect(()=>{
    if (param.job==undefined) {
      annonceService.getAnnonce()
      .then(res =>annonce.setAnnonces(res.data))
      .catch(err=>console.log(err))
    }
},[param.job])
useEffect(()=>{
    if(param.job!=undefined){
        setSearch(param.job)
        annonceService.getAnnonceBySearch(param.job/*search*/)
        .then(res =>{annonce.setAnnonces(res.data)
          let nbrAnnonce=0,p=0;
          res.data.forEach(element => {
            nbrAnnonce++
            if (nbrAnnonce%6==0) {
              p++
              page.push([])
            }
            page[p].push(element)
          });
          }
        )
        .catch(err=>console.log(err))
    }
  },[param.job,page])
   useEffect(()=>{
     setPage([[]])
     setNbrPage(0)
   },[param.job])
  return (
    <div className='jobSearch'>
      <div className="search">
        <Search setSearch={setSearch} parent='job' />
      </div>
      <div className="list">
         {page[nbrPage].length!==0? page[nbrPage].map((annonce,key)=><Annonce annonce={annonce} key={key} setShowPop={setShowPop}/>):<h1>aucun resultat</h1>}
      </div>

      <div className='pagination'>{page.map((btn,index)=><button onClick={()=>{window.scrollTo(top);  setNbrPage(index); console.log(page[index]);}} key={index}>{index}</button>)}</div>
    </div>
  )
}
