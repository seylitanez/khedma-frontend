import React from 'react'
import './jobSearch.scss'
import { useEffect,useRef,useContext,useState} from 'react'
import { annonceService } from "@service/index";
import { Search,Annonce,SideBar } from '@p-components/index';
import { AnnonceContext } from "@context/Annonce";
import { useParams } from 'react-router-dom';
import { PopupContext } from '../../../context/PopupContext';

export default function JobSearch() {

  function selectPage(index) {
    window.scrollTo(top);  
    setNbrPage(index); 
  }

  const NOMBRE_ANNONCE_PAR_PAGE=10;

  const { search, setSearch, annonce }=useContext(AnnonceContext)
  const [page,setPage]=useState([[]])
  const {showPopup,setShowPop}=useContext(PopupContext)
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
            if (nbrAnnonce % NOMBRE_ANNONCE_PAR_PAGE==0) {
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

      <div className='pagination'>{page.map((btn,index)=>
      nbrPage == index?
      <button className="page__index__selected" onClick={(e)=>{ selectPage(index) }} key={index} >{index+1}</button>
      :<button className="page__index" onClick={(e)=>{ selectPage(index)}} key={index} >{index+1}</button>)}
      </div>
    </div>
  )
}
