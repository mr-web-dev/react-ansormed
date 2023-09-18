import React from 'react'
import "./App.css"
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    {/* components start */}
    <Header/>
    {/* components end */}

    {/* pages start */}
    <Home/>
    <Services/>
    <Contact/>
    {/* pages end */}

    {/* components start */}
    <Footer/>
    {/* components end */}
    </>
  );
}
