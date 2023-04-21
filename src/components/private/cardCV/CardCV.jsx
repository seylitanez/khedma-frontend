import { Buttun } from '@p-components/index';
import React from 'react'
import "./cardcv.scss";
import { MdEdit } from "react-icons/md";
export default function CardCV() {
    return (
        <div className="card_cv">
            <div className="info">
                <h3>Mon CV</h3>
                <Buttun className="edit"><MdEdit className="pen" />Modifier</Buttun>
            </div>
            <div className="specialite">
                <h4>Devlopment</h4>
            </div>
            <div className="experience">
                <div className="piece">
                    <p>Piece jointe: <span className="clr">CV.pdf</span></p>
                </div>
                <div className="visible">
                    <p>Visible pour les recruteurs: <span className="clr">visible</span></p>
                </div>
            </div>
        </div>
    )
}