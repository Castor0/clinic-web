import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import AboutUs from './pages/AboutUs/AboutUs'
import { Footer, Navbar } from './components'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <Router>
      <GlobalStyle  />
      <ScrollToTop />
       <Navbar />
       <Routes>
          <Route  path='/' exact element={<Home />}/>          
          <Route  path='about'  element={<AboutUs />}/>          
          <Route  path='services'  element={<Services />}/>          
       </Routes>
       <Footer />
    </Router>
  );
}

export default App
