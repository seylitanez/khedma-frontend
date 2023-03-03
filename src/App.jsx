import { useState,useEffect} from 'react'
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import './App.scss'
import PublicRouter from '@p-pages/PublicRouter';
import {LangueContext} from "@context/langue.jsx";
import {fr,ar,en} from "@langue";

function App() {
  const [langue,setLangue]=useState('fr')
  return (
    <div className="App">
      <LangueContext.Provider value={{lang:langue==='fr'? fr:langue==='ar'?ar:en,setLangue,langue}}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<PublicRouter/>}/>
          </Routes>
        </BrowserRouter>
      </LangueContext.Provider>
    </div>
  )
}

export default App
