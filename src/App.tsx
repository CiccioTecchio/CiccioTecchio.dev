import React from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
      <Routes>
        <Route path='CiccioTecchio.io' element={
          <Container fluid>
            <Row>
              <Col><Header /></Col>
            </Row>
            <Row>
              <Col><About /></Col>
            </Row>
            <Row>
              <Col><Skills /></Col>
            </Row>
            <Row>
              <Col><Project /></Col>
            </Row>
            <Row className='mt-5 mb-0'>
              <Col><Footer/></Col>
            </Row>
               
          </Container>
        } />
      </Routes>

  );
}

export default App;
