import React from 'react'
import { connect } from 'react-redux'
import {
  Card, CardText, CardBody, CardLink, Row, Col,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../spinner/Spinner'
import { Redirect } from 'react-router-dom'

function ProjectDetail(props) {
  const { project, auth } = props
  if(!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <div>
        <Row>
          <Col sm="6" md="6" xs="10" className="m-auto">
            <Card className="mt-5">
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardSubtitle>Posted by <b>{project.authorFullname}</b></CardSubtitle>
              </CardBody>
              <img width="100%" src="https://cdn-images-1.medium.com/max/1600/1*xYBswt7GarbvBnEP6TCQag.png" alt="Card cap" />
              <CardBody>
                <CardText>{project.content}</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <div>
      <Row>
        <Col className="m-auto" sm="1">
          <Spinner />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(ProjectDetail)

