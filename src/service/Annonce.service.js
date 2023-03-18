import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/employeur/annonces')
}
export const annonceService={getAnnonce}