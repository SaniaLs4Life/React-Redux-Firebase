import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Spinner from '../spinner/Spinner'

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    if(projects && notifications) {
      return (
        <Container >
          <Row>
            <Col className="mt-5" xs="12" sm="12" md="8">
              <ProjectList projects={projects} />
            </Col>
            <Col className="mt-5" xs="12" sm="12" md="4">
              <Notifications notifications={notifications} />
            </Col>
          </Row>
        </Container>
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
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ 
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)
