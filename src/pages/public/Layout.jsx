import React from 'react'
import {Header,Footer} from '@p-components'
import { Outlet } from 'react-router-dom'
import './layout.scss'

export default function Layout() {
    return (
        <div className='layout'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
