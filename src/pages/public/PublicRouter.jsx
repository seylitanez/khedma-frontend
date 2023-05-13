import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Home,Layout,Auth,Inscription,JobSearch,Apropos}from '@p-pages'
import Terms from './terms/Terms'
import Cookies from './terms/Cookies'
import Privacy from './terms/Privacy'

export default function PublicRouter() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/inscription' element={<Inscription/>}/>
                <Route path='/jobSearch' element={<JobSearch />}/>
                <Route path='/jobSearch/:job' element={<JobSearch />}/>
                <Route path='/a_propos' element={<Apropos />}/>
                <Route path='/terms' element={<Terms />}/>
                <Route path='/cookies_policy' element={<Cookies />}/>
                <Route path='/privacy' element={<Privacy />}/>
            </Route>
        </Routes>
    )
}
