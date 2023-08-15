import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
// import ProductDetail from '../pages/Shop/ShopPost/ProductDetail';
import Shop from '../pages/Shop/Shop';



export default function RouteManager() {
    
  return (
   <Router>
        <NavBar/>

        <Routes>
            <Route path='/' element={
               <Home/>
            } />

        <Route path='/product-detail/:productSlug' element={
            <Shop/>
        } />

        </Routes>

        <Footer/>
   </Router>
  )
}
