import React from 'react'
import {Header} from '@p-components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
