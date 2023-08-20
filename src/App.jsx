import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './views/Home'
import Profile from './views/Profile'
import Explore from './views/Explore'
import './App.css'

function App() {

  return (
    <Router>
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element = {<Profile />} />
      <Route path='/explore' element ={<Explore />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
