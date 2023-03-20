import Axios from "./Caller.service";
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
    return localStorage.getItem('role');
}
let setRole = (role) => {
    localStorage.setItem('role', role);
}
export const accountService = { addUser,login, saveToken, logout, isLogged, getToken, getRole, setRole }