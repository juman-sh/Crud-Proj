import React from 'react'
import Navbar from './components/navbar/Navbar.jsx';
import Products from './components/products/Products.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App