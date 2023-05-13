import { Fenetre } from '@p-components/index'
import React from 'react';
import { HiMail } from "react-icons/hi";
import './apropos.scss';


export default function Apropos() {
   return (
    <main className='aPropos'>
      <h1>À Propos</h1>
      <p>
        Bienvenue sur notre application d'annonces d'emplois ! Nous sommes une
        équipe de développeurs passionnés par la création d'un environnement
        propice à la rencontre entre les employeurs et les chercheurs
        d'emplois.
      </p>
      <br />
      <h1>Notre Équipe</h1>
      <ul>
        <li>
          <div className="card__dev">
            <h3>ZENATI Lyes</h3>
            <div className="contact__dev">
              <HiMail size={20}/><a href="mailto:lyes.zenati@se.univ-bejaia.dz">Envoyer un mail</a>
            </div>
          </div>
        </li>
        <li>
          <div className="card__dev">
            <h3>YAICI Yacine</h3>
            <div className="contact__dev">
              <HiMail size={20}/><a href="mailto:yacine.yaici@se.univ-bejaia.dz">Envoyer un mail</a>
            </div>
          </div>
        </li>
        <li>
          <div className="card__dev">
            <h3>TITOUN Rami</h3>
            <div className="contact__dev">
              <HiMail size={20}/><a href="mailto:rami.titoun@se.univ-bejaia.dz">Envoyer un mail</a>
            </div>
          </div>
        </li>
        <li>
          <div className="card__dev">
            <h3>TAGHZOUIT Ahmed</h3>
            <div className="contact__dev">
              <HiMail size={20}/><a href="mailto:ahmed.taghzouit@se.univ-bejaia.dz">Envoyer un mail</a>
            </div>
          </div>
        </li>
      </ul>
      <br />
      <h1>Notre objectif</h1>
      <p>
        Notre objectif est de faciliter la recherche d'emplois et de
        rapprocher les employeurs des candidats qualifiés. Nous nous efforçons
        de fournir une plateforme conviviale et efficace pour vous aider dans
        votre parcours professionnel.
      </p>
      <br />
      <p>
        Si vous avez des questions, des suggestions ou des commentaires,
        n'hésitez pas à nous contacter. Nous espérons que vous trouverez notre
        application utile et bénéfique pour votre carrière.
      </p>
    </main>
  );
}
