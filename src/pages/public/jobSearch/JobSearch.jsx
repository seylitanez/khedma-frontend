import React from 'react'
import {Annonce,SideBar} from '@p-components'
import './jobSearch.scss'
export default function JobSearch() {
  return (
  <div className='jobSearch'>
      <div className="search">

      </div>
      <SideBar/>
      <div className="list">
        <Annonce/>
      </div>
    </div>
  )
}
