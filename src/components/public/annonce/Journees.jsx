import React, { useState } from 'react';

const Journees = ({journees}) => {

    const b_journees = Array(7).fill(false);

    const [classe, setClasse] = useState('journee');

    const updateClassName = () => {
        setClassName((prevClassName) => setClasse(c => c +  prevClassName ) );
    };

    let pJournees = [
        <div className={classe}>D</div>,
        <div className={classe}>L</div>,
        <div className={classe}>M</div>,
        <div className={classe}>M</div>,
        <div className={classe}>J</div>,
        <div className={classe}>V</div>,
        <div className={classe}>S</div>
    ];

    journees.forEach(j => {
        switch (j)
        {
            case 'DIMANCHE' : b_journees[0] = true; break;
            case 'LUNDI' : b_journees[1] = true; break;
            case 'MARDI' : b_journees[2] = true; break;
            case 'MERCREDI' : b_journees[3] = true; break;
            case 'JEUDI' : b_journees[4] = true; break;
            case 'VENDREDI' : b_journees[5] = true; break;
            case 'SAMEDI' : b_journees[6] = true; break;
        }
    });

    return (
    <div className="journees">
        <div className="journee">D</div>
        <div className="journee">L</div>
        <div className="journee">M</div>
        <div className="journee">M</div>
        <div className="journee">J</div>
        <div className="journee">V</div>
        <div className="journee">S</div>
    </div>
    );
};
export default Journees;