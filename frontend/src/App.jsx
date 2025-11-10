import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from './Pages/Collection';
import Product from './Pages/Product.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Orders from './Pages/Orders.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact';
import Login from './Pages/Login.jsx';
import Cart from './Pages/Cart';
import SearchBar from './Components/SearchBar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";  


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
