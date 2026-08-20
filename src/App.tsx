import { lazy, Suspense } from 'react'
import CookieConsent from 'react-cookie-consent'
import { RotatingLines } from 'react-loader-spinner'
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
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

import './App.css'

// Ленивая загрузка страниц
const Services = lazy(() => import('./pages/Services/Services'));

// 1. Компактный спиннер специально для ленивых страниц (не ломает шапку/футер)
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', width: '100%' }}>
    <RotatingLines strokeColor="#4eaff3" strokeWidth="5" animationDuration="0.75" width="64" visible={true} />
  </div>
);

// // 2. Полноэкранный спиннер (если раскомментируете LoadingProvider для первой инициализации)
// const GlobalLoader = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', fixed: 'absolute', top: 0, left: 0, background: '#fff', zIndex: 9999 }}>
//     <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
//   </div>
// );

function App() {
  return (
    <>
      {/* Раскомментируйте, если внутри LoadingProvider настроена логика стартового экрана */}
      {/* <LoadingProvider fallback={<GlobalLoader />}> */}

      <CompanyProvider>
        <ScrollToTop />
        <Header />

        <div className='main'>
          {/* Переносим Suspense ТОЛЬКО на контентную часть, чтобы Header и Footer оставались на месте */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/infoservice-agency" element={<Home />} />
              <Route path='/infoservice-agency/about' element={<About />} />
              <Route path='/infoservice-agency/objects' element={<Objects />} />
              <Route path='/infoservice-agency/services' element={<Services />} />
              <Route path='/infoservice-agency/contacts' element={<Contacts />} />
              <Route path='/infoservice-agency/calculator' element={<Calculator />} />
              <Route path='/infoservice-agency/*' element={<NotFound />} />
              <Route path="/infoservice-agency/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
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

      {/* </LoadingProvider> */}
    </>
  )
}

export default App
