import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  
  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleRegister(e) {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleRegister}>
              <h1>Sign up</h1>
              <FormGroup>
                <Input type="text" name="text" id="fullname"  onChange={this.handleChange} placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email"  onChange={this.handleChange} placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password"  onChange={this.handleChange} placeholder="Enter your password" />
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
