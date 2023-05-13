import { Annonce } from '@p-components/index';
import { annonceService } from '@service/Annonce.service';
import React, { useEffect, useRef, useState } from 'react'

export default function Postuler() {
    const [postule, setpostule] = useState([])
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            annonceService.annoncePostules()
                .then(res =>setpostule(res.data) )
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <>
            <h1>Posrultion</h1>
            <div className="favorie">
                {postule.map((annonce, key) => (<Annonce annonce={annonce} key={key} />))}
            </div>
        </>
    )
}