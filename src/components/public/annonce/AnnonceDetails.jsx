import { accountService } from '@service/Account.service';
import React, { useEffect, useState } from 'react'
import { Buttun } from '..';
import { Journees } from '@p-components/index'

export default function AnnonceDetails({ selectedAnnonce }) {
    console.log(selectedAnnonce);
    const { id, nom, descriptionFr, adresse, categorie, sousCategorie, salaireDeBase, journees, date } = selectedAnnonce
    const [me, setMe] = useState({})
    const [postulation, setPostulation] = useState({
        nom: "",
        prenom: "",
        adresseMail: "",
        genre: "",
        tel: "",
        adresse:
        {
            commune: "",
            wilaya: ""
        }
    })
    useEffect(() => {
        accountService.getUser()
            .then(res => {
                setPostulation({
                    ...postulation,
                    nom: res.data.nom,
                    prenom: res.data.prenom,
                    adresseMail: res.data.adresseMail,
                    genre: res.data.genre,
                    tel: res.data.tel,
                    adresse: {
                        ...postulation.adresse,
                        commune: res.data.adresse.commune,
                        wilaya: res.data.adresse.wilaya
                    }
                });
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Titre :</h1>
            <h3>
                {selectedAnnonce && nom}
            </h3>

            <h1>Description :</h1>
            <h3>
                {selectedAnnonce && descriptionFr}
            </h3>

            <h1>Région :</h1>
            <h3>
                {selectedAnnonce && adresse.wilaya}, {selectedAnnonce && adresse.commune}
            </h3>

            <h1>Catégorie :</h1>
            <h3>
                {selectedAnnonce && categorie}
            </h3>

            <h1>Sous-catégorie :</h1>
            <h3>
                {selectedAnnonce && sousCategorie}
            </h3>

            <h1>Sous-catégorie :</h1>
            <h3>
                {selectedAnnonce && sousCategorie}
            </h3>

            <h1>Salaire :</h1>
            <h3>
                {selectedAnnonce && sousCategorie}
            </h3>

            <h1>Journées :</h1>
                {selectedAnnonce && journees}

            <Buttun onClick={() => { accountService.postuler(id, postulation).then(() => { }).catch((e) => { console.log(e); }) }}>Postuler</Buttun>
            <Buttun onClick={() => { accountService.ajouterFavoris(id).then(() => { }).catch((e) => { console.log(e); }) }}>Ajouter aux favoris</Buttun>
        </div>
    )
}
