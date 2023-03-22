import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/employe/annonces')
}
let getAnnonceBySearch=async(search)=>{
    return await Axios.get('/api/v1/employe/search?motcle='+search)
}
export const annonceService={getAnnonce,getAnnonceBySearch}