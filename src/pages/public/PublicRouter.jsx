import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Home,Layout }from '@p-pages'

export default function PublicRouter() {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    )
}
