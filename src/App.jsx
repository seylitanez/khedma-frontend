import { useState } from 'react'
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import './App.scss'
import PublicRouter from '@p-pages/PublicRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
