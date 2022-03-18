import React from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import "./App.css"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="container-fluid">
      <Routes>
        
        <Route path='CiccioTecchio.io' element={
          <div>
            <Header /> <About /> <Skills /> <Project /> <Footer/>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
