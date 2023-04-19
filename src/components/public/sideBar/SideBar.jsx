import React from 'react'
import "./sideBar.scss";
import { Buttun, Login } from '@p-components/index';

export default function SideBar() {
    return (
        <section className='sideBar'>
            <Login/>
            <Buttun>filtre1</Buttun>
            <Buttun>filtre2</Buttun>
        </section>
    )
}
