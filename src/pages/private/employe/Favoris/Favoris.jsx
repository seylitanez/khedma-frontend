import { Annonce } from '@p-components/index'
import { accountService } from '@service/Account.service';
import { annonceService } from '@service/Annonce.service'
import React ,{ useState , useEffect , useRef } from 'react';

export default function Favoris() {
    const [favoris,setFavorie]=useState([])
    const flg = useRef(false);
    useEffect(() => {
        if (!flg.current) {
            accountService.getUser()
                .then(res => 
                    annonceService.annonceFavorie(res.data.adresseMail)
                    .then((res)=>{setFavorie(res.data)})
                    .catch((err)=>{console.log(err)}))
                .catch(err => console.log(err))
        }
        return () => {
            flg.current = true;
        }
    }, [])
    return (
        <>
            <h1>Favoris</h1>
            <div className="favorie">
                {favoris.map((annonce,key)=>(<Annonce annonce={annonce} key={key} />))}
            </div>
        </>
    )
}