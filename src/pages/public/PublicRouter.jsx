import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Home,Layout,Auth,Inscription,JobSearch,Apropos}from '@p-pages'

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
            </Route>
        </Routes>
    )
}
