import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about us/about';
import Contact from './pages/contact us/contact';
import Services from './pages/services/services';
import Home from './pages/Home/home';
import Products from './pages/products/Products'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
