import React from 'react'

export default function Postulon({Postulon}) {
    const { adresseMail,nom,prenom,genre,tel,adresse,cv }=Postulon
    return (
        <div>
            <h3>adresseMail : <span>{adresseMail}</span></h3>
            <h3>nom : <span>{nom}</span></h3>
            <h3>prenom : <span>{prenom}</span></h3>
            <h3>genre : <span>{genre}</span></h3>
            <h3>tel : <span>{tel}</span></h3>
            {/* <h3>adresse : <span>{adresse.wilaya+" "+adresse.commune}</span></h3> */}
            <h3>cv : <a href={cv} target='_blank'>{cv}</a></h3>
        </div>
    )
}