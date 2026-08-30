import { lazy, Suspense } from 'react'
import CookieConsent from 'react-cookie-consent'
import { RotatingLines } from 'react-loader-spinner'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'

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
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

import './App.css'
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import Components from './pages/Components/Components'


const Services = lazy(() => import('./pages/Services/Services'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', width: '100%' }}>
    <RotatingLines strokeColor="#4eaff3" strokeWidth="5" animationDuration="0.75" width="64" visible={true} />
  </div>
);

function App() {
  return (
    <>
      <HashRouter>
        <CompanyProvider>
          <ScrollToTop />
          <Header />

          <div className='main'>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/objects' element={<Objects />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/components' element={<Components />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <ScrollToTopButton />
          <CookieConsent
            buttonText="Принять"
            cookieName="site_privacy_cookie"
            style={{ background: "#2B373B", color: "#FFF" }}
            buttonStyle={{ background: "#4eaff3", color: "#FFF", fontSize: "14px" }}
            expires={150}
          >
            Этот сайт использует файлы cookie. Продолжая работу, вы соглашаетесь с нашей{" "}
            <Link to="/privacy-policy" style={{ color: "#4eaff3" }}>
              Политикой конфиденциальности
            </Link>.
          </CookieConsent>
          <Footer />
        </CompanyProvider>
      </HashRouter>




    </>
  )
}

export default App
