import React from 'react'
import { Annonce } from '@p-components'
import './jobSearch.scss'
import { useState, useEffect, useRef } from 'react'
import { annonceService } from "@service";

export default function JobSearch() {
    const [annonces, setAnnonces] = useState([])
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            annonceService.getAnnonce()
                .then(res => setAnnonces(res.data))
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])

    return (
        <div className='jobSearch'>
            <div className="search">

            </div>
            <div className="list">
                {annonces.map((annonce, key) => <Annonce annonce={annonce} key={key} />)}
            </div>
        </div>
    )
}
