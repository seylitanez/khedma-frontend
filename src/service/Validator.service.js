const nomRegex = /^[a-zA-Z]+$/;
const prenomRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\d{10}$/;
const communeWilayaRegex = /^[a-zA-Z\s]+$/;
const genreRegex = /^(HOMME|FEMME)$/;

const  etape1IsValid=(user)=> {
    if (!nomRegex.test(user.nom)) {
        alert("nom invalide")
        return false
    }
    else if (!prenomRegex.test(user.prenom)) {
        alert("prenom invalide")
        return false
    }else if (!emailRegex.test(user.adresseMail)) {
        alert("email invalide")
        return false
    }else if (!telRegex.test(user.numeroTel)) {
        alert("numero de telephone invalide")
        return false
    }else if (!communeWilayaRegex.test(user.adresse.wilaya)) {
        alert("wilaya invalide")
        return false
    }else if (!communeWilayaRegex.test(user.adresse.commune)) {
        alert("commune invalide")
        return false
    }else if (!genreRegex.test(user.genre)) {
        alert("genre invalide")
        return false
    }else{
        return true;
    }
}

export const Validator = {etape1IsValid }