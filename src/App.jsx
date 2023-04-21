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
import { PopupContext } from './context/PopupContext';

function App() {
  const [langue,setLangue]=useState('fr')
  const [search, setSearch] = useState("")
  const [annonces,setAnnonces] = useState([])
  const [showPopup,setShowPopup]=useState(false)
  const [showPopupConsulter,setShowPopupConsulter]=useState(false)
  const [popupConsulterDetails,setPopupConsulterDetails]=useState()
  return (
    <div className="App">
      <LangueContext.Provider value={{lang:langue==='fr'? fr:langue==='ar'?ar:en,langue,setLangue}}>
        <AnnonceContext.Provider value={{ search, setSearch, annonce: { annonces, setAnnonces }}}>
          <PopupContext.Provider value={{showPopup,setShowPopup,showPopupConsulter,setShowPopupConsulter,popupConsulterDetails,setPopupConsulterDetails}} >
            <BrowserRouter>
              <Routes>
                <Route path='/*' element={<PublicRouter/>}/>
                <Route path='/employe/*' element={<AuthGuard role='EMPLOYE'><EmployeRouter/></AuthGuard>}/>
                <Route path='/employeur/*' element={<AuthGuard role='EMPLOYEUR'><EmployeurRouter/></AuthGuard>}/>
                <Route path='/moderateur/*' element={<AuthGuard role='MODERATEUR'><ModerateurRouter/></AuthGuard>}/>
              </Routes>
            </BrowserRouter>
          </PopupContext.Provider>
        </AnnonceContext.Provider>
      </LangueContext.Provider>
    </div>
  )
}

export default App
