import {  Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import NavbarMain from "./components/NavbarMain";


function App() {

  return (
    <>
      
      <NavbarMain />
      <Routes >
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/home' element={<HomePage />} />
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/certificate' element={<CertificatePage />} />
        <Route path='/contact' element={<ContactPage />} /> */}
      </Routes>
    </>
  )
}

export default App
