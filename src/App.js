import React, { Component } from 'react';
import Menu2 from './components/layout/Menu';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ProjectDetail from './components/projects/ProjectDetail'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu2 />
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/newproject" component={CreateProject} />
          </div>
          </div>
        </BrowserRouter>
        );
      }
    }
    
    export default App;
