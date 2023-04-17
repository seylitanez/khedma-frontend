import React from 'react'
import {Login} from '@p-components'
import "./sideBar.scss";

export default function SideBar() {
    return (
        <section className='sideBar'>
            <Login/>
            <button>filtre1</button>
            <button>filtre2</button>
        </section>
    )
}
