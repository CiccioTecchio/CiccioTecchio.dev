import React, { useEffect, useState } from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import "./App.css"
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
function App() {
  const [showGoTop, setShowGoTop] = useState(false);
  useEffect(() => {window.addEventListener('scroll', () => {if(window.scrollY > 300) setShowGoTop(true); else setShowGoTop(false);})}, [])
  const scrollToTop = () => {window.scrollTo({top:0, behavior: 'smooth'})}
  
  return (
    <>
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
        <Col><Footer /></Col>
      </Row>
    </Container>
    {showGoTop && (
      <Button variant='info' onClick={scrollToTop} className="back-to-top">
        <FontAwesomeIcon icon={faArrowCircleUp as IconProp} />
      </Button>
    )}
    </>
  );
}

export default App;
