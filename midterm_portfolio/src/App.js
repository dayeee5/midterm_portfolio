import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Experience from './pages/Project/Project';

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
      <div className="main">
        <Footer />
      </div>
    </>
  );
}