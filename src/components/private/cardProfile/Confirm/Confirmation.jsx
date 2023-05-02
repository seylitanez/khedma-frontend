import { Buttun } from '@p-components/index'
import "./confirmation.scss";
import React from 'react'

export default function Confirmation() {
    return (
        <div className="blur">
            <div className="popup">
                <div className="txt">
                    <h3>Vous les vous confirmer la modification</h3>
                </div>
                <div className="confrm">
                    <Buttun className="btn confirmer">Confirmer</Buttun>
                    <Buttun className="btn annuler">Annuler</Buttun>
                </div>
            </div>
        </div>
    )
}