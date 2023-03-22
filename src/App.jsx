import { useState,useEffect} from 'react'
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import './App.scss'
import PublicRouter from '@p-pages/PublicRouter';
import {LangueContext} from "@context/langue.jsx";
import {AnnonceContext} from "@context/Annonce.jsx";
import {fr,ar,en} from "@langue";
import AuthGuard from '@helper/AuthGuard';
import EmployeRouter from '@pr-employe-pages/EmployeRouter';
import EmployeurRouter from '@pr-employeur-pages/EmployeurRouter';
import ModerateurRouter from '@pr-moderateur-pages/ModerateurRouter';

function App() {
  const [langue,setLangue]=useState('fr')
  const [search, setSearch] = useState("")
  const [annonces,setAnnonces] = useState([])
  return (
    <div className="App">
      <LangueContext.Provider value={{lang:langue==='fr'? fr:langue==='ar'?ar:en,langue,setLangue}}>
        <AnnonceContext.Provider value={{ search, setSearch, annonce: { annonces, setAnnonces }}}>
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<PublicRouter/>}/>
              <Route path='/employe/*' element={<AuthGuard role='EMPLOYE'><EmployeRouter/></AuthGuard>}/>
              <Route path='/employeur/*' element={<AuthGuard role='EMPLOYEUR'><EmployeurRouter/></AuthGuard>}/>
              <Route path='/moderateur/*' element={<AuthGuard role='MODERATEUR'><ModerateurRouter/></AuthGuard>}/>
            </Routes>
          </BrowserRouter>
        </AnnonceContext.Provider>
      </LangueContext.Provider>
    </div>
  )
}

export default App
