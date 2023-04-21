import Axios from "./Caller.service";
import jwt_decode from "jwt-decode";
let addUser = (user) => {
    return Axios.post('/api/v1/auth/add-user', user)
}
let login = (user) => {
    return Axios.post('/api/v1/auth/login', user)
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
let getUser = () => {
    return Axios.get('/api/v1/me');
}
let updateUser = (user) => {
    return Axios.put('/api/v1/employe/update/' +user.email+"?nom="+user.nom+"&prenom="+user.prenom+"&upemail="+user.upemail+"&tel="+user.tel);
}
export const accountService = { addUser, login, saveToken, logout, isLogged, getToken, getRole, getUser, getUserName, updateUser }