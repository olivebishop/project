
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './forms/Signup';
import Login from './forms/Login';
import Header from "./home/header/Header";
import Footer from './home/footer/Footer';
import Preloader from './Preloader/Preloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact/Contact';
import Home from './home/Home';
import About from './about/About.jsx';
import Services from './services/Services';
import NotFound from '../NotFound';
import Dashboard from './dashboard/Dashboard';






function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

