import React from 'react'
import my_password from '@image/My Password.svg'
import "./home.scss";
import { useContext,useState,useEffect} from 'react';
import { ImageHome, Search } from '@p-components/index';
import { LangueContext } from '@context/langue';
import { AnnonceContext } from '@context/Annonce';
import { profil } from '@image/index';
import ImagePassword from '@p-components/imageHome/ImagePassword';
import ImageProfil from '@p-components/imageHome/ImageProfil';

function useImage(indexInitial){

  const [index,setIndex]=useState(indexInitial)


  return[index,setIndex]
}

export default function Home() {
  const {lang} = useContext(LangueContext);
  const { setSearch } = useContext(AnnonceContext)
  const {h1,h2}=lang.home;
  const images=[{image:<ImageHome />,description:<h2 id='desc1'>"trouvez le travail qui vous corespond en quelques mots seulement"</h2>}
  ,{image:<ImageProfil/>,description:<h3 id='desc2'>"creez votre profile et et deposez votre cv pour etre dans les meilleures coups"</h3>}
  ,{image:<ImagePassword />,description:<h2 id='desc3'>"inscrivez vous et consulter pour avoir les meilleurs offres d'emploi grace a khedma"</h2>}]

  const [index,setIndex]=useImage(0)

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

   useEffect(()=>{
    const timer=setInterval(()=>{
      
        
        setIndex(i=>i=(i+1)%3)

        return ()=>{
          clearInterval(timer)
        }
    },5000)
   },[])
  return (
    <div className='home'>
      <div className="img">
      {images[index].image}
      {console.log(index)}
      </div>
      <div className="left">
        <h1>{titre}</h1>
        {images[index].description}
        <Search setSearch={setSearch} parent='home'/>
      </div>
    </div>
  )
}
