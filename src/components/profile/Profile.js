import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, CardImg, Card, CardTitle, Button, CardBody, Row, Col } from 'reactstrap'
import { signOut } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Spinner from '../spinner/Spinner'

class Profile extends Component {
    signedOut() {
        this.props.signOut()
        this.props.history.push('/signin')
    }
    render() {
        const { profile } = this.props
        if(!this.props.profile.fullName) return <Redirect to='/signin' />
        if(profile) {
        return (
            <div>
                <Container style={{textAlign: 'center', marginTop: '15px'}}>
                <Card>
                    <CardImg top width="100%" src="https://images.unsplash.com/photo-1531580072270-412aa2493c62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a71c3ae0c975fbd6d250ec16420f5e8f&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                        <CardBody>
                        <CardTitle><h1>{profile.fullName}</h1></CardTitle>
                        <Button onClick={this.signedOut.bind(this)}>Logout</Button>
                    </CardBody>
                </Card>
                </Container>
            </div>
        )
        }
        return (
            <Row>
            <Col className="m-auto" sm="1">
                <Spinner />
            </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)