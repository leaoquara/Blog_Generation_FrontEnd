import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegisterUser from './pages/registerUser/RegisterUser';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registeruser" element={<RegisterUser />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
