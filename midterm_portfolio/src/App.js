import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Component/Contact/Contact';
import Profile from './Component/Profile/Profile';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Experience from './Component/Experience/Experience';

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