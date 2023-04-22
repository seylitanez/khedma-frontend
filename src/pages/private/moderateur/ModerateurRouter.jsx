import React from 'react'
import { Route,Routes } from 'react-router-dom'

export default function ModerateurRouter() {
  return (
    <Routes>
      <Route element={<Layout/>}/>
    </Routes>
  )
}
