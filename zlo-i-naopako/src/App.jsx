import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import './app.css'

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<h1 className='pt-10 pl-10 h-screen font-medium text-5xl'>404 - Page Not Found</h1>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
