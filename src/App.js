import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path ="/blog" element={<Blog />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
