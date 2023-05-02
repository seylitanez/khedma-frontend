import { useState,useEffect} from 'react'
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import './App.scss'
import PublicRouter from '@p-pages/PublicRouter';
import {LangueContext} from "@context/langue";
import {AnnonceContext} from "@context/Annonce";
import {fr,ar,en} from "@langue";
import AuthGuard from '@helper/AuthGuard';
import EmployeRouter from '@pr-employe-pages/EmployeRouter';
import EmployeurRouter from '@pr-employeur-pages/EmployeurRouter';
import ModerateurRouter from '@pr-moderateur-pages/ModerateurRouter';
import { PopupContext } from './context/PopupContext';
import { gapi } from 'gapi-script';
import ReactGA from 'react-ga';

function App() {
  const [langue,setLangue]=useState('fr')
  const [search, setSearch] = useState("")
  const [annonces,setAnnonces] = useState([])
  const [showPopupInscrption,setShowPopupInscrption]=useState(false)
  const [showPopupConsulter,setShowPopupConsulter]=useState(false)
  const [popupConsulterDetails,setPopupConsulterDetails]=useState()
  const [popupLogin,setPopupLogin]=useState(false)
  const [popupChoix,setPopupChoix]=useState(false)

  useEffect(()=>{
    const script=document.createElement('script')
    script.src ="https://www.googletagmanager.com/gtag/js?id=G-GZ9KKG4WHJ" 
    script.async=true
    document.body.appendChild(script)
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments) };
    gtag('js', new Date());
    gtag('config', 'G-GZ9KKG4WHJ');
  },[])
  ReactGA.initialize('G-GZ9KKG4WHJ');
  ReactGA.pageview('/home');
  return (
    <div className="App">
      <LangueContext.Provider value={{lang:langue==='fr'? fr:langue==='ar'?ar:en,langue,setLangue}}>
        <AnnonceContext.Provider value={{ search, setSearch, annonce: { annonces, setAnnonces }}}>
          <PopupContext.Provider value={{showPopupInscrption,setShowPopupInscrption,showPopupConsulter,setShowPopupConsulter,popupConsulterDetails,setPopupConsulterDetails,popupLogin,setPopupLogin,popupChoix,setPopupChoix}} >
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
