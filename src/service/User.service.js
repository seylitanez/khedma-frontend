import { accountService } from './Account.service'
import Axios from './Caller.service'

let getUser = () => {
    return Axios.get('/api/v1/me');
}

export const userService = {getUser }