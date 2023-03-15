import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Home,Layout,Auth,Inscription,JobSearch}from '@p-pages'

export default function PublicRouter() {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                    <Route path='/inscription' element={<Inscription/>}/>
                    <Route path='/jobSearch' element={<JobSearch/>}/>
                </Route>
            </Routes>
        </div>
    )
}
