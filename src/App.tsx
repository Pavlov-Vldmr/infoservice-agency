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

// function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
//   return (
//     <div role="alert">
//       <p>Что-то пошло не так:</p>
//       {/* Приводим ошибку к строке, так как unknown/any нельзя безопасно читать напрямую */}
//       <pre style={{ color: 'red' }}>
//         {error instanceof Error ? error.message : String(error)}
//       </pre>
//       <button onClick={resetErrorBoundary}>Попробовать снова</button>
//     </div>
//   );
// }

function App() {


  return (
    <>

      <Router>
        <ScrollToTop />
        <Header />
        <div className='main'>

          {/* <ErrorBoundary
            // FallbackComponent={FallbackComponent}
            fallback="Error occurred"
            onReset={() => {
              // Reset error boundary logic here
            }}
          > */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/infoservice-agency" element={<Home />} />
            <Route path='/infoservice-agency/about' element={<About />} />
            <Route path='/infoservice-agency/objects' element={<Objects />} />
            <Route path='/infoservice-agency/services' element={<Services />} />
            <Route path='/infoservice-agency/services/:link' element={<ServiceDetail />} />
            <Route path='/infoservice-agency/contacts' element={<Contacts />} />

            {/* <Route path="/product/:link" element={<ProductPage />} /> */}
            <Route path='/infoservice-agency/*' element={<NotFound />} />
          </Routes>
          {/* </ErrorBoundary> */}


        </div>

        <Footer />
      </Router >




    </>
  )
}

export default App
