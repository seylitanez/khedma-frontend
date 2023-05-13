import React from 'react'
import './jobSearch.scss'
import { useEffect,useRef,useContext,useState} from 'react'
import { accountService, annonceService } from "@service/index";
import { Search,Annonce,SideBar, Buttun, Rechercher, Fenetre, Popup } from '@p-components/index';
import { AnnonceContext } from "@context/Annonce";
import { useParams } from 'react-router-dom';
import { PopupContext } from '@context/PopupContext';
import AnnonceDetails from '@p-components/annonce/AnnonceDetails';

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
  const [fenetreConsulterOuvert, setFenetreConsulterOuvert] = useState(false);
  const [selectedAnnonce, setSelectedAnnonce] = useState();

  const param=useParams() 

  const handleClickConsulter = () => {
    setFenetreConsulterOuvert(actuel => !actuel);
  }
  useEffect(()=>{
    if (param.job==undefined) {
      annonceService.getAnnonces()
      .then(res =>annonce.setAnnonces(res.data))
      .catch(err=>console.log(err))
    }
},[param.job])
useEffect(()=>{
    if(param.job!=undefined){
        setSearch(param.job)
        annonceService.getAnnoncesBySearch(param.job/*search*/)
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
     {accountService.isLogged()&&
     
      <Fenetre ouvert={fenetreConsulterOuvert} handleClick={handleClickConsulter}>

          {selectedAnnonce&& <AnnonceDetails selectedAnnonce={selectedAnnonce} />}

      </Fenetre>}
      <div className="search__grd">
        <div className='search__'>
          <Rechercher setSearch={setSearch} parent='job' />
        </div>
      </div>
      <div className="list">
         {page[nbrPage].length!==0? page[nbrPage].map((annonce,key)=><Annonce annonce={annonce} key={key} setFenetreConsulterOuvert={setFenetreConsulterOuvert} setSelectedAnnonce={setSelectedAnnonce}/>):<h1>aucun resultat</h1>}
      </div>
      <div className='pagination'>{page.map((btn,index)=>
      nbrPage == index?
      <Buttun className="page__index__selected" onClick={(e)=>{ selectPage(index) }} key={index} >{index+1}</Buttun>
      :<Buttun className="page__index" onClick={(e)=>{ selectPage(index)}} key={index} >{index+1}</Buttun>)}
      </div>
    </div>
  )
}
