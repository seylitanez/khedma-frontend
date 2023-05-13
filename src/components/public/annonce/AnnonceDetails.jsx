import React from 'react'
import { Buttun } from '..';

export default function AnnonceDetails({selectedAnnonce}) {

    console.log(selectedAnnonce);
    const { id,nom, descriptionFr, adresse, categorie, sousCategorie, salaireDeBase, journees, date } = selectedAnnonce


  return (
    <div>
        <Buttun >Ajouter favoris</Buttun>
            <h1>titre:{selectedAnnonce&&nom}</h1>
            <h1>descriptionFr:{selectedAnnonce&&descriptionFr}</h1>
            <h1>commune:{selectedAnnonce&&adresse.commune}</h1>
            <h1>wilaya:{selectedAnnonce&&adresse.wilaya}</h1>
            <h1>categorie:{selectedAnnonce&&categorie}</h1>
            <h1>sous categorie:{selectedAnnonce&&sousCategorie}</h1>
            <h1>salaire:{selectedAnnonce&&salaireDeBase}</h1>
            <h1>jours:{selectedAnnonce&&journees}</h1>
        <Buttun >postuler</Buttun>
    </div>
  )
}
