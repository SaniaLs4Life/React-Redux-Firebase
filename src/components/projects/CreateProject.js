import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    //console.log(this.state)
    this.props.createProject(this.state)
  }
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
              <h1>Create a project</h1>
              <FormGroup>
                <Input type="text" name="title" id="title" onChange={this.handleChange} placeholder="Enter a title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="content" id="content" onChange={this.handleChange} cols="10" rows="10" style={{resize:'none'}}  />
              </FormGroup>
              <Button color="dark">Create project</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
