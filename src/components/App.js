import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './home/Home';

// import Header from './home/header/Header';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Home/>}/>
      <Route path="/services" element={<Home/>}/>
      <Route path="/contacts" element={<Home/>}/>
      <Route path="/login" element={<Home/>}/>
      <Route path="/signup" element={<Home/>}/>
    </Routes>
  <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
