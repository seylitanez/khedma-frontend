import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Profile,JobSearch } from '@pr-employe-pages'
export default function EmployeRouter() {
    return (
        <Routes>
            <Route index element={<Profile/>}/>
            <Route path='profile/:nomUtilisateur' element={<Profile/>}/>
            <Route path='jobSearch' element={<JobSearch/>}/>
        </Routes>
    )
}