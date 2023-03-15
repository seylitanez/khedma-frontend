import React from 'react'
import {Annonce,SideBar} from '@p-components'
import './jobSearch.scss'
import axios from 'axios'
export default function JobSearch() {

    const tab=[<Annonce/>,<Annonce/>,<Annonce/>,<Annonce/>,<Annonce/>,<Annonce/>]

    axios.get("http://localhost:27017/api/v1/annonces").then(res=>JSON.stringify(res)).then(data=>console.log(data))

  return (
  <div className='jobSearch'>
      <div className="search">

      </div>
      <SideBar/>
      <div className="list">
        {tab.map((e)=>e)}
      </div>
    </div>
  )
}
