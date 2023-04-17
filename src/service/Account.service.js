import Axios from "./Caller.service";
import jwt_decode from "jwt-decode"

let addUser = (user) => {
    return Axios.post('/api/v1/auth/add-user', user)
}
let login = (user) => {
    return Axios.post('/api/v1/auth/login', user)
}
let saveToken = (token) => {

    console.log(jwt_decode(token));
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
    return localStorage.getItem('role');
}
let setRole = (role) => {
    localStorage.setItem('role', role);
}
let getUser = () => {
    return Axios.get('/api/v1/me');
}
export const accountService = { addUser,login, saveToken, logout, isLogged, getToken, getRole, setRole , getUser}