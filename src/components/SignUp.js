import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fullname: ''
    }
  }
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleRegister}>
              <h1>Sign up</h1>
              <FormGroup>
                <Input type="text" name="text" id="fullname" value={this.state.username} onChange={this.onChangeMail} placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter your password" />
              </FormGroup>
              <Button color="dark">Register</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignUp
