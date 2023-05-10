import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './dashboard/Dashboard'
import ListUser from './listuser/ListUser'
import ListAnnonce from './listannonce/ListAnnonce'
import Statistic from './statistic/Statistic'

export default function ModerateurRouter() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='listuser' element={<ListUser />}/>
        <Route path='listannonce' element={<ListAnnonce />}/>
        <Route path='statistic' element={<Statistic />}/>
      </Route>
    </Routes>
  )
}
