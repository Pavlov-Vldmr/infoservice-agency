import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Objects from './pages/Objects/Objects'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contacts from './pages/Contacts/Contacts'
import ScrollToTop from './features/ScrollToTop'

import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { CompanyProvider } from '@/contexts/CompanyInfoContext'
import { CityProvider } from '@/contexts/CityContext'
import Calculator from './pages/Calculator/Calculator'
import Order from './pages/Order/Order'


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
            <Route path='/infoservice-agency/services/:link' element={<ServiceDetail />} />
            <Route path='/infoservice-agency/contacts' element={<Contacts />} />
            <Route path='/infoservice-agency/calculator' element={<Calculator />} />
            <Route path='/infoservice-agency/order' element={<Order />} />
            <Route path='/infoservice-agency/*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </CompanyProvider>

    </>
  )
}

export default App
