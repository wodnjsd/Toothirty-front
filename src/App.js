import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/Navbar'
import Index from './components/Index'
import Problems from './components/Problems'
import ShowAdvice from './components/Advice'
import CreateProblem from './components/Create'
import Questionnaire from './components/Survey'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Index />} />
        <Route path="/types/:typeId" element={<Problems />} />
        <Route path="/problems/:problemId" element={<ShowAdvice />} />
        <Route path="/create" element={<CreateProblem />} />
        <Route path="/survey" element={<Questionnaire />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
