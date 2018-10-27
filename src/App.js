import React, { Component } from 'react';
import Menu from './components/Menu';
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </div>
          </div>
        </BrowserRouter>
        );
      }
    }
    
    export default App;
