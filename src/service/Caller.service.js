import axios from "axios";
import { accountService } from "./Account.service";

const Axios = axios.create({ proxy:"http://localhost:9630"})
Axios.interceptors.request.use(request => {
    if (accountService.isLogged()) request.headers.Authorization = 'Bearer ' + accountService.getToken();
    if (request.url.includes('/api/v1/auth/fich')) request.headers['Content-Type'] = 'multipart/form-data';
    return request;
})
Axios.interceptors.response.use(response => {
    return response
}, error => {
        // if (error.response.status === 403) {
        //     accountService.logout()
        //     window.location = '/auth'
        // } else return Promise.reject(error)
})
export default Axios;