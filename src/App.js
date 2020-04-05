import React from 'react';
import './App.css';

import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <main id="main">
        <Portfolio/>
        <Contact/>
        <About/>
      </main>
      <Footer/>
    </div>
  )
}
export default App
