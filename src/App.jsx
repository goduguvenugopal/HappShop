import React, { useState } from 'react'
import './App.css'
import Navbar from './assests/Navbar'
import Home from './assests/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProductReview from './assests/ProductReview'
import Cart from './assests/Cart'
import SignUp from './assests/SignUp'
import LogIn from './assests/LogIn'
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react'
 
export const userContext = createContext()

const App = () => {
const [user , setUser]= useState({})
const [userToken , setUserToken]= useState("u")
 
console.log(user);

  return (
    <userContext.Provider value={{user , setUser , userToken , setUserToken}}> 
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
    </userContext.Provider>
   
  )
}

export default App