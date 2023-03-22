import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Profile } from '@pr-employe-pages'

export default function EmployeRouter() {
    return (
        <Routes>
            <Route index element={<Profile/>}/>
            <Route path='profile/:nomUtilisateur' element={<Profile/>}/>
        </Routes>
    )
}