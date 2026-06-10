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



function App() {


  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About' element={<About />} />

          <Route path='/Objects' element={<Objects />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Services/:link' element={<ServiceDetail />} />
          {/* <Route path='/' element={<Services />} /> */}

          {/* <Route path="/product/:link" element={<ProductPage />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
