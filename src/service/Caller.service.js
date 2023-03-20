import axios from "axios";
import { accountService } from "./Account.service";

const Axios = axios.create({ baseURL:"http://localhost:9630"})
Axios.interceptors.request.use(request => {
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken();
         request.headers['Access-Control-Allow-Origin'] = 'http://localhost:9631';
        console.log(request.headers);

        console.log(request.headers.Authorization);
    }
    return request;
})
// Axios.interceptors.response.use(response => {
//     return response
// }, error => {
//     if (error.response.status === 401) {
//         accountService.logout()
//         window.location = '/auth/login'
//     } else return Promise.reject(error)
// })
export default Axios;