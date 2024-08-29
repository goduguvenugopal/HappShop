import React from 'react'
import './App.css'
import Navbar from './assests/Navbar'
import Home from './assests/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductReview from './assests/ProductReview'
import Cart from './assests/Cart'
import SignUp from './assests/SignUp'
import LogIn from './assests/LogIn'
const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductReview />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn/>} />

      </Routes>

    </Router>

  )
}

export default App