import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { Footer } from "./components/Footer/Footer.jsx";
import Catalog from "./Pages/catalog/Catalog.jsx";
import About from './Pages/about/About.jsx'
import Blog from './Pages//blog/Blog.jsx'




export default function App() {
  const [cartCount, setCartCount] = useState(0);



  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartCount((prevCount) => prevCount + 1);
  };
  const addToFavourite = (item) => {
    setFavourites((prevLiked) => [...prevLiked, item]);
  }


  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<Main />} /> 
          <Route path="/management" element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/agent' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}
