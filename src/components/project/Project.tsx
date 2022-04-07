import React from 'react';
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
    {key: "my-piggy-bank", title:t("project.my-piggy-bank.title"), description: t("project.my-piggy-bank.desc")}

  ];
  return(
    <div className="mt-3">
      <Row>
      <Col className="text-center"><h1>{t("project.title")}</h1></Col>
    </Row>
    
      {writeRowProject(projectList)}
    
    </div>
  )
}

function writeColumnProjectList(projectList:Array<IProject>):Array<any>{
  return projectList.map((project:IProject, idx:number)=>{
     return <Col key={project.key} md={4}>
              <Card className='mt-3 h-100'>
                <Card.Body className='text-center'>
                  <Card.Title><b>{project.title}</b></Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{__html:project.description}} ></Card.Text>
                </Card.Body>
                {(project.repository)?writeCardFooterForProject(project.repository):<></>}
              </Card>
            </Col>
  })
}

function writeCardFooterForProject(repo:string){
  return <Card.Footer className='text-center' style={{background: 'none', border: '0'}}>
    <Button variant='primary' href={repo} target="_blank">Repository</Button>
  </Card.Footer>
}

function writeRowProject(projectList:Array<IProject>){
  let rows:Array<any>= []; let cols:Array<any> = writeColumnProjectList(projectList);
  console.log(cols.length);
  let toRender: Array<any> =  [];
  cols.forEach((card:any,i:number) =>{
    toRender.push(card)
    if((i+1)%3 === 0){
      rows.push(<Row  key={i} className='mt-4'> {toRender}</Row>)
      toRender = []
    }else{
      const resto = (i+1) % 3;
      if( (cols.length - (i+1)) < resto ){

      }
    }
  })
  console.log(rows)
  return rows
}

export default Project;