import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Favoris, Info, JobSearch, Postuler, Profile } from './index'
export default function EmployeRouter() {
    return (
        <Routes>
            <Route index element={<Profile/>}/>
            <Route path='profile/' element={<Profile/>}>
                <Route path=':nomUtilisateur' element={<Info/>}/>
                <Route path=':nomUtilisateur/favorie' element={<Favoris/>}/>
                <Route path=':nomUtilisateur/postuler' element={<Postuler/>}/>
            </Route>
            <Route path='jobSearch' element={<JobSearch/>}/>
        </Routes>
    )
}