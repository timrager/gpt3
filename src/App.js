import React from 'react';
import { Navbar, Brand, CTA } from './components';
import { Footer, Blog, Possib, Features, WhatGTP3, Header } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possib />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App