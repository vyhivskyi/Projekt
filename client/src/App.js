import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Part from './components/PartDS';
import Footer from './components/Footer';
import Akademiki from './pages/Akademiki/Akademiki';
import Error404 from './pages/Error404/Error404';
import DS2 from './pages/DS2/DS2';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/akademiki" element={<Akademiki />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/DS2" element={<DS2 />} />
        {/* Add more routes as needed */}
      </Routes>
      <Part />
      <Footer />
    </div>
  );
}

export default App;
