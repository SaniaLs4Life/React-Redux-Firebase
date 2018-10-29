import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    console.log(this.props.projects)
    const { projects, auth } = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <Container >
        <Row>
          <Col className="mt-5" xs="12" sm="12" md="8">
            <ProjectList projects={projects} />
          </Col>
          <Col className="mt-5" xs="12" sm="12" md="4">
            <Notifications />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ {
    collection: 'projects'
  }])
)(Dashboard)
