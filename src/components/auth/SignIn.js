import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email:'',
      password: ''
    }
  }
  handleLogin(e) {
    e.preventDefault()
    console.log(this.state)
  }
  handleChange(e) {
    e.preventDefault()
    this.setState( {
      [e.target.id]: e.target.value
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
                <Input type="email" name="email" id="email"  onChange={this.handleChange} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password"  onChange={this.handleChange} placeholder="Password" />
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
