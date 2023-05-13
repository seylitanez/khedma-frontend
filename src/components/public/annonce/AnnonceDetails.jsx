import { accountService } from '@service/Account.service';
import React, { useEffect, useState } from 'react'
import { Buttun } from '..';

export default function AnnonceDetails({selectedAnnonce}) {
    console.log(selectedAnnonce);
    const { id,nom, descriptionFr, adresse, categorie, sousCategorie, salaireDeBase, journees, date } = selectedAnnonce
    const [me, setMe] = useState({})
      const [postulation,setPostulation]=useState({
          nom:"",
          prenom:"",
          adresseMail:"",
          genre:"",
          tel:"",
          adresse:
          {
              commune:"",
              wilaya:""
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
        <Buttun onClick={()=>{accountService.ajouterFavoris(id).then(()=>{}).catch((e)=>{console.log(e);})}}>Ajouter favoris</Buttun>
            <h1>titre:{selectedAnnonce&&nom}</h1>
            <h1>descriptionFr:{selectedAnnonce&&descriptionFr}</h1>
            <h1>commune:{selectedAnnonce&&adresse.commune}</h1>
            <h1>wilaya:{selectedAnnonce&&adresse.wilaya}</h1>
            <h1>categorie:{selectedAnnonce&&categorie}</h1>
            <h1>sous categorie:{selectedAnnonce&&sousCategorie}</h1>
            <h1>salaire:{selectedAnnonce&&salaireDeBase}</h1>
            <h1>jours:{selectedAnnonce&&journees}</h1>
      <Buttun onClick={() => { accountService.postuler(id, postulation).then(() => { }).catch((e) => { console.log(e); })}}>postuler</Buttun>
    </div>
  )
}
