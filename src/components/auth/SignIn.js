import React, { Component } from 'react'
import { Alert, Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleLogin(e) {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <h1>Sign in</h1>
                <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Password" />
              </FormGroup>
              <Button color="dark">Login</Button>
              {authError ?
                <Alert className="mt-2" color="danger">
                Wrong email or password!
                </Alert>
                : null}

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
