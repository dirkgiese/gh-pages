import { useState } from 'react'
import './App.css'

import {Article, Brand, Cta, Navbar, Feature } from './components/index.jsx';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers/index.jsx';

function App() {

  return (
      <div className="App gradient__bg">
          <Navbar />
          <Header />
          <Brand/>
          <Blog />
          <Footer />
      </div>
  )
}
export default App
