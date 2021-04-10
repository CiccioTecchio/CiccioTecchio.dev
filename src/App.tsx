import React, { Suspense } from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import "./App.css"
function App() {
  return (
    <div className="container-fluid">
      <Suspense fallback={null}>
        <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
