import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/Navbar'
import Index from './components/Index'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  )
}

export default App
