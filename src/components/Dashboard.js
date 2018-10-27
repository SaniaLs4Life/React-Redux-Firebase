import React from 'react'
import { Alert, Badge, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <Container >
      <Row>
        <Col className="mt-5" xs="12" sm="12" md="8">
          <Card>
            <CardHeader><h4>Projects</h4></CardHeader>
            <CardBody>
              <CardTitle><NavLink className="projectTitle" to="/projects/1">Project1</NavLink></CardTitle>
              <CardText>
                <strong>Posted by Hakan GENC</strong> <br />
                <Badge color="dark" style={{padding:'5px'}}>Today at 3:25 PM</Badge>         
              </CardText>
              <CardTitle><NavLink className="projectTitle" to="/projects/1">Project1</NavLink></CardTitle>
              <CardText>
                <strong>Posted by Hakan GENC</strong> <br />
                <Badge color="dark" style={{padding:'5px'}}>Today at 3:25 PM</Badge>         
              </CardText>
              <CardTitle><NavLink className="projectTitle" to="/projects/1">Project1</NavLink></CardTitle>
              <CardText>
                <strong>Posted by Hakan GENC</strong> <br />
                <Badge color="dark" style={{padding:'5px'}}>Today at 3:25 PM</Badge>         
              </CardText>
              <CardTitle><NavLink className="projectTitle" to="/projects/1">Project1</NavLink></CardTitle>
              <CardText>
                <strong>Posted by Hakan GENC</strong> <br />
                <Badge color="dark" style={{padding:'5px'}}>Today at 3:25 PM</Badge>         
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="mt-5" xs="12" sm="12" md="4">
          <Card>
            <CardHeader><h4>Notifications</h4></CardHeader>
            <CardBody>
              <Alert color="light">
                Hakan GENC joined the party <br />
                <Badge color="warning">5 hours ago</Badge>
              </Alert>
              <Alert color="light">
                Dapibus ac facilisis in
                5 hours ago  <br/>
                <Badge color="warning">5 hours ago</Badge>
              </Alert>
              <Alert color="light">
                Dapibus ac facilisis in
                5 hours ago  <br/>
                <Badge color="warning">5 hours ago</Badge>
              </Alert>
              <Alert color="light">
                Dapibus ac facilisis in
                5 hours ago  <br/>
                <Badge color="warning">5 hours ago</Badge>
              </Alert>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
