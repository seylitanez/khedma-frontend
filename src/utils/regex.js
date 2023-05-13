// pour numeros de telephones fixes et mobiles
const regexNumTelephone = /^(05|06|07|03|\+2135|\+2136|\+2137|\+21353)[0-9]{8}$/;

// pour noms propres
const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

// pour les adresses mail
const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// pour tester un regex : if (regex.text(String)), exemple numTelephone.test(+213555788160) => true

// export
export const regex_list = {
    numero : regexNumTelephone,
    nom : regexNom,
    mail : regexMail
};