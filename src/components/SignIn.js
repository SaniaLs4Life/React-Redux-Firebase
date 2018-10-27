import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.state = {
      username:'',
      password: ''
    }
  }
  handleLogin(e) {
    e.preventDefault()
    alert(this.state.username + ' ' + this.state.password)
  }
  handleOnChangeEmail(e) {
    e.preventDefault()
    this.setState( {
      username: [e.target.value]
    })

  }
  handleOnChangePassword(e) {
    e.preventDefault()
    this.setState( {
      password: [e.target.value]
    })

  }
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
              <h1>Sign in</h1>
                <Input type="email" name="email" id="exampleEmail" value={this.state.username} onChange={this.handleOnChangeEmail} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleOnChangePassword} placeholder="Password" />
              </FormGroup>
              <Button color="dark">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignIn
