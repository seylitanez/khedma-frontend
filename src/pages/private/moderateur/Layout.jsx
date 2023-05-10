import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sidebar/SideBar'

export default function Layout() {
    return (
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    )
}