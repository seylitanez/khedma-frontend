import { accountService } from './Account.service'
import Axios from './Caller.service' 
let getAnnonce=()=>{
    return Axios.get('/api/v1/annonces')
}
export const annonceService={getAnnonce}