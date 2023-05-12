// pour numeros de telephones fixes et mobiles
const regexNumTelephone = /^(?:\+213|0)[75263]\d{8}$/;

// pour noms propres
const regexNom = /^[a-zA-Z-]+$/;

// pour les adresses mail
const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// pour tester un regex : if (regex.text(String)), exemple numTelephone.test(+213555788160) => true

// export
export const regex_list = {
    numero : regexNumTelephone,
    nom : regexNom,
    mail : regexMail
};