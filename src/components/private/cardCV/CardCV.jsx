import { Buttun, Input } from '@p-components/index';
import React, { useEffect, useReducer, useState } from 'react'
import "./cardcv.scss";
import { MdEdit, MdOutlineFileUpload } from "react-icons/md";
import { BsSaveFill } from 'react-icons/bs';
import { accountService } from '@service/Account.service';
import { Link } from 'react-router-dom';
export default function CardCV() {
    const value={
        boul: false,
        button: {
            icone: <MdEdit className="pen" />,
            text: "Modifier",
        },
    }

    const [user, setUser] = useState({})

    useEffect(() => {
        accountService.getUser()
            .then(res => {
                console.log(res.data)
                setUser(res.data)
                console.log(res.data.id)
    
            })
            .catch(err => console.log(err))
    }, [])

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
                    if (ext == "pdf" || ext == "png" || ext == "jpeg" || ext == "jpg") {
                        formData.set("file", fichier, "cv." + ext)
                        accountService.addCv(formData);
                        console.log(e);
                    }
                    else {
                        console.log("l'extention est"+ ext);
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
    const [ext,setExt]=useState("")
    const [fichier,setFichier]=useState()
    
    function filtreFichier(fich, nomFich) {
        let extension ;
        const fichier = fich
        setFichier(fichier)
        const nomFichier = nomFich
        console.log("--------------------");
        console.log(fichier)
        console.log(nomFichier)
        console.log("****************");
        if (nomFichier.includes('.')) {
            // extension = nomFichier.split(".").at(-1);
            console.log(extension);
            setExt(e=>e=nomFichier.split(".").at(-1))
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
                    <p>Piece jointe: {element.boul ? <Input type="file" placeholder="cv" onChange={onchangeFile} icone={MdOutlineFileUpload} /> : <Link to={`http://localhost:9630/images/${user.id}/cv`} className="clr">{"mon CV"}</Link>}</p>
                </div>
                <div className="visible">
                    <p>Visible pour les recruteurs: <span className="clr">visible</span></p>
                </div>
            </div>
        </div>
    )
}