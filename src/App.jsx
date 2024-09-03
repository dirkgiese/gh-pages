//import { useState } from 'react'
import './App.css'
import { Brand, Navbar } from './components/index.jsx';
import {Projects, Footer, Header } from './containers/index.jsx';

function App() {
  return (
      <div className="App gradient__bg">
          <Navbar />
          <Header />
          <Brand/>
          <Projects />
          <Footer />
      </div>
  )
}
export default App
