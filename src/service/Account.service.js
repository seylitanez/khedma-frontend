import Axios from "./Caller.service";
import jsrsasign from 'jsrsasign';
// import { useJwt } from "react-jwt";
import jwt_decode from 'jwt-decode'

let addUser = (user) => {
    return Axios.post('/api/v1/auth/add-user', user)
}
let login = (user) => {
    return Axios.post('/api/v1/auth/login', user)
}
let loginGoogle = (user) => {
    return Axios.post('/api/v1/auth/Google-login', user)
}
let addCv=(cv)=>{
    return Axios.post('/api/v1/auth/fich',cv)
}
let saveToken = (token) => {
    localStorage.setItem('token', token);
}
let logout = () => {
    localStorage.removeItem('token');
}
let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token;
}
let getToken = () => {
    return localStorage.getItem('token');
}
let getRole = () => {
    return jwt_decode(getToken()).role;
}
let getUserName = () => {
    return jwt_decode(getToken()).username;
}

 let genrateToken=(information)=>{
    const ALGO="HS256"
    const header = {alg:ALGO};
    const SECRETE_KEY="EIS2vBdXnjtZvZpN6q2+6DnY4i5t8seJzA7LVJZZzcs=+KmmKujUYggGyKH++/skfs6+df+855988++/959=fsdfsG+gdsg=F="
    // const encodedSecretKey = btoa(SECRETE_KEY);

    return jsrsasign.KJUR.jws.JWS.sign(ALGO,header,information,SECRETE_KEY) 
 }

let getUser = () => {
    return Axios.get('/api/v1/me');
}
let updateUser = (user) => {
    return Axios.put('/api/v1/employe/update/' + user.mail +'?nom='+user.nom+'&prenom='+user.prenom+'&tel='+user.tel);
}
export const accountService = { addUser, loginGoogle, login, saveToken, logout, isLogged, getToken, getRole, getUser, getUserName,genrateToken, addCv, updateUser }