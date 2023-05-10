import { Buttun } from '@p-components/index'
import "./confirmation.scss";
import React from 'react'

export default function Confirmation({set,classn}) {
    return (
        <div className={"pop "+classn}>
            <div className="popups">
                <div className="txt">
                    <h3>Vous les vous confirmer la modification</h3>
                </div>
                <div className="confirm">
                    <Buttun className="btn confirmer" onClick={() => set({ type:"confirm"})}>Confirmer</Buttun>
                    <Buttun className="btn annuler" onClick={() => set({ type:"annuler"})}>Annuler</Buttun>
                </div>
            </div>
        </div>
    )
}