import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/employe/annonces')
}
let getAnnonceBySearch=(search)=>{
    return Axios.get('/api/v1/employe/search'+search)
}
export const annonceService={getAnnonce,getAnnonceBySearch}