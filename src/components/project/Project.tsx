import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./Project.css"

interface IProject{
  key:string;
  title:string;
  description:string;
  repository?:string;
}

function Project(){
  const {t} = useTranslation();
  const [idx, setIdx] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  
  const projectList:Array<IProject> = [
    {key: "PAB", title:t("project.pab.title"), description:t("project.pab.desc")},
    {key: "evocinema", title:t("project.evocinema.title"), description:t("project.evocinema.desc"), repository:t("project.evocinema.repo")},
    {key: "britishfanta", title:t("project.britishFanta.title"), description:t("project.britishFanta.desc"), repository: t("project.britishFanta.repo")},
    {key: "n-body", title:t("project.n-body.title"), description:t("project.n-body.desc"), repository: t("project.n-body.repo")},
    {key: "sharerasmus", title:t("project.sharerasmus.title"), description:t("project.sharerasmus.desc"), repository: t("project.sharerasmus.repo")},
    {key: "yaspl", title:t("project.yaspl.title"), description:t("project.yaspl.desc"), repository: t("project.yaspl.repo")},
    {key: "carevent", title:t("project.carevent.title"), description:t("project.carevent.desc")},
    {key: "tesi-magistrale", title:t("project.thesis1.title"), description:t("project.thesis1.desc"), repository: t("project.thesis1.repo")},
    {key: "tesi-triennale", title:t("project.thesis2.title"), description:t("project.thesis2.desc"), repository: t("project.thesis2.repo")},
    {key: "cicciotecchio-io", title:t("project.cicciotecchio-io.title"), description: t("project.cicciotecchio-io.desc"), repository: t("project.cicciotecchio-io.repo")},
    {key: "unisa-latex", title:t("project.unisa-latex.title"), description: t("project.unisa-latex.desc"), repository: t("project.unisa-latex.repo")},
  ];

  const goBack = () =>{
    if(idx > 0) {
      setIdx(idx-1); setDisablePrev(false);
    } else setDisablePrev(true);
    setDisableNext(false);
  }

  const goNext = () => {
    if(idx < projectList.length -2){
      setIdx(idx+1); setDisableNext(false)
    }else setDisableNext(true);
    setDisablePrev(false);
  }

  return(
    <div className="mt-3">
      <Row>
      <Col className="text-center"><h1>{t("project.title")}</h1></Col>
    </Row>
      <Row>
        <Col md={1} className='align-self-center'>
          <Button variant='outline-secondary' size='lg' onClick={goBack} disabled={disablePrev}>
            <FontAwesomeIcon icon={faArrowCircleLeft as IconProp}/>
          </Button>
        </Col>
        <Col md={5}>
          <Card className='mt-3 h-100'>
            <Card.Body className='text-center'>
              <Card.Title><b>{projectList[idx].title}</b></Card.Title>
              <Card.Text dangerouslySetInnerHTML={{__html:projectList[idx].description}} ></Card.Text>
            </Card.Body>
            {(projectList[idx].repository)?writeCardFooterForProject(projectList[idx].repository):<></>}
          </Card>
        </Col>
        <Col md={5}>
          <Card className='mt-3 h-100'>
            <Card.Body className='text-center'>
              <Card.Title><b>{projectList[idx+1].title}</b></Card.Title>
              <Card.Text dangerouslySetInnerHTML={{__html:projectList[idx+1].description}} ></Card.Text>
            </Card.Body>
            {(projectList[idx+1].repository)?writeCardFooterForProject(projectList[idx+1].repository):<></>}
          </Card>
        </Col>
        <Col md={1} className='align-self-center'>
          <Button variant='outline-secondary' size='lg' onClick={goNext} disabled={disableNext}>
            <FontAwesomeIcon icon={faArrowCircleRight as IconProp}/>
            </Button>
        </Col>
      </Row>
    </div>
  )
}

function writeCardFooterForProject(repo:string|undefined){
  return <Card.Footer className='text-center' style={{background: 'none', border: '0'}}>
    <Button variant='primary' href={repo} target="_blank">Repository</Button>
  </Card.Footer>
}

export default Project;