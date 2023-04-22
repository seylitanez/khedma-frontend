import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/employe/annonces')
}
let getAnnonceBySearch=async(search)=>{
    return await Axios.get('/api/v1/employe/search?motcle='+search)
}
let getAnnonces=()=>{
    return Axios.get('/api/v1/search/annonces')
}
let getAnnoncesBySearch=async(search)=>{
    return await Axios.get('/api/v1/search/search?motcle='+search)
}
let addAnnonce=(annonce)=>{
    return Axios.post('/api/v1/employeur/add-annonce',annonce)
}
export const annonceService = { getAnnonce, getAnnonceBySearch, addAnnonce, getAnnoncesBySearch, getAnnonces }