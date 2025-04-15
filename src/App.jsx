import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import EngineeringManufacturingPage from './pages/EngineeringManufacturingPage ';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/services/engineering-manufacturing" element={<EngineeringManufacturingPage/>} /> {/* Add this route */}
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
