import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Sign-in' element={<Signin />} />
        <Route path='/Sign-up' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
