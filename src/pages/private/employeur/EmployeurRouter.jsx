import React from 'react'
import {AjouterAnnonce,Layout,Profile,ListAnnonce} from '@pr-employeur-pages'
import { Route, Routes} from 'react-router-dom'
import Error from '@utils/Error'
import Info from './info/Info'

export default function EmployeurRouter() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='profile/' element={<Profile/>}>
                    <Route path=':nomUtilisateur' element={<Info/>}/>
                    <Route path=':nomUtilisateur/ajouterAnnonce' element={<AjouterAnnonce />} />
                    <Route path=':nomUtilisateur/listAnnonce' element={<ListAnnonce/>} />
                    <Route path=':nomUtilisateur/listPostulent' element={<ListAnnonce/>} />
                </Route>
                <Route path='*' element={<Error/>} />
            </Route>
        </Routes>
    )
}