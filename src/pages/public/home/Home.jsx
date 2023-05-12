import React, { useLayoutEffect } from "react";
import "./home.scss";
import { useContext, useState, useEffect } from "react";
import {  ImageHome, Search } from "@p-components/index";
import { LangueContext } from "@context/langue";
import { AnnonceContext } from "@context/Annonce";
import ImagePassword from "@p-components/imageHome/ImagePassword";
import ImageProfil from "@p-components/imageHome/ImageProfil";
import { Fenetre } from "@p-components/index";
import { Rechercher } from "@p-components/index";
// import Fenetre from "@p-components/fenetre/Fenetre";

function useImage(indexInitial) {
    const [index, setIndex] = useState(indexInitial);
    return [index, setIndex];
}
export default function Home() {
    const { lang } = useContext(LangueContext);
    const { setSearch } = useContext(AnnonceContext);
    const { h1, h2 } = lang.home;
    
    const images = [
        {
            image: <ImageHome />,
            description: (
                <h2 id="desc1">
                    Trouvez le travail qui vous corespond en quelques mots seulement.
                </h2>
            ),
        },
        {
            image: <ImageProfil />,
            description: (
                <h2 id="desc2">
                    Créez votre profile et et deposez votre CV pour être dans les meilleures coups.
                </h2>
            ),
        },
        {
            image: <ImagePassword />,
            description: (
                <h2 id="desc1">
                    Inscrivez-vous et consultez les meilleurs offres d'emploi grâce a Khedma.
                </h2>
            ),
        },
    ];
    const [index, setIndex] = useImage(0);
    let txt = "";
    let i = -1;
    const [titre, setTitre] = useState("");
    useLayoutEffect(() => {
        const timer = setInterval(() => {
            i++;
            if (i <= h1.length) {
                setTitre((t) => (t += h1.charAt(i)));
            } else {
                clearInterval(timer);
            }
            return () => {
                clearInterval(timer);
            };
        }, 80);
    }, []);
    useLayoutEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i = (i + 1) % 3));
            return () => {
                clearInterval(timer);
            };
        }, 5000);
    }, []);
    return (
        <main className="home">
            <div className="img">{images[index].image}</div>
            <div className="left">
                <h1 className="notranslate">{titre}</h1>
                {images[index].description}
                {/* <Search setSearch={setSearch} parent="home" className='search'/> */}
                <Rechercher setSearch={setSearch} parent="home" />
            </div>
        </main>
    );
}
