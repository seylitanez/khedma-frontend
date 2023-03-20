import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/employe/annonces')
}
export const annonceService={getAnnonce}