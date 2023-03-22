import React from 'react'
import {AjouterAnnonce,Layout,Profile,ListAnnonce} from '@pr-employeur-pages'
import { Route, Routes} from 'react-router-dom'
import Error from '@utils/Error'

export default function EmployeurRouter() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Profile/>} />
                <Route path='profile/:nomUtilisateur' element={<Profile/>} />
                <Route path='ajouterAnnonce' element={<AjouterAnnonce />} />
                <Route path='listAnnonce' element={<ListAnnonce/>} />
                <Route path='*' element={<Error/>} />
            </Route>
        </Routes>
    )
}