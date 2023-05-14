import { Buttun, Input } from '@p-components/index';
import React, { useReducer, useState } from 'react'
import "./cardcv.scss";
import { MdEdit, MdOutlineFileUpload } from "react-icons/md";
import { BsSaveFill } from 'react-icons/bs';
import { accountService } from '@service/Account.service';
export default function CardCV() {
    const value={
        boul: false,
        button: {
            icone: <MdEdit className="pen" />,
            text: "Modifier",
        },
    }
    let extension;
    const changes=(state,action)=>{
        switch (action.type) {
            case "edit": 
                if (!state.boul) return {
                    ...state, boul: true,
                    button: {
                        icone: <BsSaveFill className="pen" />,
                        text: "Enregistrer",
                    }
                }
                else{ 
                    if (extension === "pdf" || extension === "png" || extension === "jpeg" || extension === "jpg") {
                        formData.set("file", fichier, "cv." + extension)
                        accountService.addCv(formData);
                        console.log(e);
                    }
                    else {
                        console.log("Format du fichier non supporté");
                    }
                    return {
                    ...state, boul: false,
                    button: {
                        icone: <MdEdit className="pen" />,
                        text: "Modifier",
                    }
                }}
        }
    }
    let formData = new FormData();
    function filtreFichier(fich, nomFich) {
        const fichier = fich
        const nomFichier = nomFich

        console.log(fichier)
        console.log(nomFichier)
        if (nomFichier.includes('.')) {
            extension = nomFichier.split(".").at(-1);
            console.log(extension);
        }
        else {
            console.log("Fichier sans extension");
        }
    }
    const onchangeFile = (e) => {
        //recuperation du fichier et de son nom
        const fichier = e.target.files[0]
        const nomFichier = fichier.name
        filtreFichier(fichier, nomFichier)//filtrage du fichier
    }
    const [element, setElement] = useReducer(changes, value)
    return (
        <div className="card_cv">
            <div className="info">
                <h3>Mon CV</h3>
                <Buttun className="edit" onClick={() => setElement({type:"edit"})}>{element.button.icone}{element.button.text}</Buttun>
            </div>
            <div className="specialite">
                <h4>Devlopment</h4>
            </div>
            <div className="experience">
                <div className="piece">
                    <p>Piece jointe: {element.boul ? <Input type="file" placeholder="cv" onChange={onchangeFile} icone={MdOutlineFileUpload} /> : <span className="clr">CV.{extension}</span>}</p>
                </div>
                <div className="visible">
                    <p>Visible pour les recruteurs: <span className="clr">visible</span></p>
                </div>
            </div>
        </div>
    )
}