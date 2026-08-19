import CookieConsent from 'react-cookie-consent'
import { Link, Route, Routes } from 'react-router-dom'

import { CompanyProvider } from '@/contexts/CompanyInfoContext'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ScrollToTop from './features/ScrollToTop'
import About from './pages/About/About'
import Calculator from './pages/Calculator/Calculator'
import Contacts from './pages/Contacts/Contacts'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Objects from './pages/Objects/Objects'
import Order from './pages/Order/Order'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Services from './pages/Services/Services'

import './App.css'


function App() {


  return (
    <>

      <CompanyProvider>
        <ScrollToTop />
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/infoservice-agency" element={<Home />} />
            <Route path='/infoservice-agency/about' element={<About />} />
            <Route path='/infoservice-agency/objects' element={<Objects />} />
            <Route path='/infoservice-agency/services' element={<Services />} />
            {/* <Route path='/infoservice-agency/services/:link' element={<ServiceDetail />} /> */}
            <Route path='/infoservice-agency/contacts' element={<Contacts />} />
            <Route path='/infoservice-agency/calculator' element={<Calculator />} />
            <Route path='/infoservice-agency/order' element={<Order />} />
            <Route path='/infoservice-agency/*' element={<NotFound />} />
            <Route path="/infoservice-agency/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>

        <CookieConsent
          buttonText="Принять"
          cookieName="site_privacy_cookie"
          style={{ background: "#2B373B", color: "#FFF" }}
          buttonStyle={{ background: "#4eaff3", color: "#FFF", fontSize: "14px" }}
          expires={150}
        >
          Этот сайт использует файлы cookie. Продолжая работу, вы соглашаетесь с нашей{" "}
          <Link to="/infoservice-agency/privacy-policy" style={{ color: "#4eaff3" }}>
            Политикой конфиденциальности
          </Link>.
        </CookieConsent>

        <Footer />
      </CompanyProvider>

    </>
  )
}

export default App
