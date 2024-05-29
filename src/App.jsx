import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { Footer } from "./components/Footer/Footer.jsx";
import Catalog from "./Pages/catalog/Catalog.jsx";
import About from './Pages/about/About.jsx'
import Blog from './Pages//blog/Blog.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/management" element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/agent' element={<Blog />} />
        </Routes>
        <Footer />
    

    </BrowserRouter>
  );
}
