import React from 'react';
import { Card } from 'react-bootstrap';
import "./Project.css"


function Project(){
  return(
    <div className="row project-content">
      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Progetto 1</Card.Title>
            <Card.Text>Descrizione progetto 1</Card.Text>
            <Card.Link href="#">Link Repo</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Progetto 2</Card.Title>
            <Card.Text>Descrizione progetto 2</Card.Text>
            <Card.Link href="#">Link Repo</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Progetto 3</Card.Title>
            <Card.Text>Descrizione progetto 3</Card.Text>
            <Card.Link href="#">Link Repo</Card.Link>
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}

export default Project;