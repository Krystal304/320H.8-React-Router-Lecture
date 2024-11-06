// import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Greeting from './pages/Greeting'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'

import './App.css'

function App() {


  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/greeting/:name' element={<Greeting />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>That are going to be the footer</footer>
        
    </>
  )
}

export default App
